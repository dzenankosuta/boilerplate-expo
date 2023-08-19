import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

const AccountInformationStyles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  safeArea: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  message: {
    marginVertical: moderateScale(15, 0.2),
    width: "80%",
    textAlign: "center",
    fontSize: moderateScale(14, 0.2),
    fontFamily: "PopinsRegular",
  },
  imageContainer: {
    height: moderateScale(110, 0.2),
    justifyContent: "flex-start",
    alignItems: "center",
  },
  image: {
    width: moderateScale(100, 0.2),
    height: moderateScale(100, 0.2),
    borderRadius: moderateScale(50, 0.2),
    borderWidth: 0.7,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: moderateScale(75, 0.2),
    resizeMode: "cover",
  },
  addImage: {
    position: "absolute",
    right: moderateScale(-10, 0.2),
    bottom: moderateScale(10, 0.2),
    width: moderateScale(28, 0.2),
    height: moderateScale(28, 0.2),
    borderRadius: moderateScale(17, 0.2),
    justifyContent: "center",
    alignItems: "center",
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
  checkWrapper: {
    width: "95%",
    height: moderateScale(20, 0.2),
    marginTop: moderateScale(10, 0.2),
    marginLeft: moderateScale(-30, 0.2),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  deleteContainer: {
    width: "100%",
    height: moderateScale(130, 0.2),
    marginVertical: moderateScale(25, 0.2),
    paddingHorizontal: moderateScale(15, 0.2),
    justifyContent: "space-around",
    alignItems: "flex-start",
  },
  deleteTitle: {
    fontSize: moderateScale(16, 0.2),
    fontFamily: "PopinsRegular",
  },
  deleteText: {
    fontSize: moderateScale(13, 0.2),
    fontFamily: "PopinsRegular",
  },
  deleteButton: {
    width: "40%",
    height: moderateScale(30, 0.2),
    borderRadius: moderateScale(8, 0.2),
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.7,
  },
});

export default AccountInformationStyles;
