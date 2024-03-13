import { useNavigation } from '@react-navigation/native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ScrollView, StyleSheet, TouchableOpacity, View, Text, Image, SafeAreaView } from 'react-native'
import global from '../../styles/global'
import { PRIMARY, SECONDARY } from '../../styles/colors'
import RadialGradient from 'react-native-radial-gradient';
import PassInput from '../../addOns/atoms/PassInput';
import Button from '../../addOns/atoms/Button';

const NewPassword = () => {
    const navigation = useNavigation()

    return (
        <ScrollView
            style={{ flex: 1, backgroundColor: 'white' }}
            nestedScrollEnabled={true}
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="true">
            <RadialGradient
                colors={[PRIMARY, SECONDARY]}
                style={styles.container}
                stops={[0.2, 1]} // Adjust stops as needed
                radius={400}
            >
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back" style={global.backIcon} size={30} color="white" />
                </TouchableOpacity>

                <View style={styles.newPasscontainer}>
                    <View style={styles.logoPart}>
                        <Image
                            source={require('../../assets/images/logowithoutname.png')}
                            style={{ height: 200, width: 138 }}
                        />
                        <Text style={{ textAlign: 'center', fontSize: 30, color: 'white', letterSpacing: 1.2 }}>DailyFly</Text>
                    </View>
                    <Text style={styles.title}>Enter New Password</Text>

                    <View style={styles.newpassinput}>
                        <PassInput
                            placeholder='Enter New Password'
                        />
                        <PassInput
                            placeholder='Confirm Password'
                        />
                        <Button
                            style={{ marginTop: 30 }}
                            name='Reset Password'
                        />
                    </View>
                </View>
            </RadialGradient>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    newPasscontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoPart: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',

    },
    title: {
        marginTop: 50,
        color: `white`,
        fontSize: 35,
        fontWeight: `600`,
        fontFamily: 'serif'
    },
    newpassinput: {
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
export default NewPassword