import { useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, FontFamily, FontSize, LineHeight } from '../../../shared/tokens';

export default function CoursePage() {
  const { alias } = useLocalSearchParams();

  return (
    <View>
      <Text style={styles.text}>Страница курса {alias}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: Colors.text,
    fontFamily: FontFamily.FiraSans,
    fontSize: FontSize.f18,
    lineHeight: LineHeight.l20,
    fontWeight: '400',
    textAlign: 'center',
  },
});
