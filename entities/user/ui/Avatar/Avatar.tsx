import { Image, StyleSheet } from 'react-native';

interface IAvatarProps {
  photo: string | null;
}

export function Avatar({ photo }: IAvatarProps) {
  const imageSource = photo ? photo : require('../../../../assets/images/user-profile-default.png');

  return (
    <>
      <Image style={styles.image} source={imageSource} />
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
});
