import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import styles from "./SavedCardsStyles";
import {
  useIsFocused,
  useNavigation,
  useTheme,
} from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { CustomButton } from "../../components/CustomButton/CustomButton";

const SavedCards = () => {
  const { colors } = useTheme();
  const { t } = useTranslation();
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [savedCards, setSavedCards] = useState([]);

  return (
    <View style={[styles.container]}>
      <ScrollView>
        {savedCards.length === 0 ? (
          <View style={[styles.noCardsContainer]}>
            <Text style={[styles.title]}>{t("no_saved_cards")}</Text>
            <Text style={[styles.text]}>{t("add_card_notice")}</Text>
            <View style={[styles.buttonWrapper]}>
              <CustomButton
                text={t("add_new_card").toUpperCase()}
                onPress={() => {
                  navigation.navigate("Add New Card", {
                    screen: "Add New Card",
                  });
                }}
              />
            </View>
          </View>
        ) : (
          <View style={{ flex: 1 }}>
            <Text style={{ fontFamily: "PopinsRegular" }}>SavedCards</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default SavedCards;
