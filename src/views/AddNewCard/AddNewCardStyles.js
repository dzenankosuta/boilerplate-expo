import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

const AddNewCardStyles = StyleSheet.create({
  scroll: {
    width: "100%",
  },
  safeArea: {
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputWrapper: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  message: {
    width: "80%",
    textAlign: "center",
    fontSize: moderateScale(14, 0.2),
    fontFamily: "PopinsRegular",
    marginBottom: moderateScale(10, 0.2),
  },
  firstContainer: {
    width: "95%",
    fontSize: moderateScale(14, 0.2),
    marginBottom: moderateScale(10, 0.2),
    fontFamily: "PopinsRegular",
  },
  textInput: {
    width: "95%",
    height: moderateScale(50, 0.2),
    paddingLeft: moderateScale(10, 0.2),
    borderRadius: moderateScale(10, 0.2),
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
    marginTop: moderateScale(20, 0.2),
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
    borderRadius: moderateScale(10, 0.2),
    padding: moderateScale(10, 0.2),
    textAlignVertical: "top",
    fontFamily: "PopinsRegular",
  },
  secondInputWrapper: {
    width: "95%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
});

export default AddNewCardStyles;
