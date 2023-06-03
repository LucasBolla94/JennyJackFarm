import React from "react";
import { FlatList, StyleSheet, View } from 'react-native';

import Texto from '../../components/Texto';

import Topo from './Components/Topo';
import Detalhes from './Components/Detalhes';
import Item from './Components/Item';

export default function Cesta({ topo, detalhes, itens}) {
    return <>
        <FlatList 
            data={itens.lista}
            renderItem={Item}
            keyExtractor={({ nome }) => nome }
            ListHeaderComponent={() => {
                return <>
                    <Topo {...topo}/>
                    <View>
                        <Detalhes {...detalhes}/>
                        <Texto>{ itens.titulo }</Texto>
                    </View>  
                </>
            }}
        />
    </>
}