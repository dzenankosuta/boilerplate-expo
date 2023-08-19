import React from "react";
import { Text, View, Platform } from "react-native";
import { FontAwesome, FontAwesome5 } from "react-native-vector-icons";
import { useTheme } from "@react-navigation/native";
import { moderateScale } from "react-native-size-matters";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTranslation } from "react-i18next";
import styles from "./TabsStyles";
import StoreTab from "../../views/StoreTab/StoreTab";
import SimTab from "../../views/SimTab/SimTab";
import ProfileTab from "../../views/ProfileTab/ProfileTab";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// const SideMenuWrapper = ({ children }) => {
//     const { sideMenu } = useSelector((state) => state.sideMenu);
//     const dispatch = useDispatch();

//     return (
//         <SideMenu
//             isOpen={sideMenu}
//             menu={<Menu />}
//             menuPosition="right"
//             onChange={(isOpen) => {
//                 dispatch(sideMenuSlice.actions.setSideMenu({ isOpen }));
//             }}
//             bounceBackOnOverdraw={false}
//         >
//             {children}
//         </SideMenu>
//     );
// };

// const RightHeaderComponent = () => {
//   const onShare = async () => {
//     try {
//       const androidlink =
//         'https://play.google.com/store/apps/details?id=com.letiapp.app';
//       const ioslink = 'https://apps.apple.com/rs/app/letiapp.app/id********';
//       const result = await Share.share({
//         title: 'Booking App',
//         message: `Booking App\n\nAndroid: ${androidlink}\niOS: ${ioslink}`,
//       });
//       if (result.action === Share.sharedAction) {
//         if (result.activityType) {
//           // shared with activity type of result.activityType
//         } else {
//           // shared
//         }
//       } else if (result.action === Share.dismissedAction) {
//         // dismissed
//       }
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   return (
//     <View>
//       <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//         <TouchableOpacity style={{ marginRight: 25 }} onPress={() => onShare()}>
//           <Icon name="share" size={20} color="#ABABAB" />
//         </TouchableOpacity>
//         {/* <TouchableOpacity
//                     style={{ marginRight: 25 }}
//                     onPress={() =>
//                         dispatch(sideMenuSlice.actions.toggleSideMenu())
//                     }
//                 >
//                     <Icon name="menu" size={26} color="#ABABAB" />
//                 </TouchableOpacity> */}
//       </View>
//     </View>
//   );
// };

const Tabs = () => {
  const { colors } = useTheme();
  const { t } = useTranslation();
  return (
    <Tab.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
        activeTintColor: colors.text,
        inactiveTintColor: colors.placeholder,
        activeBackgroundColor: colors.background,
        inactiveBackgroundColor: colors.background,
        style: { height: moderateScale(60, 0.2) },
        tabStyle: {
          height: moderateScale(60, 0.2),
        },
      }}
    >
      <Tab.Screen
        name="home"
        component={StoreNavigation}
        options={{
          tabBarIcon: ({ color }) => (
            <View style={[styles.tabContainer]}>
              <Text style={[styles.iconStyle]}>
                <FontAwesome5 size={24} name="store" color={color} />
              </Text>
              <Text
                style={[styles.tabName, { color, fontFamily: "PopinsRegular" }]}
              >
                {t("store")}
              </Text>
            </View>
          ),
          tabBarLabel: ({ focused }) => focused && <View></View>,
          tabStyle: styles.tabStyles,
          labelStyle: styles.labelStyles,
        }}
      />
      <Tab.Screen
        name="additives"
        component={SimNavigation}
        options={{
          tabBarIcon: ({ color }) => (
            <View style={[styles.tabContainer]}>
              <Text style={[styles.iconStyle]}>
                <FontAwesome5 size={24} name="sim-card" color={color} />
              </Text>
              <Text
                style={[styles.tabName, { color, fontFamily: "PopinsRegular" }]}
              >
                {t("my_esims")}
              </Text>
            </View>
          ),
          tabBarLabel: ({ focused }) => focused && <View></View>,
          tabStyle: styles.tabStyles,
          labelStyle: styles.labelStyles,
        }}
      />
      <Tab.Screen
        name="recommendations"
        component={ProfileNavigation}
        options={{
          tabBarIcon: ({ color }) => (
            <View style={[styles.tabContainer]}>
              <Text style={[styles.iconStyle]}>
                <FontAwesome size={26} name="user-circle-o" color={color} />
              </Text>
              <Text
                style={[styles.tabName, { color, fontFamily: "PopinsRegular" }]}
              >
                {t("profile")}
              </Text>
            </View>
          ),
          tabBarLabel: ({ focused }) => focused && <View></View>,
          tabStyle: styles.tabStyles,
          labelStyle: styles.labelStyles,
        }}
      />
    </Tab.Navigator>
  );
};

