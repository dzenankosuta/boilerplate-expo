import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import LocalSims from "../LocalSims/LocalSims";
import RegionalSims from "../RegionalSims/RegionalSims";
import GlobalSims from "../GlobalSims/GlobalSims";
import { colors } from "react-native-elements";
import { useTheme } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { moderateScale } from "react-native-size-matters";
import styles from "./TabNavigatorStyles";

const TabNavigator = () => {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Local eSIMs"
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.notification,
        tabBarIndicatorContainerStyle: {
          width: Dimensions.get("window").width,
        },
        tabBarIndicatorStyle: {
          backgroundColor: colors.background,
        },
        tabBarItemStyle: {
          width: Dimensions.get("window").width / 3 - 20,
          backgroundColor: colors.background,
          borderRadius: moderateScale(5, 0.2),
        },
        tabBarStyle: {
          backgroundColor: colors.background,
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: moderateScale(10, 0.2),
        },
        tabBarLabelStyle: {
          fontSize: moderateScale(13, 0.2),
          fontFamily: "PopinsRegular",
        },
        tabBarGap: 15,
        tabBarPressColor: colors.background,
        tabBarScrollEnabled: true,
      }}
    >
      <Tab.Screen
        name="Local eSIMs"
        // children={() => <LocalSims />}
        component={LocalSims}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={[
                styles.tabItem,
                {
                  color: focused ? colors.primary : colors.text,
                  backgroundColor: focused
                    ? colors.infoBackground
                    : colors.background,
                },
              ]}
            >
              {t("local_esims")}
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Regional eSIMs"
        // children={() => <RegionalSims />}
        component={RegionalSims}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={[
                styles.tabItem,
                {
                  color: focused ? colors.primary : colors.text,
                  backgroundColor: focused
                    ? colors.infoBackground
                    : colors.background,
                },
              ]}
            >
              {t("regional_esims")}
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Global eSIM"
        // children={() => <GlobalSims />}
        component={GlobalSims}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={[
                styles.tabItem,
                {
                  color: focused ? colors.primary : colors.text,
                  backgroundColor: focused
                    ? colors.infoBackground
                    : colors.background,
                },
              ]}
            >
              {t("global_esim")}
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
