import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Layout } from "../../components";

const RegisterScreen = () => {
  return (
    <Layout>
      <Text style={styles.title}>Sign Up</Text>
      <View>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} />
      </View>
      <View>
        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} />
      </View>
      <View>
        <Text style={styles.label}>Repeat password</Text>
        <TextInput style={styles.input} />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: "blue",
  },
  label: {
    fontSize: 18,
  },
});

export default RegisterScreen;
