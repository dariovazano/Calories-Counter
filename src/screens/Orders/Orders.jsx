import { FlatList, Text, View } from "react-native";

import React from "react";
import styles from "./Orders.Styles";
import { useGetOrdersQuery } from "../../services/shopApi";

const Orders = () => {
  const { data, isLoading } = useGetOrdersQuery();

  return (
    <View styles={styles.container}>
      {!isLoading && (
        <FlatList
          data={data}
          renderItem={({ item }) => <Text>{item.name}</Text>}
          key={(item) => item}
        />
      )}
    </View>
  );
};

export default Orders;
