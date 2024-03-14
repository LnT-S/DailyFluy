import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const OptionList = () => {
    return (
        <View style={styles.container}>
            {/**Edit */}
            <View style={styles.iconContainer}>
            <Icon name="edit" size={30} color="white" />
            </View>
            {/**Share */}
            <View>
            <Icon name="share" size={30} color="white" />
            </View>
            {/**Download */}
            <View>
            <Icon name="file-download" size={30} color="white" />
            </View>
            {/**Save */}
            <View>
            <Icon name="bookmark" size={30} color="white" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        width: 50,
        height: 200,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: 'red',
        justifyContent: 'space-evenly'
    },
})

export default OptionList;
