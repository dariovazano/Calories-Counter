import { View, Text, FlatList, Pressable } from "react-native";
import React from "react";
import styles from "./Cart.styles";
import cart from "../../data/cart";
import CartItem from "./components/Cartitem";

const Cart = () => {
  const renderItem = () => <CartItem />;
  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={cart}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </View>
      <View>
        <Pressable>
          <Text>Corfirm</Text>
          <View>
            <Text>{`Total $100`}</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default Cart;
