import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Configuration_1Item from '../components/Configuration_1Item';

const Configuration_1Screen =({navigation}) => {
  return (
    <View style={styles.container}>
      <Configuration_1Item
      onPress={() => navigation.navigate("設定2")}
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

export default Configuration_1Screen;

