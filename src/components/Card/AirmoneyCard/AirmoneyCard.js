import { View, Text } from "react-native";
import React from "react";
import styles from "./AirmoneyCardStyles";
import { FontAwesome5 } from "react-native-vector-icons";
import { useNavigation, useTheme } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { TouchableOpacity } from "react-native";

const AirmoneyCard = ({ isLoggedIn = false }) => {
  const { colors } = useTheme();
  const { t } = useTranslation();
  const navigation = useNavigation();
  const amount = 0;
  return (
    <View style={[styles.card]}>
      <Text style={[styles.text, { color: colors.text }]}>
        <FontAwesome5 size={16} name="comment-dollar" color={colors.text} />{" "}
        {t("airmoney")}
      </Text>
      <TouchableOpacity
        activeOpacity={0.7}
        underlayColor={"transparent"}
        style={[
          styles.button,
          {
            backgroundColor: colors.background,
            borderColor: colors.infoBackground,
          },
        ]}
        onPress={() => {
          navigation.navigate("Auth", {
            screen: "Auth",
          });
        }}
        disabled={isLoggedIn}
      >
        <Text style={[styles.text, { color: colors.text }]}>
          {isLoggedIn ? (
            <>
              <View style={{ position: "absolute" }}>
                <Text style={[styles.currencyText, { color: colors.text }]}>
                  {t("currency")}
                </Text>
              </View>
              <Text style={[styles.text, { color: colors.text }]}>
                {amount.toFixed(2)}
              </Text>
            </>
          ) : (
            t("login").toUpperCase()
          )}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AirmoneyCard;
