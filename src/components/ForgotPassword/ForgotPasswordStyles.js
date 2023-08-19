import { StyleSheet, Dimensions } from "react-native";
import { moderateScale } from "react-native-size-matters";

const { width } = Dimensions.get("window");

const ForgotPasswordStyles = StyleSheet.create({
  scroll: {
    width: width - moderateScale(20, 0.2),
  },
  safeArea: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  title: {
    marginTop: moderateScale(50, 0.2),
    marginBottom: moderateScale(20, 0.2),
    fontSize: moderateScale(24, 0.2),
    fontFamily: "PopinsRegular",
  },
  message: {
    width: "80%",
    textAlign: "center",
    fontSize: moderateScale(14, 0.2),
    fontFamily: "PopinsRegular",
    marginBottom: moderateScale(10, 0.2),
  },
  textInput: {
    width: "95%",
    height: moderateScale(50, 0.2),
    paddingLeft: moderateScale(10, 0.2),
    borderRadius: moderateScale(7, 0.2),
    fontFamily: "PopinsRegular",
  },
  errors: {
    width: "80%",
    textAlign: "center",
    fontSize: moderateScale(12, 0.2),
    fontFamily: "PopinsRegular",
  },
  buttonWrapper: {
    width: "100%",
    marginTop: moderateScale(30, 0.2),
    justifyContent: "center",
    alignItems: "center",
  },
  forgotPassword: {
    marginTop: moderateScale(4, 0.2),
    marginRight: "10%",
    alignSelf: "flex-end",
  },
  notRegistered: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: moderateScale(40, 0.2),
  },
  textNotRegistered: {
    marginVertical: moderateScale(20, 0.2),
    fontSize: moderateScale(13, 0.2),
    fontFamily: "PopinsRegular",
  },
  web: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    marginBottom: moderateScale(10, 0.2),
  },
  page: {
    height: moderateScale(50, 0.2),
  },
  img: {
    width: moderateScale(50, 0.2),
    height: moderateScale(50, 0.2),
    marginHorizontal: moderateScale(30, 0.2),
  },
  success: {
    width: "80%",
    textAlign: "center",
    fontSize: moderateScale(16, 0.2),
    fontFamily: "PopinsBoldItalic",
    marginVertical: moderateScale(50, 0.2),
  },
});

export default ForgotPasswordStyles;
