import "react-native-gesture-handler";
import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Provider, useSelector } from "react-redux";
import { store } from "./store";
import { QueryClientProvider, QueryClient } from "react-query";
import { StatusBar } from "expo-status-bar";
// import * as SplashScreen from "expo-splash-screen";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import { I18nextProvider, useTranslation } from "react-i18next";
import i18n from "./i18n";
// import { themeSlice } from "./src/store/themeSlice";
// import { authSlice } from "./src/store/authSlice";
import Tabs from "./src/components/Tabs/Tabs";
import ActivityScreen from "./src/views/ActivityScreen/ActivityScreen";
// import * as Device from "expo-device";
// import * as Notifications from "expo-notifications";
import useAppFonts from "./src/hooks/useAppFonts";

// Keep the splash screen visible while we fetch resources
// SplashScreen.preventAutoHideAsync();

// Notifications.setNotificationHandler({
//   handleNotification: async () => ({
//     shouldShowAlert: true,
//     shouldPlaySound: true,
//     shouldSetBadge: false,
//   }),
// });

const queryClient = new QueryClient();

const NavigationComponent = () => {
  // const { colors } = useTheme();
  // const dispatch = useDispatch();
  const { areFontsLoaded } = useAppFonts();
  const { selectedTheme } = useSelector((state) => state.theme);
  // const { id } = useSelector((state) => state.auth);
  // const { isAdmin } = useSelector((state) => state.auth);
  const [appIsReady, setAppIsReady] = useState(false);
  // const [isLangNotSelected, setIsLangNotSelected] = useState(false);
  const { t } = useTranslation();
  const [isLoading] = useState(false);
  // states and refs for push notifications:
  // const [expoPushToken, setExpoPushToken] = useState('');
  // const [notification, setNotification] = useState(false);
  // const notificationListener = useRef();
  // const responseListener = useRef();

  // async function registerForPushNotificationsAsync() {
  //   let token;

  //   if (Platform.OS === 'android') {
  //     await Notifications.setNotificationChannelAsync('default', {
  //       name: 'default',
  //       importance: Notifications.AndroidImportance.MAX,
  //       vibrationPattern: [0, 250, 250, 250],
  //       lightColor: '#FF231F7C',
  //     });
  //   }

  //   if (Device.isDevice) {
  //     const { status: existingStatus } =
  //       await Notifications.getPermissionsAsync();
  //     let finalStatus = existingStatus;
  //     if (existingStatus !== 'granted') {
  //       const { status } = await Notifications.requestPermissionsAsync();
  //       finalStatus = status;
  //     }
  //     if (finalStatus !== 'granted') {
  //       alert('Failed to get push token for push notification!');
  //       return;
  //     }
  //     token = (await Notifications.getExpoPushTokenAsync()).data;
  //     // console.log(token);
  //   } else {
  //     alert('Must use physical device for Push Notifications');
  //   }

  //   return token;
  // }

  // useEffect(() => {
  //   registerForPushNotificationsAsync().then((token) =>
  //     setExpoPushToken(token)
  //   );

  //   notificationListener.current =
  //     Notifications.addNotificationReceivedListener((notification) => {
  //       setNotification(notification);
  //     });

  //   responseListener.current =
  //     Notifications.addNotificationResponseReceivedListener((response) => {
  //       // console.log(response);
  //     });

  //   return () => {
  //     Notifications.removeNotificationSubscription(
  //       notificationListener.current
  //     );
  //     Notifications.removeNotificationSubscription(responseListener.current);
  //   };
  // }, []);

  // useEffect(() => {
  //   (async () => {
  //     let theme;
  //     try {
  //       theme = await AsyncStorage.getItem('theme');
  //     } finally {
  //       dispatch(
  //         themeSlice.actions.setTheme({ theme: theme ? theme : 'theme1' })
  //       );
  //     }
  //   })();

  // isLoading by default is false because we don't have to set user information from storage. Otherwise we would set it to true

  // (async () => {
  //   try {
  //     const userData = await AsyncStorage.getItem("userData");
  //     const token = await AsyncStorage.getItem("auth_token");
  //     if (userData) {
  //       const transformedUserData = JSON.parse(userData);
  //       const isAdmin = transformedUserData.type === "admin" ? true : false;
  //       // console.log({ transformedUserData });
  //       dispatch(authSlice.actions.setId(transformedUserData.id));
  //       dispatch(authSlice.actions.setIsAdmin(isAdmin));
  //       dispatch(authSlice.actions.setUserData(transformedUserData));
  //       dispatch(authSlice.actions.setToken(token));
  //     } else {
  //       dispatch(authSlice.actions.setId(""));
  //       dispatch(authSlice.actions.setIsAdmin(false));
  //     }
  //   } finally {
  //     const workersData = await AsyncStorage.getItem("workersData");
  //     const transformedWorkersData = JSON.parse(workersData);
  //     if (isAdmin) {
  //       dispatch(authSlice.actions.setWorkersData(transformedWorkersData));
  //     }
  //     setIsLoading(false);
  //   }
  // })();

  (async () => {
    try {
      // const token = await AsyncStorage.getItem("auth_token");
      // if (token) {
      //   dispatch(authSlice.actions.setToken(token));
      // }
    } finally {
      setTimeout(() => {
        if (areFontsLoaded) {
          setAppIsReady(true);
        }
      }, 100);
    }
  })();

  // (async () => {
  // let lang;
  // try {
  //   const lang = await AsyncStorage.getItem("lang");
  //   labels({ language: lang === "sr" ? "sr" : "en" })
  //     .then((res) => {
  //       setTimeout(() => {
  //         setAppIsReady(true);
  //       }, 2000);
  //       // console.log(translations);
  //     })
  //     .catch((err) => {
  //       setAppIsReady(false);
  //     });
  // } finally {
  //   // i18n.addResourceBundle('en', 'translation', translations, true, true);
  // }
  //   setTimeout(() => {
  //     setAppIsReady(true);
  //   }, 100);
  // })();

  //   (async function getLang() {
  //     let lang;
  //     try {
  //       lang = await AsyncStorage.getItem('lang');
  //     } finally {
  //       if (!lang) {
  //         setIsLangNotSelected(true);
  //         setTimeout(() => {
  //           setAppIsReady(true);
  //         }, 2000);
  //       } else {
  //         i18n.changeLanguage(lang);
  //         setTimeout(() => {
  //           setAppIsReady(true);
  //         }, 2000);
  //       }
  //     }
  //   })();
  // }, [id]);

  // const onLayoutRootView = useCallback(async () => {
  //   if (appIsReady) {
  //     // This tells the splash screen to hide immediately! If we call this after
  //     // `setAppIsReady`, then we may see a blank screen while the app is
  //     // loading its initial state and rendering its first pixels. So instead,
  //     // we hide the splash screen once we know the root view has already
  //     // performed layout.
  //     await SplashScreen.hideAsync();
  //   }
  // }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  if (isLoading) {
    return <ActivityScreen message={t("loading_app")} />;
  }

  // if (!id) {
  //   return (
  //     <NavigationContainer theme={selectedTheme}>
  //       <Auth />
  //     </NavigationContainer>
  //   );
  // }
  // console.log({ language });
  // console.log({ translations });
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
