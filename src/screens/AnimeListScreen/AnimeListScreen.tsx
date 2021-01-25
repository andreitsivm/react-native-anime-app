import React, { useState } from "react";
import {
  ScrollView,
  View,
  Button,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { Layout, Card } from "../../components";
import { BASE_URL, screens, API, Dictionary } from "../../appConstants";
import { useFetch } from "../../hooks/useFetch.hook";
import { Anime } from "../../interfaces";

interface Props {
  navigation: any;
}
interface Data {
  data: Anime[];
  meta: {
    count: string;
  };
  links: {
    first: string;
    last: string;
    next: string;
    prev: string;
  };
}
interface FetchData {
  data: Data;
  errors: object | null;
  isLoading: boolean;
}

const AnimeListScreen: React.FC<Props> = ({ navigation }) => {
  const [url, setUrl] = useState(BASE_URL + API.ANIME);
  const { data, errors, isLoading }: FetchData = useFetch(url);

  const handleNext = () => setUrl(data.links.next);
  const handlePrev = () => setUrl(data.links.prev);

  if (!data && isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <Layout>
      <ScrollView>
        {data?.data.map(({ attributes, id }: any) => (
          <Card
            key={id}
            title={attributes.canonicalTitle}
            image={attributes.posterImage.tiny}
            rating={attributes.averageRating}
            onPress={() => {
              navigation.navigate(screens.ANIME_DETAILS, {
                id,
              });
            }}
          />
        ))}
        <View style={styles.nav}>
          {data?.links.prev && (
            <View style={styles.navItem}>
              <Button
                disabled={isLoading}
                title={Dictionary.PREVIOUS}
                onPress={handlePrev}
              />
            </View>
          )}
          {data?.links.next && (
            <View style={styles.navItem}>
              <Button
                disabled={isLoading}
                title={Dictionary.NEXT}
                onPress={handleNext}
              />
            </View>
          )}
        </View>
      </ScrollView>
    </Layout>
  );
};
const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    height: 350,
  },
  nav: {
    marginTop: 10,
    flex: 1,
    justifyContent: "space-around",
    flexDirection: "row",
  },
  navItem: {
    flex: 1,
    marginHorizontal: 8,
  },
});
export default AnimeListScreen;
