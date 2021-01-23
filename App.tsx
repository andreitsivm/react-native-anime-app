import "react-native-gesture-handler";
import React from "react";
import { HomeScreen, DetailsScreen } from "./src/screens";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Dictionary, screens } from "./src/constants";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name={screens.MAIN}
          component={HomeScreen}
          options={{ title: "Anime List" }}
        />
        <Stack.Screen
          name={screens.DETAILS}
          component={DetailsScreen}
          options={{ title: "Details" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
