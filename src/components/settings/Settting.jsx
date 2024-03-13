import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import AuthenticatedLayout from '../../screens/layout/AuthenticatedLayout'
import Semicircle from '../../addOns/atoms/SemiCircle'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { PRIMARY, SECONDARY, WHITE } from '../../styles/colors';

const Setting = () => {

  const navigation = useNavigation()
  const profileDetails = {
    image: '',
    name: 'Shruti',
    phoneNumber: '1234567891',
    email: 'shruti@gmail.com'
  }

  return (
    <AuthenticatedLayout title={'Setting'}
      showFooter={false}>
      <ScrollView style={{ flex: 1, backgroundColor: 'white'}}
      nestedScrollEnabled={true}
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="true">
        <Semicircle item={profileDetails} editMode={false} />
        <View style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%' }}>
          <View style={styles.settingBox}>
            <TouchableOpacity style={styles.listItem1} onPress={() => navigation.navigate('MyProfile')}>
              <Icon name="edit" size={30} color={WHITE} />
              <Text style={styles.text}>Edit Profile</Text>
            </TouchableOpacity>
            <View style={styles.listItem1}>
              <Icon name="delete" size={30} color={WHITE} />
              <Text style={styles.text}>Delete My Account</Text>
            </View>
            <View style={styles.listItem1}>
              <Icon name="chat" size={30} color={WHITE} />
              <Text style={styles.text}>Contact us</Text>
            </View>
            <View style={styles.listItem1}>
              <Icon name="language" size={30} color={WHITE} />
              <Text style={styles.text}>Change language</Text>
            </View>
            <View style={styles.listItem2}>
              <Icon name="exit-to-app" size={30} color={WHITE} />
              <Text style={styles.text}>Log Out</Text>
            </View>
          </View>
          <TouchableOpacity style={{ width: '100%' }}>
            <Text style={styles.textStyle}>Terms and Conditions</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </AuthenticatedLayout>
  )
}
const styles = StyleSheet.create({
  settingBox: {
    backgroundColor: SECONDARY,
    marginHorizontal: 20,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  listItem1: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: PRIMARY,
    marginLeft: 0,
    padding: 5
  },
  text: {
    color: 'white',
    fontSize: 18,
    marginLeft: 10
  },
  listItem2: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 0,
    padding: 5
  },
  textStyle: {
    textAlign: 'center',
    color: 'black',
    fontSize: 18,
    fontWeight: '800',
    padding: 15,
    textDecorationLine: 'underline'
  }
})
export default Setting