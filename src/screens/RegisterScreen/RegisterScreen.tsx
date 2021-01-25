import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button, Alert } from "react-native";
import firebase from "firebase";
import { Layout } from "../../components";
import { Dictionary } from "../../appConstants";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  const onSignUp = async () => {
    if (password === confirmedPassword) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((response) => {
          console.log(response.user);
          Alert.alert("Succesfully register");
        })
        .then(() => {
          setEmail("");
          setPassword("");
          setConfirmedPassword("");
        })
        .catch((error) => Alert.alert(error.message));
    }
  };

  return (
    <Layout>
      <Text style={styles.title}>{Dictionary.SIGN_UP}</Text>
      <View>
        <Text style={styles.label}>{Dictionary.EMAIL}</Text>
        <TextInput
          style={styles.input}
          keyboardType="email-address"
          placeholder={Dictionary.INPUT_YOUR_EMAIL}
          value={email}
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View>
        <Text style={styles.label}>{Dictionary.PASSWORD}</Text>
        <TextInput
          style={styles.input}
          value={password}
          placeholder={Dictionary.INPUT_YOUR_PASSWORD}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <View>
        <Text style={styles.label}>{Dictionary.REPEAT_PASSWORD}</Text>
        <TextInput
          placeholder={Dictionary.REPEAT_PASSWORD}
          style={styles.input}
          value={confirmedPassword}
          onChangeText={(password) => setConfirmedPassword(password)}
        />
      </View>
      <View style={styles.button}>
        <Button
          disabled={email === "" || password === "" || confirmedPassword === ""}
          title={Dictionary.SIGN_UP}
          onPress={onSignUp}
        />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
  },
  button: {
    marginTop: 8,
  },
  input: {
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "blue",
    padding: 5,
    borderRadius: 5,
  },
  label: {
    fontSize: 18,
  },
});

export default RegisterScreen;
