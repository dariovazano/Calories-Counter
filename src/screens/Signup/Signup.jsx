import { Pressable, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

import { TextInput as Input } from "react-native-paper";
import { setUser } from "../../features/auth/authSlice";
import styles from "./Signup.styles";
import { useDispatch } from "react-redux";
import { useSignUpMutation } from "../../services/authApi";
import { ImageBackground } from "react-native";

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [triggerSignup, result] = useSignUpMutation();
  const dispatch = useDispatch();

  const onSubmit = () => {
    console.log(email, password, confirmPass);
    triggerSignup({
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
          <Text style={styles.text}>Sing up to start</Text>
          {/*  <Input mode="flat" label="Email" style={styles.email} /> */}
          <TextInput
            style={styles.inputEmail}
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.inputEmail}
            value={confirmPass}
            onChangeText={setConfirmPass}
          />
          <TextInput
            style={styles.inputEmail}
            value={password}
            onChangeText={setPassword}
          />
          <Pressable style={styles.loginButton} onPress={onSubmit}>
            <Text style={{ color: "white" }}>Sign up</Text>
          </Pressable>
          <Text style={styles.text}>Already have an account?</Text>
          <Pressable
            style={styles.loginButton}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={{ color: "white" }}>Login</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Signup;
