import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Layout } from "../../components";

const MainScreen = () => {
  return (
    <Layout>
      <Text style={styles.title}>Welcome to my pet application</Text>
    </Layout>
  );
};
export default MainScreen;
const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: "justify",
  },
});
