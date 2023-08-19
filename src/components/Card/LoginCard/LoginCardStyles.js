import { StyleSheet, Dimensions } from "react-native";
import { moderateScale } from "react-native-size-matters";

const LoginCardStyles = StyleSheet.create({
  card: {
    width: "92%",
    height: moderateScale(100, 0.2),
    marginTop: moderateScale(15, 0.2),
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
  text: {
    fontSize: moderateScale(16, 0.2),
    fontFamily: "PopinsRegular",
  },
});

export default LoginCardStyles;