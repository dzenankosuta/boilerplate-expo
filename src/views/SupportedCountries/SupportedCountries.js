import { ScrollView, View, Text } from "react-native";
import React, { useState } from "react";
import styles from "./SupportedCountriesStyles";
import { useTheme } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import SearchBar from "../../components/SearchBar/SearchBar";
import SupportedCountryCard from "../../components/Card/CountryCard/SupportedCountryCard";

const SupportedCountries = ({ route }) => {
  const { state } = route.params;
  const { t } = useTranslation();
  const { colors } = useTheme();
  const [countries, setCountries] = useState(state.countries || []);
  const [filteredCountries, setFilteredCountries] = useState(
    state.countries || []
  );
  const [search, setSearch] = useState("");

  const handleSearch = (text) => {
    const filtered = countries.filter((country) => {
      return country.name.toLowerCase().includes(text.toLowerCase());
    });
    setFilteredCountries(filtered);
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
          placeholder={t("country_name")}
          onChangeText={(text) => {
            setSearch(text);
            handleSearch(text);
          }}
        />
      </View>
      <ScrollView style={[]}>
        {filteredCountries.length > 0 ? (
          filteredCountries.map((country, index) => {
            return (
              <SupportedCountryCard
                key={index}
                flag={country.flag}
                country={country.name}
                onPress={() => console.log("ii")}
              />
            );
          })
        ) : (
          <View style={[styles.noCountryContainer]}>
            <Text style={[styles.title, { color: colors.text }]}>
              {t("no_country_available")}
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default SupportedCountries;
