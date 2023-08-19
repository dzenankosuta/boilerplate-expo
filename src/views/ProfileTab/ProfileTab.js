import { View, Share, Platform, Linking, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./ProfileTabStyles";
import { useTranslation } from "react-i18next";
import {
  useIsFocused,
  useNavigation,
  useTheme,
} from "@react-navigation/native";
import LoginCard from "../../components/Card/LoginCard/LoginCard";
import ProfileCardScreens from "../../components/Card/ProfileCardScreens/ProfileCardScreens";
import ShareCard from "../../components/Card/ShareCard/ShareCard";
import { useDispatch, useSelector } from "react-redux";
import UserInfoCard from "../../components/Card/UserInfoCard/UserInfoCard";
import LogoutCard from "../../components/Card/LogoutCard/LogoutCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { authSlice } from "../../store/authSlice";
import { getMeInfo } from "../../services/user";
import { useMutation } from "react-query";
import ActivityScreen from "../ActivityScreen/ActivityScreen";

const ProfileTab = () => {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const [userData, setUserData] = useState({
    _id: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    avatar: "",
  });

  const { mutate: getUserData, isLoading: gettingUserData } = useMutation(
    () => getMeInfo(token),
    {
      onSuccess: (res) => {
        setUserData(res);
      },
      onError: (error) => {
        // console.log(error.response);
        setUserData({
          _id: "",
          first_name: "",
          last_name: "",
          email: "",
          password: "",
          avatar: "",
        });
        throw error;
      },
    }
  );

  const openStore = () => {
    const storeURL =
      Platform.OS === "android"
        ? "https://play.google.com/store/apps/details?id=com.mojprvinamaz.app"
        : "https://itunes.apple.com/app/your_app_id";

    Linking.openURL(storeURL).catch((error) => {
      // console.error('Unable to open store:', error);
    });
  };

  useEffect(() => {
    if (isFocused && token) {
      getUserData();
    }
  }, [isFocused]);
  return (
    <>
      {gettingUserData && <ActivityScreen message={""} />}
      <ScrollView>
        <View
          style={[
            styles.container,
            { display: gettingUserData ? "none" : "flex" },
          ]}
        >
          {token ? (
            <UserInfoCard
              userName={
                !!userData.last_name
                  ? userData.first_name + " " + userData.last_name
                  : userData.first_name
              }
              userImage={userData.avatar}
              onPressFirst={() =>
                navigation.navigate("Account Information", {
                  screen: "Account Information",
                  state: {
                    _id: userData._id,
                    first_name: userData.first_name,
                    last_name: userData.last_name,
                    email: userData.email,
                    password: userData.password,
                    avatar: userData.avatar,
                  },
                })
              }
              onPressSecond={() =>
                navigation.navigate("Airmoney And Membership", {
                  screen: "Airmoney And Membership",
                })
              }
              onPressThird={() =>
                navigation.navigate("Saved Cards", {
                  screen: "Saved Cards",
                })
              }
            />
          ) : (
            <LoginCard
              onPress={() =>
                navigation.navigate("Auth", {
                  screen: "Auth",
                })
              }
            />
          )}
          <ProfileCardScreens
            onPressFirst={() =>
              navigation.navigate("Languages Screen", {
                screen: "Languages Screen",
              })
            }
            onPressSecond={() => console.log("2")}
            onPressThird={() =>
              navigation.navigate("Contact Us", {
                screen: "Contact Us",
              })
            }
            onPressFourth={() =>
              navigation.navigate("More Info Screen", {
                screen: "More Info Screen",
              })
            }
          />
          {token ? (
            <LogoutCard
              onPressFirst={() => openStore()}
              onPressSecond={() => {
                AsyncStorage.removeItem("auth_token").then(() => {
                  dispatch(authSlice.actions.logout());
                });
              }}
            />
          ) : (
            <ShareCard
              onPress={async () => {
                try {
                  const androidlink =
                    "https://play.google.com/store/apps/details?id=com.mojprvinamaz.app";
                  const ioslink =
                    "https://apps.apple.com/us/app/namaz-app-learn-salah-prayer/id1447056625";
                  const result = await Share.share({
                    title: "eSIM App",
                    message: `eSIM App\n\nAndroid: ${androidlink}\niOS: ${ioslink}`,
                  });
                  if (result.action === Share.sharedAction) {
                    if (result.activityType) {
                      // shared with activity type of result.activityType
                    } else {
                      // shared
                    }
                  } else if (result.action === Share.dismissedAction) {
                    // dismissed
                  }
                } catch (error) {
                  alert(error.message);
                }
              }}
            />
          )}
        </View>
      </ScrollView>
    </>
  );
};

export default ProfileTab;
