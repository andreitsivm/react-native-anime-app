import React, { useState } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import firebase from "firebase";
import { Layout } from "../../components";
import { Dictionary } from "../../appConstants";
import { TextInput, HelperText } from "react-native-paper";

const RegisterScreen: React.FC = () => {
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
          Alert.alert("Succesfully registered");
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
        <TextInput
          label={Dictionary.EMAIL}
          keyboardType="email-address"
          placeholder={Dictionary.INPUT_YOUR_EMAIL}
          value={email}
          mode="outlined"
          onChangeText={(email) => setEmail(email)}
        />
        <HelperText />
      </View>
      <View>
        <TextInput
          label={Dictionary.PASSWORD}
          value={password}
          secureTextEntry
          mode="outlined"
          textContentType="password"
          placeholder={Dictionary.INPUT_YOUR_PASSWORD}
          onChangeText={(password) => setPassword(password)}
        />
        <HelperText />
      </View>
      <View>
        <TextInput
          label={Dictionary.REPEAT_PASSWORD}
          placeholder={Dictionary.REPEAT_PASSWORD}
          secureTextEntry
          mode="outlined"
          textContentType="password"
          value={confirmedPassword}
          onChangeText={(password) => setConfirmedPassword(password)}
        />
        <HelperText />
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
});

export default RegisterScreen;
