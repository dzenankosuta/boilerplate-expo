import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

const SavedCardsStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noCardsContainer: {
    marginTop: moderateScale(120, 0.2),
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "PopinsSemiBold",
    fontSize: moderateScale(22, 0.2),
    textAlign: "center",
    marginHorizontal: moderateScale(20, 0.2),
  },
  text: {
    fontFamily: "PopinsRegular",
    fontSize: moderateScale(14, 0.2),
    textAlign: "center",
    marginHorizontal: moderateScale(20, 0.2),
  },
  buttonWrapper: {
    width: "100%",
    height: moderateScale(100, 0.2),
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SavedCardsStyles;
