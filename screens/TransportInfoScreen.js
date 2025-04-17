import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Button from '../components/Button';

const TransportInfoScreen = ({navigation}) => {
  const transports = [
    { id: '1', name: 'Combi 1', status: 'On time' },
    { id: '2', name: 'Combi 2', status: 'Delayed' },
    { id: '3', name: 'Combi 3', status: 'Very late' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'On time':
        return '#abfa54';
      case 'Delayed':
        return '#ffd628';
      case 'Very late':
        return '#ff3900';
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
        style={styles.flatList}
      />
      <Button title="View in real time" onPress={() => navigation.navigate('Map')} color="#364fa1" borderRadius={20} />
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
    borderRadius: 25,
    width: '95%',
    alignSelf: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  flatList: {
    width: '100%',
  },
  transportItem: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 15,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  transportText: {
    color: '#0d142b',
    fontSize: 16,
  },
});

export default TransportInfoScreen;