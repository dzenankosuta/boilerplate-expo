import { Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./LanguageCardStyles";
import { useTranslation } from "react-i18next";
import { useTheme } from "@react-navigation/native";
import { AntDesign } from "react-native-vector-icons";
import ConfirmModal from "../../Modals/ConfirmModal";

const LanguageCard = ({ language, selected = false, onPress }) => {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);

  return (
    <TouchableOpacity
      activeOpacity={0.4}
      underlayColor={"transparent"}
      style={[
        styles.card,
        {
          backgroundColor: colors.background,
          borderBottomColor: colors.infoBackground,
        },
      ]}
      onPress={() => setConfirmModalVisible(true)}
      disabled={selected}
    >
      <ConfirmModal
        modalVisible={confirmModalVisible}
        setModalVisible={setConfirmModalVisible}
        title={t("confirm_change_language")}
        confirmText={t("change").toUpperCase()}
        cancelText={t("cancel").toUpperCase()}
        confirm={() => {
          setConfirmModalVisible(false);
          onPress();
        }}
      />
      <Text style={[styles.text, { color: colors.text }]}>{language}</Text>
      {selected && (
        <AntDesign size={16} name="checkcircle" color={colors.text} />
      )}
    </TouchableOpacity>
  );
};

export default LanguageCard;
