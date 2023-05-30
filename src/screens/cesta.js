import React from "react";
import { Image, Text, StyleSheet, Dimensions, View} from 'react-native'
import topo from '../../assets/topo.png';
import logo from '../../assets/logo.png';
import Texto from '../screens/texto'

const widht = Dimensions.get('screen').width;

if (styles?.fontWeight === 'bold') {
    styles = styles.textoNegrito;
}

export default function Cesta() {
    return <>
    <Image source={topo} style={styles.topo} />
    <Texto style={styles.tittle}>Detalhes da Cesta</Texto>

    <View style={styles.basket}>
        <Texto style={styles.name}>Cesta of Verduras</Texto>
        <View style={styles.farm}>
            <Image source={logo} style={styles.imageFarm}/>
            <Texto style={styles.nameFarm}>Jenny Jack Farm</Texto>
        </View>
        <Texto style={styles.desc}>
            Uma cesta com produtos selecionados
            cuidadosamente da fazenda direto para
            sua cozinha
        </Texto>
        <Texto style={styles.price}>R$40,00</Texto>
    </View>

    </>
}

const styles = StyleSheet.create ({
    topo: {
        width: "100%",
        height: 578 / 768 * widht,
    },
    tittle: {
        width: '100%',
        position: 'absolute',
        textAlign: 'center',
        marginTop: 60,
        fontSize: 16,
        lineHeight: 26,
        color: 'white',
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
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
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    },
})