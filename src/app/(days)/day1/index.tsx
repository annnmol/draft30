import { Stack, useRouter } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";

//user defined components
import { constants, globalStyles } from "@/themes";
import { AppText } from "@components/core/text";
import { AppButton } from "@/components/core/buttons";

const headerTitle = `Day 1: Onboarding Screen`;
const title = `Onboarding Screens`;
const description = `This is the onboarding screen for day 1`;
const buttleText = `Explore Screens`;
const routeName = `/day1/onboarding`;

const DayDetailsScreen = () => {
  const router = useRouter();

  const handleButtonPress = () => {
    router.push({ pathname: routeName });
  };
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: headerTitle }} />
      <AppText variant="h4" style={styles.title}>
        {title}
      </AppText>
      <AppText variant="body1">{description}</AppText>
      <View style={styles.btnBox}>
        <AppButton
          onPress={() => {
            handleButtonPress();
          }}
          variant="primary"
          textVariant="button2"
        >
          {buttleText}
        </AppButton>
      </View>
    </View>
  );
};

export default DayDetailsScreen;

const styles = StyleSheet.create({
  container: {
    ...globalStyles.appScreen,
    flex: 1,
    // backgroundColor: "yellow",
  },
  btnBox: {
    marginTop: "auto",
  },
  title: {
    fontWeight: "bold",
    // textAlign: "center",
    marginBottom: constants.spacingM,
  },
});
