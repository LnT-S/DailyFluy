import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, ActivityIndicator } from 'react-native';
import { getResponsiveValue, screenWidth } from '../../styles/responsive';
import { BgColor, SECONDARY } from '../../styles/colors';


const Button = (props) => {
    const {loading} = props
    return (
        <TouchableOpacity style={[styles.buttonContainer ]} {...props}>
            <View style={{...styles.button , width : (loading===undefined || loading===false)?'':150 , ...props.buttonContainerStyles }} >
                {(loading===undefined || loading===false) ? <Text style={{...styles.text , ...props.textStyle}}>{props.name}</Text> : <ActivityIndicator size={30} style={styles.text}/>}
            </View>
        </TouchableOpacity>
    );
}

export default Button;

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
        margin:2
    },
    iconWrapper: {
        paddingHorizontal: 10,
    },
    text: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        paddingHorizontal: getResponsiveValue("5%", "8%"),
        letterSpacing: 1,
        fontWeight: `500`

    },
    button: {
        height: getResponsiveValue(60, screenWidth * 0.12),
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        // width: "100%",
        backgroundColor: SECONDARY
    },
});