import React, { useState } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Input, Button, CheckBox } from "@rneui/themed";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const SignUpScreenWireframe = () => {
  const [rectangleCheckboxchecked, setRectangleCheckboxchecked] =
    useState(false);

  return (
    <View style={styles.signUpScreenWireframe}>
      <Image
        style={[styles.logoBoxIcon, styles.logoIconPosition]}
        contentFit="cover"
        source={require("../assets/logo-box.png")}
      />
      
      <Image
        style={[styles.logoBoxIcon1, styles.logoIconPosition]}
        contentFit="cover"
        source={require("../assets/logo-box1.png")}
      />
      <Image
        style={styles.signUpScreenWireframeChild}
        contentFit="cover"
        source={require("../assets/vector-13.png")}
      />
      <Image
        style={styles.signUpScreenWireframeItem}
        contentFit="cover"
        source={require("../assets/rectangle-51.png")}
      />
      <Image
        style={[styles.signUpScreenWireframeInner, styles.signLayout]}
        contentFit="cover"
        source={require("../assets/group-51.png")}
      />
      <Input
        placeholder="Email"
        inputStyle={{ color: "rgba(0, 0, 0, 0.53)" }}
        containerStyle={styles.emailTextInputInput}
      />
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/group-54.png")}
      />
      <Input
        placeholder="Business Name"
        inputStyle={{ color: "rgba(0, 0, 0, 0.53)" }}
        containerStyle={styles.businessNameTextInputInput}
      />
      <Image
        style={[styles.signUpScreenWireframeChild1, styles.signLayout]}
        contentFit="cover"
        source={require("../assets/group-51.png")}
      />
      <Input
        placeholder="FirstName LastName"
        inputStyle={{ color: "rgba(0, 0, 0, 0.53)" }}
        containerStyle={styles.firstNameLastNameTextInputInput}
      />
      <Image
        style={[styles.signUpScreenWireframeChild2, styles.signChildPosition]}
        contentFit="cover"
        source={require("../assets/group-50.png")}
      />
      <Image
        style={[styles.signUpScreenWireframeChild3, styles.signChildPosition]}
        contentFit="cover"
        source={require("../assets/group-50.png")}
      />
      <Input
        placeholder="Confirm Password"
        inputStyle={{ color: "rgba(0, 0, 0, 0.53)" }}
        containerStyle={styles.confirmPasswordTextInputInput}
      />
      <Input
        placeholder="Password"
        inputStyle={{ color: "rgba(0, 0, 0, 0.53)" }}
        containerStyle={styles.passwordTextInputInput}
      />
      <Button
        radius={5}
        iconPosition="left"
        type="solid"
        color="#6983dc"
        containerStyle={styles.rectangleButtonBtn}
        buttonStyle={styles.rectangleButtonBtn1}
      />
      <Text style={styles.signUp}> Sign up</Text>
      <Text style={[styles.forgotPassword, styles.forgotPasswordTypo]}>
        Forgot password?
      </Text>
      <Text style={[styles.newUserRegister, styles.forgotPasswordTypo]}>
        New user register here
      </Text>
      <CheckBox
        style={styles.rectangleCheckbox}
        checked={rectangleCheckboxchecked}
        onPress={() => setRectangleCheckboxchecked(!rectangleCheckboxchecked)}
        checkedColor="#93cf84"
        containerStyle={styles.rectangleCheckboxLayout}
      />
      <Pressable style={styles.recieveDailyEmailsContainer} onPress={() => {}}>
        <Text
          style={[
            styles.recieveDailyEmailsNotificat,
            styles.forgotPasswordTypo,
          ]}
        >{`Recieve daily emails notification 
for reviews`}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  emailTextInputInput: {
    left: 123,
    top: 313,
    position: "absolute",
  },
  businessNameTextInputInput: {
    left: 123,
    top: 370,
    position: "absolute",
  },
  firstNameLastNameTextInputInput: {
    left: 123,
    top: 260,
    position: "absolute",
  },
  confirmPasswordTextInputInput: {
    left: 123,
    top: 475,
    position: "absolute",
  },
  passwordTextInputInput: {
    left: 123,
    top: 420,
    position: "absolute",
  },
  rectangleButtonBtn: {//sign up button
    left: 161,
    top: 552,
    position: "absolute",
  },
  rectangleButtonBtn1: {//sign up button
    borderRadius: 15,
    borderStyle: "solid",
    width: 75,
    height: 37,
  },
  rectangleCheckboxLayout: {//checkbox
    backgroundColor: "transparent",
    padding: 0,
    left: 99,
    top: 644,
    position: "absolute",
  },
  logoIconPosition: {//logo icon
    height: 102,
    width: 187,
    left: 100,
    top: 87,
    position: "absolute",
  },
  signLayout: {
    height: 31,
    position: "absolute",
  },
  signChildPosition: {
    left: 80,
    height: 31,
    width: 35,
    position: "absolute",
  },
  forgotPasswordTypo: {
    color: Color.steelblue,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
  },
  logoBoxIcon: {
    borderRadius: Border.br_mini,
  },
  logoBoxIcon1: {
    borderRadius: 10,
  },
  signUpScreenWireframeChild: {
    top: 45,
    left: 7,
    width: 11,
    height: 18,
    position: "absolute",
  },
  signUpScreenWireframeItem: {
    top: 244,
    left: 58,
    width: 285,
    height: 451,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  signUpScreenWireframeInner: {//email icon
    top: 325,
    width: 35,
    left: 82,
    height: 31,
  },
  groupIcon: {//business icon
    top: 380,
    left: 84,
    width: 33,
    height: 32,
    position: "absolute",
  },
  signUpScreenWireframeChild1: {//FirstName LastName icon
    top: 270,
    width: 35,
    left: 82,
    height: 31,
  },
  signUpScreenWireframeChild2: {//confirm password icon
    top: 486,
  },
  signUpScreenWireframeChild3: {//password icon
    top: 430,
    
  },
  signUp: {//sign up text
    top: 561,
    left: 166,
    fontSize: 16,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: "#fffefe",
    textAlign: "left",
    position: "absolute",
  },
  forgotPassword: {
    top: 606,
    left: 154,
    width: 85,
    height: 17,
    position: "absolute",
  },
  newUserRegister: {
    top: 628,
    left: 143,
    width: 161,
    height: 31,
    position: "absolute",
  },
  rectangleCheckbox: {
    backgroundColor: "#93cf84",
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
  },
  recieveDailyEmailsNotificat: {
    width: 170,
    height: 38,
  },
  recieveDailyEmailsContainer: {
    left: 134,
    top: 649,
    position: "absolute",
  },
  signUpScreenWireframe: {
    backgroundColor: "rgba(234, 234, 234, 0.5)",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default SignUpScreenWireframe;
