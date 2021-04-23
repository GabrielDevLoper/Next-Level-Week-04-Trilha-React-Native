import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import img from "../assets/gabriel.jpeg";

export function Header() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.userName}>Gabriel</Text>
      </View>
      <Image source={img} style={styles.image} resizeMode="contain" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    marginTop: getStatusBarHeight(),
  },
  userName: {
    fontFamily: fonts.heading,
    color: colors.heading,
    fontSize: 32,
    lineHeight: 40,
  },

  greeting: {
    fontFamily: fonts.text,
    color: colors.heading,
    fontSize: 32,
  },

  image: {
    width: 70,
    height: 70,
    borderRadius: 80,
  },
});
