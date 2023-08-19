import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

const SupportedCountryCardStyles = StyleSheet.create({
  card: {
    width: "100%",
    minHeight: moderateScale(55, 0.2),
    paddingHorizontal: moderateScale(20, 0.2),
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    borderBottomWidth: 1,
  },
  flag: {
    flex: 0.5,
    height: moderateScale(30, 0.2),
    marginRight: moderateScale(10, 0.2),
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: "100%",
    height: moderateScale(25, 0.2),
    resizeMode: "cover",
  },
  text: {
    flex: 3,
    fontSize: moderateScale(13, 0.2),
    fontFamily: "PopinsRegular",
  },
});

export default SupportedCountryCardStyles;
