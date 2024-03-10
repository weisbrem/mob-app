import { Text, Image, StyleSheet } from 'react-native';
import { Colors } from '../shared/tokens';
import CustomLink from '../shared/CustomLink/CustomLink';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function UnmatchedCustom() {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} resizeMode='contain' source={require('../assets/images/unmatched.png')} />

      <Text style={styles.text}>Ооо... что-то пошло не так. Попробуйте вернуться на главный экран приложения</Text>
      <CustomLink href={'/'} text='На главный экран' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: 50,
    paddingHorizontal: 55,
  },
  image: {
    width: 204,
    height: 282,
  },
  text: {
    color: Colors.text,
    fontFamily: 'FiraSans',
    fontSize: 18,
    lineHeight: 20,
    fontWeight: '400',
    textAlign: 'center',
  },
});
