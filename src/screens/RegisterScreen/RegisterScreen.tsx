import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Layout } from "../../components";
import { Dictionary } from "../../constants";

const RegisterScreen = () => {
  return (
    <Layout>
      <Text style={styles.title}>{Dictionary.SIGN_UP}</Text>
      <View>
        <Text style={styles.label}>{Dictionary.EMAIL}</Text>
        <TextInput style={styles.input} />
      </View>
      <View>
        <Text style={styles.label}>{Dictionary.PASSWORD}</Text>
        <TextInput style={styles.input} />
      </View>
      <View>
        <Text style={styles.label}>{Dictionary.REPEAT_PASSWORD}</Text>
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
