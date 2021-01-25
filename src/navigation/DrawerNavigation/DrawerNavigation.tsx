import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Dictionary, screens } from "../../appConstants";
import { MainScreen } from "../../screens";
import { AnimeListStack } from "../StackNavigation";
import { AuthenticationTab } from "../TabNavigation";
import { userSelector } from "../../store";
import { useSelector } from "react-redux";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
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
        }}
      />
      <Drawer.Screen name={screens.ANIME_LIST} component={AnimeListStack} />
      <Drawer.Screen
        name={screens.AUTH}
        component={AuthenticationTab}
        options={{
          title: user ? Dictionary.ACCOUNT_INFO : Dictionary.AUTH_SCREEN_TITLE,
        }}
      />
    </Drawer.Navigator>
  );
};
export default DrawerNavigation;
