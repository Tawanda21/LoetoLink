import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // Delay navigation to the LoginScreen by 3 seconds
    setTimeout(() => {
      navigation.navigate('Login');
    }, 3000); // 3000 milliseconds = 3 seconds
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/Bus.gif')} // Ensure you have a splash.png image in your assets folder
        style={styles.splashImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  splashImage: {
    width: 100, // Adjust the width as needed
    height: 100, // Adjust the height as needed
  },
});

export default SplashScreen;