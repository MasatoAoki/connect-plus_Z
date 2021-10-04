import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, Button, Alert } from 'react-native';


const Friend_1Item = () => {
    return (
        <View style={styles.TitleContainer}>
            <Text style={styles.Titletxt}>Friend_1TXT</Text>
        </View>

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


export default Friend_1Item;