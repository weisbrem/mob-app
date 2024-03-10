import { Link } from 'expo-router';
import { LinkProps } from 'expo-router/build/link/Link';
import { Text, StyleSheet } from 'react-native';
import { Colors, FontFamily, FontSize, LineHeight } from '../tokens';

interface ICustomLinkProps extends LinkProps {
  text: string;
}

export default function CustomLink({ text, ...props }: ICustomLinkProps) {
  return (
    <Link style={styles.link} {...props}>
      <Text>{text}</Text>
    </Link>
  );
}

const styles = StyleSheet.create({
  link: {
    color: Colors.link,
    fontFamily: FontFamily.FiraSans,
    fontSize: FontSize.f18,
    lineHeight: LineHeight.l20,
    fontWeight: '400',
    textAlign: 'center',
  },
});
