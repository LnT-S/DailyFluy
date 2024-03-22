import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const NameContainer = (props) => {

    const {name , phone , email} = props

    const [showPhone , setShowPhoen] = useState(true)
    const [showEmail , setShowEmail] = useState(true)

    return (
        <View style={{...styles.textContainer , bottom : showEmail && showPhone ? 0 : showEmail || showPhone ? 10: 15}}>
            <View>
                <Text style={{...styles.text , fontSize : showEmail && showPhone ? 14 : showEmail || showPhone ? 16: 18 }}>{name || "Shruti Aman Tiwari"}</Text>
            </View>
            {showPhone ? <View>
                <Text style={styles.text}>{name || "+91 9876543210"}</Text>
            </View> : ''}
            {showEmail ? <View>
                <Text style={styles.text}>{email || "shrutimishra@gmail.com"}</Text>
            </View> : ''}
        </View>
    );
}

const styles = StyleSheet.create({
    textContainer: {
        width: '100%',
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        position : 'relative'
    },
    text: {
        fontSize: 14,
        color: 'white',
        fontFamily : 'serif',
        textAlign : 'center'
    }
})

export default NameContainer;
