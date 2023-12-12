import { DefaultTheme, NavigationContainer } from "@react-navigation/native";

import { Box, useTheme } from "native-base";

import { useAuth } from "@hooks/useAuth";

import { AuthRoutes } from "./auth.routes";

import Loading from "@components/Loading";
import { AppRoutes } from "./app.routes";

export const Routes = () => {
  const { colors } = useTheme();
  const { user, isLoadingUserStorageData } = useAuth();

  const theme = DefaultTheme;
  theme.colors.background = colors.gray[600];

  if (isLoadingUserStorageData) {
    return <Loading />;
  }

  return (
    <Box flex={1} bg="gray.600">
      <NavigationContainer>
        {!user ? <AppRoutes /> : <AuthRoutes />}
      </NavigationContainer>
    </Box>
  );
};
