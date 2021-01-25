import React from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import { Dictionary } from "../../appConstants";
import { Layout } from "../../components";
import firebase from "firebase";
import { saveUser, userSelector } from "../../store";
import { useDispatch, useSelector } from "react-redux";

const AccountScreen: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  console.log(user);
  return (
    <Layout>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>{user?.email}</Text>
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
      </View>
    </Layout>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({});
