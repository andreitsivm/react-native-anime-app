import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Dictionary } from "../../appConstants";
import { Layout } from "../../components";

const AccountScreen: React.FC = () => {
  return (
    <Layout>
      <Button title={Dictionary.LOGOUT} onPress={() => {}} />
    </Layout>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({});
