import { View, Pressable, PressableProps, StyleSheet } from 'react-native';
import BurgerIcon from '../../../../assets/icons/burger-icon';
import { useState } from 'react';
import { Colors } from '../../../../shared/tokens';

interface IButtonProps extends PressableProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigation: any;
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
