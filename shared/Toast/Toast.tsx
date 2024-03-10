import { Text, StyleSheet, Dimensions, Animated } from 'react-native';
import { Colors } from '../tokens';
import { useEffect, useState } from 'react';

interface IToastProps {
  text?: string;
  type?: 'error';
}

export function Toast({ text }: IToastProps) {
  const [isVisible, setIsVisible] = useState(false);
  const animatedValue = new Animated.Value(-100);

  const onEnter = () => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    if (!text) {
      return;
    }
    setIsVisible(true);

    const timerId = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  if (!isVisible) {
    return null;
  }

  return (
    <Animated.View style={{ ...styles.error, transform: [{ translateY: animatedValue }] }} onLayout={onEnter}>
      <Text style={styles.text}>{text}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  error: {
    position: 'absolute',
    width: Dimensions.get('screen').width,
    backgroundColor: Colors.toastErrorBg,
    padding: 15,
  },
  text: {
    color: Colors.text,
    fontFamily: 'FiraSans',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 18,
    textAlign: 'center',
  },
});
