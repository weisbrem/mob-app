import { DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Colors } from '../../../../shared/tokens';
import { AppRoutes } from '../../../../shared/common.types';
import CustomLink from '../../../../shared/CustomLink/CustomLink';

export function CustomDrawer(props: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.scrollView}>
      <View>
        <Text>test</Text>
      </View>
      <View style={styles.footer}>
        <CustomLink text='Выход' href={AppRoutes.login} />
        <Image style={styles.logo} resizeMode='contain' source={require('../../../../assets/logo.png')} />
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: Colors.black,
    paddingBottom: 35,
  },
  footer: {
    alignItems: 'center',
    rowGap: 50,
  },
  logo: {
    width: 163,
  },
});
