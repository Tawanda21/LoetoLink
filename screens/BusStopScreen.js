import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';

const BusStopScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bus Stop Screen</Text>
      <Button title="Show Route" onPress={() => {}} color="blue" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default BusStopScreen;