import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Modal from "react-native-modal";
import { useTheme } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { moderateScale } from "react-native-size-matters";
import styles from "./ImageModalStyles";

const ImageModal = ({
  modalVisible,
  setModalVisible,
  takePhoto,
  pickFromGallery,
  setImage,
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
        <Text style={[styles.modalTitle, { color: colors.primary }]}>
          {t("choose_photo")}
        </Text>

        <TouchableOpacity
          style={[styles.modalOption, { borderBottomColor: colors.border }]}
          onPress={takePhoto}
        >
          <Text style={[styles.modalOptionText, { color: colors.text }]}>
            {t("take_new_photo")}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.modalOption, { borderBottomColor: colors.border }]}
          onPress={pickFromGallery}
        >
          <Text style={[styles.modalOptionText, { color: colors.text }]}>
            {t("select_from_gallery")}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            paddingTop: moderateScale(8, 0.2),
          }}
          onPress={() => {
            setImage(null);
            setModalVisible(false);
          }}
        >
          <Text style={[styles.modalOptionText, { color: colors.text }]}>
            {t("remove_photo")}
          </Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
            style={{
                paddingVertical: 8,
                borderBottomColor: colors.border,
                borderBottomWidth: 1,
            }}
            onPress={() => setModalVisible(false)}
            >
            <Text
                style={{
                fontSize: 18,
                color: colors.text,
                fontFamily: "PopinsRegular",
                }}
            >
                {t('cancel')}
            </Text>
            </TouchableOpacity> */}
      </View>
    </Modal>
  );
};

export default ImageModal;
