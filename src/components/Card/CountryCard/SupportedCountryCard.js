import { Text, View, Image } from "react-native";
import React from "react";
import styles from "./SupportedCountryCardStyles";
import { useTheme } from "@react-navigation/native";
import { moderateScale } from "react-native-size-matters";

const SupportedCountryCard = ({ flag, country }) => {
  const { colors } = useTheme();

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: colors.background,
          borderBottomColor: colors.infoBackground,
        },
      ]}
    >
      <View
        style={[
          styles.flag,
          {
            backgroundColor: flag ? colors.background : colors.infoBackground,
          },
        ]}
      >
        {flag ? (
          <Image
            source={{
              uri: flag,
            }}
            style={[styles.img]}
          />
        ) : (
          <></>
        )}
      </View>
      <Text style={[styles.text, { color: colors.text }]}>{country}</Text>
    </View>
  );
};

export default SupportedCountryCard;
