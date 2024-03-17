import { DrawerContentComponentProps } from '@react-navigation/drawer/lib/typescript/src/types';
import { ReactNode, useState } from 'react';
import { PressableProps, Pressable, View, Text, StyleSheet } from 'react-native';
import { FontFamily, FontSize, LineHeight, Colors, Gaps } from '../../../../shared/tokens';

interface IMenuItemProps extends PressableProps {
  drawer: DrawerContentComponentProps;
  icon: ReactNode;
  text: string;
  path: string;
}

export function MenuItem({ drawer, icon, text, path, ...props }: IMenuItemProps) {
  const [clicked, setClicked] = useState(false);

  const isActive = drawer.state.routes[drawer.state.index].name === path;

  return (
    <Pressable
      onPress={() => drawer.navigation.navigate(path)}
      onPressIn={() => setClicked(true)}
      onPressOut={() => setClicked(false)}
      {...props}
    >
      <View
        style={{
          ...styles.container,
          borderColor: isActive ? Colors.primary : Colors.black,
          backgroundColor: clicked || isActive ? Colors.violetDark : Colors.black,
        }}
      >
        {icon}
        <Text style={styles.text}>{text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRightWidth: 5,
    columnGap: Gaps.g10,
    paddingVertical: 18,
    paddingLeft: 24,
    marginBottom: 4,
  },
  text: {
    fontFamily: FontFamily.FiraSans,
    fontSize: FontSize.f16,
    lineHeight: LineHeight.l18,
    fontWeight: '400',
    color: Colors.text,
  },
});
