import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import RadialGradient from 'react-native-radial-gradient';
import { PRIMARY, SECONDARY } from '../../styles/colors';

const Login = () => {
    return (
        <RadialGradient
            colors={[PRIMARY, SECONDARY]}
            style={styles.container}
            stops={[0.2, 1]} // Adjust stops as needed
            radius={450} // Adjust radius as needed
        >
            <View>
                <Text>Log in</Text>
            </View>
        </RadialGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
})

export default Login;
