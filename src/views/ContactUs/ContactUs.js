import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TextInput,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { useTheme } from "@react-navigation/native";
import { useMutation } from "react-query";
import { CustomButton } from "../../components/CustomButton/CustomButton";
import styles from "./ContactUsStyles";
import { signup } from "../../services/user";
import ActivityScreen from "../../views/ActivityScreen/ActivityScreen";
import { useTranslation } from "react-i18next";
import { moderateScale } from "react-native-size-matters";

const ContactUs = () => {
  const { colors } = useTheme();
  const { t } = useTranslation();
  const [message, setMessage] = useState("");
  const [incorrectStyles, setIncorrectStyles] = useState(false);

  const { mutate: doSignup, isLoading } = useMutation(
    (values) => signup(values),
    {
      onSuccess: (res) => {
        setIncorrectStyles(false);
        const data = { ...res };
        setMessage(t("successful_sent_message"));
        // setMessage(data.data.status);
        // console.log(data.data.status);
        // console.log(data.data);
      },
      onError: (error) => {
        setIncorrectStyles(true);
        if (error.response.status === 500) {
          setMessage(t("server_error"));
        }
        setMessage(error.response.data.message);
        // console.log(data.response.data.message);
        // console.log(error.response);
      },
    }
  );

  if (message === t("successful_sent_message")) {
    return (
      <View style={[styles.safeArea]}>
        <Text style={[styles.success, { color: colors.text }]}>{message}</Text>
      </View>
    );
  }
  return (
    <>
      {isLoading && <ActivityScreen message={t("sending_message")} />}
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={250}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps={"handled"}
          style={[styles.scroll, { display: isLoading ? "none" : "flex" }]}
        >
          <Formik
            initialValues={{
              first_name: "",
              last_name: "",
              email: "",
              phone_number: "",
              iccid: "",
              subject: "",
              message: "",
            }}
            onSubmit={(values) => {
              doSignup(values);
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .required(t("required_email"))
                .email(t("wrong_format_email"))
                .max(250, t("max_email")),
              first_name: Yup.string()
                .required(t("required_first_name"))
                .min(2, t("min_first_name"))
                .max(100, t("max_first_name")),
              phone_number: Yup.string()
                .required(t("required_phone_number"))
                .min(8, t("min_phone_number"))
                .max(20, t("max_phone_number")),
              subject: Yup.string()
                .required(t("required_subject"))
                .min(2, t("min_subject"))
                .max(100, t("max_subject")),
              message: Yup.string()
                .required(t("required_message"))
                .min(2, t("min_message")),
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
                  <Text
                    style={[styles.contactUsMessage, { color: colors.text }]}
                  >
                    {t("contact_us_message")}
                  </Text>
                  <TextInput
                    style={[
                      styles.textInput,
                      {
                        color: colors.text,
                        backgroundColor: colors.infoBackground,
                      },
                    ]}
                    onChangeText={(value) => setFieldValue("first_name", value)}
                    value={values.first_name}
                    placeholder={t("enter_first_name")}
                    placeholderTextColor={colors.placeholder}
                    autoCapitalize="words"
                    onBlur={handleBlur("first_name")}
                  />
                  <Text
                    style={[
                      styles.errors,
                      {
                        color: colors.darkBorder,
                        marginBottom: moderateScale(10, 0.2),
                      },
                    ]}
                  >
                    {errors.first_name &&
                      touched.first_name &&
                      errors.first_name}
                    {}
                  </Text>
                  <TextInput
                    style={[
                      styles.textInput,
                      {
                        color: colors.text,
                        backgroundColor: colors.infoBackground,
                      },
                    ]}
                    onChangeText={(value) => setFieldValue("last_name", value)}
                    value={values.last_name}
                    placeholder={t("enter_last_name")}
                    placeholderTextColor={colors.placeholder}
                    autoCapitalize="words"
                    onBlur={handleBlur("last_name")}
                  />
                  <Text
                    style={[
                      styles.errors,
                      {
                        color: colors.darkBorder,
                        marginBottom: moderateScale(10, 0.2),
                      },
                    ]}
                  >
                    {}
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
                        marginBottom: moderateScale(10, 0.2),
                      },
                    ]}
                  >
                    {errors.email && touched.email && errors.email} {}
                  </Text>
                  <TextInput
                    style={[
                      styles.textInput,
                      {
                        color: colors.text,
                        backgroundColor: colors.infoBackground,
                      },
                    ]}
                    onChangeText={(value) =>
                      setFieldValue("phone_number", value)
                    }
                    value={values.phone_number}
                    placeholder={t("enter_phone_number")}
                    placeholderTextColor={colors.placeholder}
                    keyboardType="phone-pad"
                    autoCapitalize="none"
                    onBlur={handleBlur("phone_number")}
                  />
                  <Text
                    style={[
                      styles.errors,
                      {
                        color: colors.darkBorder,
                        marginBottom: moderateScale(10, 0.2),
                      },
                    ]}
                  >
                    {errors.phone_number &&
                      touched.phone_number &&
                      errors.phone_number}{" "}
                    {}
                  </Text>
                  <TextInput
                    style={[
                      styles.textInput,
                      {
                        color: colors.text,
                        backgroundColor: colors.infoBackground,
                      },
                    ]}
                    onChangeText={(value) => setFieldValue("iccid", value)}
                    value={values.iccid}
                    placeholder={t("enter_iccid")}
                    placeholderTextColor={colors.placeholder}
                    keyboardType="words"
                    autoCapitalize="none"
                    onBlur={handleBlur("iccid")}
                  />
                  <Text
                    style={[
                      styles.errors,
                      {
                        color: colors.darkBorder,
                        marginBottom: moderateScale(10, 0.2),
                      },
                    ]}
                  >
                    {}
                  </Text>
                  <TextInput
                    style={[
                      styles.textInput,
                      {
                        color: colors.text,
                        backgroundColor: colors.infoBackground,
                      },
                    ]}
                    onChangeText={(value) => setFieldValue("subject", value)}
                    value={values.subject}
                    placeholder={t("enter_subject")}
                    placeholderTextColor={colors.placeholder}
                    autoCapitalize="words"
                    onBlur={handleBlur("subject")}
                  />
                  <Text
                    style={[
                      styles.errors,
                      {
                        color: colors.darkBorder,
                        marginBottom: moderateScale(10, 0.2),
                      },
                    ]}
                  >
                    {errors.subject && touched.subject && errors.subject}
                    {}
                  </Text>
                  <TextInput
                    style={[
                      styles.messageInput,
                      {
                        color: colors.text,
                        backgroundColor: colors.infoBackground,
                      },
                    ]}
                    multiline={true}
                    numberOfLines={6}
                    placeholder={t("enter_message")}
                    onChangeText={(value) => setFieldValue("message", value)}
                    value={values.message}
                    autoCapitalize="none"
                  />
                  <Text
                    style={[
                      styles.errors,
                      {
                        color: colors.darkBorder,
                        marginBottom: moderateScale(10, 0.2),
                      },
                    ]}
                  >
                    {errors.message && touched.message && errors.message}
                    {}
                  </Text>
                  <View
                    style={[
                      styles.buttonWrapper,
                      { backgroundColor: colors.infoBackground },
                    ]}
                  >
                    <CustomButton
                      text={t("send").toUpperCase()}
                      onPress={() => {
                        handleSubmit();
                      }}
                    />
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

export default ContactUs;
