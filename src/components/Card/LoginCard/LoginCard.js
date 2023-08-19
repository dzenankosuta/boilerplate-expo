import { Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./LoginCardStyles";
import { useTranslation } from "react-i18next";
import { useTheme } from "@react-navigation/native";
import { FontAwesome } from "react-native-vector-icons";

const LoginCard = ({ onPress }) => {
  const { t } = useTranslation();
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      underlayColor={"transparent"}
      style={[styles.card, { backgroundColor: colors.background }]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: colors.text }]}>
        {t("login")} / {t("signup")}
      </Text>
      <FontAwesome size={34} name="user-circle-o" color={colors.text} />
    </TouchableOpacity>
  );
};

export default LoginCard;
