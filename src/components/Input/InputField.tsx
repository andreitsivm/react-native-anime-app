import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

interface Props {
  label: string;
}

const InputField: React.FC<Props> = ({ label }) => {
  return (
    <View style={styles.formControl}>
      <View style={styles.label}>
        <Text style={styles.labelText}></Text>
      </View>

      <TextInput style={styles.input}></TextInput>
      <View style={styles.helper}>
        <Text style={styles.helperText}></Text>
      </View>
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  formControl: {
    flex: 1,
  },
  label: {},
  labelText: {},
  input: {},
  helper: {},
  helperText: {},
});
