
import React, { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { getResponsiveValue, screenWidth } from '../../styles/responsive';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { BgColor } from "../../styles/colors";

const Input = (props) => {
    const {outerStyles} = props

    return (
            <TextInput
                style={{...styles.inputContainer , ...props.containerStyles}}
                placeholder={props.placeholder}
                onChangeText={(v)=>{props.onChangeText(v)}}
                placeholderTextColor='gray'
                maxLength={props.length || 15}
                
                {...props.textInputProps}
            // Other TextInput props go here
            />
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: getResponsiveValue(70, 50),
        borderRadius: 20,
        paddingHorizontal: 10,
        backgroundColor: `white`,
        marginBottom: getResponsiveValue(40, 20),
        borderColor: '#6514ED',//'#C839E4'
        borderWidth: 2,
        color : 'gray',
        fontSize : 18,
        fontWeight : '400'
    },
    input: {
        borderWidth: 2,
        borderColor: '#6514ED',//'#C839E4'
        fontSize:18,
        color: 'gray',
        width: getResponsiveValue(500, screenWidth * 0.8),
        paddingHorizontal: 10,
        backgroundColor: `white`,
    },
});

export default Input;