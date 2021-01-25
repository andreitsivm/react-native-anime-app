import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import firebase from "firebase";
import { Layout } from "components";
import { Dictionary } from "appConstants";

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSignIn = async () => {
    try {
      const response = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      Alert.alert("Succesfully logined");
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <Layout>
      <View>
        <Text style={styles.title}>{Dictionary.SIGN_IN}</Text>
      </View>

      <View>
        <Text style={styles.label}>{Dictionary.EMAIL}</Text>
        <TextInput
          style={styles.input}
          keyboardType="email-address"
          value={email}
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View>
        <Text style={styles.label}>{Dictionary.PASSWORD}</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <View style={styles.button}>
        <Button
          disabled={email === "" || password === ""}
          title={Dictionary.SIGN_IN}
          onPress={onSignIn}
        />
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
  button: {
    marginTop: 8,
  },
});

export default LoginScreen;
