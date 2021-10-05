import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Send_1Item from '../components/Send_1Item';

const Send_1Screen =({navigation}) => {
  return (
    <View style={styles.container}>
      <Send_1Item
       onPress={() => navigation.navigate("誰に連絡しますか？")}
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

export default Send_1Screen;

