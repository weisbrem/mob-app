import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../shared/tokens';
import { useAtomValue } from 'jotai';
import { authAtom } from '../../entities/auth/model/auth.state';
import { useEffect } from 'react';
import { router, useRootNavigationState } from 'expo-router';
import { AppRoutes } from '../../shared/common.types';

export default function MyCourses() {
  const { accessToken } = useAtomValue(authAtom);
  const state = useRootNavigationState();

  useEffect(() => {
    if (!state?.key) return;

    if (!accessToken) {
      router.replace(AppRoutes.login);
    }
  }, [accessToken]);

  return (
    <View>
      <Text style={styles.text}>Мои курсы</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    // color: Colors.text,
    color: Colors.black,
  },
});
