import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

const GlobalSimCardStyles = StyleSheet.create({
  card: {
    width: "92%",
    minHeight: moderateScale(45, 0.2),
    marginTop: moderateScale(35, 0.2),
    marginBottom: moderateScale(15, 0.2),
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: moderateScale(7, 0.2),
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
  row: {
    width: "100%",
    minHeight: moderateScale(55, 0.2),
    paddingHorizontal: moderateScale(15, 0.2),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
  },
  firstColumn: {
    width: "75%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  secondColumn: {
    fontSize: moderateScale(13, 0.2),
    fontFamily: "PopinsRegular",
    width: "25%",
    textAlign: "right",
  },
  smallSimContainer: {
    width: "40%",
    height: "100%",
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },
  smallSim: {
    width: "100%",
    height: moderateScale(80, 0.2),
    borderRadius: moderateScale(14, 0.2),
    position: "absolute",
    top: moderateScale(-25, 0.2),
  },
  text: {
    fontSize: moderateScale(13, 0.2),
    fontFamily: "PopinsRegular",
  },
  providerName: {
    fontSize: moderateScale(15, 0.2),
    fontFamily: "PopinsRegular",
  },
  coverageButton: {
    width: "100%",
    height: moderateScale(30, 0.2),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: moderateScale(7, 0.2),
    borderWidth: 1,
  },
  coverageButtonText: {
    height: moderateScale(20, 0.2),
    fontSize: moderateScale(12, 0.2),
    fontFamily: "PopinsRegular",
    textAlign: "center",
  },
  payButton: {
    width: "100%",
    height: moderateScale(50, 0.2),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: moderateScale(7, 0.2),
    borderWidth: 1,
  },
  payButtonText: {
    height: moderateScale(20, 0.2),
    fontSize: moderateScale(12, 0.2),
    fontFamily: "PopinsRegular",
    textAlign: "center",
  },
});

export default GlobalSimCardStyles;
