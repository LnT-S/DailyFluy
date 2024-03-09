import React, { useRef, useEffect } from 'react';
import { StyleSheet, Image, TouchableOpacity, Animated, Text ,View } from 'react-native';
// import {LinearGradient} from 'react-native-linear-gradient';
import RadialGradient from 'react-native-radial-gradient';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { getResponsiveValue } from '../../styles/responsive';
import { PRIMARY, SECONDARY } from '../../styles/colors';



const SplashScreen = () => {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  const handleNextPage = () => {
    navigation.navigate('LoginScreen');
  };

  useFocusEffect(() => {
    const fadeIn = Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1700,
      useNativeDriver: true,
    });
    const growingAnim = Animated.timing(scaleAnim, {
      toValue: 1.7,
      duration: 2000,
      useNativeDriver: true,
    });

    const glowingAnim = Animated.loop(
      Animated.sequence([
        Animated.timing(opacityAnim, {
          toValue: 0.1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
      ])
    );

    fadeIn.start();
    growingAnim.start();
    glowingAnim.start();

    const timer = setTimeout(handleNextPage, 3000);

    return () => {
      clearTimeout(timer);
      fadeAnim.setValue(0);
      scaleAnim.setValue(0);
      opacityAnim.setValue(0);
    };
  });



  return (
    <RadialGradient
      colors={[PRIMARY, SECONDARY]}
      style={styles.container}
      stops={[0.2, 1]} // Adjust stops as needed
      radius={400} // Adjust radius as needed
    >
      <TouchableOpacity onPress={handleNextPage} activeScale={0.95} style={{position : 'relative'}}>
        <Animated.Image
          source={require('../../assets/images/logowithoutname.png')}
          resizeMode="contain"
          style={[
            styles.image,
            {
              opacity: opacityAnim,
              transform: [{ scale: scaleAnim }],
            },
          ]}
        />
        
        </TouchableOpacity>
        <Animated.View style= {{position : 'absolute' , bottom : 30 , width : '100%',opacity: opacityAnim}}>
          <Text style={{textAlign : 'center' ,fontSize : 30 , color: 'white' , letterSpacing : 1.2 }}>DailyFly</Text>
        </Animated.View>
    </RadialGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    width: getResponsiveValue(272, 136),
    height: getResponsiveValue(272, 136),
    alignSelf: 'center',
    

  },
});

export default SplashScreen;