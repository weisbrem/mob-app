import { useState } from 'react';
import { View, Text, StyleSheet, Alert, Image } from 'react-native';
import {
  launchCameraAsync,
  launchImageLibraryAsync,
  MediaTypeOptions,
  useCameraPermissions,
  useMediaLibraryPermissions,
  PermissionStatus,
} from 'expo-image-picker';
import { Colors } from '../../shared/tokens';
import { Button } from '../../shared/Button/Button';

export default function Profile() {
  const [image, setImage] = useState<string | null>(null);
  const [cameraPermissionInfo, requestCameraPermissionInfo] = useCameraPermissions();
  const [libraryPermissionInfo, requestLibraryPermissionInfo] = useMediaLibraryPermissions();

  const verifyCameraPermissions = async () => {
    if (cameraPermissionInfo?.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestCameraPermissionInfo();
      return permissionResponse.granted;
    }

    if (cameraPermissionInfo?.status === PermissionStatus.DENIED) {
      Alert.alert('Недостаточно прав для доступа к камере');
      return false;
    }

    return true;
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

  const captureAvatar = async () => {
    const isPermissionGranted = await verifyCameraPermissions();

    if (!isPermissionGranted) {
      return;
    }

    const { assets } = await launchCameraAsync({
      mediaTypes: MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!assets) {
      return;
    }

    setImage(assets[0].uri);
  };

  const pickAvatar = async () => {
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

    setImage(assets[0].uri);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Профиль</Text>

      {image && <Image source={{ uri: image, width: 70, height: 70 }} />}

      <View style={styles.buttonContainer}>
        <Button title='Сделать фото' onPress={captureAvatar} />
        <Button title='Выбрать из галереи' onPress={pickAvatar} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 20,
  },
  text: {
    color: Colors.text,
  },
  buttonContainer: {
    rowGap: 10,
  },
});
