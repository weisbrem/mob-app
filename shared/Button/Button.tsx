import {
  Animated,
  GestureResponderEvent,
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  ActivityIndicator,
} from 'react-native';
import { Colors, FontFamily, FontSize, LineHeight, Radius } from '../tokens';

interface IButtonProps extends PressableProps {
  title: string;
  isPending?: boolean;
}

export function Button({ title, isPending, onPressIn, onPressOut, ...props }: IButtonProps) {
  const animatedValue = new Animated.Value(100);
  const color = animatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: [Colors.primaryHover, Colors.primary],
  });

  const fadeIn = (evt: GestureResponderEvent) => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 100,
      useNativeDriver: false,
    }).start();

    onPressIn && onPressIn(evt);
  };

  const fadeOut = (evt: GestureResponderEvent) => {
    Animated.timing(animatedValue, {
      toValue: 100,
      duration: 100,
      useNativeDriver: false,
    }).start();

    onPressOut && onPressOut(evt);
  };

  return (
    <Pressable {...props} onPressIn={fadeIn} onPressOut={fadeOut}>
      <Animated.View style={{ ...styles.button, backgroundColor: color }}>
        {isPending && <ActivityIndicator color={Colors.text} size={'large'} />}
        {!isPending && <Text style={styles.text}>{title}</Text>}
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 58,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: Radius.r10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: Colors.text,
    fontFamily: FontFamily.FiraSans,
    fontSize: FontSize.f18,
    lineHeight: LineHeight.l20,
    fontWeight: '400',
  },
});
