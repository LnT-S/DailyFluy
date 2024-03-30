import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, BackHandler, SafeAreaView, Image, ImageBackground, Text, ScrollView, ActivityIndicator } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import AuthenticatedLayout from '../../screens/layout/AuthenticatedLayout';
import ViewShot from 'react-native-view-shot';
import RNFS from 'react-native-fs';
import LottieView from 'lottie-react-native';
import Swiper from 'react-native-swiper';

import { getResponsiveValue } from '../../styles/responsive';
import Card0 from '../home/cards/Card0';
import Card1 from '../home/cards/Card1';
import Card2 from '../home/cards/Card2';
import Card3 from '../home/cards/Card3';
import Card4 from '../home/cards/Card4';


const EditCard = () => {
    const route = useRoute();
    const { image } = route.params;
    const navigation = useNavigation()
    const viewShotRef = useRef();

    const [downloading, setDownloading] = useState(false)
    const [saving, setSaving] = useState(false)


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
                contentContainerStyle={{ flex: 1 }}
                nestedScrollEnabled={true}
                scrollEnabled={true}
                bounces={true}
                style={{ flex: 1 }}>        
                <View>
                    <View style={{ ...styles.container }}>
                        <Swiper style={styles.wrapper}
                            showsButtons={false}
                            loadMinimal={false}
                            loadMinimalLoader=<ActivityIndicator />
                            MessageQueue={['Hey']}
                            activeDotColor='#C839E4'
                            dotStyle={{ width: 10, height: 10, marginTop: 5 }}
                            activeDotStyle={{ width: 10, height: 10, marginTop: 5 }}
                        >
                            <View style={styles.slide1}>
                                <Card0
                                    editMode={true}
                                />
                            </View>
                            <View style={styles.slide2}>
                                <Card1
                                    editMode={true}
                                />
                            </View>
                            <View style={styles.slide3}>
                                <Card2
                                    editMode={true}
                                />
                            </View>
                            <View style={styles.slide4}>
                                <Card3
                                    editMode={true}
                                />
                            </View>
                            <View style={styles.slide5}>
                                <Card4
                                    editMode={true}
                                />
                            </View>
                        </Swiper>
                    </View>
                </View>
            </ScrollView>
        </AuthenticatedLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        position: 'relative',
        height: 550
    },
    wrapper: {
        // height: 600
        position: 'relative',
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
})

export default EditCard;
