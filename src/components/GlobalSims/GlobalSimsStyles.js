import { Dimensions, StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

const GlobalSimsStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  chooseSimContainer: {
    width: "100%",
    height: moderateScale(35, 0.2),
    marginVertical: moderateScale(15, 0.2),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: moderateScale(7, 0.2),
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
  option: {
    flex: 1,
    height: moderateScale(35, 0.2),
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: moderateScale(12, 0.2),
    fontFamily: "PopinsRegular",
  },
  simCards: {
    width: Dimensions.get("window").width,
    justifyContent: "flex-start",
    alignItems: "center",
  },
});

export default GlobalSimsStyles;
