import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "./RegionSimCardStyles";
import { useTranslation } from "react-i18next";
import { useNavigation, useTheme } from "@react-navigation/native";
import { AntDesign, Fontisto, FontAwesome5 } from "react-native-vector-icons";
import { moderateScale } from "react-native-size-matters";
import { LinearGradient } from "expo-linear-gradient";

const RegionSimCard = ({
  region,
  coverage,
  supportedCountries,
  validity,
  data,
  price,
  background,
  onPress,
}) => {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const navigation = useNavigation();

  const isColorDark = (hexColor) => {
    const cleanHexColor = hexColor.replace("#", "");

    const red = parseInt(cleanHexColor.substr(0, 2), 16);
    const green = parseInt(cleanHexColor.substr(2, 2), 16);
    const blue = parseInt(cleanHexColor.substr(4, 2), 16);

    const luma = 0.299 * red + 0.587 * green + 0.114 * blue;

    return luma <= 128;
  };

  const lightenColor = (hexColor, percent) => {
    const cleanHexColor = hexColor.replace("#", "");

    const red = parseInt(cleanHexColor.substr(0, 2), 16);
    const green = parseInt(cleanHexColor.substr(2, 2), 16);
    const blue = parseInt(cleanHexColor.substr(4, 2), 16);

    const newRed = Math.min(255, red + (255 - red) * percent);
    const newGreen = Math.min(255, green + (255 - green) * percent);
    const newBlue = Math.min(255, blue + (255 - blue) * percent);

    const newHexColor = `#${Math.round(newRed)
      .toString(16)
      .padStart(2, "0")}${Math.round(newGreen)
      .toString(16)
      .padStart(2, "0")}${Math.round(newBlue).toString(16).padStart(2, "0")}`;

    return newHexColor;
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      underlayColor={"transparent"}
      style={[styles.card, { backgroundColor: background }]}
      onPress={onPress}
    >
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={[
          lightenColor(background, 0.2),
          lightenColor(background, 0.15),
          lightenColor(background, 0.1),
          background,
        ]}
        style={{ width: "100%", borderRadius: moderateScale(7, 0.2) }}
      >
        <View
          style={[
            styles.row,
            {
              backgroundColor: "transparent",
              borderBottomColor: `${colors.background2}33`,
              height: moderateScale(75, 0.2),
            },
          ]}
        >
          <View style={{ width: "60%" }}>
            <Text
              style={[
                styles.providerName,
                {
                  color: isColorDark(background)
                    ? colors.background2
                    : colors.text,
                },
              ]}
            >
              {region}
            </Text>
          </View>
          <View style={[styles.smallSimContainer]}>
            <View
              style={[
                styles.smallSim,
                { backgroundColor: `${colors.infoBackground}` },
              ]}
            ></View>
          </View>
        </View>
        <View
          style={[
            styles.row,
            {
              backgroundColor: "transparent",
              borderBottomColor: `${colors.background2}33`,
            },
          ]}
        >
          <View style={[styles.firstColumn, { width: "55%" }]}>
            <Text>
              <AntDesign
                size={14}
                name="earth"
                color={
                  isColorDark(background) ? colors.background2 : colors.text
                }
              />
              {"   "}
            </Text>
            <Text
              style={[
                styles.text,
                {
                  color: isColorDark(background)
                    ? colors.background2
                    : colors.text,
                },
              ]}
            >
              {t("coverage").toUpperCase()}
            </Text>
          </View>
          <View
            style={[
              styles.secondColumn,
              {
                width: "45%",
              },
            ]}
          >
            <TouchableOpacity
              style={[
                styles.coverageButton,
                {
                  borderColor: isColorDark(background)
                    ? colors.background2
                    : colors.text,
                },
              ]}
              activeOpacity={0.7}
              underlayColor={"transparent"}
              onPress={() => {
                navigation.navigate("Supported Countries", {
                  screen: "Supported Countries",
                  state: {
                    countries: supportedCountries,
                  },
                });
              }}
            >
              <Text
                style={[
                  styles.coverageButtonText,
                  {
                    color: isColorDark(background)
                      ? colors.background2
                      : colors.text,
                  },
                ]}
              >
                {coverage} {t("countries").toUpperCase()}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={[
            styles.row,
            {
              backgroundColor: "transparent",
              borderBottomColor: `${colors.background2}33`,
              borderBottomWidth: 2,
            },
          ]}
        >
          <View style={[styles.firstColumn]}>
            <Text
              style={{
                transform: [{ rotate: "90deg" }],
              }}
            >
              <Fontisto
                size={14}
                name="arrow-swap"
                color={
                  isColorDark(background) ? colors.background2 : colors.text
                }
              />
            </Text>
            <Text
              style={[
                styles.text,
                {
                  color: isColorDark(background)
                    ? colors.background2
                    : colors.text,
                },
              ]}
            >
              {"   "}
              {t("data").toUpperCase()}
            </Text>
          </View>
          <Text
            style={[
              styles.secondColumn,
              {
                color: isColorDark(background)
                  ? colors.background2
                  : colors.text,
              },
            ]}
          >
            {data} {t("gb")}
          </Text>
        </View>
        <View
          style={[
            styles.row,
            {
              backgroundColor: "transparent",
              borderBottomColor: `${colors.background2}33`,
            },
          ]}
        >
          <View style={[styles.firstColumn]}>
            <Text>
              <FontAwesome5
                size={14}
                name="calendar-day"
                color={
                  isColorDark(background) ? colors.background2 : colors.text
                }
              />
            </Text>
            <Text
              style={[
                styles.text,
                {
                  color: isColorDark(background)
                    ? colors.background2
                    : colors.text,
                },
              ]}
            >
              {"   "}
              {t("validity").toUpperCase()}
            </Text>
          </View>
          <Text
            style={[
              styles.secondColumn,
              {
                color: isColorDark(background)
                  ? colors.background2
                  : colors.text,
              },
            ]}
          >
            {validity} {t("days")}
          </Text>
        </View>
        <View
          style={[
            styles.row,
            {
              backgroundColor: "transparent",
              borderBottomWidth: 0,
              minHeight: moderateScale(80, 0.2),
            },
          ]}
        >
          <TouchableOpacity
            style={[
              styles.payButton,
              {
                borderColor: isColorDark(background)
                  ? colors.background2
                  : colors.text,
              },
            ]}
            activeOpacity={0.7}
            underlayColor={"transparent"}
            onPress={onPress}
          >
            <Text
              style={[
                styles.payButtonText,
                {
                  color: isColorDark(background)
                    ? colors.background2
                    : colors.text,
                },
              ]}
            >
              {price} - {t("buy_now").toUpperCase()}
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default RegionSimCard;
