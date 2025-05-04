import { Redirect, Stack } from 'expo-router';
import { useEffect } from 'react';
import { Text, Pressable, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import React from 'react';
import { useFonts, Inter_400Regular } from '@expo-google-fonts/inter';
import { useSession } from '../../context';
import { Icon } from '../../components/Icon';

SplashScreen.preventAutoHideAsync();

// const CustomHeader = ({ route, options, signOut }: { route: any, options: any, signOut: any }) => {
//   return (
//     <View style={{ 
//       flexDirection: 'row',
//       height: 60,
//       alignItems: 'center',
//       justifyContent: 'space-between',
//       paddingHorizontal: 16,
//       backgroundColor: 'white'
//     }}>
//       <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
//         {options.title || route.name}
//       </Text>
//       <Pressable 
//         onPress={signOut}
//         style={({ pressed }) => [
//           { padding: 10, opacity: pressed ? 0.7 : 1 }
//         ]}
//       >
//         <Icon name="right-from-bracket" size={22} color="#000" />
//       </Pressable>
//     </View>
//   );
// };

export default function RootLayout() {
  const { session, isLoading, signOut } = useSession();

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

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  console.log('hello?');

  if (!session) {
    return <Redirect href="/sign-in" />;
  }

  console.log('world!');

  return (
    <Stack 
      screenOptions={{
        headerTitleStyle: {
          fontSize: 18,
          fontWeight: 'bold',
        },
        headerRight: () => (
          <Pressable onPress={signOut}>
            <Icon name="right-from-bracket" size={22} color="#000" />
          </Pressable>
        ),
      }}
    />
  );
}
