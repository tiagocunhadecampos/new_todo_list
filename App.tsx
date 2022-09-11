import { StatusBar } from 'expo-status-bar';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import { Dashboard } from './src/screens/Dashboard';
import { Loading } from './src/components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  })

  if(!fontsLoaded) {
    return <Loading />
  }

  return (
    <>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <Dashboard />
    </>
  );
}
