import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";

import { SearchInput } from "../../components";
import styles from "./Products.style";
import { useGetProductsByCategoryQuery } from "../../services/shopApi";
import { useSelector } from "react-redux";
import { Header } from "../../components";
const Products = ({ navigation }) => {
  const category = useSelector((state) => state.shop.categorySelected);
  const [keyword, setKeyword] = useState("");
  const { data, isLoading } = useGetProductsByCategoryQuery(category);

  return (
    <SafeAreaView style={styles.container}>
      <Header title={`${category}`} />
      <SearchInput onSearch={setKeyword} />
      <View style={styles.listContainer}>
        {!isLoading && (
          <FlatList
            data={Object.values(data)}
            numColumns={2}
            columnWrapperStyle={styles.weapperStyle}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.productContainer}
                onPress={() =>
                  navigation.navigate("Details", { product: item })
                }
              >
                <Image
                  style={styles.image}
                  source={{
                    uri: item.images[0],
                  }}
                />
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.valor}>{`${item.valoreEnergetico.toFixed(
                  2
                )} Kcal`}</Text>
                <Text
                  style={styles.macros}
                >{`Proteinas: ${item.proteinas.toFixed(2)} g`}</Text>
                <Text
                  style={styles.macros}
                >{`Carbohidratos: ${item.hidratosDeCarbono.toFixed(
                  2
                )} g`}</Text>
                <Text style={styles.macros}>{`Grasas: ${item.grasas.toFixed(
                  2
                )} g`}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Products;
