// eslint-disable-next-line
const { getDefaultConfig } = require("@expo/metro-config");

// eslint-disable-next-line
module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
    // eslint-disable-next-line
  } = await getDefaultConfig(__dirname);
  return {
    transformer: {
      // eslint-disable-next-line
      babelTransformerPath: require.resolve("react-native-svg-transformer"),
      assetPlugins: ["expo-asset/tools/hashAssetFiles"],
    },
    resolver: {
      assetExts: assetExts.filter((ext) => ext !== "svg"),
      sourceExts: [...sourceExts, "svg"],
    },
  };
})();
