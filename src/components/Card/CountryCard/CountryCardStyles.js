import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

const CountryCardStyles = StyleSheet.create({
  card: {
    width: "100%",
    minHeight: moderateScale(60, 0.2),
    marginVertical: moderateScale(7, 0.2),
    paddingHorizontal: moderateScale(15, 0.2),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 0,
    shadowColor: "#00000080",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 9.84,
    elevation: 5,
  },
  flag: {
    flex: 0.6,
    height: moderateScale(30, 0.2),
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    flex: 3,
    paddingLeft: moderateScale(15, 0.2),
    fontSize: moderateScale(14, 0.2),
    fontFamily: "PopinsRegular",
  },
});

export default CountryCardStyles;
