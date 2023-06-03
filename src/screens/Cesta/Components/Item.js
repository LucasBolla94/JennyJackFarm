import React from "react";
import { View, Image, StyleSheet } from "react-native";

import Texto from "../../../components/Texto";

export default function Item({ item: { nome, image } }) {
    return <View style={estilos.item}>
      <Image source={image} style={estilos.image}/>
      <Texto style={estilos.nome}>{ nome }</Texto>
    </View>
  }
const estilos = StyleSheet.create ({
    titulo: {
        color: "#464646",
        fontWeight: 'bold',
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
        marginLeft: 15,
        color: '#999999',
    },
    item: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: "#ececec",
        paddingVertical: 16,
        alignItems: 'center',
    },
    image: {
        width: 46,
        height: 46,
        marginLeft: 10,
    },
    nome: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: "#464646",
    },
})