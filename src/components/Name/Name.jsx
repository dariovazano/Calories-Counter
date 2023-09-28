import { View, Text, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setNameSelected } from "../../features/nameSlice";
import { colors } from "../../constants/colors";
import { StyleSheet } from "react-native";

const Name = () => {
  const [inputToAdd, setInputToAdd] = useState("");
  const Name = useSelector((state) => state.Name.nameSelected);
  const dispacth = useDispatch();
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.signs}>{Name}</Text>
      </View>
      <View>
        <TextInput
          style={styles.input}
          placeholder="introducir nombre"
          value={inputToAdd}
          onChangeText={(value) => setInputToAdd(value)}
        />
        <Pressable
          style={styles.counterButtons}
          onPress={() => dispacth(setNameSelected(inputToAdd))}
        >
          <Text>Cargar</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Name;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    height: 100,
    flexDirection: "row",
    backgroundColor: "green",
    justifyContent: "space-between",
  },
  counterButtons: {
    backgroundColor: "blue",
    width: "33%",
    justifyContent: "center",
    alignItems: "center",
  },
  signs: {
    fontSize: 35,
  },
  input: {
    paddingTop: 5,
    backgroundColor: "white",
    width: "100%",
    height: 30,
  },
  inputContaienr: {
    flexDirection: "row",
    marginVertical: 10,
    padding: 10,
  },
});
