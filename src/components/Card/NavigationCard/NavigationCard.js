import { Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./NavigationCardStyles";
import { useTranslation } from "react-i18next";
import { useTheme } from "@react-navigation/native";
import { AntDesign } from "react-native-vector-icons";

const NavigationCard = ({ screenName, onPress }) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      underlayColor={"transparent"}
      style={[
        styles.card,
        {
          backgroundColor: colors.background,
          borderBottomColor: colors.infoBackground,
        },
      ]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: colors.text }]}>{screenName}</Text>
      <AntDesign size={16} name="right" color={colors.text} />
    </TouchableOpacity>
  );
};

export default NavigationCard;
