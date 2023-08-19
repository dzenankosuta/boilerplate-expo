import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

const LoginStyles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  safeArea: {
    width: "100%",
    alignItems: "center",
  },
  message: {
    marginVertical: moderateScale(15, 0.2),
    width: "80%",
    textAlign: "center",
    fontSize: moderateScale(14, 0.2),
    fontFamily: "PopinsRegular",
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
    marginTop: moderateScale(25, 0.2),
    justifyContent: "center",
    alignItems: "center",
  },
  forgotPassword: {
    marginTop: moderateScale(15, 0.2),
    marginRight: "3.5%",
    alignSelf: "flex-end",
  },
  orContainer: {
    width: "95%",
    marginVertical: moderateScale(25, 0.2),
    flexDirection: "row",
    alignItems: "center",
  },
  orLine: {
    flex: 1,
    height: 1,
  },
  orText: {
    width: 150,
    fontSize: moderateScale(12, 0.2),
    textAlign: "center",
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
    width: moderateScale(45, 0.2),
    height: moderateScale(45, 0.2),
    marginHorizontal: moderateScale(15, 0.2),
    borderRadius: moderateScale(10, 0.2),
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0,
    shadowColor: "#000000ff",
    shadowOffset: {
      width: 4,
      height: 6,
    },
    shadowOpacity: 0.25,
    shadowRadius: 9.84,
    elevation: 5,
  },
});

export default LoginStyles;
