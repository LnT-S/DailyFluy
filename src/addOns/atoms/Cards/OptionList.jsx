import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const OptionList = (props) => {

    const {share , download , edit, save , editMode,uploadImage,upload} = props

    return (
        <View style={styles.container}>
            {/**Edit */}
            {!editMode && <TouchableOpacity style={styles.iconContainer} onPress={edit}>
                <Icon name="edit" size={28} color="white" />
            </TouchableOpacity>}
            {uploadImage && <TouchableOpacity style={styles.iconContainer} onPress={upload}>
                <Icon name="cloud-upload" size={28} color="white" />
            </TouchableOpacity>}
            {/**Share */}
            <TouchableOpacity style={styles.iconContainer} onPress={share}>
                <Icon name="share" size={28} color="white" />
            </TouchableOpacity>
            {/**Download */}
            <TouchableOpacity style={styles.iconContainer} onPress={download}>
                <Icon name="file-download" size={28} color="white" />
            </TouchableOpacity>
            {/**Save */}
            <TouchableOpacity style={styles.iconContainer} onPress={save}>
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
        display : 'flex',
        // flexDirection : 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        justifyContent: 'space-evenly'
    },
})

export default OptionList;
