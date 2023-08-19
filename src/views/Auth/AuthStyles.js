import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

const AuthStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  firstContainer: {
    width: "90%",
    height: moderateScale(60, 0.2),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
  },
});

export default AuthStyles;
