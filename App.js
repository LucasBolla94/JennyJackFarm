import { StatusBar, ScrollView } from 'react-native';
import Cesta from './src/screens';
import Topo from './src/screens/topo';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import mock from './src/mocks/cesta';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [fontloaded] = useFonts({
    'MontSerratRegular': Montserrat_400Regular,
    'MontSerratBold': Montserrat_700Bold,
  });

  if (!fontloaded) {
    return <AppLoading />
  }


  return (
    <ScrollView>
      <StatusBar />
      < Cesta {...mock} />
      <StatusBar style="auto" />
    </ScrollView>
  );
}