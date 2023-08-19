import { Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./TabItemStyles";
import { useTheme } from "@react-navigation/native";

const TabItem = ({ isSelectedTab, setActiveTab, tabName }) => {
  const { colors } = useTheme();
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      underlayColor={"transparent"}
      style={[
        styles.item,
        {
          backgroundColor: isSelectedTab
            ? colors.infoBackground
            : colors.background,
        },
      ]}
      onPress={setActiveTab}
    >
      <Text
        style={[
          styles.text,
          {
            color: isSelectedTab ? colors.text : colors.darkBorder,
          },
        ]}
      >
        {tabName}
      </Text>
    </TouchableOpacity>
  );
};

export default TabItem;
