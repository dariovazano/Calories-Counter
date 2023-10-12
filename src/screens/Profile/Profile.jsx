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
import styles from "./Profile.styles";
import { usePostProfileImageMutation } from "../../services/shopApi";
import { Header } from "../../components";

const Profile = ({ navigation }) => {
  const image = useSelector((state) => state.auth.imageCamera);
  const { localId } = useSelector((state) => state.auth);
  const [triggerSaveProfileImage, result] = usePostProfileImageMutation();
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
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Header title={"Agregar alimento"} />
        <View style={styles.loginContainer}>
          <Text style={styles.text}>Categoría</Text>
          {/*  <Input mode="flat" label="Email" style={styles.email} /> */}
          <TextInput
            style={styles.inputNewProduct}
            // value={email}
            // onChangeText={setEmail}
          />
          <Text style={styles.text}>Nombre</Text>
          <TextInput
            style={styles.inputNewProduct}
            // value={password}
            // onChangeText={setPassword}
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
