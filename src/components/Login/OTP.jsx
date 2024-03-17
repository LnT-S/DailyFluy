import React, { useState } from 'react'
import { ScrollView, TouchableOpacity, View, Image, StyleSheet, Text,SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import RadialGradient from 'react-native-radial-gradient';
import global from '../../styles/global'
import { getResponsiveValue } from '../../styles/responsive';
import OTPInput from '../../addOns/molecules/OTPInput';
import { useNavigation } from '@react-navigation/native';
import Button from '../../addOns/atoms/Button';
import { PRIMARY,SECONDARY } from '../../styles/colors';

const OtpScreen = () => {

    const navigation = useNavigation()
    const [otp, setOtp] = useState('');

    const handleOTPChange = (otp) => {
        setOtp(otp);
    };
    const handleVerificationOTP = () => {
        navigation.navigate('NewPassScreen')
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
                    <Icon name="arrow-back" style={global.backIcon} size={30} />
                </TouchableOpacity>
                <View style={{ flex: 1,display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={styles.signupcontainer}>
                        <Image
                            source={require('../../assets/images/OTP.png')}
                            resizeMode="contain"
                            style={styles.image}
                        />
                        <Text style={styles.title}>Verification</Text>
                    </View>

                    <View style={styles.otpcontainer}>
                        <OTPInput length={6} onOTPChange={handleOTPChange} />

                        <Button
                            style={{ marginTop: 60 }}
                            name='Verify OTP'
                            onPress={handleVerificationOTP}
                        />

                        <View style={styles.resendtext}>
                            <Text style={{ fontSize: 15, color: 'white' }}>
                                Resend OTP in 00:00 seconds
                            </Text>
                        </View>
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
    image: {
        width: getResponsiveValue(200, 100),
        height: getResponsiveValue(200, 100),
        left: getResponsiveValue("4%", "4%"),
    },
    title: {
        color: `white`,
        fontSize: 35,
        fontWeight: `500`,
        fontFamily: 'serif'
    },
    signupcontainer: {
        justifyContent: `center`,
        alignItems: `center`

    },
    otpcontainer: {
        marginTop: 40,
        justifyContent: `center`,
        alignItems: `center`
    },
    resendtext: {
        marginTop: 20
    }
})
export default OtpScreen