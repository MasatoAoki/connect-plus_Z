import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Configuration_2Item from '../components/Configuration_2Item';

const Configuration_2Screen =() => {
  return (
    <View style={styles.container}>
      <Configuration_2Item/>
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

export default Configuration_2Screen;

