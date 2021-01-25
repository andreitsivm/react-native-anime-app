import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { LoginScreen, RegisterScreen } from "../../screens";
import { Dictionary, screens } from "../../constants";

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
