import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

const SearchBarStyles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "92%",
    borderRadius: moderateScale(7, 0.2),
    padding: moderateScale(7, 0.2),
    marginTop: moderateScale(10, 0.2),
    alignSelf: "center",
  },
  textInput: {
    width: "85%",
    fontFamily: "PopinsRegular",
  },
});

export default SearchBarStyles;
