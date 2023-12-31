import { View, Text } from "react-native";
import React from "react";
import styles from "./ProfileTabStyles";
import { useTheme } from "@react-navigation/native";

const ProfileTab = () => {
  const { colors } = useTheme();
  return (
    <View style={[styles.container]}>
      <Text style={[styles.text, { color: colors.text }]}>ProfileTab</Text>
    </View>
  );
};

export default ProfileTab;
