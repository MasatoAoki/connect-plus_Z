import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Send_2Item from '../components/Send_2Item';

const Send_2Screen =() => {
  return (
    <View style={styles.container}>
      <Send_2Item/>
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

export default Send_2Screen;

