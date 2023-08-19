import { View, ScrollView, TextInput } from "react-native";
import React, { useState } from "react";
import styles from "./StoreTabStyles";
import { useTranslation } from "react-i18next";
import {
  useIsFocused,
  useNavigation,
  useTheme,
} from "@react-navigation/native";
import { moderateScale } from "react-native-size-matters";
import { useDispatch, useSelector } from "react-redux";
import { getMeInfo } from "../../services/user";
import { useMutation } from "react-query";
import ActivityScreen from "../ActivityScreen/ActivityScreen";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import LocalSims from "../../components/LocalSims/LocalSims";
import RegionalSims from "../../components/RegionalSims/RegionalSims";
import GlobalSims from "../../components/GlobalSims/GlobalSims";
import TabItem from "../../components/TabItem/TabItem";
import SearchBar from "../../components/SearchBar/SearchBar";

const Tab = createMaterialTopTabNavigator();

const StoreTab = () => {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const [dataPacks, setDataPacks] = useState([]);
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("local");

  const handleSearch = (text) => {
    const filtered = dataPacks.filter((pack) => {
      return pack.toLowerCase().includes(text.toLowerCase());
    });
    setDataPacks(filtered);
  };

  const { mutate: getUserData, isLoading: gettingUserData } = useMutation(
    () => getMeInfo(token),
    {
      onSuccess: (res) => {
        // setUserData(res);
      },
      onError: (error) => {
        // // console.log(error.response);
        // setUserData({
        //   _id: "",
        //   first_name: "",
        //   last_name: "",
        //   email: "",
        //   password: "",
        //   avatar: "",
        // });
        throw error;
      },
    }
  );
  console.log(search);
  return (
    <>
      {/* {gettingUserData && <ActivityScreen message={""} />} */}
      <ScrollView>
        <View style={[styles.container, { display: "flex" }]}>
          <SearchBar
            value={search}
            placeholder={t("search_data_packs")}
            onChangeText={(text) => {
              setSearch(text);
              handleSearch(text);
            }}
          />
          <View
            style={[
              styles.tabsWrapper,
              {
                borderBottomColor: colors.background2,
              },
            ]}
          >
            <TabItem
              isSelectedTab={activeTab === "local"}
              setActiveTab={() => setActiveTab("local")}
              tabName={t("local_esims")}
            />
            <TabItem
              isSelectedTab={activeTab === "regional"}
              setActiveTab={() => setActiveTab("regional")}
              tabName={t("regional_esims")}
            />
            <TabItem
              isSelectedTab={activeTab === "global"}
              setActiveTab={() => setActiveTab("global")}
              tabName={t("global_esim")}
            />
          </View>
          <View style={[styles.simsContainer]}>
            {activeTab === "global" ? (
              <GlobalSims />
            ) : activeTab === "regional" ? (
              <RegionalSims />
            ) : (
              <LocalSims />
            )}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default StoreTab;
