import "react-native-gesture-handler";
import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Provider, useSelector } from "react-redux";
import { store } from "./store";
import { QueryClientProvider, QueryClient } from "react-query";
import { StatusBar } from "expo-status-bar";
import { I18nextProvider, useTranslation } from "react-i18next";
import i18n from "./i18n";
import Tabs from "./src/components/Tabs/Tabs";
import ActivityScreen from "./src/views/ActivityScreen/ActivityScreen";
import useAppFonts from "./src/hooks/useAppFonts";

const queryClient = new QueryClient();

const NavigationComponent = () => {
  const { areFontsLoaded } = useAppFonts();
  const { selectedTheme } = useSelector((state) => state.theme);
  const [appIsReady, setAppIsReady] = useState(false);
  const { t } = useTranslation();
  const [isLoading] = useState(false);

  (async () => {
    setTimeout(() => {
      if (areFontsLoaded) {
        setAppIsReady(true);
      }
    }, 100);
  })();

  if (!appIsReady) {
    return null;
  }

  if (isLoading) {
    return <ActivityScreen message={t("loading_app")} />;
  }

  return (
    <NavigationContainer theme={selectedTheme}>
      <Tabs />
    </NavigationContainer>
  );
};

// axios.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (error.response && error.response.status === 501) {
//       AsyncStorage.multiRemove(["auth_token", "userData", "workersData"]).then(
//         () => {
//           store.dispatch(authSlice.actions.logout());
//         }
//       );
//     }
//     return Promise.reject(error);
//   }
// );

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <StatusBar style="dark" />
          <SafeAreaView style={{ flex: 1 }}>
            <NavigationComponent />
          </SafeAreaView>
        </QueryClientProvider>
      </Provider>
    </I18nextProvider>
  );
};

export default App;
