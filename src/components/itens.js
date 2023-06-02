import React from "react";
import Texto from "../components/Texto";
import { View, Image, StyleSheet } from "react-native";

export default function itens({titulo, lista}){
    return <>
        <Texto style={styles.titulo}>{ titulo }</Texto>
        { lista.map(({nome, image}) => {
          return  <View key={nome} style={styles.item}>
                <Image source={image} style={styles.image}/>
                <Texto  style={styles.nome}>{ nome }</Texto>
          </View>
        })}
    </>
}

const styles = StyleSheet.create ({
    titulo: {
        color: "#464646",
        fontWeight: 'bold',
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
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
    },
    nome: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: "#464646",
    },
})