import React, { useRef, useState } from 'react';
import { View, StyleSheet, Image, ImageBackground, Pressable, Animated, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {launchImageLibrary} from 'react-native-image-picker';
import {openCropper} from 'react-native-image-crop-picker';
import Share from 'react-native-share'
import ViewShot from 'react-native-view-shot';
import RNFS from 'react-native-fs';
import LottieView from 'lottie-react-native';
import image from '../../../assets/images/Wallpaper.jpeg'

import OptionList from '../../../addOns/atoms/Cards/OptionList';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { getResponsiveValue } from '../../../styles/responsive';
import { getSavedStatus, saveSavedStatus } from '../../../utils/ProfileFunctions';

import Template0 from '../../../addOns/atoms/Cards/Template/template0';
import DraggableText from '../../../adOns/atoms/DraggableText';


const WallpaperCard0 = (props) => {

    const { editMode , uploadImage} = props

    const navigation = useNavigation()
    const viewShotRef = useRef();
    const [likeScale] = useState(new Animated.Value(1));
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);
    const [downloading, setDownloading] = useState(false)
    const [saving, setSaving] = useState(false)
    const [selectedImage, setSelectedImage] = useState(image);

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
    const captureAndSave = async () => {
        try {
            const uri = await viewShotRef.current.capture();
            await saveSavedStatus(uri);
            setSaving(true)
        } catch (error) {
            console.log('ERROR SAVING:', error.message);
        }
    }
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
            console.log('URI ', uri)
            const dir = RNFS.DownloadDirectoryPath;
            const fileName = `DailyFly Status ${new Date().getTime()}`;
            const filePath = `${dir}/${fileName}.jpg`;
            let info = await RNFS.copyFile(uri, filePath);
            console.log("STATUS DOWNLOADED TO ", filePath);
            console.log(props.dragName)
            setDownloading(true)
            return info
        } catch (error) {
            console.log('ERROR DOWNLOADING THE STATUS ', error)
        }
    }
    const showDownloadAnimation = () => {
        setTimeout(() => { setDownloading(false) }, 1000)
    }
    const showsaveAnimation = () => {
        setTimeout(() => { setSaving(false) }, 1000)
    }
   
  const selectImage = async () => {
    try{
        const options = {
          mediaType: 'photo',
          maxWidth: 500,
          maxHeight: 500,
          quality: 1,
          includeBase64: false,
        };
    
        launchImageLibrary(options, async response => {
          if (response.assets && response.assets.length > 0) {
            const selectedImage = response.assets[0];
    
            try {
              const croppedImage = await openCropper({
                path: selectedImage.uri,
                width: 590,
                height: 610,
              });
    
              setSelectedImage({uri: croppedImage.path});
            } catch (error) {
              console.log('Error cropping image:', error);
            }
          }
        });
    }
    catch (error) {
        console.log('ERROR UPLOADING THE IMAGE ', error)
    }
  };

    return (
        <View style={styles.container}>
            <View style={styles.optionContainer}>
                <OptionList
                    editMode={editMode}
                    uploadImage={uploadImage}
                    edit={() => {
                        navigation.navigate('EditWallpaperCard', { image })
                    }}
                    upload={() => {
                        selectImage()
                        .then(info => { console.log('Upload ', info);})
                        .catch(err => console.log('ERROR IN Upload', err))
                    }}
                    save={() => {
                        captureAndSave()
                            .then(info => { console.log('SAVED ', info); showsaveAnimation() })
                            .catch(err => console.log('ERROR IN SAVED', err))
                    }}
                    share={() => {
                        captureAndShare()
                            .then(info => console.log('SHARED ', info))
                            .catch(err => console.log('ERROR IN SHARING', err))
                    }}
                    download={() => {
                        captureAndDownload()
                            .then(info => { console.log('DOWNLOADED ', info); showDownloadAnimation() })
                            .catch(err => console.log('ERROR IN DOWNLOADING', err))
                    }}
                />
            </View>

            {!editMode && <Pressable onPress={handleLike} style={styles.likeContainer}>
                <Animated.View
                    style={[styles.likeButton, { transform: [{ scale: likeScale }] }]}>
                    <Icon
                        name={liked ? 'favorite' : 'favorite-border'}
                        style={[styles.icon1, liked && styles.likedIcon]}
                    />
                </Animated.View>
            </Pressable>}
            <ViewShot ref={viewShotRef} options={{ format: 'jpg', fileName: 'DailyFly Status', quality: 1 }}>
                <ImageBackground
                    source={require('../../../assets/images/background1.png')}
                    style={[styles.maincontainer, { backgroundColor: '#14549A' }]}
                    aria-busy={true}
                >
                    {/*Main Image COntainer */}
                    <View style={styles.mainImageContainer}>
                        {!downloading && !saving && <Image
                            source={selectedImage}
                            style={styles.mainImage}
                            resizeMode='cover'
                        />}
                        {!downloading && !saving && <DraggableText text={props.dragName!== undefined ? props.dragName : 'Username Surname'} textColor={props.dragNameColor} />}
                        {!saving && <View style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                            <LottieView
                                style={{ flex: 1, height: 200, width: 200 }}
                                source={require('../../../assets/animation/downlaod.json')}
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
                                source={require('../../../assets/animation/save.json')}
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
                        <Template0
                            nameColor={props.nameColor}
                            phoneColor={props.phoneColor}
                            emailColor={props.emailColor}
                            showPhone={props.showPhone !== undefined ? props.showPhone : true}
                            showEmail={props.showEmail !== undefined ? props.showEmail : true}
                            name={props.name!== '' ? props.name : 'Username Surname'}
                            phone={props.phone!== '' ? props.phone : '+91 9638527410'}
                            email={props.email!== '' ? props.email : 'user@dailyfly.email'}
                        />
                    </View>
                </ImageBackground >
            </ViewShot>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 460,
        width: '90%',
        position: 'relative',
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
        height: '32.5%',
        bottom: -8,
        left: 0,

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

})

export default WallpaperCard0;
