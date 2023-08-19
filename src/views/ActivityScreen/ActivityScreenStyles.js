import { Dimensions, StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

const ActivityScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: moderateScale(20, 0.2),
    marginBottom: moderateScale(14, 0.2),
    fontFamily: "PopinsRegular",
  },
});

export default ActivityScreenStyles;
