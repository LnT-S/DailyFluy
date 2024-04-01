import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';

const Template1 = (props) => {
    const {name, nameColor, phone, showPhone, phoneColor, email, showEmail, emailColor , hideProfile} = props
    // const [showPhone , setShowPhoen] = useState(true)
    // const [showEmail , setShowEmail] = useState(true)
    return (
        <ImageBackground
            source={require('../../../../assets/images/Template11.png')}
            resizeMode='contain'
            style={styles.imageHook}
        >

            <View style={styles.dateContainer}>
                <Text style={styles.dateText}>{new Date().toLocaleDateString()}</Text>
            </View>

            <View style={styles.profileImageConatainer}>
                {!hideProfile && <Image
                    source={require('../../../../assets/images/Profile.png')}
                    resizeMode='contain'
                    style={styles.profileImage}
                />}
            </View>
            <View style={styles.nameContainer}>
                <View style={{ ...styles.textContainer, bottom: showEmail && showPhone ? 0 : showEmail || showPhone ? 10 : 15 }}>
                    <View>
                    <Text style={{ ...styles.text, fontSize: showEmail && showPhone ? 14 : showEmail || showPhone ? 16 : 18, color: nameColor ? nameColor : 'white' }}>{name || "Shruti Aman Tiwari"}</Text>
                    </View>
                    {showPhone ? <View>
                        <Text style={{ ...styles.text, color: phoneColor ? phoneColor : 'white' }}>{phone || "+91 9876543210"}</Text>
                    </View> : ''}
                    {showEmail ? <View>
                        <Text style={{ ...styles.text, color: emailColor ? emailColor : 'white' }}>{email || "shrutimishra@gmail.com"}</Text>
                    </View> : ''}
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    imageHook: {
        width: '100%',
        height: '100%',
        margin: 0,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
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
        fontFamily: 'sans-serif'
    },
    profileImageConatainer: {
        zIndex: 3,
        width: 74,
        height: 74,
        position: 'absolute',
        backgroundColor: '#14549A',
        transform: [{ rotate: '45deg' }],
        top: 23,
        left: 29,
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
    nameContainer: {
        // backgroundColor : 'red',
        width: '50%',
        position: 'relative',
        top: -23,
        right: 16
    },
    textContainer: {
        width: '100%',
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'flex-end',
        position : 'relative'
    },
    text: {
        fontSize: 12,
        color: 'white',
        fontFamily : 'sans-serif',
        textAlign : 'center'
    }
})

export default React.memo(Template1);
