import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Dictionary, screens } from "../../appConstants";
import { MainScreen } from "../../screens";
import { AnimeListStack } from "../StackNavigation";
import { AuthenticationTab } from "../TabNavigation";
import { userSelector } from "../../store";
import { useSelector } from "react-redux";

const Drawer = createDrawerNavigator();

const DrawerNavigation: React.FC = () => {
  const user = useSelector(userSelector);
  return (
    <Drawer.Navigator
      initialRouteName={screens.MAIN}
      screenOptions={{ headerShown: true }}
    >
      <Drawer.Screen
        name={screens.MAIN}
        component={MainScreen}
        options={{
          title: Dictionary.MAIN,
          drawerLabel: "Home",
          drawerIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name={screens.ANIME_LIST}
        component={AnimeListStack}
        options={{
          title: Dictionary.ANIME_LIST_SCREEN_TITLE,
          drawerLabel: "Anime list",
          drawerIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="clipboard-list"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name={screens.AUTH}
        component={AuthenticationTab}
        options={{
          title: user ? Dictionary.ACCOUNT_INFO : Dictionary.AUTH_SCREEN_TITLE,
          drawerLabel: "Login",
          drawerIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="login-variant"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
export default DrawerNavigation;
