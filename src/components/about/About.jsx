import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import AuthenticatedLayout from '../../screens/layout/AuthenticatedLayout';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Linking } from 'react-native';
import { getResponsiveValue } from '../../styles/responsive';
import { BLACK, PRIMARY, WHITE } from '../../styles/colors';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const About = () => {
    const navigation = useNavigation()
    const openLink = () => {
        const url = 'https://play.google.com/'; // Replace with your desired URL
        Linking.openURL(url)
            .then(supported => {
                if (!supported) {
                    console.error('Cannot open URL');
                } else {
                    console.log('URL opened successfully');
                }
            })
            .catch(err => console.error('An error occurred', err));
    };

    const openLink1 = () => {
        const url = 'https://www.apple.com/'; // Replace with your desired URL
        Linking.openURL(url)
            .then(supported => {
                if (!supported) {
                    console.error('Cannot open URL');
                } else {
                    console.log('URL opened successfully');
                }
            })
            .catch(err => console.error('An error occurred', err));
    };
    return (
        <AuthenticatedLayout title={'About Us'}>
            <ScrollView>
                <View>
                    <View style={styles.center}>
                        <Image source={require('../../assets/images/DailyFlyLogo.png')}
                            style={{ height: 150, width: 150 }} />
                        <Text style={styles.text2}>Special Status On DailyFly</Text>
                    </View>
                    <View style={{ marginHorizontal: 10 }}>
                        <View>
                            <Text style={{ ...styles.listItem, fontSize: 16, textAlign: 'justify', marginVertical: 5 }}>
                                Greetings from Dhiraj Gajendra Navlakhe, the creative mind behind {'\t'}
                                <Text style={{ ...styles.listItem, fontSize: 16, textAlign: 'justify', marginVertical: 5, color: PRIMARY }}>
                                    DAILYFLY APP!
                                </Text>
                            </Text>

                        </View>
                        <View>
                            <Text style={{ ...styles.listItem, fontSize: 16, textAlign: 'justify', marginVertical: 5 }}>
                                With a passion for graphic designing and animation, I earned an advanced diploma from IMR College, Jalgaon, Maharashtra. For the past 11 years, I've been honing my craft as a freelance graphic designer, collaborating with esteemed publication houses and advertising agencies across India, UK, US, and Australia. Some notable clients include:
                            </Text>
                        </View>

                    </View>
                    <View style={styles.listItemContainer}>
                        <View style={styles.bullet} />
                        <Text style={styles.listItem}>
                            Youkiyoto Publishing (Canada)
                        </Text>
                    </View>

                    <View style={styles.listItemContainer}>
                        <View style={styles.bullet} />
                        <Text style={styles.listItem}>
                            Shildcrest Publishing (London, UK)
                        </Text>
                    </View>

                    <View style={styles.listItemContainer}>
                        <View style={styles.bullet} />
                        <Text style={styles.listItem}>
                            Atmosphere Press (Austin, USA)
                        </Text>
                    </View>

                    <View style={styles.listItemContainer}>
                        <View style={styles.bullet} />
                        <Text style={styles.listItem}>
                            Zorba Books (Gurgaon, India)
                        </Text>
                    </View>
                    <View style={styles.listItemContainer}>
                        <View style={styles.bullet} />
                        <Text style={styles.listItem}>
                            Varada Prakashan (Pune, India)
                        </Text>
                    </View>
                    <View style={styles.listItemContainer}>
                        <View style={styles.bullet} />
                        <Text style={styles.listItem}>Youtbook (Chennai, India)</Text>
                    </View>
                    <View>
                        <Text style={{ ...styles.listItem, fontSize: 16, textAlign: 'justify', marginHorizontal: 10, marginVertical: 5 }}>
                            Today, I am thrilled to introduce {'\t'}
                            <Text style={{ ...styles.listItem, fontSize: 16, textAlign: 'justify', marginVertical: 5, color: PRIMARY }}>
                                DAILYFLY APP
                            </Text> —a platform designed to elevate your connections with friends, family, and clients through unique and heartfelt greetings. Whether it's a special occasion or a simple gesture of appreciation, {'\t'}
                            <Text style={{ ...styles.listItem, fontSize: 16, textAlign: 'justify', marginVertical: 5,color: PRIMARY }}>
                                DAILYFLY APP
                            </Text>{'\t'}empowers you to forge deeper bonds in a memorable way.

                        </Text>
                    </View>
                    <View>
                        <Text style={{ ...styles.listItem, fontSize: 16, textAlign: 'justify', marginHorizontal: 10, marginVertical: 5 }}>
                            I invite you to experience the magic of 
                            {'\t'}
                            <Text style={{ ...styles.listItem, fontSize: 16, textAlign: 'justify', marginVertical: 5,color: PRIMARY }}>
                                DAILYFLY APP
                            </Text>{'\t'}firsthand. Spread love, joy, and positivity by using our app to send personalized messages. Your support means the world to us, so don't forget to share 
                            {'\t'}
                            <Text style={{ ...styles.listItem, fontSize: 16, textAlign: 'justify', marginVertical: 5,color: PRIMARY }}>
                                DAILYFLY APP
                            </Text>{'\t'} with your network and leave your valuable feedback on the Play Store.

                        </Text>
                    </View>
                    <View>
                        <Text style={{ ...styles.listItem, fontSize: 16, textAlign: 'justify', marginHorizontal: 10, marginVertical: 5 }}>
                            Thank you for joining us on this journey. Together, let's make every day a little brighter with {'\t'}
                            <Text style={{ ...styles.listItem, fontSize: 16, textAlign: 'justify', marginVertical: 5,color: PRIMARY }}>
                                DAILYFLY APP.
                            </Text>

                        </Text>
                    </View>
                    <View>
                        <Text style={{ ...styles.listItem, fontSize: 16, textAlign: 'justify', marginHorizontal: 10, marginVertical: 5 }}>
                            Warm regards,
                        </Text>
                    </View>
                    <View>
                        <Text style={{ ...styles.listItem, fontSize: 16, textAlign: 'justify', marginHorizontal: 10, marginVertical: 5 }}>
                            Dhiraj Gajendra Navlakhe
                        </Text>
                    </View>
                    <GestureHandlerRootView>
                        <View style={styles.imageContainer2}>
                            <TouchableOpacity onPress={openLink}>
                                <Image
                                    style={styles.image2}
                                    resizeMode="contain"
                                    source={require('../../assets/images/googlePlay.png')}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={openLink1}>
                                <Image
                                    resizeMode="contain"
                                    style={styles.image3}
                                    source={require('../../assets/images/appstore.png')}
                                />
                            </TouchableOpacity>
                        </View>
                    </GestureHandlerRootView>
                </View>
                <View style={styles.iconContainer}>
                    <Icon name="envelope" style={styles.icon2} />
                    <Icon name="facebook" style={styles.icon} />
                    <Icon name="instagram" style={styles.icon3} />
                </View>
                <TouchableOpacity style={{ width: '100%' }} onPress={() => navigation.navigate('Privacy')}>
                <Text style={styles.textStyle}>Privacy Policy</Text>
              </TouchableOpacity>
            </ScrollView>
        </AuthenticatedLayout>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        textAlign: 'center',
        color: 'black',
        fontSize: 18,
        fontWeight: '800',
        textDecorationLine: 'underline',
        marginBottom: 25
      },
    center: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5
    },
    text2: {
        fontSize: getResponsiveValue(24, 20),
        fontWeight: 'bold',
        color: WHITE,
        backgroundColor: PRIMARY,
        padding: '2%',
        borderRadius: getResponsiveValue(30, 15),
        letterSpacing: getResponsiveValue(4, 2),
        margin: 5
    },
    image2: {
        width: getResponsiveValue(300, 150),
        height: getResponsiveValue(300, 150),
        alignSelf: 'center',
        // backgroundColor:PRIMARY,
        // borderRadius:getResponsiveValue(50,25),
    },
    image3: {
        width: getResponsiveValue(300, 150),
        height: getResponsiveValue(300, 150),
        alignSelf: 'center',
        // backgroundColor:PRIMARY,
        // borderRadius:getResponsiveValue(50,25),
    },
    imageContainer: {
        backgroundColor: PRIMARY,
        paddingVertical: getResponsiveValue('6%', '6%'),
        borderRadius: getResponsiveValue(50, 25),
        width: '90%',
    },

    infoContainer: {
        width: '100%',
        marginBottom: '40%',
        top: '5%',
        borderTopLeftRadius: getResponsiveValue(40, 20),
        borderTopRightRadius: getResponsiveValue(40, 20),
        // alignItems: 'center', // Align children to the start
        paddingVertical: getResponsiveValue(20, 10),
        paddingHorizontal: getResponsiveValue(20, 10),
    },
    listItemContainer: {
        flexDirection: 'row', // Align bullet and text horizontally
        alignItems: 'center',
        marginHorizontal: 10,// Align items vertically within each row
        marginVertical: 5// Adjust spacing between list items
    },
    bullet: {
        width: getResponsiveValue(20, 10),
        height: getResponsiveValue(20, 10),
        borderRadius: getResponsiveValue(20, 10),
        backgroundColor: PRIMARY, // Customize the bullet color
        marginRight: getResponsiveValue(20, 10),
    },
    listItem: {
        fontSize: 16,
        color: BLACK,
    },
    imageContainer2: {
        // top: getResponsiveValue('5%', '10%'),
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    icon: {
        color: PRIMARY,
        fontSize: 40,
    },
    icon2: {
        color: PRIMARY,
        fontSize: 40,
    },
    icon3: {
        color: PRIMARY,
        fontSize: 40,
    },
    iconContainer: {
        marginBottom: '10%',
        // top: '5%',
        width: '100%',
        justifyContent: 'space-around',
        flexDirection: 'row',
    },

})

export default About;
