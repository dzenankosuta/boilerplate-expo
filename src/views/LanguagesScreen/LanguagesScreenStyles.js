import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

const LanguagesScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  firstContainer: {
    width: "100%",
    height: moderateScale(80, 0.2),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "95%",
    borderRadius: moderateScale(5, 0.2),
    padding: moderateScale(7, 0.2),
    marginTop: moderateScale(10, 0.2),
    alignSelf: "center",
  },
});

export default LanguagesScreenStyles;
