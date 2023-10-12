import { Image, Pressable, SafeAreaView, Text, View } from "react-native";

import React from "react";
import { addItem } from "../../features/cart/cartSlice";
import styles from "./Details.style";
import { useDispatch } from "react-redux";

const Details = ({ route }) => {
  const { product } = route.params;
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem({ ...product, quantity: 1 }));
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: product.images[0] }}
          resizeMode="cover"
        />
      </View>
      <Text style={styles.title}>{product.title}</Text>
      <Text>{product.description}</Text>
      <Text style={styles.valor}>{`${product.valoreEnergetico.toFixed(
        2
      )} Kcal`}</Text>
      <Text style={styles.macros}>{`Proteinas: ${product.proteinas.toFixed(
        2
      )} g`}</Text>
      <Text
        style={styles.macros}
      >{`Carbohidratos: ${product.hidratosDeCarbono.toFixed(2)} g`}</Text>
      <Text style={styles.macros}>{`Grasas: ${product.grasas.toFixed(
        2
      )} g`}</Text>
      <Pressable style={styles.loginButton}>
        <Text>Agregar a mi comida</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Details;
