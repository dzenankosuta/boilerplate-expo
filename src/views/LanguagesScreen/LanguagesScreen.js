import { ScrollView, View } from "react-native";
import React, { useState } from "react";
import styles from "./LanguagesScreenStyles";
import { useTheme } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { AntDesign } from "react-native-vector-icons";
import { moderateScale } from "react-native-size-matters";
import { TextInput } from "react-native";
import LanguageCard from "../../components/Card/LanguageCard/LanguageCard";
import SearchBar from "../../components/SearchBar/SearchBar";

const LanguagesScreen = () => {
  const { t, i18n } = useTranslation();
  const { colors } = useTheme();
  const [languages, setLanguages] = useState([]);
  const [search, setSearch] = useState("");

  const getCurrentLanguage = () => {
    return i18n.language;
  };
  const currentLanguage = getCurrentLanguage();

  const handleSearch = (text) => {
    const filtered = languages.filter((language) => {
      return language.toLowerCase().includes(text.toLowerCase());
    });
    setLanguages(filtered);
  };

  return (
    <View style={[styles.container]}>
      <View
        style={[
          styles.firstContainer,
          {
            borderBottomColor: colors.background2,
          },
        ]}
      >
        <SearchBar
          value={search}
          placeholder={t("language")}
          onChangeText={(text) => {
            setSearch(text);
            handleSearch(text);
          }}
        />
      </View>
      <ScrollView style={[]}>
        <LanguageCard
          language={"English"}
          selected={true}
          onPress={() => console.log("ii")}
        />
        <LanguageCard language={"Bosnian"} onPress={() => console.log("ii")} />
        <LanguageCard language={"Turkish"} onPress={() => console.log("ii")} />
        <LanguageCard language={"French"} onPress={() => console.log("ii")} />
      </ScrollView>
    </View>
  );
};

export default LanguagesScreen;
