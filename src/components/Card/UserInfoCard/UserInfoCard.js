import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "./UserInfoCardStyles";
import { useTranslation } from "react-i18next";
import { useTheme } from "@react-navigation/native";
import { AntDesign, FontAwesome } from "react-native-vector-icons";
import { Image } from "react-native";

const UserInfoCard = ({
  userName,
  userImage,
  onPressFirst,
  onPressSecond,
  onPressThird,
}) => {
  const { t } = useTranslation();
  const { colors } = useTheme();
  return (
    <View style={[styles.card, { backgroundColor: colors.background }]}>
      <View style={[styles.userCard, { backgroundColor: colors.background2 }]}>
        <Text style={[styles.userName, { color: colors.text }]}>
          {userName}
        </Text>
        <View
          style={[
            styles.userCardImage,
            { backgroundColor: colors.infoBackground },
          ]}
        >
          {userImage ? (
            <Image
              source={{
                uri: userImage,
              }}
              style={styles.userCardImage}
            />
          ) : (
            <FontAwesome size={34} name="user-circle-o" color={colors.text} />
          )}
        </View>
      </View>
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
          {t("account_information")}
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
          {t("airmoney_and_membership")}
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
            borderBottomWidth: 0,
          },
        ]}
        onPress={onPressThird}
      >
        <Text style={[styles.text, { color: colors.text }]}>
          {t("saved_cards")}
        </Text>
        <AntDesign size={16} name="right" color={colors.text} />
      </TouchableOpacity>
    </View>
  );
};

export default UserInfoCard;
