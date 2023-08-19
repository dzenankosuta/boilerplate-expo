import { StyleSheet, Dimensions } from "react-native";
import { moderateScale } from "react-native-size-matters";

const TabNavigatorStyles = StyleSheet.create({
  tabItem: {
    paddingVertical: moderateScale(10, 0.2),
    width: Dimensions.get("window").width / 3 - 20,
    borderRadius: moderateScale(5, 0.2),
    fontSize: moderateScale(13, 0.2),
    textAlign: "center",
    fontFamily: "PopinsRegular",
  },
});

export default TabNavigatorStyles;
