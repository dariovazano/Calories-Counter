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
import {
  useGetProductsByCategoryQuery,
  useGetProductsQuery,
} from "../../services/shopApi";
import { useSelector } from "react-redux";
import { Header } from "../../components";
const Products = ({ navigation }) => {
  const category = useSelector((state) => state.shop.categorySelected);
  const { localId } = useSelector((state) => state.auth);
  const [keyword, setKeyword] = useState("");
  //const { data, isLoading } = useGetProductsByCategoryQuery(category);
  const { data, isLoading } = useGetProductsQuery(localId);

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
                    uri: item.images,
                  }}
                />
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.valor}>{`${Number(
                  item.valoreEnegetico
                ).toFixed(2)} Kcal`}</Text>
                <Text style={styles.macros}>{`Proteinas: ${Number(
                  item.proteinas
                ).toFixed(2)} g`}</Text>
                <Text style={styles.macros}>{`Carbohidratos: ${Number(
                  item.hidratosDeCarbono
                ).toFixed(2)} g`}</Text>
                <Text style={styles.macros}>{`Grasas: ${Number(
                  item.grasas
                ).toFixed(2)} g`}</Text>
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
