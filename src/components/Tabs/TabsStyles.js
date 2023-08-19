import { Dimensions, StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

const TabStyles = StyleSheet.create({
  tabStyles: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  labelStyles: {
    margin: 0,
    marginLeft: 5,
  },
  headerTitle: {
    textAlign: "center",
    marginHorizontal: moderateScale(20, 0.2),
    marginVertical: moderateScale(35, 0.2),
    fontSize: moderateScale(20, 0.2),
  },
  headerName: {
    fontFamily: "PopinsRegular",
    fontSize: moderateScale(16, 0.2),
  },
  tabContainer: {
    width: Dimensions.get("window").width / 3,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  iconStyle: {
    width: 40,
    height: 40,
    textAlign: "center",
  },
  tabName: {
    fontSize: 12,
    position: "absolute",
    bottom: 3,
  },
  headerImg: {
    width: 50,
    height: 50,
    // resizeMode: "contain",
  },
});

export default TabStyles;
