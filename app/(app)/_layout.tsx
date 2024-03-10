import { Redirect, Stack } from 'expo-router';
import { useAtomValue } from 'jotai';
import { authAtom } from '../../entities/auth/model/auth.state';
import { AppRoutes } from '../../shared/common.types';

export default function AppLayout() {
  const { accessToken } = useAtomValue(authAtom);

  if (!accessToken) {
    return <Redirect href={AppRoutes.login} />;
  }

  return (
    <Stack>
      <Stack.Screen name='index' />
    </Stack>
  );
}
