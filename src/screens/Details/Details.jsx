import {
  Image,
  Pressable,
  SafeAreaView,
  Text,
  View,
  TextInput,
} from "react-native";

import React from "react";
import { addItem } from "../../features/cart/cartSlice";
import styles from "./Details.style";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Checkbox } from "react-native-paper";

const Details = ({ route }) => {
  const { product } = route.params;
  const dispatch = useDispatch();
  const [cantidad, setCantidad] = useState("");
  const [cantidadOk, SetCantidadOk] = useState("red");
  const [check, setCheck] = useState(true);

  const handleAddToCart = () => {
    dispatch(addItem({ ...product, quantity: 1 }));
  };

  useEffect(() => {
    if (cantidadOk == "#efefef") {
      console.log("ok");
      setCheck(false);
    } else {
      setCheck(true);
      console.log("nook");
    }
  }, [cantidadOk]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: product.images }}
          resizeMode="cover"
        />
      </View>
      <Text style={styles.title}>{product.title}</Text>

      <Text style={styles.valor}>{`${Number(product.valoreEnegetico).toFixed(
        2
      )} Kcal`}</Text>
      <Text style={styles.macros}>{`Proteinas: ${Number(
        product.proteinas
      ).toFixed(2)} g`}</Text>
      <Text style={styles.macros}>{`Carbohidratos: ${Number(
        product.hidratosDeCarbono
      ).toFixed(2)} g`}</Text>
      <Text style={styles.macros}>
        {`Grasas: ${Number(product.grasas).toFixed(2)} g`}
      </Text>
      <TextInput
        keyboardType="numeric"
        style={styles.inputNewProduct}
        value={cantidad}
        onChangeText={(e) => {
          setCantidad(e);
          if (isNaN(Number(e))) {
            SetCantidadOk("red");
          } else {
            SetCantidadOk("#efefef");
            if (e != "") {
              SetCantidadOk("#efefef");
            } else {
              SetCantidadOk("red");
            }
          }
        }}
      />
      <Text style={[{ color: cantidadOk }]}>Introduce un valor válido</Text>
      <Pressable
        style={styles.loginButton}
        disabled={check}
        onPress={handleAddToCart}
      >
        <Text>Agregar a mi comida</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Details;
