import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import { useDispatch } from "react-redux";
import firebase from "firebase";
import { TextInput, HelperText } from "react-native-paper";
import { Layout } from "../../components";
import { saveUser } from "../../store";
import { Dictionary } from "../../appConstants";

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const onSignIn = async () => {
    try {
      const response = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      dispatch(saveUser(response.user));
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
        <TextInput
          label={Dictionary.EMAIL}
          placeholder={Dictionary.INPUT_YOUR_EMAIL}
          keyboardType="email-address"
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
          mode="outlined"
          secureTextEntry
          textContentType="password"
          placeholder={Dictionary.INPUT_YOUR_PASSWORD}
          onChangeText={(password) => setPassword(password)}
        />
        <HelperText />
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
  button: {
    marginTop: 8,
  },
});

export default LoginScreen;
