import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { BgColor, SECONDARY } from '../../styles/colors'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import global from '../../styles/global'
const Header = (props) => {

    const navigation = useNavigation()
    const {
        title,
        showHMIcon,
        showBackIcon,
        leftCenterJsx,
        headerStyles,
        headerTextStyles,
        showNEWIcon
    } = props

    const openDrawer = () => {
        navigation.openDrawer()
    };

    const [showOptions, setShowOptions] = useState(false)

    return (
        <SafeAreaView>
            <View style={{ ...styles.header, ...headerStyles }}>
                <View style={styles.left}>
                    {(showBackIcon === undefined || showBackIcon === true) ? <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name="arrow-back" style={{ ...global.backIcon, ...headerTextStyles }} size={30} color='white' />
                    </TouchableOpacity> : ''}
                    <TouchableOpacity onPress={()=>navigation.navigate('Home')}>{leftCenterJsx}</TouchableOpacity>
                    <Text style={{ ...{ fontSize: 20, paddingLeft: 10, color: 'white', fontWeight: '600',fontFamily : 'sans-serif' }, ...headerTextStyles }}>{title}</Text>
                </View>
                <View style={styles.right}>

                    {(showNEWIcon === undefined || showNEWIcon === true) ? <TouchableOpacity onPress={() => navigation.navigate('WallpaperPage')} style={{flexDirection:'row',justifyContent:'center',alignItems:'center',borderWidth: 2, borderColor:'white',borderRadius: 30,marginHorizontal: 15}}>
                        <Text style={{ ...{ fontSize: 16, paddingLeft: 10, color: 'white', fontWeight: '500',textTransform: 'uppercase',paddingHorizontal: 5}, ...headerTextStyles }}>new</Text>
                    <Icon name="add" size={30} color="white" style={headerTextStyles} />
                    </TouchableOpacity> : ''}

                    {(showHMIcon === undefined || showHMIcon === true) ? <TouchableOpacity onPress={openDrawer}>
                        <Icon name="menu" size={30} color="white" style={headerTextStyles} />
                    </TouchableOpacity> : ''}
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: SECONDARY,
        position: 'relative'
    },
    left: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    right: {
        marginRight: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    threeDotIcon: {
        position: 'relative'
    },
    optionContainer: {
        position: 'absolute',
        top: 64,
        right: 0,
        width: 180,
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 10
    },
    optionList: {
        width: '100%'
    },
    optionText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500',
        marginVertical: 10
    }
})

export default Header