import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, ScrollView, SafeAreaView, Button, Image, RefreshControl} from 'react-native';
import AuthenticatedLayout from '../../screens/layout/AuthenticatedLayout';
import Card from '../../addOns/atoms/Cards/Card';
import Category from '../../addOns/atoms/Category/Category';
import LottieView from 'lottie-react-native';
import { deleteOneStatus, getSavedStatus } from '../../utils/ProfileFunctions';
import WallpaperCard0 from './Wallpapercards/WallpaperCard0';
import WallpaperCard1 from './Wallpapercards/WallpaperCard1';
import WallpaperCard2 from './Wallpapercards/WallpaperCard2';
import WallpaperCard3 from './Wallpapercards/WallpaperCard3';
import WallpaperCard4 from './Wallpapercards/WallpaperCard4';
import LoadingCard0 from '../../addOns/atoms/Cards/loadingCard/LoadingCard0';
import LoadingCard4 from '../../addOns/atoms/Cards/loadingCard/LoadingCard4';
import LoadingCard3 from '../../addOns/atoms/Cards/loadingCard/LoadingCard3';
import LoadingCard2 from '../../addOns/atoms/Cards/loadingCard/LoadingCard2';
import LoadingCard1 from '../../addOns/atoms/Cards/loadingCard/LoadingCard1';
import AsyncStorage from '@react-native-async-storage/async-storage';


const WallpaperPage = () => {

    const [imageData, setImageData] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [card, setCard] = useState(<WallpaperCard0 />)
    const [loadingCard, setLoadingCard] = useState(<LoadingCard0 />)
  
    leftCenterJsx = (<View style={{ height: 40, width: 40, position: 'relative', left: 14, top: -7 }}><Image resizeMode='contain' source={require('../../assets/images/logowithoutname.png')} style={{ height: '100%', width: '100%' }} /></View>)

    const savedAS = async()=>{
        // await deleteOneStatus(0)
        getSavedStatus().then(saved =>{
            console.log('SAVED  ',saved)
            setImageData(saved);
        }).catch(err=>{
            console.log(err)
        })
    }
    const getDefaultCard = async () => {
        let index = await AsyncStorage.getItem('defaultWIndex')
        console.log('INDEX FETCHD ', index)
        switch (index) {
            case '0':
                setLoadingCard(<LoadingCard0 />)
                setCard(<WallpaperCard0 />)
                return
            case '1':
                setLoadingCard(<LoadingCard1 />)
                setCard(<WallpaperCard1 />)
                return
            case '2':
                setLoadingCard(<LoadingCard2 />)
                setCard(<WallpaperCard2 />)
                return
            case '3':
                setLoadingCard(<LoadingCard3 />)
                setCard(<WallpaperCard3 />)
                return
            case '4':
                setLoadingCard(<LoadingCard4 />)
                setCard(<WallpaperCard4 />)
                return
            default:
                setLoadingCard(<LoadingCard0 />)
                setCard(<WallpaperCard0 />)
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

   
    useEffect(() => {
        getDefaultCard().then().catch(err => console.log(err))
    }, [])

    return (
        <AuthenticatedLayout
            title={'DailyFly'}
            showFooter={false}
            showBackIcon={false}
            showNEWIcon={false}
            leftCenterJsx={leftCenterJsx}
        >
            <SafeAreaView style={{ flex: 1 }}>
               
                <ScrollView style={{ flex: 1, backgroundColor: 'white', paddingVertical: 20 }}
                    nestedScrollEnabled={true}
                    contentContainerStyle={{ flexGrow: 1 }}
                    keyboardShouldPersistTaps="true"
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
                       {card}
                       {card}
                       {card}
                       {card}
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

export default WallpaperPage;
