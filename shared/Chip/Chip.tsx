import { View, Text, StyleSheet } from 'react-native';
import { Colors, FontFamily, FontSize, LineHeight, Radius } from '../tokens';

interface IChipProps {
  text: string;
}

export function Chip({ text }: IChipProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: Radius.r18,
    borderWidth: 1,
    borderColor: Colors.chipBorder,
  },
  text: {
    fontFamily: FontFamily.FiraSans,
    fontSize: FontSize.f14,
    lineHeight: LineHeight.l20,
    color: Colors.text,
  },
});
