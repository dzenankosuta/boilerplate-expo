import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

const NavigationCardStyles = StyleSheet.create({
  card: {
    width: "100%",
    height: moderateScale(50, 0.2),
    paddingHorizontal: moderateScale(20, 0.2),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
  },
  text: {
    fontSize: moderateScale(14, 0.2),
    fontFamily: "PopinsRegular",
  },
});

export default NavigationCardStyles;
