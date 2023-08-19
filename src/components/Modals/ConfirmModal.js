import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Modal from "react-native-modal";
import { useTheme } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import styles from "./ConfirmModalStyles";

const ConfirmModal = ({
  modalVisible,
  setModalVisible,
  title,
  confirmText,
  cancelText,
  confirm,
}) => {
  const { colors } = useTheme();
  const { t } = useTranslation();
  return (
    <Modal
      isVisible={modalVisible}
      backdropOpacity={0.5}
      onBackdropPress={() => setModalVisible(false)}
    >
      <View
        style={[styles.modalContainer, { backgroundColor: colors.background }]}
      >
        <Text style={[styles.modalTitle, { color: colors.text }]}>{title}</Text>
        <View style={[styles.btnContainer]}>
          <TouchableOpacity
            activeOpacity={0.8}
            underlayColor={"transparent"}
            style={[styles.btn, { backgroundColor: colors.background }]}
            onPress={() => setModalVisible(false)}
          >
            <Text style={[styles.optionText, { color: colors.text }]}>
              {cancelText}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            underlayColor={"transparent"}
            style={[styles.btn, { backgroundColor: colors.background }]}
            onPress={confirm}
          >
            <Text style={[styles.optionText, { color: colors.text }]}>
              {confirmText}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmModal;
