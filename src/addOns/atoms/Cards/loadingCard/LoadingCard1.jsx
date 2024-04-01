import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Image, Animated, Pressable, Text } from 'react-native';
import OptionList from '../OptionList';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { getResponsiveValue } from '../../../../styles/responsive';
import Template1 from '../Template/template1';

const LoadingCard1 = () => {
    const [likeScale] = useState(new Animated.Value(1));
    const [liked, setLiked] = useState(false);
    const translateX = useRef(new Animated.Value(0)).current;
    const scaleValue = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        const moveAnimation = Animated.timing(translateX, {
          toValue: 900, // Destination position
          duration: 1500, // Duration of the animation in milliseconds
          useNativeDriver: true, // Enable native driver for performance
        });
    
        const scaleUpAnimation = Animated.timing(scaleValue, {
          toValue: 1.7, // Scale up by a factor of 2
          duration: 1000, // Duration of the animation in milliseconds
          useNativeDriver: true,
        });
    
        const scaleDownAnimation = Animated.timing(scaleValue, {
          toValue: 1, // Scale down to the original size
          duration: 1000, // Duration of the animation in milliseconds
          useNativeDriver: true,
        });
    
        const parallelAnimation = Animated.parallel([moveAnimation, scaleUpAnimation]);
    
        const sequenceAnimation = Animated.sequence([
          parallelAnimation,
          scaleDownAnimation,
          Animated.timing(translateX, {
            toValue: 0, // Back to initial position
            duration: 0, // Duration set to 0 for instant reset
            useNativeDriver: true,
          }),
        ]);
    
        Animated.loop(sequenceAnimation).start(); // Start the animation
      }, []);

    return (
        <View style={styles.container}>
            <Animated.View
                style={[
                    styles.box,
                    {
                        transform: [{ translateX  : translateX},{rotate : '45deg'}], // Apply translation to the X axis
                    },
                ]}
            />
            <View style={styles.optionContainer}>
                <OptionList
                    edit={() => { }}
                    save={() => { }}
                    share={() => { }}
                    download={() => { }}
                />
            </View>

            <Pressable style={styles.likeContainer}>
                <Animated.View
                    style={[styles.likeButton, { transform: [{ scale: likeScale }] }]}>
                    <Icon
                        name={liked ? 'favorite' : 'favorite-border'}
                        style={[styles.icon1, liked && styles.likedIcon]}
                    />
                </Animated.View>
            </Pressable>
            <View
                style={[styles.maincontainer, { backgroundColor: '#14549A' }]}
                aria-busy={true}>
                {/*Main Image COntainer */}
                <View style={styles.mainImageContainer}>
                    <Animated.Image
                        source={require('../../../../assets/images/logowithoutname.png')}
                        style={[styles.mainImage,{transform: [{ scale: scaleValue }],}]}
                        resizeMode='contain'
                    />
                </View>
            </View >
            <View style={styles.bottomHook}>
                <Template1
                    hideProfile={true}
                    showPhone={true}
                    showEmail={true}
                    name={'Username Surname'}
                    phone={'+91 9638527410'}
                    email={'user@dailyfly.email'}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 460,
        width: '90%',
        position: 'relative',
        // marginBottom : 15,
        overflow : 'hidden'
    },
    box: {
        width: 5,
        height: 900,
        backgroundColor: 'rgba(255,255,255,0.4)',
        position: 'absolute',
        left : -150,
        zIndex : 1,
        top : -300,
        shadowColor : 'white',
        shadowOpacity : 0.5,
        shadowOffset : 15,
        shadowRadius : 50
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
        bottom: -5,
        left: 0,

    },
    mainImageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop : 10,
        padding: 10,
        // backgroundColor : 'red',
        width: '100%',
        height: 410
    },
    mainImage: {
        width: '30%',
        height: '30%',
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

export default LoadingCard1;
