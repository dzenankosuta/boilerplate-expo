import { StyleSheet, Dimensions } from "react-native";
import { moderateScale } from "react-native-size-matters";

const ProfileCardScreensStyles = StyleSheet.create({
  card: {
    width: "92%",
    minHeight: moderateScale(45, 0.2),
    marginTop: moderateScale(15, 0.2),
    justifyContent: "flex-start",
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
  screenCard: {
    width: "95%",
    height: moderateScale(45, 0.2),
    paddingHorizontal: moderateScale(10, 0.2),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
  },
  text: {
    fontSize: moderateScale(13, 0.2),
    fontFamily: "PopinsRegular",
  },
});

export default ProfileCardScreensStyles;
