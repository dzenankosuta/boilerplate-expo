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
import styles from "./AddNewCardStyles";
import { signup } from "../../services/user";
import ActivityScreen from "../../views/ActivityScreen/ActivityScreen";
import { useTranslation } from "react-i18next";
import { moderateScale } from "react-native-size-matters";

const AddNewCard = () => {
  const { colors } = useTheme();
  const { t } = useTranslation();
  const [message, setMessage] = useState("");
  const [incorrectStyles, setIncorrectStyles] = useState(false);

  const { mutate: addCard, isLoading } = useMutation(
    (values) => signup(values),
    {
      onSuccess: (res) => {
        setIncorrectStyles(false);
        const data = { ...res };
        setMessage(t("successful_added_card"));
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

  if (message === t("successful_added_card")) {
    return (
      <View style={[styles.safeArea]}>
        <Text style={[styles.success, { color: colors.text }]}>{message}</Text>
      </View>
    );
  }
  return (
    <>
      {isLoading && <ActivityScreen message={t("adding_card")} />}
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
              card_number: "",
              name_on_card: "",
              expiration_date: "",
              cvv: "",
            }}
            onSubmit={(values) => {
              addCard(values);
            }}
            validationSchema={Yup.object().shape({
              card_number: Yup.string()
                .test(
                  "test-card-number",
                  t("invalid_card_number"),
                  (value) => value.replace(/[^0-9]/g, "").length === 16
                )
                .required(t("required_card_number")),
              name_on_card: Yup.string()
                .required(t("required_name_on_card"))
                .min(2, t("min_name_on_card"))
                .max(100, t("max_name_on_card")),
              expiration_date: Yup.string()
                .test(
                  "test-expiration-date",
                  t("invalid_expiration_date"),
                  (value) => {
                    const cleanedValue = value.replace(/[^0-9]/g, "");
                    return (
                      cleanedValue.length === 4 &&
                      parseInt(cleanedValue.substring(0, 2)) <= 12
                    );
                  }
                )
                .required(t("required_expiration_date")),
              cvv: Yup.string()
                .test(
                  "test-cvv",
                  t("invalid_cvv"),
                  (value) => value.replace(/[^0-9]/g, "").length === 3
                )
                .required(t("required_cvv")),
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
                  <View style={[styles.inputWrapper]}>
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
                      style={[styles.firstContainer, { color: colors.text }]}
                    >
                      {t("cards ")}
                    </Text>
                    <TextInput
                      style={[
                        styles.textInput,
                        {
                          color: colors.text,
                          backgroundColor: colors.infoBackground,
                        },
                      ]}
                      onChangeText={(value) => {
                        const cleanedValue = value.replace(/[^0-9]/g, "");
                        if (cleanedValue.length > 16) {
                          return;
                        }
                        let formattedValue = "";
                        for (let i = 0; i < cleanedValue.length; i += 4) {
                          formattedValue += cleanedValue.slice(i, i + 4) + " ";
                        }
                        setFieldValue("card_number", formattedValue.trim());
                      }}
                      value={values.card_number}
                      placeholder={t("enter_card_number")}
                      placeholderTextColor={colors.placeholder}
                      keyboardType="number-pad"
                      onBlur={handleBlur("card_number")}
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
                      {errors.card_number &&
                        touched.card_number &&
                        errors.card_number}
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
                        setFieldValue("name_on_card", value)
                      }
                      value={values.name_on_card}
                      placeholder={t("enter_name_on_card")}
                      placeholderTextColor={colors.placeholder}
                      autoCapitalize="words"
                      onBlur={handleBlur("name_on_card")}
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
                      {errors.name_on_card &&
                        touched.name_on_card &&
                        errors.name_on_card}
                      {}
                    </Text>
                    <View style={[styles.secondInputWrapper]}>
                      <View style={{ width: "70%" }}>
                        <TextInput
                          style={[
                            styles.textInput,
                            {
                              color: colors.text,
                              backgroundColor: colors.infoBackground,
                            },
                          ]}
                          onChangeText={(inputValue) => {
                            const cleanedValue = inputValue.replace(
                              /[^0-9]/g,
                              ""
                            );

                            let formattedValue = cleanedValue;
                            if (cleanedValue.length >= 2) {
                              formattedValue =
                                cleanedValue.substring(0, 2) +
                                "/" +
                                cleanedValue.substring(2);
                            }
                            setFieldValue("expiration_date", formattedValue);
                          }}
                          value={values.expiration_date}
                          placeholder={t("enter_expiration_date")}
                          placeholderTextColor={colors.placeholder}
                          keyboardType="number-pad"
                          maxLength={5}
                          onBlur={handleBlur("expiration_date")}
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
                          {errors.expiration_date &&
                            touched.expiration_date &&
                            errors.expiration_date}
                        </Text>
                      </View>
                      <View style={{ width: "30%" }}>
                        <TextInput
                          style={[
                            styles.textInput,
                            {
                              color: colors.text,
                              backgroundColor: colors.infoBackground,
                            },
                          ]}
                          onChangeText={(value) => setFieldValue("cvv", value)}
                          value={values.cvv}
                          placeholder={t("enter_cvv")}
                          placeholderTextColor={colors.placeholder}
                          keyboardType="number-pad"
                          maxLength={3}
                          onBlur={handleBlur("cvv")}
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
                          {errors.cvv && touched.cvv && errors.cvv}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={[
                      styles.buttonWrapper,
                      { backgroundColor: colors.infoBackground },
                    ]}
                  >
                    <CustomButton
                      text={t("add").toUpperCase()}
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

export default AddNewCard;
