import { View, TextInput } from "react-native";
import React from "react";
import styles from "./SearchBarStyles";
import { AntDesign } from "react-native-vector-icons";
import { useTheme } from "@react-navigation/native";
import { moderateScale } from "react-native-size-matters";

const SearchBar = ({ value, placeholder, onChangeText }) => {
  const { colors } = useTheme();
  return (
    <View
      style={[
        styles.searchContainer,
        { backgroundColor: colors.infoBackground },
      ]}
    >
      <AntDesign
        size={20}
        name="search1"
        color={colors.darkBorder}
        style={{ marginRight: moderateScale(10, 0.2) }}
      />
      <TextInput
        style={[styles.textInput, { color: colors.text }]}
        placeholder={placeholder}
        placeholderTextColor={colors.placeholder}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};

export default SearchBar;
