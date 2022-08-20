import react from "react";
import {Text, Image,StyleSheet,Dimensions,View} from "react-native"
import pizza from '../../../../assets/pizza.png'
export default function Topo( titulo ) {
    return <>
    <View style={estilos.ProductDemo}> 
    <Image source={pizza} style={estilos.pizza} />
    <Text style={estilos.titulo}>Details</Text>

    <View style={estilos.amountJustify}>
    <View style={estilos.amount} >
        <Text style={estilos.textAmount}>-  1  +</Text>
    </View>
    </View>
    </View>
        </>
}

const width = Dimensions.get('screen').width

const estilos = StyleSheet.create({
    ProductDemo: {
        width: '100%',
        paddingVertical: 8,
        
       
    },

    pizza: {
        width: '98%',
        alignSelf: 'center',
        borderRadius: 6,
        height: 578 / 768 * width,
    },
    titulo: {
        width: '100%',
        textAlign: 'center',
        position: 'absolute',
        fontSize: 16,
        lineHeight: 26,
        color: 'white',
        padding: 16,
        fontFamily: 'MontserratRegular',
      
    },
    amountJustify: {
        width: '100%',
        height: 600 / 768 * width, 
        position: "absolute",
        justifyContent: 'flex-end'
    },

    amount: {
        width: '50%' ,
        height: 40,
        backgroundColor: 'white',
        position: 'absolute',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
       borderRadius: 6,
    },

    textAmount: {
        fontFamily: 'MontserratBold',
        fontSize: 25,
        letterSpacing: 10,
       
    },

})
