import React, { useRef, useState } from 'react';
import { View, StyleSheet, Image, ImageBackground, Pressable, Animated, Text } from 'react-native';

import Share from 'react-native-share'
import ViewShot from 'react-native-view-shot';
import RNFS from 'react-native-fs'

import OptionList from './OptionList';
import NameContainer from './NameContainer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { getResponsiveValue } from '../../../styles/responsive';

const Card = () => {

    const viewShotRef = useRef();

    const [likeScale] = useState(new Animated.Value(1));
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);


    const handleLike = () => {
        Animated.sequence([
            Animated.timing(likeScale, {
                toValue: 1.2,
                duration: 100,
                useNativeDriver: true,
            }),
            Animated.timing(likeScale, {
                toValue: 1,
                duration: 100,
                useNativeDriver: true,
            }),
        ]).start();
        if (liked) {
            setLikeCount(likeCount - 1);
        } else {
            setLikeCount(likeCount + 1);

        }
        setLiked(!liked);
    };

    const captureAndShare = async () => {
        try {
            const uri = await viewShotRef.current.capture();
            const shareOptions = {
                title: 'DAILY FLY',
                message: 'Share the Daily Fly Status ...',
                url: uri,
            };
            let info = await Share.open(shareOptions);
            return info
        } catch (error) {
            console.log('ERROR SHARING:', error.message);
        }
    };
    const captureAndDownload = async () => {
        try {
            const uri = await viewShotRef.current.capture();
            console.log('URI ' , uri)
            const dir = RNFS.DownloadDirectoryPath;
            const fileName = `DailyFly Status ${new Date().getTime()}`;
            const filePath = `${dir}/${fileName}.jpg`;
            let info = await RNFS.copyFile(uri, filePath);
            console.log("STATUS DOWNLOADED TO ", filePath);
            return info
        } catch (error) {
            console.log('ERROR DOWNLOADING THE STATUS ', error)
        }
    }

    return (
        <View style={styles.maincontainer}>
            <View style={styles.optionContainer}>
                <OptionList
                    share={() => {
                        captureAndShare()
                        .then(info => console.log('SHARED ',info))
                        .catch(err => console.log('ERROR IN SHARING', err))
                    }}
                    download={() => {
                        captureAndDownload()
                        .then(info=> console.log('DOWNLOADED ',info))
                        .catch(err => console.log('ERROR IN DOWNLOADING', err))
                    }}
                />
            </View>

            <Pressable onPress={handleLike} style={styles.likeContainer}>
                <Animated.View
                    style={[styles.likeButton, { transform: [{ scale: likeScale }] }]}>
                    <Icon
                        name={liked ? 'favorite' : 'favorite-border'}
                        style={[styles.icon1, liked && styles.likedIcon]}
                    />
                </Animated.View>
            </Pressable>
            <ViewShot ref={viewShotRef} options={{ format: 'jpg', fileName: 'DailyFly Status', quality: 1 }}>
                <View
                    style={[styles.maincontainer, { backgroundColor: '#14549A' }]}
                    aria-busy={true}
                >
                    {/*Main Image COntainer */}
                    <View style={styles.mainImageContainer}>
                        <Image
                            source={require('../../../assets/images/dummyImage.png')}
                            style={styles.mainImage}
                            resizeMode='contain'
                        />
                    </View>


                    {/*Bottom Template Attacher */}
                    <View style={styles.bottomHook}>
                        <ImageBackground
                            source={require('../../../assets/images/Template11.png')}
                            resizeMode='contain'
                            style={styles.imageHook}
                        >

                            <View style={styles.dateContainer}>
                                <Text style={styles.dateText}>{new Date().toDateString()}</Text>
                            </View>

                            <View style={styles.profileImageConatainer}>
                                <Image
                                    source={require('../../../assets/images/logowithoutname.png')}
                                    resizeMode='contain'
                                    style={styles.profileImage}
                                />
                            </View>
                            <View style={styles.nameContainer}>
                                <NameContainer />
                            </View>
                        </ImageBackground>
                    </View>
                </View >
            </ViewShot>
        </View>
    );
}

const styles = StyleSheet.create({
    maincontainer: {
        height: 460,
        width: 380,
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
        bottom: -5,
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
        width: '95%',
        height: 400
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
        // backgroundColor : '#14549A',
        transform: [{ rotate: '45deg' }],
        top: 21,
        left: 30.2,
        borderRadius: 10,
        overflow: 'hidden'
    },
    profileImage: {
        width: '95%',
        height: '95%',
        transform: [{ rotate: '-45deg' }],
        position: 'absolute',
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
        fontSize: 40,
    },
    dateContainer: {
        position: 'absolute',
        top: 10,
        right: 15
    },
    dateText: {
        color: 'white',
        fontFamily: 'cursive'
    }
})

export default Card;
