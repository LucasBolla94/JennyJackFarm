import { StatusBar, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Cesta from './src/screens';
import Topo from './src/screens/topo';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import mock from './src/mocks/cesta';

export default function App() {
  const [fontloaded] = useFonts({
    'MontSerratRegular': Montserrat_400Regular,
    'MontSerratBold': Montserrat_700Bold,
  });

  if (!fontloaded) {
    return <View/>
  }


  return (
    <SafeAreaView>
      <StatusBar />
      < Cesta {...mock} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}