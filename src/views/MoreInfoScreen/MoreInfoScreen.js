import { View } from "react-native";
import React from "react";
import styles from "./MoreInfoScreenStyles";
import NavigationCard from "../../components/Card/NavigationCard/NavigationCard";
import { useTranslation } from "react-i18next";

const MoreInfoScreen = () => {
  const { t } = useTranslation();
  return (
    <View sryyle={[styles.container]}>
      <NavigationCard
        screenName={t("about_lyntel")}
        onPress={() => console.log("ii")}
      />
      <NavigationCard
        screenName={t("privacy_policy")}
        onPress={() => console.log("ii")}
      />
      <NavigationCard
        screenName={t("terms_and_conditions")}
        onPress={() => console.log("ii")}
      />
    </View>
  );
};

export default MoreInfoScreen;
