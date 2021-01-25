import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Layout } from "../../components";
import { Dictionary } from "../../constants";

const LoginScreen: React.FC = () => {
  return (
    <Layout>
      <View>
        <Text style={styles.title}>{Dictionary.SIGN_IN}</Text>
      </View>

      <View>
        <Text style={styles.label}>{Dictionary.EMAIL}</Text>
        <TextInput style={styles.input} />
      </View>
      <View>
        <Text style={styles.label}>{Dictionary.PASSWORD}</Text>
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

export default LoginScreen;
