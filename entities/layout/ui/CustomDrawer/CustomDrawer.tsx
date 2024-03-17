import { DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { View, Image, StyleSheet } from 'react-native';
import { Colors } from '../../../../shared/tokens';
import { AppRoutes } from '../../../../shared/app-routes';
import CustomLink from '../../../../shared/CustomLink/CustomLink';
import { CloseDrawer } from '../../../../features/layout/ui/CloseDrawer/CloseDrawer';
import { useAtom, useSetAtom } from 'jotai';
import { logoutAtom } from '../../../auth/model/auth.state';
import { useEffect } from 'react';
import { loadProfileAtom } from '../../../user/model/user.state';
import { Profile } from '../../../user/ui/profile/profile';

export function CustomDrawer({ navigation, ...props }: DrawerContentComponentProps) {
  const logout = useSetAtom(logoutAtom);
  const [{ profile }, loadProfile] = useAtom(loadProfileAtom);

  useEffect(() => {
    loadProfile();
  }, []);

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.scrollView}>
      <View style={styles.content}>
        <CloseDrawer navigation={navigation} />
        <Profile photo={profile?.photo} name={profile?.name} surname={profile?.surname} />
      </View>
      <View style={styles.footer}>
        <CustomLink text='Выход' href={AppRoutes.login} onPress={logout} />
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
  content: {
    flex: 1,
  },
  footer: {
    alignItems: 'center',
    rowGap: 50,
  },
  logo: {
    width: 160,
  },
});
