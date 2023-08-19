import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

const ConfirmModalStyles = StyleSheet.create({
  modalContainer: {
    width: "100%",
    minHeight: moderateScale(180, 0.2),
    borderRadius: moderateScale(10, 0.2),
    padding: moderateScale(16, 0.2),
    justifyContent: "center",
    alignItems: "center",
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
  modalTitle: {
    width: "90%",
    textAlign: "center",
    fontSize: moderateScale(20, 0.2),
    fontFamily: "PopinsRegular",
    marginBottom: moderateScale(25, 0.2),
  },
  btnContainer: {
    width: "90%",
    height: moderateScale(50, 0.2),
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  btn: {
    flex: 1,
    height: moderateScale(45, 0.2),
    marginHorizontal: moderateScale(10, 0.2),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: moderateScale(12, 0.2),
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
  optionText: {
    fontSize: moderateScale(12, 0.2),
    fontFamily: "PopinsRegular",
  },
});

export default ConfirmModalStyles;
