import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <View style={styles.app}>
      <StatusBar />
      {children}
    </View>
  );
};
const styles = StyleSheet.create({
  app: {
    flex: 1,
    marginHorizontal: 8,
    marginTop: 8,
    marginBottom: 16,
  },
});
export default Layout;
