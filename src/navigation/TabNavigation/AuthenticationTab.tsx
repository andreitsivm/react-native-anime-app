import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { LoginScreen, RegisterScreen, AccountScreen } from "../../screens";
import { Dictionary, screens } from "../../appConstants";
import { userSelector } from "../../store";
import { useSelector } from "react-redux";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

const AuthenticationTab: React.FC = () => {
  const user = useSelector(userSelector);
  if (user) {
    return <AccountScreen />;
  }

  return (
    <Tab.Navigator>
      <Tab.Screen
        name={screens.LOGIN}
        component={LoginScreen}
        options={{
          tabBarLabel: Dictionary.SIGN_IN,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="login" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={screens.REGISTER}
        component={RegisterScreen}
        options={{
          tabBarLabel: Dictionary.SIGN_UP,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="contacts-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AuthenticationTab;
