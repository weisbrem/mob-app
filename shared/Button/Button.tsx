import { Pressable, PressableProps, StyleSheet, Text } from 'react-native';
import { Colors, Radius } from '../tokens';

interface IButtonProps extends PressableProps {
  title: string;
}

export function Button({ title, ...props }: IButtonProps) {
  return (
    <Pressable style={styles.button} {...props}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 58,
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: Radius.r10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: Colors.text,
    fontSize: 18,
    lineHeight: 20,
    fontWeight: '400',
  },
});
