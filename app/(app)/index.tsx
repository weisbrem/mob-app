import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../shared/tokens';

export default function MyCourses() {
  return (
    <View>
      <Text style={styles.text}>Мои курсы</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    // color: Colors.text,
    color: Colors.black,
  },
});
