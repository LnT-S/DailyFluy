import React, { useEffect, useState } from 'react'
import {
    KeyboardAvoidingView,
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    Image,
    ScrollView,
    BackHandler
} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Button from '../../addOns/atoms/Button'
import Icon from 'react-native-vector-icons/MaterialIcons';
import UserInput from '../../addOns/atoms/UserInput';
import PassInput from '../../addOns/atoms/PassInput';
import CheckbocTC from '../../addOns/atoms/CheckbocT&C';
import global from '../../styles/global'
import RadialGradient from 'react-native-radial-gradient';
import { PRIMARY, SECONDARY } from '../../styles/colors';
import { getResponsiveValue, screenWidth } from '../../styles/responsive';
import DatePicker from '../../addOns/atoms/DatePicker';
const SignupScreen = () => {

    const navigation = useNavigation()
    const [selectedOption, setSelectedOption] = useState('')
    const [showDatePicker, setShowDatePicker] = useState(false)
    const [dateSelected, setDateSelected] = useState(new Date())
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        console.log('Option is Changing', selectedOption)
    }, [selectedOption])

    useEffect(() => {
        const backAction = () => {
            navigation.goBack()
            return true
        }
        console.log("BACKHANDLER SET IN SIGNUPPAGE")
        const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
        return () => {
            console.log('BACKHANDLER REMOVED FROM SIGNUP')
            backHandler.remove()
        };
    }, []);

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

                <View style={styles.signupcontainer}>
                    <View style={styles.logoPart}>
                        <Image source={require('../../assets/images/logowithoutname.png')}
                            style={{ height: 100, width: 70 }} />
                            <Text style={{ textAlign: 'center', fontSize: 30, color: 'white', letterSpacing: 1.2 }}>DailyFly</Text>
                    </View>
                    <Text style={styles.title}>Sign Up</Text>


                    <View style={styles.logoPart}>
                        <UserInput
                            placeholder='UserName or Phone No.'
                            icon={'person'}
                        />
                        <UserInput
                            placeholder='Email'
                            icon={'email'}
                        />
                        <PassInput
                            placeholder='Password'
                        />
                        <PassInput
                            placeholder='Re-enter Password'
                        />
                        <UserInput
                            placeholder='Bussiness Organisation'
                            icon={'business'}
                        />
                        <View>
                            <TouchableOpacity style={[styles.textInput, { marginRight: 5 }]} onPress={() => setShowDatePicker(true)}>
                                <Icon name="date-range" size={24} color="gray" style={styles.Timeicon} />
                                <Text
                                    style={styles.Timeinput}
                                >{dateSelected.toDateString()}</Text>
                            </TouchableOpacity>
                            {showDatePicker && <DatePicker
                                initialDate={dateSelected}
                                setSelectedDate={setDateSelected}
                                setShowDatePicker={setShowDatePicker}
                                mode='date'
                            />}
                        </View>
                        <CheckbocTC
                            placeholder="I accept all Terms & Conditions"
                            setIsChecked={setIsChecked}
                            isChecked={isChecked}
                        />
                        <Button
                            name="I am Ready !"
                        />
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
    signupcontainer: {
        justifyContent: `center`,
        alignItems: `center`
    },
    logoPart: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    title: {
        color: `white`,
        fontSize: 35,
        fontWeight: `600`,
        margin: 10,
        fontFamily: 'serif'
    },
    textInput: {
        flexDirection: 'row',
        alignItems: 'center',
        width: getResponsiveValue(500, screenWidth * 0.8),
        height: getResponsiveValue(70, 50),
        borderWidth: 2,
        borderRadius: 20,
        paddingHorizontal: 10,
        backgroundColor: `white`,
        marginBottom: getResponsiveValue(40, 20),
        color: 'black',
        borderColor: SECONDARY,
    },
    Timeicon: {
        marginRight: 15,
    },
    Timeinput: {
        fontSize: 18,
        color:'gray'
    }
})
export default SignupScreen