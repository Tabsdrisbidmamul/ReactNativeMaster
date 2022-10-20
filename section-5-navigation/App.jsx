import { useCallback } from 'react';
import { StatusBar as SB } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Platform, SafeAreaView, StyleSheet, StatusBar, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, error] = useFonts({
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-light': require('./assets/fonts/Roboto-Light.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Medium.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <SB style="dark" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Categories">
          <Stack.Screen name="Categories" component={CategoriesScreen} />
          <Stack.Screen name="Meals Overview" component={MealsOverviewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      android: {
        marginTop: StatusBar.currentHeight + 10,
      },
    }),
    backgroundColor: '#24180f',
  },
});
