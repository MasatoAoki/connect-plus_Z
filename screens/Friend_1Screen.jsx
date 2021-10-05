import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Friend_1Item from '../components/Friend_1Item';

const Friend_1Screen =({navigation}) => {
  
  return (
    <View style={styles.container}>
      <Friend_1Item
        onPress={() => navigation.navigate("友達設定")}
      
      />
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

export default Friend_1Screen;

