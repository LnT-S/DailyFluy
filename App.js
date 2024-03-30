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
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';

import SplashScreen from './src/screens/static/SplashScreen';
import Login from './src/components/Login/Login';
import { PRIMARY, SECONDARY } from './src/styles/colors';
import Forget from './src/components/Login/Forget';
import OtpScreen from './src/components/Login/OTP';
import NewPassword from './src/components/Login/NewPassword';
import SignupScreen from './src/components/Login/SignUp';
import HomePage from './src/components/home/HomePage';
import CustomDrawerContent from './src/addOns/molecules/CustomDrawerContent'
import Profile from './src/components/profile/Profile';
import Setting from './src/components/settings/Settting';
import ContactUs from './src/components/contact/Contact';
import About from './src/components/about/About';
import PrivacyPolicy from './src/components/privacy/privacy';
import EditCard from './src/components/editScreen/EditCard.js';

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator();


function DrawerNavigator() {

  return (
    <Drawer.Navigator initialRouteName='Home' drawerContent={(props) => <CustomDrawerContent {...props} />} backBehavior="history">
      <Drawer.Screen name="Home" component={HomePage} options={{ headerShown: false }} />
      <Drawer.Screen name="EditCard" component={EditCard} options={{ headerShown: false }} />
      <Drawer.Screen name="MyProfile" component={Profile} options={{ headerShown: false }} />
      <Drawer.Screen name="Setting" component={Setting} options={{ headerShown: false }} />
      <Drawer.Screen name="Contact" component={ContactUs} options={{ headerShown: false }} />
      <Drawer.Screen name="About" component={About} options={{ headerShown: false }} />
      <Drawer.Screen name="Privacy" component={PrivacyPolicy} options={{ headerShown: false }} />
    </Drawer.Navigator>
  );
}


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
        <StatusBar barStyle="dark-content" backgroundColor="#6426cd" />
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
          <Stack.Screen
          name='ForgetScreen'
          component={Forget}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='OTPScreen'
          component={OtpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='NewPassScreen'
          component={NewPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='SignupScreen'
          component={SignupScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
        name='HomeScreen'
        component={DrawerNavigator}
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