const StoreNavigation = () => {
  const { colors } = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: (props) => (
          <Text
            style={{
              color: colors.text,
              textAlign: "center",
              fontFamily: "PopinsRegular",
            }}
          >
            {props.children}
          </Text>
        ),
        headerStyle: {
          height: Platform.OS === "ios" ? 60 : 100,
          backgroundColor: colors.background,
        },
        headerBackTitleVisible: false,
        headerTintColor: colors.background2,
      }}
      initialRouteName="store"
    >
      <Stack.Screen
        name="store"
        component={StoreTab}
        options={{
          headerTitle: (props) => (
            <Text
              style={{
                color: colors.text,
                textAlign: "center",
                fontFamily: "PopinsRegular",
              }}
            >
              {props.children}
            </Text>
          ),
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: colors.background,
            fontFamily: "PopinsRegular",
          },
          headerRight: false,
          headerRightContainerStyle: {
            marginRight: 20,
          },
        }}
      />
    </Stack.Navigator>
  );
};

const SimNavigation = () => {
  const { colors } = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: (props) => (
          <Text
            style={{
              color: colors.text,
              textAlign: "center",
              fontFamily: "PopinsRegular",
            }}
          >
            {props.children}
          </Text>
        ),
        headerStyle: {
          height: Platform.OS === "ios" ? 60 : 100,
          backgroundColor: colors.background,
        },
        headerBackTitleVisible: false,
        headerTintColor: colors.background2,
      }}
      initialRouteName="esims"
    >
      <Stack.Screen
        name="esims"
        component={SimTab}
        options={{
          headerTitle: (props) => (
            <Text
              style={{
                color: colors.text,
                textAlign: "center",
                fontFamily: "PopinsRegular",
              }}
            >
              {props.children}
            </Text>
          ),
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: colors.background,
            fontFamily: "PopinsRegular",
          },
          headerRight: false,
          headerRightContainerStyle: {
            marginRight: 20,
          },
        }}
      />
    </Stack.Navigator>
  );
};

const ProfileNavigation = () => {
  const { colors } = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: (props) => (
          <Text
            style={{
              color: colors.text,
              textAlign: "center",
              fontFamily: "PopinsRegular",
            }}
          >
            {props.children}
          </Text>
        ),
        headerStyle: {
          height: Platform.OS === "ios" ? 60 : 100,
          backgroundColor: colors.background,
        },
        headerBackTitleVisible: false,
        headerTintColor: colors.background2,
        headerRight: false,
      }}
      initialRouteName="profile"
    >
      <Stack.Screen
        name="profile"
        component={ProfileTab}
        options={{
          headerTitle: (props) => (
            <Text
              style={{
                color: colors.text,
                textAlign: "center",
                fontFamily: "PopinsRegular",
              }}
            >
              {props.children}
            </Text>
          ),
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: colors.background,
            fontFamily: "PopinsRegular",
          },
          headerRight: false,
          headerRightContainerStyle: {
            marginRight: 20,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default Tabs;
