import { useEffect, useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { Button } from '../../shared/Button/Button';
import { Input } from '../../shared/input/input';
import { ImageUploader } from '../../shared/ImageUploader/ImageUploader';
import { Avatar } from '../../entities/user/ui/Avatar/Avatar';
import { profileAtom, updateProfileAtom } from '../../entities/user/model/user.state';
import { Colors, FontFamily, FontSize, Gaps, LineHeight, Radius } from '../../shared/tokens';

export default function Profile() {
  const [image, setImage] = useState<string | null>(null);
  const [username, setUsername] = useState<string | undefined>(undefined);
  const [profile, updateProfile] = useAtom(updateProfileAtom);
  const { status } = useAtomValue(profileAtom);
  const setProfile = useSetAtom(profileAtom);

  useEffect(() => {
    if (profile && profile.profile?.photo) {
      setImage(profile.profile.photo);
    }
  }, [profile]);

  useEffect(() => {
    if (status === 'fulfilled') {
      setUsername(undefined);
      setProfile({
        profile: profile.profile,
        status: 'idle',
        errorMessage: null,
      });
    }
  }, [status]);

  const handleInputChange = (value: string) => {
    setUsername(value);
  };

  const handleUpdateProfile = () => {
    if (!image && !username) {
      return;
    }

    updateProfile({
      photo: image ?? '',
      name: username ?? '',
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageUploadContainer}>
        <Avatar photo={image} />

        <ImageUploader onUpload={setImage} onError={(error) => Alert.alert(error)} />
      </View>

      <Input
        onChangeText={handleInputChange}
        value={username}
        style={styles.input}
        placeholder='Имя'
        placeholderTextColor={Colors.gray}
      />
      <Button title='Сохранить' onPress={handleUpdateProfile} />
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
