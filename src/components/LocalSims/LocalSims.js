import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./LocalSimsStyles";
import { useNavigation, useTheme } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import CountryCard from "../Card/CountryCard/CountryCard";
import { moderateScale } from "react-native-size-matters";

const LocalSims = () => {
  const { colors } = useTheme();
  const { t } = useTranslation();
  const navigation = useNavigation();
  return (
    <View style={[styles.container]}>
      <Text style={[styles.title, { color: colors.text }]}>
        {t("popular_countries")}
      </Text>
      <CountryCard
        flag={
          <Image
            source={{
              uri: "https://cdn.britannica.com/02/6202-004-5E2B285D/Flag-Bosnia-and-Herzegovina.jpg",
            }}
            style={{
              width: "100%",
              height: moderateScale(30, 0.2),
              resizeMode: "cover",
            }}
          />
        }
        name={"Bosnia and Hercegovina"}
        onPress={() => {
          navigation.navigate("Country Sims", {
            screen: "Country Sims",
            state: {
              country: "Bosnia and Hercegovina",
            },
          });
        }}
      />
      <CountryCard
        flag={
          <Image
            source={{
              uri: "https://cdn.britannica.com/40/1840-004-718BA773/Flag-Jordan.jpg",
            }}
            style={{
              width: "100%",
              height: moderateScale(30, 0.2),
              resizeMode: "cover",
            }}
          />
        }
        name={"Jordan"}
        onPress={() => console.log("ee")}
      />
      <CountryCard
        flag={""}
        name={"Serbia"}
        onPress={() => console.log("ee")}
      />
      <CountryCard
        flag={
          <Image
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/220px-Flag_of_Turkey.svg.png",
            }}
            style={{
              width: "100%",
              height: moderateScale(30, 0.2),
              resizeMode: "cover",
            }}
          />
        }
        name={"Turkey"}
        onPress={() => console.log("ee")}
      />
    </View>
  );
};

export default LocalSims;
