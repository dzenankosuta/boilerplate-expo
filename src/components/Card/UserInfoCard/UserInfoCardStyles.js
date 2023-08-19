import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

const UserInfoCardStyles = StyleSheet.create({
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
  userCard: {
    width: "100%",
    height: moderateScale(100, 0.2),
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: moderateScale(15, 0.2),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  userCardImage: {
    width: moderateScale(50, 0.2),
    height: moderateScale(50, 0.2),
    borderRadius: moderateScale(25, 0.2),
    justifyContent: "center",
    alignItems: "center",
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
  userName: {
    flex: 1,
    fontSize: moderateScale(16, 0.2),
    fontWeight: "500",
    fontFamily: "PopinsRegular",
  },
  text: {
    fontSize: moderateScale(13, 0.2),
    fontFamily: "PopinsRegular",
  },
});

export default UserInfoCardStyles;
