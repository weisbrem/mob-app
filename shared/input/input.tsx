import { Pressable, StyleSheet, TextInput, TextInputProps, View } from 'react-native';
import { Colors, FontFamily, FontSize, Radius } from '../tokens';
import EyeClosedIcon from '../../assets/icons/eye-closed';
import EyeOpenIcon from '../../assets/icons/eye-open';
import { useState } from 'react';

interface IInputProps extends TextInputProps {
  isPassword?: boolean;
}

export function Input({ isPassword, style, ...props }: IInputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleChangeIsPasswordVisible = () => {
    setIsPasswordVisible((current) => !current);
  };

  return (
    <View style={style}>
      <TextInput style={styles.input} secureTextEntry={isPassword && !isPasswordVisible} {...props} />
      {isPassword && (
        <Pressable onPress={handleChangeIsPasswordVisible} style={styles.eyeIcon}>
          {isPasswordVisible ? <EyeOpenIcon /> : <EyeClosedIcon />}
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 58,
    color: Colors.gray,
    backgroundColor: Colors.violetDark,
    paddingVertical: 20,
    paddingHorizontal: 26,
    borderRadius: Radius.r10,
    fontFamily: FontFamily.FiraSans,
    fontSize: FontSize.f16,
    fontWeight: '400',
    textAlign: 'left',
  },
  eyeIcon: {
    position: 'absolute',
    right: 0,
    paddingHorizontal: 24,
    paddingVertical: 18,
  },
});
