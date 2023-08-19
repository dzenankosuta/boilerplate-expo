import { useFonts } from "expo-font";

const useAppFonts = () => {
  const [areFontsLoaded] = useFonts({
    // eslint-disable-next-line
    PopinsBold: require("../../assets/fonts/Poppins-Bold.ttf"),
    // eslint-disable-next-line
    PopinsBoldItalic: require("../../assets/fonts/Poppins-BoldItalic.ttf"),
    // eslint-disable-next-line
    PopinsExtraLight: require("../../assets/fonts/Poppins-ExtraLight.ttf"),
    // eslint-disable-next-line
    PopinsExtraLightItalic: require("../../assets/fonts/Poppins-ExtraLightItalic.ttf"),
    // eslint-disable-next-line
    PopinsItalic: require("../../assets/fonts/Poppins-Italic.ttf"),
    // eslint-disable-next-line
    PopinsLight: require("../../assets/fonts/Poppins-Light.ttf"),
    // eslint-disable-next-line
    PopinsLightItalic: require("../../assets/fonts/Poppins-LightItalic.ttf"),
    // eslint-disable-next-line
    PopinsMedium: require("../../assets/fonts/Poppins-Medium.ttf"),
    // eslint-disable-next-line
    PopinsMediumItalic: require("../../assets/fonts/Poppins-MediumItalic.ttf"),
    // eslint-disable-next-line
    PopinsRegular: require("../../assets/fonts/Poppins-Regular.ttf"),
    // eslint-disable-next-line
    PopinsSemiBold: require("../../assets/fonts/Poppins-SemiBold.ttf"),
    // eslint-disable-next-line
    PopinsSemiBoldItalic: require("../../assets/fonts/Poppins-SemiBoldItalic.ttf"),
    // eslint-disable-next-line
    PopinsThin: require("../../assets/fonts/Poppins-Thin.ttf"),
    // eslint-disable-next-line
    PopinsThinItalic: require("../../assets/fonts/Poppins-ThinItalic.ttf"),
  });

  return {
    areFontsLoaded,
  };
};

export default useAppFonts;
