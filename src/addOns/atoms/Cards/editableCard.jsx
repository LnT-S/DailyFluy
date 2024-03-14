import React, { useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Image, ImageBackground, Pressable, Animated, Text } from 'react-native';
import OptionList from './OptionList';
import ColorPickerModal from '../ColorPickerModal';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { getResponsiveValue } from '../../../styles/responsive';
import { WHITE } from '../../../styles/colors';

const EditableCard = () => {

    const [color, setColor] = useState('blue');
    const [showColorPicker, setShowColorPicker] = useState(false);
    const [likeScale] = useState(new Animated.Value(1));
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);

    const handleInnerPress = () => {
        console.log('Inner box pressed!');
    };

    const handleOuterPress = () => {
        console.log('Outer box pressed!');
        setShowColorPicker(true);
    };

    const handleColorChange = (newColor) => {
        setColor(newColor);
        console.log('set color', color);
    };

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

    return (
        <TouchableWithoutFeedback onPress={handleOuterPress}>


            <View style={[styles.maincontainer, { backgroundColor: color }]}>
                {showColorPicker && (
                    <ColorPickerModal
                        visible={showColorPicker}
                        onClose={() => setShowColorPicker(false)}
                        onColorChange={handleColorChange}
                    />
                )}
                {/**Image */}
                <ImageBackground
                    source={require('../../../assets/images/DailyFly.jpg')}
                    style={styles.imagecontainer}
                >
                    {/**Icon */}
                    <View>
                        <Image
                            source={require('../../../assets/images/DailyFlyLogo.png')}
                            style={{ height: 70, width: 70, margin: 3 }}
                        />
                    </View>
                    {/**More option list */}
                    <View style={styles.optionContainer}>
                        <OptionList />
                    </View>
                    {/**Like */}
                    <Pressable onPress={handleLike} style={styles.likeContainer}>
                        <Animated.View
                            style={[styles.likeButton, { transform: [{ scale: likeScale }] }]}>
                            <Icon
                                name={liked ? 'favorite' : 'favorite-border'}
                                style={[styles.icon1, liked && styles.likedIcon]}
                            />
                        </Animated.View>
                    </Pressable>
                    {/**Date */}
                    <View style={styles.dateContainer}>
                        <Text style={styles.date}>13/03/2024</Text>
                    </View>
                </ImageBackground>
                {/**Details */}
                <View style={styles.detailContainer}>
                    <View>
                        <Image
                            source={require('../../../assets/images/DailyFlyLogo.png')}
                            style={{ height: 85, width: 85, margin: 3 }}
                        />
                    </View>
                    <View style={styles.textContainer}>
                        <View>
                            <Text style={styles.text}>Shruti Mishra</Text>
                        </View>
                        <View>
                            <Text style={styles.text}>+91 8175973674</Text>
                        </View>
                        <View>
                            <Text style={styles.text}>shrutimishra@gmail.com</Text>
                        </View>
                    </View>
                </View>
            </View  >
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    maincontainer: {
        height: 470,
        width: 380,
        padding: 15,
    },
    imagecontainer: {
        height: 350,
        width: '100%',
        backgroundColor: 'black',
        position: 'relative'
    },
    optionContainer: {
        position: 'absolute',
        right: -7,
        top: 70
    },
    likedIcon: {
        color: 'red', // Customize the color when liked
    },
    icon1: {
        color: 'red',
        marginLeft: getResponsiveValue(10, 0),
        fontSize: getResponsiveValue(100, 50),
    },
    likeContainer: {
        position: 'absolute',
        left: 3,
        bottom: 3
    },
    date: {
        fontSize: 16,
        color: WHITE,
        fontWeight: 'bold',
        textShadowColor: "#0000006e",
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: getResponsiveValue(4, 2),
        left: getResponsiveValue('3%', "2%"),
    },
    dateContainer: {
        position: 'absolute',
        right: 8,
        bottom: 10,
        width: '30%',
        backgroundColor: "black",
        borderRadius: getResponsiveValue(20, 10),
        padding: 4
    },
    detailContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textContainer: {
        width: '60%'
    },
    text: {
        fontSize: 18,
        color: 'white'
    }
})

export default EditableCard;
