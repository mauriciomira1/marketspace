import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";
import AdDetails from "@screens/AdDetails";
import AdNew from "@screens/AdNew";
import AdNewPreview from "@screens/AdNewPreview";
import Catalog from "@screens/Catalog";
import Home from "@screens/Home";
import ItemDetails from "@screens/ItemDetails";
import MyAds from "@screens/MyAds";
import { useTheme } from "native-base";
import sizes from "native-base/lib/typescript/theme/base/sizes";
import { House, SignOut, Tag } from "phosphor-react-native";
import { Platform } from "react-native";

type AppRoutes = {
  home: undefined;
  adNew: undefined;
  adNewPreview: undefined;
  itemDetails: undefined;
  catalog: undefined;

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
        tabBarActiveTintColor: "gray.200",
        tabBarInactiveTintColor: "gray.500",
        tabBarStyle: {
          backgroundColor: "white",
          borderTopWidth: 0,
          height: Platform.OS === "android" ? "auto" : 96,
          paddingBottom: sizes[10],
          paddingTop: sizes[6],
        },
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => <House color={color} size={iconSize} />,
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
        name="catalog"
        component={Catalog}
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
