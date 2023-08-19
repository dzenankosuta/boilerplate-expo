import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "./ProfileCardScreensStyles";
import { useTranslation } from "react-i18next";
import { useTheme } from "@react-navigation/native";
import { AntDesign } from "react-native-vector-icons";

const ProfileCardScreens = ({
  onPressFirst,
  onPressSecond,
  onPressThird,
  onPressFourth,
}) => {
  const { t } = useTranslation();
  const { colors } = useTheme();

  return (
    <View style={[styles.card, { backgroundColor: colors.background }]}>
      <TouchableOpacity
        activeOpacity={0.4}
        underlayColor={"transparent"}
        style={[
          styles.screenCard,
          {
            backgroundColor: "transparent",
            borderBottomColor: colors.infoBackground,
          },
        ]}
        onPress={onPressFirst}
      >
        <Text style={[styles.text, { color: colors.text }]}>
          {t("languages")}
        </Text>
        <AntDesign size={16} name="right" color={colors.text} />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.4}
        underlayColor={"transparent"}
        style={[
          styles.screenCard,
          {
            backgroundColor: "transparent",
            borderBottomColor: colors.infoBackground,
          },
        ]}
        onPress={onPressSecond}
      >
        <Text style={[styles.text, { color: colors.text }]}>
          {t("help_center")}
        </Text>
        <AntDesign size={16} name="right" color={colors.text} />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.4}
        underlayColor={"transparent"}
        style={[
          styles.screenCard,
          {
            backgroundColor: "transparent",
            borderBottomColor: colors.infoBackground,
          },
        ]}
        onPress={onPressThird}
      >
        <Text style={[styles.text, { color: colors.text }]}>
          {t("contact_us")}
        </Text>
        <AntDesign size={16} name="right" color={colors.text} />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.4}
        underlayColor={"transparent"}
        style={[
          styles.screenCard,
          {
            backgroundColor: "transparent",
            borderBottomWidth: 0,
          },
        ]}
        onPress={onPressFourth}
      >
        <Text style={[styles.text, { color: colors.text }]}>
          {t("more_info")}
        </Text>
        <AntDesign size={16} name="right" color={colors.text} />
      </TouchableOpacity>
    </View>
  );
};

export default ProfileCardScreens;
