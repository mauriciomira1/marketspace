import { Platform } from "react-native";

import { useTheme } from "native-base";
import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";

import { House, SignOut, Tag } from "phosphor-react-native";

import Home from "@screens/Home";
import AdNew from "@screens/AdNew";
import MyAds from "@screens/MyAds";
import SignIn from "@screens/SignIn";
import AdDetails from "@screens/AdDetails";
import ItemDetails from "@screens/ItemDetails";
import AdNewPreview from "@screens/AdNewPreview";

type AppRoutes = {
  home: undefined;
  adNew: undefined;
  adNewPreview: undefined;
  itemDetails: undefined;
  signIn: undefined;

  myAds: {
    userId: string;
  };

  adDetails: {
    productId: string;
  };
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator();

export const AppRoutes = () => {
  const { sizes, colors } = useTheme();

  const iconSize = sizes[6];

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.gray[200],
        tabBarInactiveTintColor: colors.gray[400],
        tabBarStyle: {
          backgroundColor: "white",
          borderTopWidth: 0,
          height: Platform.OS === "android" ? "auto" : 96,
          paddingBottom: sizes[8],
          paddingTop: sizes[7],
        },
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <House color={color} size={iconSize} weight="bold" />
          ),
        }}
      />
      <Screen
        name="adNew"
        component={AdNew}
        options={{
          tabBarIcon: ({ color }) => <Tag color={color} size={iconSize} />,
        }}
      />

      <Screen
        name="signIn"
        component={SignIn}
        options={{
          tabBarIcon: () => <SignOut color={colors.red[300]} size={iconSize} />,
        }}
      />

      <Screen
        name="adNewPreview"
        component={AdNewPreview}
        options={{
          tabBarButton: () => null,
        }}
      />
      <Screen
        name="itemDetails"
        component={ItemDetails}
        options={{
          tabBarButton: () => null,
        }}
      />
      <Screen
        name="myAds"
        component={MyAds}
        options={{
          tabBarButton: () => null,
        }}
      />
      <Screen
        name="adDetails"
        component={AdDetails}
        options={{
          tabBarButton: () => null,
        }}
      />
    </Navigator>
  );
};
