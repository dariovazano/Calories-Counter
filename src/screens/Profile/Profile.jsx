import * as ImagePicker from "expo-image-picker";

import {
  Image,
  Pressable,
  Text,
  View,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setCameraImage } from "../../features/auth/authSlice";

////
import { setNewName } from "../../features/newProduct/newProductSlice";
/////

import styles from "./Profile.styles";
import { usePostProfileImageMutation } from "../../services/shopApi";
import { Header } from "../../components";
import {
  useGetCategoriesQuery,
  usePostNewProductMutation,
} from "../../services/shopApi";
import SelectDropdown from "react-native-select-dropdown";
import CategoryItemStyle from "../Home/components/CategoryItem/CategoryItem.style";

const Profile = ({ navigation }) => {
  /////
  const [name, setName] = useState("");
  /////

  ///
  const { data, isLoading } = useGetCategoriesQuery();
  const auxCat = [];
  data.forEach((element) => {
    auxCat.push(element.title);
  });

  ///

  const image = useSelector((state) => state.auth.imageCamera);
  const { localId } = useSelector((state) => state.auth);
  const [triggerSaveProfileImage, result] = usePostProfileImageMutation();
  ///
  const [triggerSaveNewProduct, result2] = usePostNewProductMutation();
  ///

  const dispatch = useDispatch();

  const verifyCameraPermissions = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      return false;
    }
    return true;
  };

  const pickImage = async () => {
    const isCameraOk = await verifyCameraPermissions();

    if (isCameraOk) {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [9, 16],
        base64: true,
        quality: 0.4,
      });
      if (!result.canceled) {
        console.log(result.assets);
        dispatch(
          setCameraImage(`data:image/jpeg;base64,${result.assets[0].base64}`)
        );
      }
    }
  };

  const confirmImage = () => {
    triggerSaveProfileImage({ image, localId });
    console.log(result);
    ///
    triggerSaveNewProduct({ name, image });
    console.log(result2);
    ///
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Header title={"Agregar alimento"} />
        <View style={styles.loginContainer}>
          <Text style={styles.text}>Categoría</Text>
          {/*  <Input mode="flat" label="Email" style={styles.email} /> */}

          <SelectDropdown
            data={auxCat}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item;
            }}
          />

          <TextInput
            style={styles.inputNewProduct}
            // value={email}
            // onChangeText={setEmail}
          />
          <Text style={styles.text}>{name}</Text>
          <TextInput
            style={styles.inputNewProduct}
            value={name}
            onChangeText={setName}
          />
          <Text style={styles.text}>valor energético</Text>
          <TextInput
            style={styles.inputNewProduct}
            // value={confirmPass}
            // onChangeText={setConfirmPass}
          />
          <Text style={styles.text}>Proteinas</Text>
          <TextInput
            style={styles.inputNewProduct}
            // value={confirmPass}
            // onChangeText={setConfirmPass}
          />
          <Text style={styles.text}>Carboidratos</Text>
          <TextInput
            style={styles.inputNewProduct}
            // value={confirmPass}
            // onChangeText={setConfirmPass}
          />
          <Text style={styles.text}>Grasas</Text>
          <TextInput
            style={styles.inputNewProduct}
            // value={confirmPass}
            // onChangeText={setConfirmPass}
          />
        </View>
        {image ? (
          <Image
            source={{
              uri: image,
            }}
            style={styles.image}
            resizeMode="cover"
          />
        ) : (
          <Image
            source={{
              uri: "https://images.pexels.com/photos/8471739/pexels-photo-8471739.jpeg?auto=compress&cs=tinysrgb&w=600",
            }}
            style={styles.image}
            resizeMode="cover"
          />
        )}
        <Pressable style={styles.loginButton} onPress={pickImage}>
          <Text>Tomar foto</Text>
        </Pressable>
        <Pressable style={styles.loginButton} onPress={confirmImage}>
          <Text>Guardar</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default Profile;
