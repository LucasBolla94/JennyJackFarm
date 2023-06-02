import React from "react";
import { Image, Text, StyleSheet, Dimensions, View} from 'react-native';
import Topo from './topo';
import Details from './details';
import Itens from '../components/itens';

export default function Cesta({topo, detalhes, itens}) {
    return <>
    <Topo {...topo} />
    <Details {...detalhes} />
    <Itens {...itens}/>

    </>
}