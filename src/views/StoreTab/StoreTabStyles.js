import { StyleSheet, Dimensions } from "react-native";
import { moderateScale } from "react-native-size-matters";

const StoreTabStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  tabsWrapper: {
    width: "92%",
    minHeight: moderateScale(60, 0.2),
    marginVertical: moderateScale(10, 0.2),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
  },
  simsContainer: {
    width: "92%",
  },
});

export default StoreTabStyles;
