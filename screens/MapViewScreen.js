import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MapViewScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Map View Screen</Text>
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
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default MapViewScreen;