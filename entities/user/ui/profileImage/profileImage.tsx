import { View, Text, Image, StyleSheet } from 'react-native';
import { Colors, FontFamily, FontSize, Gaps, LineHeight } from '../../../../shared/tokens';

interface IProfileProps {
  photo?: string;
  name?: string;
  surname?: string;
}

export function ProfileImage({ photo, name, surname }: IProfileProps) {
  const imageSource = photo ? { uri: photo } : require('../../../../assets/images/user-profile-default.png');

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={imageSource} />

      <Text style={styles.name}>
        {name && name} {surname && surname}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 40,
    rowGap: Gaps.g8,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  name: {
    fontFamily: FontFamily.FiraSans,
    fontSize: FontSize.f16,
    lineHeight: LineHeight.l18,
    fontWeight: '400',
    color: Colors.text,
  },
});
