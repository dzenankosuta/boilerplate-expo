import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "./CountryCardStyles";
import { useTheme } from "@react-navigation/native";
import { AntDesign } from "react-native-vector-icons";

const CountryCard = ({ flag, name, onPress }) => {
  const { colors } = useTheme();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      underlayColor={"transparent"}
      style={[styles.card, { backgroundColor: colors.background }]}
      onPress={onPress}
    >
      <View
        style={[
          styles.flag,
          {
            backgroundColor: flag ? colors.background : colors.infoBackground,
          },
        ]}
      >
        {flag}
      </View>
      <Text style={[styles.name, { color: colors.text }]}>{name}</Text>
      <AntDesign size={16} name="right" color={colors.text} />
    </TouchableOpacity>
  );
};

export default CountryCard;
