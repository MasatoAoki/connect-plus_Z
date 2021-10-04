import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Receive_1Item from '../components/Receive_1Item';

const Receive_1Screen =() => {
  return (
    <View style={styles.container}>
      <Receive_1Item/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Receive_1Screen;

