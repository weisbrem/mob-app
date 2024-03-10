import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../shared/tokens';
import { Button } from '../../shared/Button/Button';
import { logoutAtom } from '../../entities/auth/model/auth.state';
import { useSetAtom } from 'jotai';

export default function MyCourses() {
  const logout = useSetAtom(logoutAtom);

  return (
    <View>
      <Text style={styles.text}>Мои курсы</Text>
      <Button onPress={logout} title='Выйти' />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    // color: Colors.text,
    color: Colors.black,
  },
});
