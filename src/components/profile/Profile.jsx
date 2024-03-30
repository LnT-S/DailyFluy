import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, BackHandler } from 'react-native'
import AuthenticatedLayout from '../../screens/layout/AuthenticatedLayout'
import Semicircle from '../../addOns/atoms/SemiCircle'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import YesNoModal from '../../addOns/molecules/YesNoModal';
import { PRIMARY, SECONDARY, WHITE } from '../../styles/colors';

const Profile = () => {

    const navigation = useNavigation()
    const [showModal, setShowModal] = useState(false)
    const profileDetails = {
        image: '',
        name: 'Shruti Mishra',
        phoneNumber: '1234567891',
        email: 'smsihra.ninja9252@gmail.com'
    }
    const handleShow = () => {
        setShowModal(false);
    };

    useEffect(() => {
        const backFuntion = () => {
            navigation.navigate('Home')
            return true
        }
        console.log('BACKHANDLER ATTACHED')
        const backHandler = BackHandler.addEventListener('hardwareBackPress', backFuntion)
        return () => {
            console.log('BACKHANDLER REMOVED')
            backHandler.remove()
        }
    }, [])


    return (
        <AuthenticatedLayout
            title={'Profile'}
            showFooter={false}
        >
        <ScrollView style={{ flex: 1, backgroundColor: 'white'}}
                nestedScrollEnabled={true}
                contentContainerStyle={{ flexGrow: 1 }}
                keyboardShouldPersistTaps="true"
            >
            <YesNoModal
                show={showModal}
                setShow={setShowModal}
                title={'Show ?'}
                message={'Show my info to Customer'}
                handleYes={handleShow}
                yesText={'Hide'}
                noText={'Show'} />
            <Semicircle item={profileDetails} editMode={true} />
            <View style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%' }}>
                <View style={styles.settingBox}>
                    <TouchableOpacity style={styles.listItem1} onPress={() => setShowModal(true)}>
                        <Icon name="bookmark" size={30} color={WHITE} />
                        <Text style={styles.text}>Saved Images</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.listItem1} onPress={() => setShowModal(true)}>
                        <Icon name="favorite" size={30} color={WHITE}  />
                        <Text style={styles.text}>Liked Status</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.listItem2} onPress={() => setShowModal(true)}>
                        <Icon name="share" size={30} color={WHITE} />
                        <Text style={styles.text}>Shared Status</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{ width: '100%' }}>
                    <Text style={styles.textStyle}>Privacy Policy</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </AuthenticatedLayout>
    )
}
const styles = StyleSheet.create({
    settingBox: {
        backgroundColor: SECONDARY,
        marginHorizontal: 20,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    listItem1: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: PRIMARY,
        marginLeft: 0,
        padding: 5
    },
    text: {
        color: 'white',
        fontSize: 18,
        marginLeft: 10
    },
    listItem2: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 0,
        padding: 5
    },
    textStyle: {
        textAlign: 'center',
        color: 'black',
        fontSize: 18,
        fontWeight: '800',
        padding: 15,
        textDecorationLine: 'underline'
    }
})
export default Profile