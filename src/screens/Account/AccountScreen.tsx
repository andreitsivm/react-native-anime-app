import React from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import { Dictionary } from "../../appConstants";
import { Layout } from "../../components";
import firebase from "firebase";
import { saveUser } from "../../store";
import { useDispatch } from "react-redux";

const AccountScreen: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <Layout>
      <Button
        title={Dictionary.LOGOUT}
        onPress={() => {
          firebase
            .auth()
            .signOut()
            .then(() => dispatch(saveUser(null)))
            .catch((error) => Alert.alert(error.message));
        }}
      />
    </Layout>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({});
