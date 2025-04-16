import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile Screen</Text>
      <TouchableOpacity style={styles.touchable} onPress={() => {}}>
        <Text style={styles.touchableText}>Logout</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchable} onPress={() => {}}>
        <Text style={styles.touchableText}>Edit Information</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchable} onPress={() => {}}>
        <Text style={styles.touchableText}>Change Theme</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchable} onPress={() => {}}>
        <Text style={styles.touchableText}>Change Language</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchable} onPress={() => {}}>
        <Text style={styles.touchableText}>Change Profile Picture</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchable} onPress={() => {}}>
        <Text style={styles.touchableText}>Change Password</Text>
      </TouchableOpacity>
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
    marginBottom: 20,
  },
  touchable: {
    padding: 10,
    marginVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  touchableText: {
    fontSize: 16,
    color: 'blue',
  },
});

export default ProfileScreen;