import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

const CustomButtonStyles = StyleSheet.create({
  button: {
    width: "95%",
    height: moderateScale(50, 0.2),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: moderateScale(7, 0.2),
  },
  buttonText: {
    height: moderateScale(20, 0.2),
    fontSize: moderateScale(12, 0.2),
    fontFamily: "PopinsRegular",
    textAlign: "center",
  },
  secondaryButton: {
    width: "80%",
    height: moderateScale(44, 0.2),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: moderateScale(7, 0.2),
  },
  secondaryButtonText: {
    height: moderateScale(20, 0.2),
    fontSize: moderateScale(14, 0.2),
    fontFamily: "PopinsRegular",
    textAlign: "center",
  },
  //   danger: {
  //     backgroundColor: '#fc443a',
  //     width: '80%',
  //     height: 44,
  //     flexDirection: 'row',
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     borderRadius: 30,
  //   },
});

export default CustomButtonStyles;
