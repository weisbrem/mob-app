import { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Button } from '../../shared/Button/Button';
import { Input } from '../../shared/input/input';
import { Colors, FontFamily, FontSize, Gaps, LineHeight, Radius } from '../../shared/tokens';
import { ImageUploader } from '../../shared/ImageUploader/ImageUploader';
import { Avatar } from '../../entities/user/ui/Avatar/Avatar';

export default function Profile() {
  const [image, setImage] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      <View style={styles.imageUploadContainer}>
        <Avatar photo={image} />

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
