import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

const TabItemStyles = StyleSheet.create({
  item: {
    flex: 1,
    minHeight: moderateScale(45, 0.2),
    marginBottom: moderateScale(10, 0.2),
    padding: moderateScale(3, 0.2),
    borderRadius: moderateScale(7, 0.2),
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: moderateScale(13, 0.2),
    fontFamily: "PopinsRegular",
  },
});

export default TabItemStyles;
