import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    TextInput,
    KeyboardAvoidingView,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import React, { useState } from 'react';
import { BLACK, PRIMARY, SECONDARY, WHITE } from '../../styles/colors';
import { getResponsiveValue, screenWidth } from '../../styles/responsive';
import Icon from 'react-native-vector-icons/MaterialIcons';
import global from '../../styles/global';
import AuthenticatedLayout from '../../screens/layout/AuthenticatedLayout';
import Input from '../../addOns/atoms/Input';
import InputBox from '../../addOns/atoms/InputBox';
import Button from '../../addOns/atoms/Button';
const ContactUs = props => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
    });
    const [formErrors, setFormErrors] = useState({});

    return (
        <AuthenticatedLayout title={'Contact Us'} showFooter={false}>
            <View style={{ flex: 1, position: 'relative',}}>
                <TouchableOpacity style={{width : '100%',position :'absolute' , bottom : 7 }}>
                    <Text style={{color : '#6514ED' , fontSize : 16,fontFamily : 'serif' , textAlign : 'center'}}>Make Your Own Mobile Application</Text>
                </TouchableOpacity>
                <View style={styles.inputContainer}>
                    <Text style={styles.text}>Get In Touch</Text>

                    <View style={styles.inputC}>
                        <InputBox
                            placeholder='Enter Your Name'
                        />
                    </View>

                    <View style={{ ...styles.inputC }}>
                        <InputBox
                            placeholder='Enter Phone Number'
                            length={10}
                        />
                    </View>

                    <View style={styles.inputC}>
                        <InputBox placeholder='Enter Email Id'
                        />

                    </View>

                    <View style={styles.inputC}>

                        <TextInput
                            multiline
                            placeholderTextColor="#888888"
                            numberOfLines={5}
                            style={styles.input}
                            placeholder='Enter Your Message'
                        />
                    </View>
                </View>

                <View style={styles.btn}>
                    <Button name='Submit' />
                </View>
            </View>
        </AuthenticatedLayout>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',

    },
    scroll: {
        flex: 1,
        height: "100%",
    },

    status: {
        width: '100%',
        backgroundColor: WHITE,
        height: getResponsiveValue(70, 50),
        flexDirection: 'row',
        zIndex: 2,
        // justifyContent: 'center',
        shadowColor: BLACK,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        elevation: 30,
        shadowOpacity: 1,
        shadowRadius: 10,
    },
    statusT: {
        color: BLACK,
        top: getResponsiveValue(17, 14),
        fontSize: getResponsiveValue(16, 16),
        left: getResponsiveValue(40, 30),
    },
    icon: {
        color: BLACK,
        fontSize: getResponsiveValue(30, 25),
        top: getResponsiveValue(20, 14),
        left: getResponsiveValue(30, 20),
    },
    inputContainer: {
        // height: '90%',
        alignItems: 'center',
        top: getResponsiveValue(40, 30),

        // justifyContent: 'space-around',
    },
    text: {
        fontSize: getResponsiveValue(35, 30),
        color: SECONDARY,
        fontWeight: 'bold',
        marginBottom: "10%",
    },
    input: {
        height: getResponsiveValue(200, 100),
        borderWidth: 1,
        borderRadius: 6,
        // paddingHorizontal: 10,
        // textAlign: "center",
        textAlignVertical: 'top',
        marginBottom: getResponsiveValue(40, 30),
        color: BLACK,
        fontSize: 18,
        width: getResponsiveValue(500, screenWidth * 0.8),
        backgroundColor: 'white',
        paddingLeft: 15
    },
    inputC: {
        marginHorizontal: "20%",
    },
    btn: {
        marginVertical: getResponsiveValue("10%", "15%"),
        justifyContent: "center",
        paddingHorizontal: getResponsiveValue("30%", "20%"),
    },
});

export default ContactUs;
