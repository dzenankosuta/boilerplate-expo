import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

const ContactUsStyles = StyleSheet.create({
  scroll: {
    width: "100%",
  },
  safeArea: {
    width: "100%",
    alignItems: "center",
  },
  message: {
    width: "80%",
    textAlign: "center",
    fontSize: moderateScale(14, 0.2),
    fontFamily: "PopinsRegular",
    marginBottom: moderateScale(10, 0.2),
  },
  contactUsMessage: {
    width: "95%",
    fontSize: moderateScale(14, 0.2),
    marginBottom: moderateScale(10, 0.2),
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
    height: moderateScale(100, 0.2),
    marginTop: moderateScale(25, 0.2),
    justifyContent: "center",
    alignItems: "center",
  },
  success: {
    width: "80%",
    textAlign: "center",
    fontSize: moderateScale(16, 0.2),
    fontFamily: "PopinsBoldItalic",
    marginVertical: moderateScale(50, 0.2),
  },
  messageInput: {
    width: "95%",
    minHeight: moderateScale(100, 0.2),
    marginBottom: moderateScale(10, 0.2),
    borderRadius: moderateScale(7, 0.2),
    padding: moderateScale(10, 0.2),
    textAlignVertical: "top",
    fontFamily: "PopinsRegular",
  },
});

export default ContactUsStyles;
