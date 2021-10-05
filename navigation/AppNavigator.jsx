import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Friend_1Screen from '../screens/Friend_1Screen';
import Friend_2Screen from '../screens/Friend_2Screen';
import Send_1Screen from '../screens/Send_1Screen';
import Send_2Screen from '../screens/Send_2Screen';
import Send_3Screen from '../screens/Send_3Screen';
import Send_4Screen from '../screens/Send_4Screen';
import Receive_1Screen from '../screens/Receive_1Screen'
import Configuration_1Screen from '../screens/Configuration_1Screen'
import Configuration_2Screen from '../screens/Configuration_2Screen'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default AppNavigator = () => {
    return (
      <NavigationContainer>

          <Stack.Navigator>
            <Stack.Screen 
            name="Friend_1Screen" 
            component={Friend_1Screen} 
            />
            
          </Stack.Navigator>

      </NavigationContainer>
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


