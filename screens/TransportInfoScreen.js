import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Button from '../components/Button';

const TransportInfoScreen = () => {
  const transports = [
    { id: '1', name: 'Combi 1', status: 'On time' },
    { id: '2', name: 'Combi 2', status: 'Delayed' },
    { id: '3', name: 'Combi 3', status: 'Very late' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'On time':
        return 'green';
      case 'Delayed':
        return 'orange';
      case 'Very late':
        return 'red';
      default:
        return 'gray';
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Transport Information Screen</Text>
      <FlatList
        data={transports}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.transportItem, { backgroundColor: getStatusColor(item.status) }]}>
            <Text style={styles.transportText}>{item.name}</Text>
            <Text style={styles.transportText}>{item.status}</Text>
          </View>
        )}
      />
      <Button title="View in real time" onPress={() => {}} color="blue" />
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
  transportItem: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  transportText: {
    color: 'white',
    fontSize: 16,
  },
});

export default TransportInfoScreen;