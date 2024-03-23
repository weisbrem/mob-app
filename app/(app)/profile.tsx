import { useState } from 'react';
import { View, StyleSheet, Image, Alert } from 'react-native';
import { Button } from '../../shared/Button/Button';
import { Input } from '../../shared/input/input';
import { Colors, FontFamily, FontSize, Gaps, LineHeight, Radius } from '../../shared/tokens';
import { ImageUploader } from '../../shared/ImageUploader/ImageUploader';

export default function Profile() {
  const [image, setImage] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      <View style={styles.imageUploadContainer}>
        {image ? (
          <Image style={styles.image} source={{ uri: image }} />
        ) : (
          <Image source={require('../../assets/images/user-profile-default.png')} />
        )}

        <ImageUploader onUpload={setImage} onError={(error) => Alert.alert(error)} />
      </View>

      <Input style={styles.input} placeholder='Имя' placeholderTextColor={Colors.gray} />
      <Button title='Сохранить' onPress={() => null} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    rowGap: Gaps.g24,
    paddingTop: 32,
    paddingHorizontal: 30,
  },
  imageUploadContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 20,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  input: {
    height: 58,
    color: Colors.gray,
    backgroundColor: Colors.violetDark,
    paddingLeft: 26,
    borderRadius: Radius.r10,
    fontFamily: FontFamily.FiraSans,
    fontSize: FontSize.f16,
    lineHeight: LineHeight.l18,
    fontWeight: '400',
  },
});
