import { StatusBar, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Cesta from './src/screens/cesta'
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat'

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
      <Cesta />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}