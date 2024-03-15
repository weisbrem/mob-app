import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Redirect } from 'expo-router';
import { StyleSheet } from 'react-native';
import { useAtomValue } from 'jotai';
import { authAtom } from '../../entities/auth/model/auth.state';
import { AppRoutes } from '../../shared/common.types';

export default function AppLayout() {
  const { accessToken } = useAtomValue(authAtom);

  if (!accessToken) {
    return <Redirect href={AppRoutes.login} />;
  }

  return (
    <GestureHandlerRootView style={styles.rootView}>
      <Drawer>
        <Drawer.Screen name='index' />
      </Drawer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
  },
});
