import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, KeyboardAvoidingView, BackHandler, ScrollView, StatusBar } from 'react-native';
import RadialGradient from 'react-native-radial-gradient';
import { PRIMARY, SECONDARY } from '../../styles/colors';
import { font } from '../../styles/fonts';
import UserInput from '../../addOns/atoms/UserInput';
import PassInput from '../../addOns/atoms/PassInput';
import Buttons from '../../addOns/atoms/Button';
import { getResponsiveValue } from '../../styles/responsive';
import { useNavigation } from '@react-navigation/native';
import YesNoModal from '../../addOns/molecules/YesNoModal';
import { SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
    const navigation = useNavigation()
    const [selectedOption, setSelectedOption] = useState('')
    const [showModal, setShowModal] = useState(false)

    const handleYes = async () => {
        console.log('set')
        setShowModal(false);
        BackHandler.exitApp();
    };
    const SignUpPage = () => {
        navigation.navigate('SignupScreen')
    }
    const ForgetPage = () => {
        navigation.navigate('ForgetScreen')
    }
    const handleLogin = () => {
            navigation.navigate('HomeScreen')
    }

    useEffect(() => {
        const backFuntion = () => {
            if (showModal) {
                setShowModal(false)
            } else {
                setShowModal(true)
                return true
            }
        }

        console.log('BACKHANDLER ATTACHED')
        const backHandler = BackHandler.addEventListener('hardwareBackPress', backFuntion)
        return () => {
            console.log('BACKHANDLER REMOVED')
            backHandler.remove()
        }
    }, [])

    return (
        <ScrollView
            style={{ flex: 1, backgroundColor: 'white'}}
      nestedScrollEnabled={true}
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="true">
            <RadialGradient
                colors={[PRIMARY, SECONDARY]}
                style={styles.container}
                stops={[0.2, 1]} // Adjust stops as needed
                radius={400}
            >
                <YesNoModal
                    show={showModal}
                    setShow={setShowModal}
                    title={'EXIT ?'}
                    message={'Are You Sure Want To Exit ?'}
                    handleYes={handleYes}
                    yesText={'Yes'}
                    noText={'No'} />
                <View style={{ marginTop: 10, marginBottom: 20, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.text}>Log In</Text>
                </View>
                <View  style={{justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require('../../assets/images/logowithoutname.png')}
                        style={{ height: 200, width: 138 }} />
                    <Text style={{ textAlign: 'center', fontSize: 24, color: 'white', letterSpacing: 1.2, fontFamily: 'serif', fontWeight: '600', margin: 10 }}>
                        Welcome to DailyFly BOOST YOUR BUSSINESS
                    </Text>
                </View>
                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <UserInput
                        style={[styles.input]}
                        placeholder='UserName or Phone No.'
                        icon={'person'}
                    />
                    <PassInput
                        placeholder='Enter Password'
                    />
                    <View>
                        <TouchableOpacity onPress={ForgetPage}>
                            <Text style={styles.link}>Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>
                    <Buttons
                        name='Log In'
                        onPress={handleLogin}
                    />
                </View>
                <View style={styles.content}>
                    <View style={styles.signupContainer}>
                        <Text style={styles.createAccount}>Don't have an account?</Text>
                        <TouchableOpacity onPress={SignUpPage}>
                            <Text style={styles.link}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </RadialGradient>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontSize: 35,
        fontWeight: '600',
        fontFamily: 'serif',
        letterSpacing: 1.3
    },
    content: {
        top: getResponsiveValue("4%", "4%"),
        justifyContent: 'center',
        alignItems: 'center',
    },
    link: {
        color: 'white',
        textDecorationLine: 'underline',
        fontSize: getResponsiveValue(18, 16),
        marginTop: getResponsiveValue("2%", "2%"),
        marginBottom: getResponsiveValue("2%", "2%"),
        fontWeight: `600`
        // marginBottom: 10,
    },
    signupContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    createAccount: {
        color: 'black',
        fontSize: getResponsiveValue(18, 16),
        marginRight: 5,
    }
})

export default Login;
