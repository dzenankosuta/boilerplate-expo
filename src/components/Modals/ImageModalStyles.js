import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

const ImageModalStyles = StyleSheet.create({
  modalContainer: {
    marginLeft: "7.5%",
    width: "85%",
    borderRadius: moderateScale(25, 0.2),
    padding: moderateScale(16, 0.2),
  },
  modalTitle: {
    textAlign: "center",
    fontSize: moderateScale(20, 0.2),
    fontFamily: "PopinsRegular",
  },
  modalOption: {
    paddingVertical: moderateScale(8, 0.2),
    borderBottomWidth: 1,
  },
  modalOptionText: {
    fontSize: moderateScale(14, 0.2),
    textAlign: "center",
    fontFamily: "PopinsRegular",
  },
});

export default ImageModalStyles;
