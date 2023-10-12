import { Pressable, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

import { setUser } from "../../features/auth/authSlice";
import styles from "./login.styles";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../../services/authApi";
import { ImageBackground } from "react-native";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [triggerLogin, result] = useLoginMutation();
  const dispatch = useDispatch();

  const onSubmit = () => {
    console.log(email, password);
    triggerLogin({
      email,
      password,
    });
    console.log(result);
    if (result.isSuccess) {
      dispatch(setUser(result));
    }
  };

  const image = {
    uri: "https://images.pexels.com/photos/1400172/pexels-photo-1400172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.loginContainer}>
          <Text style={styles.text}>Inicie seción para comenzar</Text>
          <TextInput
            style={styles.inputEmail}
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.inputEmail}
            value={password}
            onChangeText={setPassword}
          />
          <Pressable style={styles.loginButton} onPress={onSubmit}>
            <Text style={{ color: "white" }}>Login</Text>
          </Pressable>
          <Text style={styles.text}>¿No tienes una cuenta?</Text>
          <Pressable
            style={styles.loginButton}
            onPress={() => navigation.navigate("Signup")}
          >
            <Text style={{ color: "white" }}>Sign up</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;
