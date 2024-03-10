import { StyleSheet, Text, View, Image } from 'react-native';
import { Input } from '../shared/input/input';
import { Colors, Gaps } from '../shared/tokens';
import { Button } from '../shared/Button/Button';
import { Toast } from '../shared/Toast/Toast';
import { useState } from 'react';

export default function App() {
  const [errorText, setErrorText] = useState<string | undefined>();

  const alert = () => {
    setErrorText('Неверный логин или пароль');
    setTimeout(() => {
      setErrorText(undefined);
    }, 4000);
  };

  return (
    <View style={styles.container}>
      <Toast text={errorText} />

      <View style={styles.content}>
        <Image style={styles.logo} resizeMode='contain' source={require('../assets/logo.png')} />

        <View style={styles.loginForm}>
          <Input placeholder='Email' placeholderTextColor={Colors.gray} />
          <Input isPassword placeholder='Пароль' placeholderTextColor={Colors.gray} />
          <Button title='Войти' onPress={alert} />
        </View>
        <Text style={styles.resetLink}>Восстановить пароль</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 55,
    backgroundColor: Colors.black,
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    rowGap: Gaps.g50,
  },
  logo: {
    width: 220,
  },
  loginForm: {
    fontFamily: 'sans-serif',
    rowGap: Gaps.g16,
    alignSelf: 'stretch',
  },
  resetLink: {
    color: Colors.link,
    fontSize: 18,
    lineHeight: 20,
    fontWeight: '400',
  },
});
