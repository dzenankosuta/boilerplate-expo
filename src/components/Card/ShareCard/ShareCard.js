import { Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./ShareCardStyles";
import { useTranslation } from "react-i18next";
import { useTheme } from "@react-navigation/native";
import { MaterialIcons } from "react-native-vector-icons";

const ShareCard = ({ onPress }) => {
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
        {t("share_with_friends")}
      </Text>
      <MaterialIcons size={16} name="open-in-new" color={colors.text} />
    </TouchableOpacity>
  );
};

export default ShareCard;
