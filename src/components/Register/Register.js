import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Linking,
  Alert,
  Platform,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import {
  MaterialCommunityIcons,
  AntDesign,
  SimpleLineIcons,
} from "react-native-vector-icons";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigation, useTheme } from "@react-navigation/native";
import { useMutation } from "react-query";
import { CustomButton } from "../../components/CustomButton/CustomButton";
import styles from "./RegisterStyles";
import { login, signup } from "../../services/user";
import ActivityScreen from "../../views/ActivityScreen/ActivityScreen";
import { useTranslation } from "react-i18next";
import { moderateScale } from "react-native-size-matters";
import { CheckBox } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FormData from "form-data";
import ImageModal from "../Modals/ImageModal";

const Register = ({ lang }) => {
  const { colors } = useTheme();
  const { t } = useTranslation();
  const navigation = useNavigation();
  const [message, setMessage] = useState("");
  const [image, setImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(true);
  const incorrectStyles =
    message !== "" && message !== t("successful_registration")
      ? colors.notification
      : colors.text;
  const [checkToLogin, setCheckToLogin] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const { mutate: doAuth, isLoading: loggingIn } = useMutation(
    (values) => login(values),
    {
      onSuccess: (res) => {
        if (res.error) {
          setMessage(res.error);
          return;
        }
        setMessage("");
        navigation.navigate("profile", {
          screen: "profile",
        });
        setCheckToLogin(false);
      },
      onError: (error) => {
        // console.log(error);
        if (error.response.status === 500) {
          setMessage(t("server_error"));
        }
        throw error;
      },
    }
  );

  const { mutate: doSignup, isLoading } = useMutation(
    (values) => signup(values),
    {
      onSuccess: (res) => {
        setCheckToLogin(true);
        setMessage(t("successful_registration"));
        // setMessage(res);
        // console.log(res);
        const data = new URLSearchParams();
        data.append("username", loginData.email);
        data.append("password", loginData.password);
        doAuth(data);
      },
      onError: (error) => {
        setCheckToLogin(false);
        if (error.response.status === 500) {
          setMessage(t("server_error"));
        }
        setMessage(error.response.data.detail[0].msg);
        // console.log(error.response.data.detail[0].msg);
      },
    }
  );

  const pickImage = async () => {
    const { status: cameraPerm } =
      await ImagePicker.requestCameraPermissionsAsync();
    const { status: cameraRollPerm } =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (cameraPerm !== "granted" || cameraRollPerm !== "granted") {
      alert(t("allow_access_gallery"));
      return;
    }

    setModalVisible(true);
  };

  const pickFromGallery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 0.15,
      presentationStyle: "fullScreen",
      contentStyle: { backgroundColor: "#ffffff" },
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setModalVisible(false);
    }
  };

  const takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 0.3,
      presentationStyle: "pageSheet",
      contentStyle: { backgroundColor: "#ffffff" },
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setModalVisible(false);
    }
  };

  const handleSite = async (url) => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert(`${t("error_opening_site")} ${url}`);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleCheckBox = () => {
    setIsChecked(!isChecked);
  };

  if (message === t("successful_registration")) {
    return (
      <View style={[styles.safeArea]}>
        <Text style={[styles.success, { color: colors.text }]}>{message}</Text>
      </View>
    );
  }
  return (
    <>
      {isLoading && <ActivityScreen message={t("registering")} />}
      {(loggingIn || checkToLogin) && <ActivityScreen message={t("logging")} />}
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={50}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps={"handled"}
          style={[
            styles.scroll,
            { display: isLoading || loggingIn ? "none" : "flex" },
          ]}
        >
          <Formik
            initialValues={{
              first_name: "",
              last_name: "",
              email: "",
              password: "",
              confirm_password: "",
              image_file: null,
              language: lang,
              send_emails: isChecked,
            }}
            onSubmit={(values) => {
              values.image_file = image;
              const imageName = !!image ? image.split("/").pop() : null;
              const data = new FormData();
              data.append("first_name", values.first_name);
              data.append("last_name", values.last_name);
              data.append("email", values.email);
              data.append("password", values.password);
              data.append(
                "image_file",
                !!image
                  ? {
                      uri: values.image_file,
                      type: "image/jpeg",
                      name: imageName,
                    }
                  : ""
              );
              setLoginData({
                email: values.email,
                password: values.password,
              });
              doSignup(data);
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .required(t("required_email"))
                .email(t("wrong_format_email"))
                .max(250, t("max_email")),
              password: Yup.string()
                .required(t("required_password"))
                .min(8, t("min_password"))
                .max(20, t("max_password"))
                .matches(
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).+$/,
                  t("special_requirement_password")
                ),
              confirm_password: Yup.string()
                .required(t("required_confirm_password"))
                .min(8, t("min_confirm_password"))
                .max(20, t("max_confirm_password"))
                .matches(
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).+$/,
                  t("special_requirement_confirm_password")
                )
                .when("password", (password, field) =>
                  password
                    ? field
                        .required(t("required_confirm_password"))
                        .oneOf([Yup.ref("password")], t("same_passwords"))
                    : field
                ),
              first_name: Yup.string()
                .required(t("required_first_name"))
                .min(2, t("min_first_name"))
                .max(100, t("max_first_name")),
              last_name: Yup.string()
                .required(t("required_last_name"))
                .min(2, t("min_last_name"))
                .max(100, t("max_last_name")),
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
                  <Text style={[styles.message, { color: incorrectStyles }]}>
                    {message}
                  </Text>
                  <View style={[styles.imageContainer]}>
                    <View
                      style={[styles.image, { borderColor: colors.primary }]}
                    >
                      {image ? (
                        <Image style={[styles.img]} source={{ uri: image }} />
                      ) : (
                        <SimpleLineIcons
                          size={28}
                          name="camera"
                          color={colors.primary}
                        />
                      )}
                      <TouchableOpacity
                        activeOpacity={0.9}
                        underlayColor={"transparent"}
                        style={[
                          styles.addImage,
                          { backgroundColor: colors.primary },
                        ]}
                        onPress={pickImage}
                      >
                        <AntDesign
                          size={14}
                          name="plus"
                          color={colors.background}
                        />
                      </TouchableOpacity>
                      <ImageModal
                        modalVisible={modalVisible}
                        setModalVisible={setModalVisible}
                        takePhoto={takePhoto}
                        pickFromGallery={pickFromGallery}
                        setImage={setImage}
                      />
                    </View>
                  </View>
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
                    {errors.last_name && touched.last_name && errors.last_name}
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
                  <View style={{ flexDirection: "row" }}>
                    <TextInput
                      style={[
                        styles.textInput,
                        {
                          color: colors.text,
                          backgroundColor: colors.infoBackground,
                          paddingRight: moderateScale(40, 0.2),
                        },
                      ]}
                      onChangeText={(value) => setFieldValue("password", value)}
                      value={values.password}
                      placeholder={t("enter_password")}
                      placeholderTextColor={colors.placeholder}
                      keyboardType="password"
                      secureTextEntry={!showPassword}
                      password={true}
                      onBlur={handleBlur("password")}
                    />
                    <TouchableOpacity
                      onPress={toggleShowPassword}
                      style={{ position: "absolute", right: 7, bottom: 12 }}
                    >
                      <Text>
                        {showPassword ? (
                          <IoniconsIcon
                            size={22}
                            name="md-eye"
                            color={colors.text}
                          />
                        ) : (
                          <IoniconsIcon
                            size={22}
                            name="md-eye-off"
                            color={colors.text}
                          />
                        )}
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <Text
                    style={[
                      styles.errors,
                      {
                        color: colors.darkBorder,
                        marginBottom: moderateScale(10, 0.2),
                      },
                    ]}
                  >
                    {errors.password && touched.password && errors.password}
                  </Text>
                  <View style={{ flexDirection: "row" }}>
                    <TextInput
                      style={[
                        styles.textInput,
                        {
                          color: colors.text,
                          backgroundColor: colors.infoBackground,
                          paddingRight: moderateScale(40, 0.2),
                        },
                      ]}
                      onChangeText={(value) =>
                        setFieldValue("confirm_password", value)
                      }
                      value={values.confirm_password}
                      placeholder={t("enter_confirm_password")}
                      placeholderTextColor={colors.placeholder}
                      keyboardType="password"
                      secureTextEntry={!showConfirmPassword}
                      password={true}
                      onBlur={handleBlur("confirm_password")}
                    />
                    <TouchableOpacity
                      onPress={toggleShowConfirmPassword}
                      style={{ position: "absolute", right: 7, bottom: 12 }}
                    >
                      <Text>
                        {showConfirmPassword ? (
                          <IoniconsIcon
                            size={22}
                            name="md-eye"
                            color={colors.text}
                          />
                        ) : (
                          <IoniconsIcon
                            size={22}
                            name="md-eye-off"
                            color={colors.text}
                          />
                        )}
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <Text style={[styles.errors, { color: colors.darkBorder }]}>
                    {errors.confirm_password &&
                      touched.confirm_password &&
                      errors.confirm_password}
                  </Text>
                  <View style={[styles.checkWrapper]}>
                    <CheckBox
                      checked={isChecked}
                      onPress={handleCheckBox}
                      containerStyle={{
                        backgroundColor: "transparent",
                        borderWidth: 0,
                        width: 30,
                        height: 45,
                      }}
                      checkedColor={colors.primary}
                      uncheckedColor={colors.darkBorder}
                    />
                    <Text
                      style={{
                        color: colors.text,
                        fontSize: moderateScale(13, 0.2),
                        fontFamily: "PopinsRegular",
                      }}
                    >
                      {t("receive_emails")}
                    </Text>
                  </View>
                  <View style={styles.buttonWrapper}>
                    <CustomButton
                      text={t("signup").toUpperCase()}
                      onPress={() => {
                        handleSubmit();
                      }}
                    />
                  </View>
                  <View style={[styles.orContainer]}>
                    <View
                      style={[
                        styles.orLine,
                        { backgroundColor: colors.darkBorder },
                      ]}
                    />
                    <View>
                      <Text
                        style={[styles.orText, { color: colors.darkBorder }]}
                      >
                        {t("or_signup").toUpperCase()}
                      </Text>
                    </View>
                    <View
                      style={[
                        styles.orLine,
                        { backgroundColor: colors.darkBorder },
                      ]}
                    />
                  </View>
                  <View style={[styles.web]}>
                    <TouchableOpacity
                      style={[styles.page, { backgroundColor: "#4267B2" }]}
                      activeOpacity={0.8}
                      underlayColor={"transparent"}
                      onPress={() => handleSite("https://www.facebook.com")}
                    >
                      <MaterialCommunityIcons
                        size={22}
                        name="facebook"
                        color={colors.background}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[
                        styles.page,
                        { backgroundColor: colors.background },
                      ]}
                      activeOpacity={0.8}
                      underlayColor={"transparent"}
                      onPress={() => handleSite("https://www.google.com")}
                    >
                      <AntDesign
                        size={22}
                        name="google"
                        color={colors.primary}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={[styles.noteContainer]}>
                    <Text
                      style={{
                        color: colors.text,
                        textAlign: "center",
                        fontFamily: "PopinsRegular",
                      }}
                    >
                      {t("by_registering")}
                      {"  "}
                    </Text>
                    <TouchableOpacity
                      style={{}}
                      activeOpacity={0.8}
                      underlayColor={"transparent"}
                      onPress={async () => {
                        handleSite(`https://www.google.com`);
                      }}
                    >
                      <Text
                        style={{
                          color: colors.primary,
                          textAlign: "center",
                          fontFamily: "PopinsBoldItalic",
                        }}
                      >
                        {t("terms_and_conditions")} {"  "}
                      </Text>
                    </TouchableOpacity>
                    <Text
                      style={{
                        color: colors.text,
                        textAlign: "center",
                        fontFamily: "PopinsRegular",
                      }}
                    >
                      {t("and")}
                      {"  "}
                    </Text>
                    <TouchableOpacity
                      style={{}}
                      activeOpacity={0.8}
                      underlayColor={"transparent"}
                      onPress={async () => {
                        handleSite(`https://www.google.com`);
                      }}
                    >
                      <Text
                        style={{
                          color: colors.primary,
                          textAlign: "center",
                          fontFamily: "PopinsBoldItalic",
                        }}
                      >
                        {t("privacy_policy")}. {"  "}
                      </Text>
                    </TouchableOpacity>
                    <Text
                      style={{
                        color: colors.text,
                        textAlign: "center",
                        fontFamily: "PopinsRegular",
                      }}
                    >
                      {t("registering_note")}
                    </Text>
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

export default Register;
