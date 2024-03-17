import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../shared/tokens';

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Профиль</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 20,
  },
  text: {
    color: Colors.text,
  },
});
