import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, BackHandler, SafeAreaView, Image, ImageBackground, Text, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import AuthenticatedLayout from '../../screens/layout/AuthenticatedLayout';
import ViewShot from 'react-native-view-shot';
import RNFS from 'react-native-fs';
import LottieView from 'lottie-react-native';

import { getResponsiveValue } from '../../styles/responsive';
import Template1 from '../../addOns/atoms/Cards/Template/template1';
import Template0 from '../../addOns/atoms/Cards/Template/template0';
import Template2 from '../../addOns/atoms/Cards/Template/template2';
import Template3 from '../../addOns/atoms/Cards/Template/template3';
import Template4 from '../../addOns/atoms/Cards/Template/template4';
import Template5 from '../../addOns/atoms/Cards/Template/template5';


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
            contentContainerStyle={{flex : 1}}
            nestedScrollEnabled={false}
            scrollEnabled={true}
            style={{flex :  1}}>
                <View style={{ ...styles.container, width: '100%', marginTop: 25 }}>
                    <ViewShot style={styles.container} ref={viewShotRef} options={{ format: 'jpg', fileName: 'DailyFly Status', quality: 1 }}>
                        <View
                            style={[styles.maincontainer, { backgroundColor: '#14549A' }]}
                            aria-busy={true}
                        >
                            {/*Main Image COntainer */}
                            <View style={styles.mainImageContainer}>
                                {!downloading && !saving && <Image
                                    source={image}
                                    style={styles.mainImage}
                                    resizeMode='cover'
                                />}
                                {!saving && <View style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                                    <LottieView
                                        style={{ flex: 1, height: 200, width: 200 }}
                                        source={require('../../assets/animation/downlaod.json')}
                                        autoPlay={downloading}
                                        loop={false}
                                        speed={2}
                                    />
                                    {downloading && <View style={{ position: 'relative', bottom: 70 }}>
                                        <Text style={{ fontSize: 18, color: 'white' }}>Saved To Downloads ...</Text>
                                    </View>}
                                </View>}
                                {!downloading && <View style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                                    <LottieView
                                        style={{ flex: 1, height: 200, width: 200 }}
                                        source={require('../../assets/animation/save.json')}
                                        autoPlay={saving}
                                        loop={false}
                                        speed={2}
                                    />
                                    {saving && <View style={{ position: 'relative', bottom: 70 }}>
                                        <Text style={{ fontSize: 18, color: 'white' }}>Saved in App </Text>
                                    </View>}
                                </View>}
                            </View>


                            {/*Bottom Template Attacher */}
                            <View style={styles.bottomHook}>
                                <Template2 />
                            </View>
                        </View >
                    </ViewShot>
                </View>
            </ScrollView>
        </AuthenticatedLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 460,
        width: '90%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        // backgroundColor : 'red'
    },
    maincontainer: {
        height: 460,
        width: '100%',
        position: 'relative',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    bottomHook: {
        zIndex: 2,
        position: 'absolute',
        width: '100%',
        margin: 0,
        height: '30%',
        bottom: 0,
        left: 0,

    },
    imageHook: {
        width: '100%',
        height: '100%',
        margin: 0,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    mainImageContainer: {
        // marginTop : 10,
        padding: 10,
        // backgroundColor : 'red',
        width: '100%',
        height: 410
    },
    mainImage: {
        width: '100%',
        height: '100%',
        margin: 0
    },
    optionContainer: {
        position: 'absolute',
        right: 5,
        top: 70,
        zIndex: 5
    },
    nameContainer: {
        // backgroundColor : 'red',
        width: '50%',
        position: 'relative',
        top: -15,
        right: 10
    },
    profileImageConatainer: {
        zIndex: 3,
        width: 74,
        height: 74,
        position: 'absolute',
        backgroundColor: '#14549A',
        transform: [{ rotate: '45deg' }],
        top: 21,
        left: 29.5,
        borderRadius: 10,
        // overflow: 'hidden'
    },
    profileImage: {
        width: '95%',
        borderRadius: 50,
        height: '95%',
        transform: [{ rotate: '-45deg' }],
        // backgroundColor : 'red',
        position: 'relative',
        top: 2,
        left: 2

    },
    likeContainer: {
        // backgroundColor: 'red',
        position: 'absolute',
        left: 5,
        bottom: 7,
        zIndex: 4
    },
    likedIcon: {
        color: '#C70001', // Customize the color when liked
    },
    icon1: {
        color: '#C70001',
        marginLeft: getResponsiveValue(10, 0),
        fontSize: 30,
    },
    dateContainer: {
        padding: 5,
        borderRadius: 5,
        position: 'absolute',
        top: 0,
        right: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.9)'
    },
    dateText: {
        color: 'white',
        fontFamily: 'serif'
    }
})

export default EditCard;
