import { StatusBar } from "react-native";
import { NativeBaseProvider } from "native-base";
import {
  useFonts,
  Karla_400Regular,
  Karla_700Bold,
  Karla_500Medium,
} from "@expo-google-fonts/karla";

import { THEME } from "./src/theme";
import Loading from "@components/Loading";
import Home from "@screens/Home";
import SignUp from "@screens/SignUp";
import AdNew from "@screens/AdNew";
import Catalog from "@screens/Catalog";

export default function App() {
  const [fontsLoaded] = useFonts({
    Karla_400Regular,
    Karla_700Bold,
    Karla_500Medium,
  });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Catalog /> : <Loading />}
    </NativeBaseProvider>
  );
}
