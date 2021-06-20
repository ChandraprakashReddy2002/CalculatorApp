import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'

const InputNumberButton =({value, handleOnPress})=> {
        return (
            <TouchableOpacity 
                style={styles.container}
                onPress={() => handleOnPress(value)}>
                <Text style={styles.text}>{value}</Text>
            </TouchableOpacity>
        )
}

const styles = StyleSheet.create(
    {
        container:{
            flex: 1,
            margin: 1,
            backgroundColor: "#22252D",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 30
        },
        text:{
            color: '#8E98B2',
            fontSize: 26
        }

    }
);

export default InputNumberButton