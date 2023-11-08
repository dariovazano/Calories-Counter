import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import React from "react";
import styles from "./Orders.Styles";
import { useGetOrdersQuery } from "../../services/shopApi";
import { useSelector } from "react-redux";

const Orders = () => {
  const { localId } = useSelector((state) => state.auth);
  const { data, isLoading } = useGetOrdersQuery();
  console.log(data);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listContainer}>
        {!isLoading && (
          <FlatList
            data={Object.values(data)}
            renderItem={({ item }) => (
              <View style={styles.productContainer}>
                <Text style={styles.fecha}>{Date(item.Id)}</Text>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.valor}>{`${Number(item.calorias).toFixed(
                  2
                )} Kcal`}</Text>
                <Text style={styles.macros}>{`Proteinas: ${Number(
                  item.proteinas
                ).toFixed(2)} g`}</Text>
                <Text style={styles.macros}>{`Carbohidratos: ${Number(
                  item.carbohidratos
                ).toFixed(2)} g`}</Text>
                <Text style={styles.macros}>{`Grasas: ${Number(
                  item.grasas
                ).toFixed(2)} g`}</Text>
                <Pressable>
                  <Text>eliminar</Text>
                </Pressable>
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Orders;
