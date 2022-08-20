import AppLoading from 'expo-app-loading';
import { StatusBar,StyleSheet, SafeAreaView,Text,View} from 'react-native';
import Cesta from './src/telas/Cesta/componentes/index.js';

import { useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold 
} from '@expo-google-fonts/montserrat';
export default function App() {
  const [fonteCarregada] =useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold":Montserrat_700Bold,
  });


  if (!fonteCarregada) {
    return <AppLoading />
  }
  
  return (
    <SafeAreaView>
      <Cesta />
      <StatusBar></StatusBar>
    </SafeAreaView>
  );
}

