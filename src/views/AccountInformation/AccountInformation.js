import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { AntDesign, SimpleLineIcons } from "react-native-vector-icons";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigation, useTheme } from "@react-navigation/native";
import { useMutation } from "react-query";
import { CustomButton } from "../../components/CustomButton/CustomButton";
import styles from "./AccountInformationStyles";
import { deleteUser, editUser } from "../../services/user";
import ActivityScreen from "../../views/ActivityScreen/ActivityScreen";
import { useTranslation } from "react-i18next";
import { moderateScale } from "react-native-size-matters";
import { CheckBox } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FormData from "form-data";
import ImageModal from "../../components/Modals/ImageModal";
import ConfirmModal from "../../components/Modals/ConfirmModal";
import { useDispatch } from "react-redux";
import { authSlice } from "../../store/authSlice";

const AccountInformation = ({ route }) => {
  const { state } = route.params;
  const scrollViewRef = useRef(null);
  const { colors } = useTheme();
  const { t } = useTranslation();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const [image, setImage] = useState(state.avatar);
  const [modalVisible, setModalVisible] = useState(false);
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(true);
  const incorrectStyles =
    message !== "" && message !== t("successful_edited_profile")
      ? colors.notification
      : colors.text;

  const { mutate: editUserInfo, isLoading } = useMutation(
    (values) => editUser(values, state.email),
    {
      onSuccess: (res) => {
        setMessage(t("successful_edited_profile"));
        // setMessage(res);
        // console.log(res);
      },
      onError: (error) => {
        if (error.response.status === 500) {
          setMessage(t("server_error"));
        }
        setMessage(error.response.data.detail[0].msg);
        // console.log(error.response.data.detail[0].msg);
      },
    }
  );

  const { mutate: deleteUserProfile, isLoading: deletingProfile } = useMutation(
    () => deleteUser(state.email),
    {
      onSuccess: (res) => {
        AsyncStorage.removeItem("auth_token").then(() => {
          dispatch(authSlice.actions.logout());
        });
        setMessage(t("successful_deleted_profile"));
        // console.log(res);
      },
      onError: (error) => {
        if (error.response.status === 500) {
          setMessage(t("server_error"));
        }
        setMessage(error.response.data.detail[0].msg);
        console.log(error.response.data.detail[0].msg);
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

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleCheckBox = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    if (message === t("no_changes")) {
      scrollViewRef.current.scrollTo({ x: 0, y: 0, animated: true });
    }
  }, [message]);

  if (
    message === t("successful_edited_profile") ||
    message === t("successful_deleted_profile")
  ) {
    return (
      <View style={[styles.safeArea]}>
        <Text style={[styles.success, { color: colors.text }]}>{message}</Text>
      </View>
    );
  }
  return (
    <>
      {isLoading && <ActivityScreen message={t("")} />}
      {deletingProfile && <ActivityScreen message={t("deleting_profile")} />}
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={50}
      >
        <ScrollView
          ref={scrollViewRef}
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps={"handled"}
          style={[
            styles.scroll,
            { display: isLoading || deletingProfile ? "none" : "flex" },
          ]}
        >
          <Formik
            initialValues={{
              first_name: state.first_name,
              last_name: state.last_name,
              email: state.email,
              password: "Dzenoafc14@",
              confirm_password: "Dzenoafc14@",
              image_file: null,
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
              if (image !== state.avatar && !!image) {
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
              } else if (image === state.avatar) {
                data.append(
                  "image_file",
                  !!image
                    ? {
                        uri: state.avatar,
                        type: "image/jpeg",
                        name: state.avatar.split("/").pop(),
                      }
                    : ""
                );
              }
              if (
                values.first_name === state.first_name &&
                values.last_name === state.last_name &&
                values.email === state.email &&
                values.password === "Dzenoafc14@" &&
                image === state.avatar
              ) {
                setMessage(t("no_changes"));
              } else {
                setMessage("");
                editUserInfo(data);
              }
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
                  <View style={[styles.deleteContainer]}>
                    <ConfirmModal
                      modalVisible={confirmModalVisible}
                      setModalVisible={setConfirmModalVisible}
                      title={t("confirm_delete_account")}
                      confirmText={t("yes").toUpperCase()}
                      cancelText={t("no").toUpperCase()}
                      confirm={() => {
                        setConfirmModalVisible(false);
                        deleteUserProfile();
                      }}
                    />
                    <Text style={[styles.deleteTitle, { color: colors.text }]}>
                      {t("delete_account")}
                    </Text>
                    <Text style={[styles.deleteText, { color: colors.text }]}>
                      {t("delete_account_note")}
                    </Text>
                    <TouchableOpacity
                      activeOpacity={0.9}
                      underlayColor={"transparent"}
                      style={[
                        styles.deleteButton,
                        { borderColor: colors.notification },
                      ]}
                      onPress={() => setConfirmModalVisible(true)}
                    >
                      <Text
                        style={[
                          {
                            color: colors.notification,
                            fontSize: moderateScale(12, 0.2),
                            fontFamily: "PopinsRegular",
                          },
                        ]}
                      >
                        {t("delete_account").toUpperCase()}
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={[
                      styles.buttonWrapper,
                      { backgroundColor: colors.infoBackground },
                    ]}
                  >
                    <CustomButton
                      text={t("save_changes").toUpperCase()}
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

export default AccountInformation;
