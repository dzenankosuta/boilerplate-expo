import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

const AirmoneyCard = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "flex-end",
  },
  text: {
    fontSize: moderateScale(12, 0.2),
    fontWeight: "500",
    fontFamily: "PopinsRegular",
  },
  currencyText: {
    fontSize: moderateScale(8, 0.2),
    fontWeight: "500",
    fontFamily: "PopinsRegular",
  },
  button: {
    minWidth: moderateScale(80, 0.2),
    height: moderateScale(35, 0.2),
    borderRadius: moderateScale(7, 0.2),
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AirmoneyCard;
