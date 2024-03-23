import {
  useMediaLibraryPermissions,
  launchImageLibraryAsync,
  MediaTypeOptions,
  PermissionStatus,
} from 'expo-image-picker';
import FormData from 'form-data';
import axios, { AxiosError } from 'axios';
import { Alert, StyleSheet, Text, Pressable, View } from 'react-native';
import UploadIcon from '../../assets/icons/upload';
import { Colors, FontFamily, FontSize, Gaps, LineHeight, Radius } from '../tokens';
import { ApiRoutes } from '../api-routes';
import { IImageUploaderProps, IUploaderResponse } from './imageUploader.interface';

export function ImageUploader({ onUpload, onError }: IImageUploaderProps) {
  const [libraryPermissionInfo, requestLibraryPermissionInfo] = useMediaLibraryPermissions();

  const handleUpload = async () => {
    const isPermissionGranted = await verifyMediaPermissions();

    if (!isPermissionGranted) {
      onError('Недостаточно прав');

      return;
    }

    const asset = await handlePickImage();

    if (!asset) {
      onError('Не выбрано изображение');

      return;
    }

    const uploadedUrl = await handleUploadImageToServer(asset.uri, asset.fileName ?? '');

    if (!uploadedUrl) {
      onError('Не удалось загрузить изображение');

      return;
    }

    onUpload(uploadedUrl);
  };

  const verifyMediaPermissions = async () => {
    if (libraryPermissionInfo?.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestLibraryPermissionInfo();
      return permissionResponse.granted;
    }

    if (libraryPermissionInfo?.status === PermissionStatus.DENIED) {
      Alert.alert('Недостаточно прав для доступа к фото');
      return false;
    }

    return true;
  };

  const handlePickImage = async () => {
    const { assets } = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!assets) {
      return null;
    }

    return assets[0];
  };

  const handleUploadImageToServer = async (uri: string, name: string) => {
    const apiUrl = `${process.env.EXPO_PUBLIC_API_PREFIX}${ApiRoutes.uploadImage}`;
    const formData = new FormData();

    formData.append('file', {
      uri,
      name,
      type: 'image/jpeg',
    });

    try {
      const { data } = await axios.post<IUploaderResponse>(apiUrl, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      return data.urls.original;
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error);
      }

      return null;
    }
  };

  return (
    <Pressable onPress={handleUpload} style={styles.container}>
      <View style={styles.content}>
        <UploadIcon />
        <Text style={styles.text}>Загрузить изобраение</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.violetDark,
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: Radius.r10,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: Gaps.g10,
  },
  text: {
    color: Colors.text,
    fontFamily: FontFamily.FiraSans,
    fontSize: FontSize.f14,
    lineHeight: LineHeight.l20,
    fontWeight: '400',
  },
});
