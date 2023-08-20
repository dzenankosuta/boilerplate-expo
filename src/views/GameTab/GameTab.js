import { View, Text } from "react-native";
import React from "react";
import styles from "./GameTabStyles";
import { useTheme } from "@react-navigation/native";

const GameTab = () => {
  const { colors } = useTheme();
  return (
    <View style={[styles.container]}>
      <Text style={[styles.text, { color: colors.text }]}>GameTab</Text>
    </View>
  );
};

export default GameTab;
