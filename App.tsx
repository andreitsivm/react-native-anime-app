import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import firebase from "firebase";

import { DrawerNavigation } from "./src/navigation";

const firebaseConfig = {
  apiKey: "AIzaSyA8pwLDgSkmZKzdIzOa5c6SDOJ-dwojHEo",
  authDomain: "anime-list-b5cb3.firebaseapp.com",
  projectId: "anime-list-b5cb3",
  storageBucket: "anime-list-b5cb3.appspot.com",
  messagingSenderId: "490497398780",
  appId: "1:490497398780:web:8f8ab9ce6e454279060479",
};

firebase.initializeApp(firebaseConfig);

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
  );
};
export default App;
