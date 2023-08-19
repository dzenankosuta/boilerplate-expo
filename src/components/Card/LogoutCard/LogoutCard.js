import { Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import styles from "./LogoutCardStyles";
import { useTranslation } from "react-i18next";
import { useTheme } from "@react-navigation/native";
import { MaterialIcons } from "react-native-vector-icons";
import ConfirmModal from "../../Modals/ConfirmModal";

const LogoutCard = ({ onPressFirst, onPressSecond }) => {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);

  return (
    <View style={[styles.card, { backgroundColor: colors.background }]}>
      <ConfirmModal
        modalVisible={confirmModalVisible}
        setModalVisible={setConfirmModalVisible}
        title={t("confirm_logout")}
        confirmText={t("yes").toUpperCase()}
        cancelText={t("no").toUpperCase()}
        confirm={() => {
          setConfirmModalVisible(false);
          onPressSecond();
        }}
      />
      <TouchableOpacity
        activeOpacity={0.8}
        underlayColor={"transparent"}
        style={[
          styles.link,
          {
            backgroundColor: "transparent",
            borderBottomWidth: 1,
            borderBottomColor: colors.infoBackground,
          },
        ]}
        onPress={onPressFirst}
      >
        <Text style={[styles.text, { color: colors.text }]}>
          {t("rate_app")}
        </Text>
        <MaterialIcons size={16} name="star" color={colors.text} />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        underlayColor={"transparent"}
        style={[styles.link, { backgroundColor: "transparent" }]}
        onPress={() => setConfirmModalVisible(true)}
      >
        <Text style={[styles.text, { color: colors.notification }]}>
          {t("logout")}
        </Text>
        <MaterialIcons size={16} name="logout" color={colors.notification} />
      </TouchableOpacity>
    </View>
  );
};

export default LogoutCard;
