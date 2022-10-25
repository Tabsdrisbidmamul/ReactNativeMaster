import 'react-native-gesture-handler';
import { Platform, SafeAreaView, StyleSheet, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import WelcomeScreen from './screens/WelcomeScreen';
import UserScreen from './screens/UserScreen';
import { color } from 'react-native-reanimated';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerActiveBackgroundColor: '#aaa',
          drawerActiveTintColor: '#fff',
          headerStyle: { backgroundColor: '#ccc' },
          headerTintColor: '#000',
          drawerStyle: { backgroundColor: '#fff' },
        }}
      >
        <Drawer.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            drawerLabel: 'Welcome Screen',
            drawerIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} />,
          }}
        />
        <Drawer.Screen
          name="User"
          component={UserScreen}
          options={{
            drawerIcon: ({ color, size }) => <Ionicons name="person" color={color} size={size} />,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  root: {
    ...Platform.select({
      android: {
        marginTop: StatusBar.currentHeight + 20,
      },
    }),
  },
});
