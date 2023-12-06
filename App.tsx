import { StatusBar } from "expo-status-bar";
import { Box, NativeBaseProvider } from "native-base";
import {
  useFonts,
  Karla_400Regular,
  Karla_700Bold,
} from "@expo-google-fonts/karla";
import { THEME } from "./src/theme";

export default function App() {
  return (
    <NativeBaseProvider theme={THEME}>
      <Box>Hello!</Box>
    </NativeBaseProvider>
  );
}
