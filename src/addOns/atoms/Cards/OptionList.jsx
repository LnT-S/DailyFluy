import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const OptionList = (props) => {

    const {share , download} = props

    return (
        <View style={styles.container}>
            {/**Edit */}
            <TouchableOpacity style={styles.iconContainer}>
                <Icon name="edit" size={28} color="white" />
            </TouchableOpacity>
            {/**Share */}
            <TouchableOpacity style={styles.iconContainer} onPress={share}>
                <Icon name="share" size={28} color="white" />
            </TouchableOpacity>
            {/**Download */}
            <TouchableOpacity style={styles.iconContainer} onPress={download}>
                <Icon name="file-download" size={28} color="white" />
            </TouchableOpacity>
            {/**Save */}
            <TouchableOpacity style={styles.iconContainer}>
                <Icon name="bookmark" size={28} color="white" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    iconContainer: {
        backgroundColor : 'rgba(0, 0, 0, 0.5)',
        padding : 5,
        borderRadius : 20
    },
    container: {
        backgroundColor: 'white',
        width: 50,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        justifyContent: 'space-evenly'
    },
})

export default OptionList;
