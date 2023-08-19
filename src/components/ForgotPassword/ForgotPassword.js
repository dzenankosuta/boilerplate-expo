import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { useTheme } from "@react-navigation/native";
import { useMutation } from "react-query";
import { CustomButton } from "../../components/CustomButton/CustomButton";
import styles from "./ForgotPasswordStyles";
import { newPassword } from "../../services/user";
import ActivityScreen from "../../views/ActivityScreen/ActivityScreen";
import { useTranslation } from "react-i18next";
import { moderateScale } from "react-native-size-matters";

const ForgotPassword = ({ lang, setAuth }) => {
  const { colors } = useTheme();
  const { t } = useTranslation();
  const [message, setMessage] = useState("");
  const [incorrectStyles, setIncorrectStyles] = useState(false);

  const { mutate: sendEmail, isLoading } = useMutation(
    (values) => newPassword(values),
    {
      onSuccess: (res) => {
        setIncorrectStyles(false);
        setMessage(res.data.data.message);
        // console.log(res.data.data.message);
      },
      onError: (error) => {
        setIncorrectStyles(true);
        if (error.response.status === 500) {
          setMessage(t("server_error"));
        }
        setMessage(error.response.data.data.message);
        // console.log(error.response.data.data.message);
      },
    }
  );

  if (message !== "" && !incorrectStyles) {
    return (
      <View style={[styles.safeArea]}>
        <Text style={[styles.success, { color: colors.text }]}>{message}</Text>
      </View>
    );
  }

  return (
    <>
      {isLoading && <ActivityScreen message={t("sending_request")} />}
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={100}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps={"handled"}
          style={[styles.scroll, { display: isLoading ? "none" : "flex" }]}
        >
          <Formik
            initialValues={{ email: "", language: lang }}
            onSubmit={(values) => {
              sendEmail(values);
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .required(t("required_email"))
                .email(t("wrong_format_email"))
                .max(250, t("max_email")),
            })}
          >
            {({
              values,
              errors,
              touched,
              handleBlur,
              handleSubmit,
              setFieldValue,
            }) => {
              return (
                <SafeAreaView style={[styles.safeArea]}>
                  <Text style={[styles.title, { color: colors.text }]}>
                    {t("forgot_password_title")}
                  </Text>
                  <Text
                    style={[
                      styles.message,
                      {
                        color: incorrectStyles
                          ? colors.notification
                          : colors.text,
                      },
                    ]}
                  >
                    {message}
                  </Text>
                  <TextInput
                    style={[
                      styles.textInput,
                      {
                        color: colors.text,
                        backgroundColor: colors.infoBackground,
                      },
                    ]}
                    onChangeText={(value) => setFieldValue("email", value)}
                    value={values.email}
                    placeholder={t("enter_email")}
                    placeholderTextColor={colors.placeholder}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    onBlur={handleBlur("email")}
                  />
                  <Text
                    style={[
                      styles.errors,
                      {
                        color: colors.darkBorder,
                        marginBottom: moderateScale(20, 0.2),
                      },
                    ]}
                  >
                    {errors.email && touched.email && errors.email} {}
                  </Text>
                  <View style={styles.buttonWrapper}>
                    <CustomButton
                      text={t("reset_password").toUpperCase()}
                      onPress={handleSubmit}
                    />
                  </View>
                  <View style={[styles.notRegistered]}>
                    <Text
                      style={[styles.textNotRegistered, { color: colors.text }]}
                    >
                      {t("not_registered")}
                      {", "}
                    </Text>
                    <TouchableOpacity
                      style={{}}
                      activeOpacity={0.8}
                      underlayColor={"transparent"}
                      onPress={() => {
                        setAuth("signup");
                      }}
                    >
                      <Text
                        style={[
                          styles.textNotRegistered,
                          {
                            color: colors.text,
                            textDecorationLine: "underline",
                          },
                        ]}
                      >
                        {t("create_account")}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </SafeAreaView>
              );
            }}
          </Formik>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default ForgotPassword;
