import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

const LocalSimsStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  title: {
    fontSize: moderateScale(20, 0.2),
    fontFamily: "PopinsRegular",
    alignSelf: "flex-start",
  },
});

export default LocalSimsStyles;
