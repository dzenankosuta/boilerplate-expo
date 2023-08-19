import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

const LogoutCardStyles = StyleSheet.create({
  card: {
    width: "92%",
    height: moderateScale(90, 0.2),
    marginVertical: moderateScale(15, 0.2),
    justifyContent: "center",
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
  link: {
    width: "95%",
    height: moderateScale(45, 0.2),
    paddingHorizontal: moderateScale(10, 0.2),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: moderateScale(13, 0.2),
    fontFamily: "PopinsRegular",
  },
});

export default LogoutCardStyles;
