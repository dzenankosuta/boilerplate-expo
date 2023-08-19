import { useFonts } from "expo-font";

const useAppFonts = () => {
  const [areFontsLoaded] = useFonts({
    PopinsBold: require("../../assets/fonts/Poppins-Bold.ttf"),
    PopinsBoldItalic: require("../../assets/fonts/Poppins-BoldItalic.ttf"),
    PopinsExtraLight: require("../../assets/fonts/Poppins-ExtraLight.ttf"),
    PopinsExtraLightItalic: require("../../assets/fonts/Poppins-ExtraLightItalic.ttf"),
    PopinsItalic: require("../../assets/fonts/Poppins-Italic.ttf"),
    PopinsLight: require("../../assets/fonts/Poppins-Light.ttf"),
    PopinsLightItalic: require("../../assets/fonts/Poppins-LightItalic.ttf"),
    PopinsMedium: require("../../assets/fonts/Poppins-Medium.ttf"),
    PopinsMediumItalic: require("../../assets/fonts/Poppins-MediumItalic.ttf"),
    PopinsRegular: require("../../assets/fonts/Poppins-Regular.ttf"),
    PopinsSemiBold: require("../../assets/fonts/Poppins-SemiBold.ttf"),
    PopinsSemiBoldItalic: require("../../assets/fonts/Poppins-SemiBoldItalic.ttf"),
    PopinsThin: require("../../assets/fonts/Poppins-Thin.ttf"),
    PopinsThinItalic: require("../../assets/fonts/Poppins-ThinItalic.ttf"),
  });

  return {
    areFontsLoaded,
  };
};

export default useAppFonts;
