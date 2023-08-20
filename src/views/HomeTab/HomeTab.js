import { View, Text } from "react-native";
import React from "react";
import styles from "./HomeTabStyles";
import { useTheme } from "@react-navigation/native";

const HomeTab = () => {
  const { colors } = useTheme();
  return (
    <View style={[styles.container]}>
      <Text style={[styles.text, { color: colors.text }]}>HomeTab</Text>
    </View>
  );
};

export default HomeTab;
