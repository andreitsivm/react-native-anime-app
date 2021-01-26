import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  LogBox,
} from "react-native";
import { Dictionary } from "../../appConstants";

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
        <View style={styles.infoWrap}>
          <Text style={styles.title}>{title}</Text>
          <Text>{`${Dictionary.RATING} ${rating}`}</Text>
        </View>
        <View style={styles.logoWrap}>
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
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#eee",
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  card_content: {
    flexDirection: "row",
  },
  infoWrap: {
    flexBasis: "75%",
    paddingRight: 8,
    marginRight: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  logoWrap: { flexBasis: "15%" },
  logo: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
});

export default Card;
