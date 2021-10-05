import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Send_2Item from '../components/Send_2Item';

const Send_2Screen =({navigation}) => {
  return (
    <View style={styles.container}>
      <Send_2Item
      onPress={() => navigation.navigate("送信内容を入力して下さい")}
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

export default Send_2Screen;

