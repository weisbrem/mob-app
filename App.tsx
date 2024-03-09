import { Button, StyleSheet, Text, View, Image } from 'react-native';
import { Input } from './shared/input/input';
import { Colors, Gaps, Radius } from './shared/tokens';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} resizeMode='contain' source={require('./assets/logo.png')} />

      <View style={styles.loginForm}>
        <Input placeholder='Email' placeholderTextColor={Colors.gray} />
        <Input isPassword placeholder='Пароль' placeholderTextColor={Colors.gray} />
        <Button title='Войти' />
      </View>
      <Text style={styles.resetLink}>Восстановить пароль</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 55,
    backgroundColor: Colors.black,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'sans-serif',
    rowGap: Gaps.g50,
  },
  logo: {
    width: 220,
  },
  loginForm: {
    rowGap: Gaps.g16,
    alignSelf: 'stretch',
  },
  enterButton: {
    color: Colors.text,
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: Radius.r10,
    fontSize: 18,
    lineHeight: 20,
    fontWeight: '400',
  },
  resetLink: {
    color: Colors.link,
    fontSize: 18,
    lineHeight: 20,
    fontWeight: '400',
  },
});
