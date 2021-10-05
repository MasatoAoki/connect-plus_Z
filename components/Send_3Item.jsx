import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, Button, Alert,TouchableOpacity } from 'react-native';


const Send_3Item = ({onPress}) => {
    return (
        <TouchableOpacity style={styles.TitleContainer} onPress={onPress}>
            <Text style={styles.Titletxt}>Send_3TXT</Text>
        </TouchableOpacity>

    )
}


const styles = StyleSheet.create({

    TitleContainer: {
        backgroundColor: "#fff",
        width: "100%",
        height: "10%",
        alignItems: "center",
        justifyContent: 'center',
    },

    Titletxt: {
        fontSize: 20,
        fontWeight: "700"

    },

});


export default Send_3Item;