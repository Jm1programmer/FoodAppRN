import React from "react";
import {Text, Image,StyleSheet, Dimensions,View} from "react-native"
import Pizza from './FirstPart';
import Detalhes from "./detalhes";




export default function Cesta({ topo, detalhes}) {
   return <>
        <Pizza  />
        <View style={estilos.spacing}>
        <Detalhes />
        </View>
        
      </>

      
}

const estilos = StyleSheet.create({
    spacing: {
        width: '100%',
        paddingVertical: 8,
        paddingHorizontal: 10,
    },
}) 


