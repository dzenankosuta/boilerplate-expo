import { Dimensions, StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

const SupportedCountriesStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  firstContainer: {
    width: "100%",
    height: moderateScale(80, 0.2),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "95%",
    borderRadius: moderateScale(5, 0.2),
    padding: moderateScale(7, 0.2),
    marginTop: moderateScale(10, 0.2),
    alignSelf: "center",
  },
  noCountryContainer: {
    flex: 1,
    height: Dimensions.get("window").height / 1.5,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: moderateScale(16, 0.2),
    fontFamily: "PopinsRegular",
  },
});

export default SupportedCountriesStyles;
