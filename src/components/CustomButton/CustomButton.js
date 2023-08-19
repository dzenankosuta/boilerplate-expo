import { useTheme } from "@react-navigation/native";
import React, { useCallback } from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./CustomButtonStyles";

export const CustomButton = ({
  // eslint-disable-next-line react/prop-types
  text,
  // eslint-disable-next-line react/prop-types
  onPress,
  // eslint-disable-next-line react/prop-types
  type = "primary",
  // eslint-disable-next-line react/prop-types
  disabled = false,
}) => {
  const { colors } = useTheme();
  const getButtonStyles = useCallback(() => {
    switch (type) {
      case "primary":
        return { ...styles.button, backgroundColor: colors.primary };
      case "secondary":
        return { ...styles.secondaryButton, backgroundColor: colors.border };
      //   case 'danger':
      //     return styles.danger;
      default:
        return { ...styles.button, backgroundColor: colors.primary };
    }
  }, [type, colors]);

  const getButtonTextStyles = useCallback(() => {
    switch (type) {
      case "primary":
        return { ...styles.buttonText, color: colors.background };
      case "secondary":
        return {
          ...styles.secondaryButtonText,
          color: colors.background,
        };
      //   case 'danger':
      //     return styles.buttonText;
      default:
        return { ...styles.buttonText, color: colors.background };
    }
  }, [type, colors]);

  return (
    <TouchableOpacity
      style={getButtonStyles()}
      activeOpacity={0.9}
      underlayColor={"transparent"}
      onPress={onPress}
      type={styles.button}
      disabled={disabled}
    >
      <Text style={getButtonTextStyles()}>{text}</Text>
    </TouchableOpacity>
  );
};
