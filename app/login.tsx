import { StyleSheet, View, Image, Dimensions, KeyboardAvoidingView, Platform } from 'react-native';
import { useAtom } from 'jotai';
import { router } from 'expo-router';
import { Orientation } from 'expo-screen-orientation';
import { Input } from '../shared/input/input';
import { Colors, Gaps } from '../shared/tokens';
import { Button } from '../shared/Button/Button';
import { Toast } from '../shared/Toast/Toast';
import { useEffect, useState } from 'react';
import CustomLink from '../shared/CustomLink/CustomLink';
import { AppRoutes } from '../shared/app-routes';
import { loginAtom } from '../entities/auth/model/auth.state';
import { useScreenOrientation } from '../shared/hooks';

export default function Login() {
  const [errorText, setErrorText] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [{ accessToken, status, errorMessage }, login] = useAtom(loginAtom);
  const orientation = useScreenOrientation();

  const isPending = status === 'pending';
  const inputWidth = orientation === Orientation.PORTRAIT_UP ? 'auto' : Dimensions.get('window').width / 2 - 16 - 48;

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

      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.content}>
        <Image style={styles.logo} resizeMode='contain' source={require('../assets/logo.png')} />

        <View style={styles.loginForm}>
          <View
            style={{
              ...styles.inputsContainer,
              flexDirection: orientation === Orientation.PORTRAIT_UP ? 'column' : 'row',
            }}
          >
            <Input
              style={{
                width: inputWidth,
              }}
              onChangeText={setEmail}
              placeholder='Email'
              placeholderTextColor={Colors.gray}
            />
            <Input
              style={{
                width: inputWidth,
              }}
              onChangeText={setPassword}
              isPassword
              placeholder='Пароль'
              placeholderTextColor={Colors.gray}
            />
          </View>
          <Button isPending={isPending} title='Войти' onPress={handleSubmit} />
        </View>
        <CustomLink href={AppRoutes.restore} text='Восстановить пароль' />
        <CustomLink href={'/course/ts'} text='курс' />
      </KeyboardAvoidingView>
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
  inputsContainer: {
    gap: Gaps.g16,
  },
});
