import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import logo from '../../assets/logo.png'
import Texto from '../components/Texto';


export default function Details({ nome, logoFazenda, nomeFazenda, desc, preco}){
    return <>
        <View style={styles.basket}>
            <Texto style={styles.name}>{ nome }</Texto>
            <View style={styles.farm}>
                <Image source={logoFazenda} style={styles.imageFarm}/>
                <Texto style={styles.nameFarm}>{ nomeFazenda }</Texto>
            </View>
            <Texto style={styles.desc}>{ desc }</Texto>
            <Texto style={styles.price}>{ preco }</Texto>
        </View>
    </>
}

const styles = StyleSheet.create ({
    basket: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    name: {
        color: '#464646',
        fontSize: 26,
        lineHeight: 42,
    },
    farm: {
        flexDirection: 'row',
        paddingVertical: 12,
    },
    imageFarm: {
        width: 32,
        height: 32,
    },
    nameFarm: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },
    desc: {
        color: '#a3a3a3',
        fontSize: 16,
        lineHeight: 26,
    },
    price: {
        color: '#2a9f85',
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
        fontWeight: 'bold'
    },
})