
import React, { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { getResponsiveValue, screenWidth } from '../../styles/responsive';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PRIMARY, SECONDARY } from "../../styles/colors";

const InputBox = (props) => {

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder={props.placeholder}
                placeholderTextColor='gray'
            // Other TextInput props go here
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: getResponsiveValue(500, screenWidth * 0.8),
        height: getResponsiveValue(70, 50),
        borderWidth: 1,
        paddingHorizontal: 10,
        backgroundColor: `white`,
        marginBottom: getResponsiveValue(40, 20),
        color: 'black',
        
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        fontSize:18,
        color:'black'
    },
});

export default InputBox;