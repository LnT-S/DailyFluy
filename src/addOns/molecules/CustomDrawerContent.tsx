// CustomDrawerContent.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PRIMARY, SECONDARY } from '../../styles/colors';

interface CustomDrawerProps {
  state: any; // React Navigation state object
  navigation: any; // React Navigation navigation object
}

const CustomDrawerContent: React.FC<CustomDrawerProps> = ({ state, navigation }) => {

  const activeRouteName = state.routeNames[state.index]; // Get the active route name

  const handleNavigation = (routeName: string) => {
    navigation.navigate(routeName);
  };

  return (
    <DrawerContentScrollView contentContainerStyle={styles.container}>

      <View style={{ display: 'flex', alignItems: 'flex-end', marginRight: 15, marginTop: 10 }}>
        <Icon name="settings" size={24} color="white" onPress={() => handleNavigation('Setting')} />
      </View>
      <View style={styles.profileContainer}>
        <Icon name="person" size={50} color="white" />
        <Text style={styles.profileText}>Person name</Text>
        <Text style={styles.profileText}>123-456-7890</Text>
      </View>
      <TouchableOpacity
        style={[
          activeRouteName === 'Home' && styles.activeItemBackground,
        ]}
        onPress={() => handleNavigation('Home')}>
        <Text style={[
          styles.text,
          activeRouteName === 'Home' && styles.activeItemColor,
        ]}>
          Home</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={[
          activeRouteName === 'MyProfile' && styles.activeItemBackground,
        ]}
        onPress={() => handleNavigation('MyProfile')}>
        <Text style={[
          styles.text,
          activeRouteName === 'MyProfile' && styles.activeItemColor,
        ]}>My Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          activeRouteName === '' && styles.activeItemBackground,
        ]}
        onPress={() => handleNavigation('MyProfile')}>
        <Text style={[
          styles.text,
          activeRouteName === '' && styles.activeItemColor,
        ]}>Change Language</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          activeRouteName === '' && styles.activeItemBackground,
        ]}
        onPress={() => handleNavigation('Contact')}>
        <Text style={[
          styles.text,
          activeRouteName === '' && styles.activeItemColor,
        ]}>Contact Us</Text>
      </TouchableOpacity>

     
      <View style={styles.logoutContainer}>
        <TouchableOpacity style={{ alignItems: 'center',margin: 10}}>
          <Text style={[styles.logoutText,{textDecorationLine:'underline'}]}>Terms & Conditions</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => {
            // Implement logout functionality
          }}>
          <Icon name="exit-to-app" size={30} color="white" />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: SECONDARY,
    flex: 1,
  },
  profileContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 18,
    color: 'white',
    marginLeft: 20,
    marginVertical: 10,
  },
  profileText: {
    fontSize: 18,
    marginVertical: 5,
    color: 'white',
  },
  logoutContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  logoutButton: {
    backgroundColor: PRIMARY,
    paddingVertical: 15,
    alignItems: 'center',
  },
  logoutText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  activeItemColor: {
    color: 'white',
    marginLeft: 10,
    fontWeight: 'bold',
  },
  activeItemBackground: {
    backgroundColor: PRIMARY,
    color: 'white',// Your active item background color
    marginHorizontal: 10
  },
});

export default CustomDrawerContent;
