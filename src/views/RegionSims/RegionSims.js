import { View, ScrollView } from "react-native";
import React, { forwardRef, useImperativeHandle } from "react";
import styles from "./RegionSimsStyles";
import RegionSimCard from "../../components/Card/SimCards/RegionSimCard";

const RegionSims = forwardRef(({ route }, ref) => {
  const { state } = route.params;

  useImperativeHandle(
    ref,
    () => ({
      regionName: state.region,
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
          <RegionSimCard
            region={"Island Hopper"}
            coverage={24}
            supportedCountries={[
              {
                name: "United States",
                flag: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png",
              },
              {
                name: "Canada",
                flag: "https://cdn.britannica.com/68/7068-004-7848FEB4/Flag-Canada.jpg",
              },
            ]}
            data={1}
            validity={30}
            price={"US$38"}
            background={"#008080"}
            onPress={() => console.log("a")}
          />
        </View>
      </ScrollView>
    </View>
  );
});

export default RegionSims;
