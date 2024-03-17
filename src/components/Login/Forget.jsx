import React, { useState } from 'react'
import { KeyboardAvoidingView, ScrollView, StyleSheet, TouchableOpacity, View, Text, Image, SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import RadialGradient from 'react-native-radial-gradient';
import UserInput from '../../addOns/atoms/UserInput';
import Button from '../../addOns/atoms/Button';
import global from '../../styles/global'
import { height } from '../../styles/responsive';
import { useNavigation } from '@react-navigation/native';
import { PRIMARY, SECONDARY, WHITE } from '../../styles/colors';
const Forget = () => {

    const navigation = useNavigation()
    const [isEmail, setIsEmail] = useState(true)

    const handleInput = () => {
        setIsEmail(!isEmail)
    }
    const handleSendOTP = () => {
        console.log('hi')
        navigation.navigate('OTPScreen')
    }

    return (

        <ScrollView
            style={{ flex: 1, backgroundColor: 'white' }}
            nestedScrollEnabled={true}
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="true">
            <RadialGradient
                colors={[PRIMARY, SECONDARY]}
                style={styles.container}
                stops={[0.2, 1]} // Adjust stops as needed
                radius={400}
            >
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back" style={styles.icon} size={30} />
                </TouchableOpacity>
                <View style={styles.forgetcontainer}>

                    <View style={styles.logoPart}>
                        <Image
                            source={require('../../assets/images/logowithoutname.png')}
                            style={{ height: 200, width: 138 }}
                        />
                        <Text style={{textAlign : 'center' ,fontSize : 30 , color: 'white' , letterSpacing : 1.2 }}>DailyFly</Text>
                        <Text style={styles.title}>Forget Password</Text>
                    </View>

                    <View style={styles.forgetpart}>
                        <UserInput
                            placeholder={isEmail ? 'Enter Email' : 'Enter Phone no.'}
                            icon={isEmail ? 'email' : 'phone'}
                        />

                        <Button
                            name='Send OTP'
                            onPress={handleSendOTP}
                        />
                        <TouchableOpacity onPress={handleInput} style>
                            <Text style={global.textWithUnderline}>{isEmail ? 'Use Phone' : 'Use Email'}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </RadialGradient>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    icon: {
        color: `white`,
        marginLeft: 10,
    },
    forgetcontainer: {
        flex: 1,
        display: 'flex',
        justifyContent: `center`,
        alignItems: 'center',
        gap: 60,
    },
    logoPart: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 0,
        width: '100%',
    },
    title: {
        color: `white`,
        fontSize: 35,
        fontWeight: `600`,
        marginTop: 30,
        fontFamily: 'serif'
    },
    forgetpart: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2,
        width: '100%',
    },
})
export default Forget