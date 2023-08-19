import { View, Text } from "react-native";
import React from "react";
import styles from "./RegionalSimsStyles";
import { useNavigation, useTheme } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import CountryCard from "../Card/CountryCard/CountryCard";

const RegionalSims = () => {
  const { colors } = useTheme();
  const { t } = useTranslation();
  const navigation = useNavigation();
  return (
    <View style={[styles.container]}>
      <Text style={[styles.title, { color: colors.text }]}>{t("regions")}</Text>
      <CountryCard
        flag={""}
        name={"Asia"}
        onPress={() => {
          navigation.navigate("Region Sims", {
            screen: "Region Sims",
            state: {
              region: "Asia",
            },
          });
        }}
      />
      <CountryCard
        flag={""}
        name={"Africa"}
        onPress={() => console.log("ee")}
      />
      <CountryCard
        flag={""}
        name={"Latin America"}
        onPress={() => console.log("ee")}
      />
      <CountryCard
        flag={""}
        name={"Europe"}
        onPress={() => console.log("ee")}
      />
    </View>
  );
};

export default RegionalSims;
