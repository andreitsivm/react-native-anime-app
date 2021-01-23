import React from "react";
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { Layout } from "../../components/Layout";
import { Dictionary, API, BASE_URL } from "../../constants/";
import { useFetch } from "../../hooks/useFetch.hook";

interface Props {
  navigation: any;
  route: any;
}

const Details: React.FC<Props> = ({ route, navigation }) => {
  const { id } = route.params;

  const { isLoading, data, errors } = useFetch(`${BASE_URL}${API.ANIME}/${id}`);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <Layout>
      <ScrollView style={{ flex: 1 }}>
        <Image
          style={styles.poster}
          source={{ uri: data?.data.attributes.posterImage.original }}
        />
        <View style={styles.titleWrap}>
          <Text style={styles.title}>
            {data?.data.attributes.canonicalTitle}
          </Text>
        </View>
        <View>
          <Text style={styles.description}>
            {data?.data.attributes.synopsis}
          </Text>
        </View>

        <Button
          title={Dictionary.GO_BACK}
          onPress={() => navigation.goBack()}
        />
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  poster: {
    width: "100%",
    height: 300,
    resizeMode: "stretch",
  },
  titleWrap: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 30,
  },
  description: {
    fontSize: 16,
    textAlign: "justify",
  },
});

export default Details;
