import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, ScrollView, SafeAreaView, Button, Image} from 'react-native';
import AuthenticatedLayout from '../../screens/layout/AuthenticatedLayout';
import Card from '../../addOns/atoms/Cards/Card';
import Category from '../../addOns/atoms/Category/Category';
import LottieView from 'lottie-react-native';
import { deleteOneStatus, getSavedStatus } from '../../utils/ProfileFunctions';


const HomePage = () => {

    const [imageData, setImageData] = useState([]);

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

    useEffect(()=>{
        console.log('***',imageData)
    },[imageData])

    return (
        <AuthenticatedLayout
            title={'DailyFly'}
            showFooter={false}
            showBackIcon={false}
            leftCenterJsx={leftCenterJsx}
        >
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ height: '8%', width: '100%', display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center',justifyContent : 'center', marginBottom: -5 }}>
                    <Text style={{ fontSize: 22, fontWeight: '900', fontFamily: 'serif' }}>Welcome,</Text>
                    <Text style={{ fontSize: 22, fontWeight: '200', fontFamily: 'serif',position :'relative' }}>Username Surname</Text>
                </View>

                <View style={{ height: '10%' }}>
                    <Category />
                </View>
                <ScrollView style={{ flex: 1, backgroundColor: 'white', paddingVertical: 20 }}
                    nestedScrollEnabled={true}
                    contentContainerStyle={{ flexGrow: 1 }}
                    keyboardShouldPersistTaps="true"
                >
                    {/** Category Component*/}
                    {/**Card Component */}
                    <View style={styles.cardcontainer}>
                        <Card />
                        
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
