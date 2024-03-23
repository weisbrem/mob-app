import { View, Text, StyleSheet } from 'react-native';
import { Colors, FontFamily, FontSize, Gaps, LineHeight } from '../../../../../../../shared/tokens';
import { Avatar } from '../../../../../../../entities/user/ui/Avatar/Avatar';

interface IProfileProps {
  photo: string | null;
  name?: string;
  surname?: string;
}

export function ProfileImage({ photo, name, surname }: IProfileProps) {
  return (
    <View style={styles.container}>
      <Avatar photo={photo} />

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
  name: {
    fontFamily: FontFamily.FiraSans,
    fontSize: FontSize.f16,
    lineHeight: LineHeight.l18,
    fontWeight: '400',
    color: Colors.text,
  },
});
