import React, { useState } from 'react';
import {View, StyleSheet, Text , TouchableOpacity} from 'react-native';

const CategoryButton = () => {

    const [text , setText] = useState('Good Morning')

    return (
        <TouchableOpacity style={[styles.container , { width: Math.max(60, text.length * 10) }]}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container : {
        marginHorizontal : 5,
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        padding : 5,
        // width : 50,
        height : 40,
        backgroundColor : '#6327CD',
        borderRadius : 5
        // borderBottomStartRadius : 10,
        // borderTopEndRadius : 15
    },
    text : {
        fontSize : 14,
        textAlign : 'center',
        color : 'white',
        fontFamily : 'sans-serif'
    }
})

export default CategoryButton;
