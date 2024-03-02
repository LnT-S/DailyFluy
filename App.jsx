/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';

import SplashScreen from './src/screens/static/SplashScreen';
import Login from './src/components/Login/Login';


const Stack = createNativeStackNavigator()


function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // Set isLoading to false when the loading task is complete
    }, 2900); // Simulate loading for 2 seconds, replace this with your actual loading logic
  }, []);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <NavigationContainer >
        <StatusBar barStyle="dark-content" backgroundColor="#b130e6" />
        {isLoading ? (
          <SplashScreen />
        ) : (<Stack.Navigator
          initialRouteName=""
          screenOptions={{
            gestureEnabled: true,
            gestureDirection: 'horizontal',

          }}
        >
          <Stack.Screen
            name='LoginScreen'
            component={Login}
            options={{ headerShown: false }}
          />

        </Stack.Navigator>)}
      </NavigationContainer>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#b130e6"
  }
})

export default App;
