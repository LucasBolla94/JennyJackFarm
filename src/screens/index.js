import React from "react";
import { Image, Text, StyleSheet, Dimensions, View} from 'react-native';
import Topo from './topo';
import Details from './details';

export default function Cesta({topo, detalhes}) {
    return <>
    <Topo {...topo} />
    <Details {...detalhes} />

    </>
}