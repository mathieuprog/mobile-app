import { Slot } from 'expo-router';
import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import React from 'react';
import { useFonts, Inter_400Regular } from '@expo-google-fonts/inter';
import { SessionProvider } from '../context';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Inter_400Regular,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <SessionProvider>
      <Slot />
    </SessionProvider>
  );
}
