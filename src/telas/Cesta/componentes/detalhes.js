import react from "react";
import {Text, Image,StyleSheet, Dimensions, View,Button, TouchableOpacity} from "react-native"
import star from '../../../../assets/star.png'
import juice from '../../../../assets/orangeJuice.png'
import frenchFries from '../../../../assets/frenchFries.jpg'
import ketchup from '../../../../assets/ketchup.png'
export default function Detalhes() {
   return <>
    
    <View style={estilos.firstInformation}>

    <View style={estilos.starGrade}>
        <Image style={estilos.star} source={star}/>
        <Text style={estilos.grade}> 3.8</Text>
    </View>
    
    <Text style={estilos.preco}>R$ 40,00</Text>

    </View>

<Text style={estilos.NomeProduto}>King's Pizza</Text>

<Text style={estilos.descricao}>Delicious Pizzas, make with love and cheeze. We have more than 30 flavors, and 3.8 in FoodApp Grade.</Text>

<Text style={estilos.addonsText}>Add Ons</Text>
<View style={estilos.Addons}>
    <View style={estilos.addonsTempl}>
        <Image style={estilos.addonsImage} source={juice} resizeMode='stretch'/>
    </View>
    <View style={estilos.addonsTempl}>
    <Image style={estilos.addonsImage} source={frenchFries} resizeMode='stretch'/>
    </View>
    <View style={estilos.addonsTempl}>
    <Image style={estilos.addonsImage} source={ketchup} resizeMode='stretch'/>
    </View>
</View>

<TouchableOpacity style={estilos.botao} >
    <Text  style={estilos.botaoText}>Buy</Text>
</TouchableOpacity>

    </>
}

const estilos = StyleSheet.create({
    

    cesta: {
        width: '100%',
        paddingVertical: 8,
        paddingHorizontal: 10,
    },

    firstInformation: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    starGrade: {
        width: '30%',
        height: 40,
        backgroundColor: '#ed254e',
        borderRadius: 18,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        
      
    },
    
    star: {
        width: 20,
        height: 20,
        
    },

    grade: {
        color: 'white',
        fontFamily: 'MontserratBold',
        fontSize: 20,
    },

    preco: {
        color: '#ed254e',
        fontFamily: 'MontserratBold',
        fontSize: 20,
    },
   

    NomeProduto: {
        color: 'black',
        paddingVertical: 10,
        fontFamily: 'MontserratRegular',
        fontSize: 20,
    },

    descricao: {
        color: 'black',
        paddingVertical: 2,
        fontFamily: 'MontserratRegular',
        fontSize: 13,
    },
    addonsText: {
        color: 'black',
        paddingVertical: 3,
        fontFamily: 'MontserratRegular',
        fontSize: 15,
    },

    Addons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    
    addonsTempl: {
        width: '25%',
        height: 80,
        backgroundColor: '#d8d8d8',
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
    },

    addonsImage: {
        width: '60%',
        height: 60,
    },

    botao: {
        marginVertical: 10,
        width:'80%',
        height: 60,
        backgroundColor: '#ff1654',
        alignSelf: 'center',
        borderRadius: 6,
        justifyContent: 'center',
    },
    botaoText: {
        textAlign:"center",
        color: 'white',
        fontFamily: 'MontserratBold'
    },
}) 

