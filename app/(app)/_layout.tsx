import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Redirect } from 'expo-router';
import { StyleSheet } from 'react-native';
import { useAtomValue } from 'jotai';
import { authAtom } from '../../entities/auth/model/auth.state';
import { AppRoutes } from '../../shared/app-routes';
import { Colors, FontFamily, FontSize, LineHeight } from '../../shared/tokens';
import { MenuButton } from '../../features/layout/ui/MenuButton/MenuButton';
import { CustomDrawer } from '../../entities/layout/ui/CustomDrawer/CustomDrawer';

export default function AppLayout() {
  const { accessToken } = useAtomValue(authAtom);

  if (!accessToken) {
    return <Redirect href={AppRoutes.login} />;
  }

  return (
    <GestureHandlerRootView style={styles.rootView}>
      <Drawer
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={({ navigation }) => ({
          headerStyle: {
            backgroundColor: Colors.blackLight,
            shadowColor: Colors.blackLight,
            shadowOpacity: 0,
          },
          headerLeft: () => <MenuButton navigation={navigation} />,
          headerTitleStyle: {
            color: Colors.text,
            fontFamily: FontFamily.FiraSans,
            fontSize: FontSize.f20,
            lineHeight: LineHeight.l22,
            fontWeight: '400',
          },
          headerTitleAlign: 'center',
          sceneContainerStyle: {
            backgroundColor: Colors.black,
          },
        })}
      >
        <Drawer.Screen name='index' options={{ title: 'Мои курсы' }} />
        <Drawer.Screen name='profile' options={{ title: 'Профиль' }} />
        <Drawer.Screen name='club' options={{ title: 'Клуб' }} />
      </Drawer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
  },
});
