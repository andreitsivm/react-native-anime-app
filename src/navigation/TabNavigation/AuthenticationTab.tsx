import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { LoginScreen, RegisterScreen, AccountScreen } from "../../screens";
import { screens } from "../../appConstants";
import { userSelector } from "../../store";
import { useSelector } from "react-redux";

const Tab = createBottomTabNavigator();

const AuthenticationTab = () => {
  const user = useSelector(userSelector);
  if (user) {
    return <AccountScreen />;
  }

  return (
    <Tab.Navigator>
      <Tab.Screen name={screens.LOGIN} component={LoginScreen} />
      <Tab.Screen name={screens.REGISTER} component={RegisterScreen} />
    </Tab.Navigator>
  );
};

export default AuthenticationTab;
