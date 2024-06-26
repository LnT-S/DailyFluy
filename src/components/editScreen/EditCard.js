import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, BackHandler, SafeAreaView, Image, ImageBackground, Text, ScrollView, ActivityIndicator, KeyboardAvoidingView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import AuthenticatedLayout from '../../screens/layout/AuthenticatedLayout';
import Swiper from 'react-native-swiper';
import Card0 from '../home/cards/Card0';
import Card1 from '../home/cards/Card1';
import Card2 from '../home/cards/Card2';
import Card3 from '../home/cards/Card3';
import Card4 from '../home/cards/Card4';
import Button from '../../addOns/atoms/Button';
import ColorPickerModal from '../../addOns/atoms/ColorPickerModal';
import CheckbocTC from '../../addOns/atoms/CheckbocT&C';
import Input from '../../addOns/atoms/Input';
import LoadingCard from '../../addOns/atoms/Cards/loadingCard/LoadingCard1';
import AsyncStorage from '@react-native-async-storage/async-storage';


const EditCard = () => {
    const route = useRoute();
    const { image } = route.params;
    const navigation = useNavigation()

    const [index ,setIndex] = useState(0)

    const [colorModal, showColorModal] = useState(false)
    const [color, setColor] = useState('white')
    const [name, setName] = useState('name')
    const [nameColor, setNameColor] = useState('white');
    const [phoneColor, setPhoneColor] = useState('white');
    const [emailColor, setEmailColor] = useState('white');

    const [showPhone, setShowPhone] = useState(true)
    const [showEmail, setShowEmail] = useState(true)
    const [userName, setUserName] = useState('')
    const [userPhone, setUserPhone] = useState('')
    const [userEmail, setUserEmail] = useState('')

    const adjustAll = (color) => {
        setNameColor(color)
        setPhoneColor(color)
        setEmailColor(color)
    }
    const adjustColor = (color) => {
        name.toLowerCase() === 'name' ? setNameColor(color) : name.toLowerCase() === 'phone' ? setPhoneColor(color) : name.toLowerCase() === 'all' ? adjustAll(color) : setEmailColor(color)
    }

    const setDefaultIndex= async ()=>{
        await AsyncStorage.setItem("defaultIndex" , index.toString())
    }

    useEffect(() => {
        const backFuntion = () => {
            navigation.navigate('Home')
            return true
        }
        const backHandler = BackHandler.addEventListener('hardwareBackPress', backFuntion)
        return () => {
            backHandler.remove()
        }
    }, [])

    return (
        <AuthenticatedLayout
            showFooter={false}
            showNotification={false}
            showNEWIcon={false}
            title={"Edit"}
        >
            <ScrollView
                contentContainerStyle={{ flexGrow: 1, }}
                nestedScrollEnabled={true}
                scrollEnabled={true}
                bounces={true}
                style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                        <View style={{ ...styles.container }}>
                            <Swiper style={styles.wrapper}
                                showsButtons={false}
                                index={0}
                                onIndexChanged={(index) => {
                                    console.log('INDEX IS', index);
                                    setIndex(index)
                                }}
                                alwaysBounceHorizontal={true}
                                loop={false}
                                loadMinimalSize={1}
                                loadMinimal={true}
                                loadMinimalLoader=<LoadingCard />
                                MessageQueue={['Hey']}
                                activeDotColor='#C839E4'
                                dotStyle={{ width: 10, height: 10, marginTop: 5 }}
                                activeDotStyle={{ width: 10, height: 10, marginTop: 5 }}
                            >
                                <View style={styles.slide1}>
                                    <Card0
                                        image={image}
                                        editMode={true}
                                        nameColor={nameColor}
                                        phoneColor={phoneColor}
                                        emailColor={emailColor}
                                        showEmail={showEmail}
                                        showPhone={showPhone}
                                        name={userName}
                                        email={userEmail}
                                        phone={userPhone}
                                    />
                                </View>
                                <View style={styles.slide2}>
                                    <Card1
                                    image={image}
                                        editMode={true}
                                        nameColor={nameColor}
                                        phoneColor={phoneColor}
                                        emailColor={emailColor}
                                        showEmail={showEmail}
                                        showPhone={showPhone}
                                        name={userName}
                                        email={userEmail}
                                        phone={userPhone}
                                    />
                                </View>
                                <View style={styles.slide3}>
                                    <Card2
                                    image={image}
                                        editMode={true}
                                        nameColor={nameColor}
                                        phoneColor={phoneColor}
                                        emailColor={emailColor}
                                        showEmail={showEmail}
                                        showPhone={showPhone}
                                        name={userName}
                                        email={userEmail}
                                        phone={userPhone}
                                    />
                                </View>
                                <View style={styles.slide4}>
                                    <Card3
                                    image={image}
                                        editMode={true}
                                        nameColor={nameColor}
                                        phoneColor={phoneColor}
                                        emailColor={emailColor}
                                        showEmail={showEmail}
                                        showPhone={showPhone}
                                        name={userName}
                                        email={userEmail}
                                        phone={userPhone}
                                    />
                                </View>
                                <View style={styles.slide5}>
                                    <Card4
                                    image={image}
                                        editMode={true}
                                        nameColor={nameColor}
                                        phoneColor={phoneColor}
                                        emailColor={emailColor}
                                        showEmail={showEmail}
                                        showPhone={showPhone}
                                        name={userName}
                                        email={userEmail}
                                        phone={userPhone}
                                    />
                                </View>
                            </Swiper>
                        </View>
                        <View>
                            <Button name="Save As Default" onPress={setDefaultIndex}/>
                        </View>
                        <View style={styles.menuPanel}>
                            <View>
                                <ColorPickerModal
                                    visible={colorModal}
                                    onColorChange={adjustColor}
                                    onClose={showColorModal}
                                    defaultColor={name.toLowerCase() === 'name' ? nameColor : name.toLowerCase() === 'phone' ? phoneColor : emailColor}
                                />
                                <Text style={{ paddingLeft: 15, fontSize: 16, fontWeight: '600', color: '#C839E4' }}>Adjust Color</Text>
                                <View style={{ margin: 5, display: 'flex', justifyContent: 'space-evenly', flexDirection: 'row' }}>
                                    <Button name="All" buttonContainerStyles={{ width: 85, padding: 0, height: 40 }} textStyle={{ fontSize: 16 }} onPress={() => { setName('all'); showColorModal(true) }} />
                                    <Button name="Name" buttonContainerStyles={{ width: 85, padding: 0, height: 40 }} textStyle={{ fontSize: 16 }} onPress={() => { setName('name'); showColorModal(true) }} />
                                    <Button name="Phone" buttonContainerStyles={{ width: 70, padding: 0, height: 40 }} textStyle={{ fontSize: 16 }} onPress={() => { setName('phone'); showColorModal(true) }} />
                                    <Button name="Email" buttonContainerStyles={{ width: 70, padding: 0, height: 40 }} textStyle={{ fontSize: 16 }} onPress={() => { setName('email'); showColorModal(true) }} />
                                </View>
                            </View>
                            <Text style={{ paddingLeft: 15, fontSize: 16, fontWeight: '600', color: '#C839E4', marginTop: 10, marginBottom: -7 }}>Adjust Privacy</Text>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                                <CheckbocTC
                                    placeholder={'Show Email'}
                                    isChecked={showEmail}
                                    setIsChecked={setShowEmail}
                                />
                                <CheckbocTC
                                    placeholder={'Show Phone'}
                                    isChecked={showPhone}
                                    setIsChecked={setShowPhone}
                                />
                            </View>
                            <View>
                                <KeyboardAvoidingView
                                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                                    style={{ flex: 1, marginBottom: 30 }}

                                    keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}>
                                    <Text style={{ paddingLeft: 15, fontSize: 16, fontWeight: '600', color: '#C839E4', marginTop: 10, marginBottom: 4 }}>Adjust Name </Text>
                                    <Input
                                        textInputProps={
                                            value = { userName }
                                        }
                                        onChangeText={(v) => setUserName(v)}
                                        placeholder={'Change Name'}
                                        containerStyles={{ marginBottom: 5 }}
                                        length={18}
                                    />
                                    <Text style={{ paddingLeft: 15, fontSize: 16, fontWeight: '600', color: '#C839E4', marginTop: 10, marginBottom: 4 }}>Adjust Phone </Text>
                                    <Input
                                        onChangeText={(v) => setUserPhone(v)}
                                        placeholder={'Change Phone'}
                                        containerStyles={{ marginBottom: 5 }}
                                    />
                                    <Text style={{ paddingLeft: 15, fontSize: 16, fontWeight: '600', color: '#C839E4', marginTop: 10, marginBottom: 4 }}>Adjust Email </Text>
                                    <Input
                                        onChangeText={(v) => setUserEmail(v)}
                                        placeholder={'Change Email'}
                                        containerStyles={{ marginBottom: 5,}}
                                        length={60}
                                    />
                                </KeyboardAvoidingView>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </AuthenticatedLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        // position: 'relative',
        height: 570,
        borderBottomLeftRadius: 100,
        borderBottomRightRadius: 50,
        borderBottomStartRadius: 50,
        borderBottomEndRadius: 50,
        marginBottom: 10,
        backgroundColor: 'rgba(0,0,0,0.05)',
    },
    wrapper: {
        // height: 600
        zIndex: 1,
        // width: '95%',
        position: 'relative',
        // padding: 7
        // top : -25,
        // backgroundColor : 'red'
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'green',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#92BBD9',
    },
    slide4: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#92BBD9',
    },
    slide5: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#92BBD9',
    },
    text: {
        color: 'red',
        fontSize: 30,
        fontWeight: 'bold',
    },
    menuPanel: {
        backgroundColor: 'rgba(0,0,0,0.05)',
        width: '100%',
        margin: 'auto',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 50,
        borderTopStartRadius: 50,
        borderTopEndRadius: 50,
        marginTop: 10,
        padding: 7
    }
})

export default EditCard;
