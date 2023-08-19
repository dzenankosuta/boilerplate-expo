import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./GlobalSimsStyles";
import { useTheme } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { moderateScale } from "react-native-size-matters";
import { useTranslation } from "react-i18next";
import RegionSimCard from "../Card/SimCards/RegionSimCard";
import GlobalSimCard from "../Card/SimCards/GlobalSimCard";

const GlobalSims = () => {
  const { colors } = useTheme();
  const { t } = useTranslation();
  const [selectedSims, setSelectedSims] = useState("data");

  return (
    <View style={[styles.container]}>
      <View style={[styles.chooseSimContainer]}>
        {selectedSims === "data" ? (
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={["#FFBA86", "#F6635C", "#C23373", "#79155B"]}
            style={{
              width: "50%",
              height: "100%",
              borderTopLeftRadius: moderateScale(7, 0.2),
              borderBottomLeftRadius: moderateScale(7, 0.2),
            }}
          >
            <TouchableOpacity
              activeOpacity={0.7}
              underlayColor={"transparent"}
              style={[
                styles.option,
                {
                  borderTopLeftRadius: moderateScale(7, 0.2),
                  borderBottomLeftRadius: moderateScale(7, 0.2),
                },
              ]}
              onPress={() => setSelectedSims("data")}
            >
              <Text
                style={[
                  styles.text,
                  {
                    color:
                      selectedSims === "data" ? colors.background : colors.text,
                  },
                ]}
              >
                {t("data")}
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        ) : (
          <TouchableOpacity
            activeOpacity={1}
            underlayColor={"transparent"}
            style={[
              styles.option,
              {
                backgroundColor: colors.background,
                borderTopLeftRadius: moderateScale(7, 0.2),
                borderBottomLeftRadius: moderateScale(7, 0.2),
              },
            ]}
            onPress={() => setSelectedSims("data")}
          >
            <Text
              style={[
                styles.text,
                {
                  color:
                    selectedSims === "data" ? colors.background : colors.text,
                },
              ]}
            >
              {t("data")}
            </Text>
          </TouchableOpacity>
        )}
        {selectedSims === "other" ? (
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={["#79155B", "#C23373", "#F6635C", "#FFBA86"]}
            style={{
              width: "50%",
              height: "100%",
              borderTopRightRadius: moderateScale(7, 0.2),
              borderBottomRightRadius: moderateScale(7, 0.2),
            }}
          >
            <TouchableOpacity
              activeOpacity={0.7}
              underlayColor={"transparent"}
              style={[
                styles.option,
                {
                  borderTopRightRadius: moderateScale(7, 0.2),
                  borderBottomRightRadius: moderateScale(7, 0.2),
                },
              ]}
              onPress={() => setSelectedSims("other")}
            >
              <Text
                style={[
                  styles.text,
                  {
                    color:
                      selectedSims === "other"
                        ? colors.background
                        : colors.text,
                  },
                ]}
              >
                {t("data_calls_text")}
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        ) : (
          <TouchableOpacity
            activeOpacity={1}
            underlayColor={"transparent"}
            style={[
              styles.option,
              {
                backgroundColor: colors.background,
                borderTopRightRadius: moderateScale(7, 0.2),
                borderBottomRightRadius: moderateScale(7, 0.2),
              },
            ]}
            onPress={() => setSelectedSims("other")}
          >
            <Text
              style={[
                styles.text,
                {
                  color:
                    selectedSims === "other" ? colors.background : colors.text,
                },
              ]}
            >
              {t("data_calls_text")}
            </Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={[styles.simCards]}>
        {selectedSims === "data" ? (
          <RegionSimCard
            region={"Discover"}
            coverage={130}
            supportedCountries={[
              {
                name: "United States",
                flag: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png",
              },
              {
                name: "Canada",
                flag: "https://cdn.britannica.com/68/7068-004-7848FEB4/Flag-Canada.jpg",
              },
            ]}
            data={1}
            validity={7}
            price={"US$9"}
            background={"#102C57"}
            onPress={() => console.log("a")}
          />
        ) : (
          <GlobalSimCard
            region={"Discover+"}
            coverage={130}
            supportedCountries={[
              {
                name: "United States",
                flag: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png",
              },
              {
                name: "Canada",
                flag: "https://cdn.britannica.com/68/7068-004-7848FEB4/Flag-Canada.jpg",
              },
            ]}
            data={1}
            calls={10}
            sms={10}
            validity={7}
            price={"US$15"}
            background={"#75C2F6"}
            onPress={() => console.log("a")}
          />
        )}
      </View>
    </View>
  );
};

export default GlobalSims;
