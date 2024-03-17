import { View, Pressable, StyleSheet } from 'react-native';

import CloseIcon from '../../../../../assets/icons/close-icon';
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types';

interface ICloseDrawerProps {
  navigation: DrawerNavigationHelpers;
}

export function CloseDrawer({ navigation }: ICloseDrawerProps) {
  return (
    <Pressable onPress={() => navigation.closeDrawer()}>
      <View style={styles.icon}>
        <CloseIcon />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    top: 18,
    right: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
