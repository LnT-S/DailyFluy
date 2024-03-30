import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { BgColor, SECONDARY } from '../../styles/colors'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const Footer = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView>
            <View style={styles.footer}>
                <View style={styles.icons} >
                    <Icon name="home" size={40} color="white" onPress={()=>navigation.navigate('Home')}/>
                    <Text style={styles.text}>Home</Text>
                </View>
                <View style={styles.icons} >
                <Icon name="apps" size={40} color="white" onPress={()=>navigation.navigate('Services')}/>
                <Text style={styles.text}>Servies</Text>
                </View>
                <View style={styles.icons} >
                    <Icon name="event" size={40} color="white" onPress={()=>navigation.navigate('ActiveBooking')}/>
                    <Text style={styles.text}>Bookings</Text>
                </View>
                <View style={styles.icons} >
                    <Icon name="person" size={40} color="white" onPress={()=>navigation.navigate('MyProfile')}/>
                    <Text style={styles.text}>Profile</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    footer: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        height: 70,
        backgroundColor: SECONDARY,
        zIndex: 2,
        padding:5
    },
    icons: {
        margin: 5,
        justifyContent:'center',
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontSize: 14,
        fontWeight: '500',
    }
})

export default Footer