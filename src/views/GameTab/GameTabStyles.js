import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

const GameTabStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  text: {
    fontSize: moderateScale(14, 0.2),
    fontFamily: "PopinsRegular",
  },
});

export default GameTabStyles;
