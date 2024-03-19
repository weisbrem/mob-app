import {
  useMediaLibraryPermissions,
  launchImageLibraryAsync,
  MediaTypeOptions,
  PermissionStatus,
} from 'expo-image-picker';
import { Alert, StyleSheet, Text, Pressable, View } from 'react-native';
import UploadIcon from '../../assets/icons/upload';
import { Colors, FontFamily, FontSize, Gaps, LineHeight, Radius } from '../tokens';

interface IImageUploaderProps {
  onUpload: (uri: string) => void;
}

export function ImageUploader({ onUpload }: IImageUploaderProps) {
  const [libraryPermissionInfo, requestLibraryPermissionInfo] = useMediaLibraryPermissions();

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

  const pickImage = async () => {
    const isPermissionGranted = await verifyMediaPermissions();

    if (!isPermissionGranted) {
      return;
    }

    const { assets } = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!assets) {
      return;
    }

    onUpload(assets[0].uri);
  };

  return (
    <Pressable onPress={pickImage} style={styles.container}>
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
