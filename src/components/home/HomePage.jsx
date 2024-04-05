import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, ScrollView, SafeAreaView, Button, Image, RefreshControl } from 'react-native';
import AuthenticatedLayout from '../../screens/layout/AuthenticatedLayout';
import Card from '../../addOns/atoms/Cards/Card';
import Category from '../../addOns/atoms/Category/Category';
import LottieView from 'lottie-react-native';
import { deleteOneStatus, getSavedStatus } from '../../utils/ProfileFunctions';
import Card0 from './cards/Card0';
import Card1 from './cards/Card1';
import Card2 from './cards/Card2';
import Card3 from './cards/Card3';
import Card4 from './cards/Card4';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadingCard0 from '../../addOns/atoms/Cards/loadingCard/LoadingCard0';
import LoadingCard1 from '../../addOns/atoms/Cards/loadingCard/LoadingCard1';
import LoadingCard2 from '../../addOns/atoms/Cards/loadingCard/LoadingCard2';
import LoadingCard3 from '../../addOns/atoms/Cards/loadingCard/LoadingCard3';
import LoadingCard4 from '../../addOns/atoms/Cards/loadingCard/LoadingCard4';
import BCard0 from './birthdayCard/BCard0';


const HomePage = () => {

    const [loading, setLoading] = useState(true)
    const [refreshing, setRefreshing] = useState(false);

    const [defaultIndex, setDefaultIndex] = useState(0)
    const [card, setCard] = useState(<Card0 />)
    const [loadingCard, setLoadingCard] = useState(<LoadingCard0 />)


    const getDefaultCard = async () => {
        let index = await AsyncStorage.getItem('defaultIndex')
        console.log('INDEX FETCHD ', index)
        switch (index) {
            case '0':
                setLoadingCard(<LoadingCard0 />)
                setCard(<Card0 />)
                return
            case '1':
                setLoadingCard(<LoadingCard1 />)
                setCard(<Card1 />)
                return
            case '2':
                setLoadingCard(<LoadingCard2 />)
                setCard(<Card2 />)
                return
            case '3':
                setLoadingCard(<LoadingCard3 />)
                setCard(<Card3 />)
                return
            case '4':
                setLoadingCard(<LoadingCard4 />)
                setCard(<Card4 />)
                return
            default:
                setLoadingCard(<LoadingCard0 />)
                setCard(<Card0 />)
                return
        }
    }

    const onRefresh = () => {
        // Set refreshing state to true
        setRefreshing(true);
        // Perform your data refresh operation here
        getDefaultCard().then().catch(err => console.log(err))
        // Simulate a delay
        setRefreshing(false);
        // setTimeout(() => {
        //     // After data refresh completes, set refreshing state to false
        // }, 2000); // Simulating a delay of 2 seconds
    };

    leftCenterJsx = (<View style={{ height: 40, width: 40, position: 'relative', left: 14, top: -7 }}><Image resizeMode='contain' source={require('../../assets/images/logowithoutname.png')} style={{ height: '100%', width: '100%' }} /></View>)

    useEffect(() => {
        getDefaultCard().then().catch(err => console.log(err))
    }, [])

    return (
        <AuthenticatedLayout
            title={'DailyFly'}
            showFooter={false}
            showBackIcon={false}
            leftCenterJsx={leftCenterJsx}
        >
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ height: '8%', width: '100%', display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center', justifyContent: 'center', marginBottom: -5 }}>
                    <Text style={{ fontSize: 22, fontWeight: '900', fontFamily: 'sans-serif', color: 'black' }}>Welcome,</Text>
                    <Text style={{ fontSize: 22, fontWeight: '200', fontFamily: 'sans-serif', position: 'relative', color: 'black' }}>Username Surname</Text>
                </View>

                <View style={{ height: '10%' }}>
                    <Category />
                </View>
                <ScrollView style={{ flex: 1, backgroundColor: 'white', paddingVertical: 20 }}
                    nestedScrollEnabled={true}
                    contentContainerStyle={{ flexGrow: 1 }}
                    keyboardShouldPersistTaps="true"
                    scrollsToTop={true}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }
                >
                    {/** Category Component*/}
                    {/**Card Component */}
                    <View style={styles.cardcontainer}>
                    <BCard0 />
                        {loadingCard}
                        {card}
                        {loadingCard}
                        {card}
                        {loadingCard}
                        {card}
                    </View>
                </ScrollView>
            </SafeAreaView>
        </AuthenticatedLayout>
    );
}

const styles = StyleSheet.create({
    cardcontainer: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15,
        marginBottom: 40
    }
})

export default HomePage;
