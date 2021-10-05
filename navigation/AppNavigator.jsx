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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {FontAwesome} from "@expo/vector-icons"　

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator(); 


const FriendStack = () => {
  return(
  <Stack.Navigator>
     <Stack.Screen 
      name="私の友達" 
      component={Friend_1Screen} 
     />
     <Stack.Screen 
     name="友達設定" 
     component={Friend_2Screen} 
      />
</Stack.Navigator>
  );
};


const SendStack = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen
      name="誰の緊急事態ですか？"
      component={Send_1Screen}
      />
      <Stack.Screen
      name="誰に連絡しますか？"
      component={Send_2Screen}
      />
      <Stack.Screen
      name="送信内容を入力して下さい"
      component={Send_3Screen}
      />
      <Stack.Screen
      name="送信内容を確認して下さい"
      component={Send_4Screen}
      />
    </Stack.Navigator>
  )
}

const ReceiveStack = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen
      name="受信メッセージ一覧"
      component={Receive_1Screen}
      />
    </Stack.Navigator>
  )
}

const ConfigurationStack = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen
      name="設定1"
      component={Configuration_1Screen}
      />
      <Stack.Screen
      name="設定2"
      component={Configuration_2Screen}
      />
    </Stack.Navigator>
  )
}

export default AppNavigator = () => {
    return (
      <NavigationContainer>
          <Tab.Navigator screenOptions={screenOption}>
            <Tab.Screen name="友達" component={FriendStack} options={{headerShown: false}}/>
            <Tab.Screen name="送信" component={SendStack} options={{headerShown: false}}/>
            <Tab.Screen name="受信" component={ReceiveStack} options={{headerShown: false}}/>
            <Tab.Screen name="設定" component={ConfigurationStack} options={{headerShown: false}}/>

          </Tab.Navigator>
      </NavigationContainer>
    );
  }




const screenOption = ({route}) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name === '友達') {
      iconName = "users";
    } else if (route.name === '送信') {
      iconName = "cloud-upload";
    }else if (route.name === '受信') {
      iconName = "cloud-download";
    }else if (route.name === '設定') {
      iconName = "cogs";
    }


    return <FontAwesome name={iconName} size={size} color={color} />;
  },
})

