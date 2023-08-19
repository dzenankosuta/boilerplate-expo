import { View, Text, ScrollView, Dimensions } from "react-native";
import React, { forwardRef, useImperativeHandle } from "react";
import styles from "./CountrySimsStyles";
import CountrySimCard from "../../components/Card/SimCards/CountrySimCard";

const CountrySims = forwardRef(({ route }, ref) => {
  const { state } = route.params;

  useImperativeHandle(
    ref,
    () => ({
      countryName: state.country,
    }),
    []
  );
  return (
    <View style={[styles.container]}>
      <ScrollView
        style={{
          width: "100%",
        }}
      >
        <View style={[styles.cardWrapper]}>
          <CountrySimCard
            provider={"Mamma Mia"}
            country={"Italy"}
            data={1}
            validity={30}
            price={"US$38"}
            background={"#B31312"}
            onPress={() => console.log("a")}
          />
          <CountrySimCard
            provider={"Mamma Mia"}
            country={"Italy"}
            data={1}
            validity={30}
            price={"US$38"}
            background={"#B31312"}
            onPress={() => console.log("a")}
          />
          <CountrySimCard
            provider={"Mamma Mia"}
            country={"Italy"}
            data={1}
            validity={30}
            price={"US$38"}
            background={"#B31312"}
            onPress={() => console.log("a")}
          />
        </View>
      </ScrollView>
    </View>
  );
});

export default CountrySims;
