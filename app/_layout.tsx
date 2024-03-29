import { Stack, SplashScreen } from 'expo-router';
import { Colors } from '../shared/tokens';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'FiraSans-Regular': require('../assets/fonts/FiraSans-Regular.ttf'),
    'FiraSans-SemiBold': require('../assets/fonts/FiraSans-SemiBold.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <StatusBar style='light' />
      <Stack
        screenOptions={{
          statusBarColor: Colors.black,
          contentStyle: {
            backgroundColor: Colors.black,
          },
          headerShown: false,
        }}
      >
        <Stack.Screen name='login' />
        <Stack.Screen
          name='restore'
          options={{
            presentation: 'modal',
          }}
        />
      </Stack>
    </SafeAreaProvider>
  );
}
