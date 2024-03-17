import { StyleSheet, View, Image } from 'react-native';
import { Input } from '../shared/input/input';
import { Colors, Gaps } from '../shared/tokens';
import { Button } from '../shared/Button/Button';
import { Toast } from '../shared/Toast/Toast';
import { useEffect, useState } from 'react';
import CustomLink from '../shared/CustomLink/CustomLink';
import { AppRoutes } from '../shared/app-routes';
import { loginAtom } from '../entities/auth/model/auth.state';
import { useAtom } from 'jotai';
import { router } from 'expo-router';

export default function Login() {
  const [errorText, setErrorText] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [{ accessToken, status, errorMessage }, login] = useAtom(loginAtom);

  const isPending = status === 'pending';

  const handleSubmit = () => {
    if (!email) {
      setErrorText('Не введен email');
      return;
    }

    if (!password) {
      setErrorText('Не введен пароль');
      return;
    }

    login({
      email,
      password,
    });
  };

  useEffect(() => {
    if (errorMessage) {
      setErrorText(errorMessage);
    }
  }, [errorMessage]);

  useEffect(() => {
    if (accessToken) {
      router.replace(AppRoutes.root);
    }
  }, [accessToken]);

  return (
    <View style={styles.container}>
      <Toast text={errorText} />

      <View style={styles.content}>
        <Image style={styles.logo} resizeMode='contain' source={require('../assets/logo.png')} />

        <View style={styles.loginForm}>
          <Input onChangeText={setEmail} placeholder='Email' placeholderTextColor={Colors.gray} />
          <Input onChangeText={setPassword} isPassword placeholder='Пароль' placeholderTextColor={Colors.gray} />
          <Button isPending={isPending} title='Войти' onPress={handleSubmit} />
        </View>
        <CustomLink href={AppRoutes.restore} text='Восстановить пароль' />
        <CustomLink href={'/course/ts'} text='курс' />
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
    rowGap: Gaps.g16,
    alignSelf: 'stretch',
  },
});
