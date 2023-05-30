import React from "react";
import { Text, StyleSheet } from 'react-native';



export default function Texto({ children, style }) {
    return <Text style={[style]}>{ children }</Text>
}

const styles = StyleSheet.create ({
    textoRegular: {
        fontFamily: 'MontSerratRegular',
    },
    textoNegrito: {
        fontFamily: 'MontSerratBold',
        fontWeight: 'normal',
    }
})