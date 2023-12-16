import { AppText } from "@components/core";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { View } from "react-native";

const DayDetailsScreen = () => {
  const params = useLocalSearchParams();
  // console.log({params});
  return (
    <View>
      <AppText variant="h5">Day Details Screen {params?.id}</AppText>
    </View>
  );
};

export default DayDetailsScreen;
