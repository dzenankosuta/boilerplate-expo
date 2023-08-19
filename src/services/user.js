import axios from "axios";
import { store } from "../../store";
import { authSlice } from "../store/authSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { restApiUrl } from "../../config/api";

const setToken = async (token) => {
  await AsyncStorage.setItem("auth_token", token);
};

export const login = async (data) => {
  try {
    const response = await axios.post(
      `${restApiUrl.prod}/auth/login`,
      data.toString(),
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    if (!response.status >= 200 && response.status < 300) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }

    if (response.data.access_token) {
      const { access_token: token } = response.data;
      store.dispatch(authSlice.actions.auth({ token }));
      setToken(token);
    }
    return response.data;
  } catch (error) {
    // console.log("Error:", error.response);
    throw error;
  }
};

export const signup = (data) =>
  new Promise(async (resolve, reject) => {
    try {
      const user = await axios.post(`${restApiUrl.prod}/users/`, data, {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
      });
      resolve(user.data);
    } catch (error) {
      reject(error);
    }
  });

export const editUser = (data, userId) =>
  new Promise(async (resolve, reject) => {
    try {
      const user = await axios.put(`${restApiUrl.prod}/users/${userId}`, data, {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
      });
      resolve(user.data);
    } catch (error) {
      reject(error);
    }
  });

export const deleteUser = (userId) =>
  new Promise(async (resolve, reject) => {
    try {
      const config = {
        headers: {
          Accept: `*/*`,
        },
      };
      const user = await axios.delete(
        `${restApiUrl.prod}/users/${userId}`,
        config
      );
      resolve(user);
    } catch (error) {
      reject(error);
      // console.log(error);
    }
  });

export const newPassword = (data) =>
  new Promise(async (resolve, reject) => {
    try {
      const info = await axios.post(
        `${restApiUrl.prod}/user/forgot-password`,
        data
      );
      resolve(info);
    } catch (error) {
      reject(error);
      // console.log(error);
    }
  });

export const getMeInfo = (token) =>
  new Promise(async (resolve, reject) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      };
      const meInfo = await axios.get(`${restApiUrl.prod}/auth/me`, config);
      resolve(meInfo.data);
    } catch (error) {
      reject(error);
      // console.log(error);
    }
  });
