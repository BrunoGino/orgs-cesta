import { StatusBar, SafeAreaView } from 'react-native';
import Basket from './src/screens/Basket';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold
} from '@expo-google-fonts/montserrat';
import mock from './src/mocks/basket';
import AppLoading from 'expo-app-loading';

export default function App() {

  const [fontIsLoaded] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold
  });

  if (fontIsLoaded) {
    // {...mock} === topo={mock.topo} && details={mock.detail}
    // flex 1 é sempre o tamanho da tela inteira, tonar as views do tamanho da tela
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar />
        <Basket {...mock} />
      </SafeAreaView>
    );
  }

  return (
    <AppLoading />
  )

}