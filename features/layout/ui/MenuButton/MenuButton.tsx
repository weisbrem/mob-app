import { View, Pressable, PressableProps, StyleSheet } from 'react-native';
import BurgerIcon from '../../../../assets/icons/burger-icon';
import { useState } from 'react';
import { Colors } from '../../../../shared/tokens';
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types';

interface IButtonProps extends PressableProps {
  navigation: DrawerNavigationHelpers;
}

export function MenuButton({ navigation, ...props }: IButtonProps) {
  const [clicked, setClicked] = useState(false);

  return (
    <Pressable
      {...props}
      onPressIn={() => setClicked(true)}
      onPressOut={() => setClicked(false)}
      onPress={() => navigation.toggleDrawer()}
    >
      <View style={{ ...styles.button, backgroundColor: clicked ? Colors.violetDark : Colors.blackLight }}>
        <BurgerIcon />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
});
