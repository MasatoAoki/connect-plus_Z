import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Send_3Item from '../components/Send_3Item';

const Send_3Screen =({navigation}) => {
  return (
    <View style={styles.container}>
      <Send_3Item
      onPress={() => navigation.navigate("送信内容を確認して下さい")}
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

export default Send_3Screen;

