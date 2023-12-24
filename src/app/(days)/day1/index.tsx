import { Stack, useLocalSearchParams } from "expo-router";
import React from "react";
import { View } from "react-native";

//user defined components
import { globalStyles } from "@/themes";
import { AppText } from "@components/core/text";

const DayDetailsScreen = () => {
  const {id} = useLocalSearchParams();
  return (
    <View style={globalStyles.appScreen}>
        <Stack.Screen options={{title: `Day ${id}`}} />
      <AppText variant="h5">Day Details Screen {id }</AppText>
    </View>
  );
};

export default DayDetailsScreen;
