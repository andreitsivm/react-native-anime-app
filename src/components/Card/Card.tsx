import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Dictionary } from "appConstants";

interface Props {
  title: string;
  onPress: () => void;
  image: string;
  rating: string;
}

const Card: React.FC<Props> = ({ title, onPress, image, rating }) => {
  return (
    <TouchableOpacity style={styles.wrapper} onPress={onPress}>
      <View style={styles.card_content}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text>{`${Dictionary.RATING} ${rating}`}</Text>
        </View>
        <View>
          <Image style={styles.logo} source={{ uri: image }} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    minHeight: 100,
    borderBottomWidth: 1,
    borderColor: "#000",
    justifyContent: "center",
  },
  card_content: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 16,
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

export default Card;
