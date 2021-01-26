import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Layout } from "../../components";

const MainScreen: React.FC = () => {
  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome</Text>
        <Text>This is my demo app</Text>
      </View>
    </Layout>
  );
};
export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    textAlign: "justify",
  },
});
