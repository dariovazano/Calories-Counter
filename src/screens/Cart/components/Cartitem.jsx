import { View, Text, Pressable } from "react-native";
import React from "react";
import Faether from "@expo/vector-icons/Feather";
import styles from "./Cartitem.Style";

const Cartitem = () => {
  return (
    <View>
      <View>
        <Text>Nombre</Text>
      </View>
      <View>
        <View>
          <Text>Cantidad</Text>
          <Text>Precio</Text>
        </View>
        <Pressable>
          <Faether name="trash" size={24} color="red" />
        </Pressable>
      </View>
    </View>
  );
};

export default Cartitem;
