import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Friend_2Item from '../components/Friend_2Item';

const Friend_2Screen =() => {
  return (
    <View style={styles.container}>
      <Friend_2Item/>
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

export default Friend_2Screen;

