import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { LoginScreen, RegisterScreen } from "screens";
import { screens } from "appConstants";

const Tab = createBottomTabNavigator();

const AuthenticationTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={screens.LOGIN} component={LoginScreen} />
      <Tab.Screen name={screens.REGISTER} component={RegisterScreen} />
    </Tab.Navigator>
  );
};

export default AuthenticationTab;
