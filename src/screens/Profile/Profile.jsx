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
import {
  useGetCategoriesQuery,
  usePostNewProductMutation,
} from "../../services/shopApi";
import SelectDropdown from "react-native-select-dropdown";
import CategoryItemStyle from "../Home/components/CategoryItem/CategoryItem.style";
import { colors } from "../../constants/colors";

const Profile = ({ navigation }) => {
  {
    /* ///////////////////////////INICIALIZO LAS VARIABLES DEL FORMULARIO (execpto la cámara) ////////////////////////////////// */
  }
  const [name, setName] = useState("");
  const [nameOk, setNameOk] = useState("red");
  const [newCategorie, setNewCategorie] = useState("");
  const [categorieOk, setCategorieOk] = useState("red");
  const [newCalories, setNewCalories] = useState("");
  const [caloriesOk, setCaloriesOk] = useState("red");
  const [newFat, setNewFat] = useState("");
  const [fatOk, setFatOk] = useState("red");
  const [newProtein, setNewProtein] = useState("");
  const [proteinOk, setProteinOk] = useState("red");
  const [newCarbohydrates, setNewCarbohydrates] = useState("");
  const [carbonhydratesOk, setCarbonhydratesOk] = useState("red");
  const [newPrice, setNewPrice] = useState("");
  const [priceOk, setPriceOk] = useState("red");
  const [check, setCheck] = useState(true);

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
    triggerSaveNewProduct({
      localId,
      name,
      image,
      newCalories,
      newCategorie,
      newCarbohydrates,
      newProtein,
      newPrice,
      newFat,
    });
    console.log(result2);
    ///
  };

  {
    /* /////////////VERIFICO TODOS LOS IMPUTS ESTEN OK ANTES DE ADMITIR EL GUARDADO DE DATOS //////// */
  }
  useEffect(() => {
    if (
      (categorieOk == "#efefef") &
      (nameOk == "#efefef") &
      (caloriesOk == "#efefef") &
      (proteinOk == "#efefef") &
      (carbonhydratesOk == "#efefef") &
      (fatOk == "#efefef") &
      (priceOk == "#efefef")
    ) {
      console.log("ok");
      setCheck(false);
    } else {
      setCheck(true);
      console.log("nook");
    }
  }, [
    caloriesOk,
    categorieOk,
    proteinOk,
    fatOk,
    carbonhydratesOk,
    nameOk,
    priceOk,
  ]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Header title={"Agregar alimento"} />
        <View style={styles.loginContainer}>
          {/* ///////////////////////////Formulario parte CATEGORIA ////////////////////////////////// */}
          <View style={styles.inputContainer}>
            <Text style={styles.text}>CATEGORÍA</Text>
            <SelectDropdown
              style={styles.select}
              data={auxCat}
              value={newCategorie}
              onSelect={(e) => {
                setNewCategorie(e);
                setCategorieOk("#efefef");
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
            <Text style={[{ color: categorieOk }]}>Elige una categoría</Text>
          </View>
          {/* ///////////////////////////Formulario parte NOMBRE////////////////////////////////// */}
          <View style={styles.inputContainer}>
            <Text style={styles.text}>NOMBRE</Text>
            <TextInput
              style={styles.inputNewProduct}
              value={name}
              onChangeText={(e) => {
                setName(e);
                if (e != "") {
                  setNameOk("#efefef");
                } else {
                  setNameOk("red");
                }
              }}
            />
            <Text style={[{ color: nameOk }]}>Introduce un nombre</Text>
          </View>
          {/* ///////////////////////////Formulario parte CALORIAS ////////////////////////////////// */}
          <View style={styles.inputContainer}>
            <Text style={styles.text}>CALORIAS</Text>
            <TextInput
              keyboardType="numeric"
              style={[styles.inputNewProduct]}
              value={newCalories}
              onChangeText={(e) => {
                setNewCalories(e);
                if (isNaN(Number(e))) {
                  setCaloriesOk("red");
                } else {
                  setCaloriesOk("#efefef");
                  if (e != "") {
                    setCaloriesOk("#efefef");
                  } else {
                    setCaloriesOk("red");
                  }
                }
              }}
            />
            <Text style={[{ color: caloriesOk }]}>
              Introduce un valor válido
            </Text>
          </View>
          {/* ///////////////////////////Formulario parte PROTEINA////////////////////////////////// */}
          <View style={styles.inputContainer}>
            <Text style={styles.text}>PROTEINAS</Text>
            <TextInput
              keyboardType="numeric"
              style={styles.inputNewProduct}
              value={newProtein}
              onChangeText={(e) => {
                setNewProtein(e);
                if (isNaN(Number(e))) {
                  setProteinOk("red");
                } else {
                  setProteinOk("#efefef");
                  if (e != "") {
                    setProteinOk("#efefef");
                  } else {
                    setProteinOk("red");
                  }
                }
              }}
            />
            <Text style={[{ color: proteinOk }]}>
              Introduce un valor válido
            </Text>
          </View>
          {/* ///////////////////////////Formulario parte CARBOHIDRATOS////////////////////////////////// */}
          <View style={styles.inputContainer}>
            <Text style={styles.text}>CARBOHIDRATOS</Text>
            <TextInput
              keyboardType="numeric"
              style={[styles.inputNewProduct]}
              value={newCarbohydrates}
              onChangeText={(e) => {
                setNewCarbohydrates(e);
                if (isNaN(Number(e))) {
                  setCarbonhydratesOk("red");
                } else {
                  setCarbonhydratesOk("#efefef");
                  if (e != "") {
                    setCarbonhydratesOk("#efefef");
                  } else {
                    setCarbonhydratesOk("red");
                  }
                }
              }}
            />
            <Text style={[{ color: carbonhydratesOk }]}>
              Introduce un valor válido
            </Text>
          </View>
          {/* ///////////////////////////Formulario parte GRASAS////////////////////////////////// */}
          <View style={styles.inputContainer}>
            <Text style={styles.text}>GRASAS</Text>
            <TextInput
              keyboardType="numeric"
              style={[styles.inputNewProduct]}
              value={newFat}
              onChangeText={(e) => {
                setNewFat(e);
                if (isNaN(Number(e))) {
                  setFatOk("red");
                } else {
                  setFatOk("#efefef");
                  if (e != "") {
                    setFatOk("#efefef");
                  } else {
                    setFatOk("red");
                  }
                }
              }}
            />
            <Text style={[{ color: fatOk }]}>Introduce un valor válido</Text>
          </View>
          {/* ///////////////////////////Formulario parte PRECIO////////////////////////////////// */}
          <View style={styles.inputContainer}>
            <Text style={styles.text}>PRECIO</Text>
            <TextInput
              keyboardType="numeric"
              style={[styles.inputNewProduct]}
              onChangeText={(e) => {
                setNewPrice(e);
                if (isNaN(Number(e))) {
                  setPriceOk("red");
                } else {
                  setPriceOk("#efefef");
                  if (e != "") {
                    setPriceOk("#efefef");
                  } else {
                    setPriceOk("red");
                  }
                }
              }}
            />
            <Text style={[{ color: priceOk }]}>Introduce un valor válido</Text>
          </View>
        </View>
        {/* ///////////////////////////Formulario IMAGEN ////////////////////////////////// */}
        <View style={styles.inputContainer}>
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
        </View>
        <Pressable
          style={styles.loginButton}
          onPress={confirmImage}
          disabled={check}
        >
          <Text>Guardar</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default Profile;
