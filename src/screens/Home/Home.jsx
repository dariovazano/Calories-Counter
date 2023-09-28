import { FlatList, SafeAreaView, View } from "react-native";
import { colors } from "../../constants/colors";

import { CategoryItem } from "./components";
import { Header } from "../../components";
import React from "react";
import dataCategories from "../../data/dataCategories";
import styles from "./Home.style";
import Name from "../../components/Name/Name";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title={"Categories"} />
      <Name />
      <View style={styles.listContainer}>
        <FlatList
          data={dataCategories}
          keyExtractor={(category) => category.title}
          renderItem={({ item }) => (
            <CategoryItem category={item.title} navigation={navigation} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
