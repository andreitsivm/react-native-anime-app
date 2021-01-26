import React, { useState } from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import { Dictionary } from "../../appConstants";
import { Layout } from "../../components";
import firebase from "firebase";
import { saveUser, userSelector } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { Title, Caption } from "react-native-paper";

const AccountScreen: React.FC = () => {
  const mockName = "John Doe";
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  return (
    <Layout>
      <Title>
        <Text>{mockName}</Text>
      </Title>
      <Caption>
        <Text>{user?.email}</Text>
      </Caption>
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
