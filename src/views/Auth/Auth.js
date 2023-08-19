import { View, PanResponder, Animated } from "react-native";
import React, { useState, useRef } from "react";
import styles from "./AuthStyles";
import { useTranslation } from "react-i18next";
import { useTheme } from "@react-navigation/native";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import ForgotPassword from "../../components/ForgotPassword/ForgotPassword";
import TabItem from "../../components/TabItem/TabItem";

const Auth = () => {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const [auth, setAuth] = useState("login");
  const pan = useRef(new Animated.ValueXY()).current;

  const THRESHOLD = 120;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        if (Math.abs(gestureState.dx) > THRESHOLD) {
          if (gestureState.dx > 0) {
            setAuth("login");
          } else {
            setAuth("signup");
          }
        }
      },
      onPanResponderRelease: () => {
        Animated.spring(pan, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: true,
        }).start();
      },
    })
  ).current;

  return (
    <View style={[styles.container]} {...panResponder.panHandlers}>
      <View
        style={[
          styles.firstContainer,
          { borderBottomColor: colors.background2 },
        ]}
      >
        <TabItem
          isSelectedTab={auth === "login"}
          setActiveTab={() => setAuth("login")}
          tabName={t("login")}
        />
        <TabItem
          isSelectedTab={auth === "signup"}
          setActiveTab={() => setAuth("signup")}
          tabName={t("signup")}
        />
      </View>
      {auth === "signup" ? (
        <Register />
      ) : auth === "forgotPassword" ? (
        <ForgotPassword setAuth={setAuth} />
      ) : (
        <Login setAuth={setAuth} />
      )}
    </View>
  );
};

export default Auth;
