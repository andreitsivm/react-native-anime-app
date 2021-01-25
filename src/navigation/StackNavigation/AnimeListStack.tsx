import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  LoginScreen,
  AnimeDetailsScreen,
  AnimeListScreen,
  MainScreen,
} from "screens";
import { Dictionary, screens } from "appConstants";

const Stack = createStackNavigator();

const AnimeListStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={screens.ANIME_LIST}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name={screens.ANIME_LIST}
        component={AnimeListScreen}
        options={{ title: Dictionary.ANIME_LIST_SCREEN_TITLE }}
      />
      <Stack.Screen
        name={screens.ANIME_DETAILS}
        component={AnimeDetailsScreen}
        options={{ title: Dictionary.DETAILS_SCREEN_TITLE }}
      />
    </Stack.Navigator>
  );
};
export default AnimeListStack;
