import React from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native';

import Texto from '../../../components/Texto';

import topo from '../../../../assets/topo.png';

const widht = Dimensions.get('screen').width;


export default function Topo({ titulo }) {
    return <>
        <Image source={topo} style={styles.topo} />
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
})