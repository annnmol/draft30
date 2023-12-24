import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, ToastAndroid, View } from "react-native";

//user defined components
import { constants, globalStyles } from "@/themes";
import { AppText } from "@components/core/text";
import { AppButton } from "@/components/core/buttons";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppExpoIcons } from "@/components/core/icons";
import { AppImage } from "@/components/core/images";

const browncolor = `#362506`;

const onboardingSteps = [
  {
    image: "https://anmol-apps.s3.ap-south-1.amazonaws.com/rn-draft30/dogOnboard1.svg",
    icon: "snowflake",
    title: "Welcome #DEVember",
    description: "Daily React Native tutorials during December",
  },
  {
    image: "https://anmol-apps.s3.ap-south-1.amazonaws.com/rn-draft30/dogOnboard2.svg",
    icon: "people-arrows",
    title: "Learn and grow together",
    description: "Learn by building 24 projects with React Native and Expo",
  },
  {
    image: "https://anmol-apps.s3.ap-south-1.amazonaws.com/rn-draft30/dogOnboard3.svg",
    icon: "book-reader",
    title: "Education for Children",
    description:
      'Contribute to the fundraiser "Education for Children" to help Save the Children in their effort of providing education to every child',
  },
];

const OnboardingScreen = () => {
  const router = useRouter();
  const desiredRoute = ``;

  const [screenIndex, setScreenIndex] = useState(0);

  const data = onboardingSteps[screenIndex];

  const handleOnContinue = () => {
    const isLastScreen = screenIndex === onboardingSteps.length - 1;
    if (isLastScreen) {
      endOnboarding();
    } else {
      setScreenIndex(screenIndex + 1);
    }
  };

  const handleOnBack = () => {
    const isFirstScreen = screenIndex === 0;
    if (isFirstScreen) {
      endOnboarding();
    } else {
      setScreenIndex(screenIndex - 1);
    }
  };

  const endOnboarding = () => {
    ToastAndroid.show('Welcome to Draft30!', ToastAndroid.SHORT);
    // setScreenIndex(0);
    router.back();
  };

  // const handleCardPress = () => {
  //   router.push({ pathname: desiredRoute, params: { id: item?.value } });
  // };
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />

      {/* <View style={styles.pageContent} key={screenIndex}> */}
        <AppImage key={screenIndex} source={data.image} style={styles.image} contentFit="contain" />
        {/* <View style={styles.iconBox}>
          <AppExpoIcons name={data.icon as any} size={100} color="black" />
        </View> */}
      <View style={styles.infoBox}>
          <AppText variant="h1">{data.title}</AppText>
          <AppText variant="h5">{data.description} </AppText>
        </View>
        <View style={styles.btnBox}>
          <AppButton
            onPress={() => {
              handleOnBack();
            }}
            variant="text"
            textVariant="button2"
            style={{ flex: 0.3 }}
          >
            Skip
          </AppButton>
          <AppButton
            onPress={() => {
              handleOnContinue()
            }}
            style={{ flex: 0.7 }}
            variant="primary"
            textVariant="button2"
          >
            Continue 
          </AppButton>
        </View>
      {/* </View> */}
    </SafeAreaView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    ...globalStyles.appScreen,
    flex: 1,
    // backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
    gap: constants.spacingLXX,
    // backgroundColor: browncolor,
    backgroundColor: "#ce1a1a",
  },
  btnBox: {
    marginTop: "auto",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: constants.spacing,
    paddingVertical: constants.spacingM,
    // backgroundColor: browncolor,

  },
  iconBox: {
    // marginTop: "auto",
    backgroundColor: "red",
    paddingVertical: constants.spacing,
    justifyContent: "center",
    alignItems: "center",
    // marginBottom: constants.spacingLXX,
  },
  infoBox: {
    // backgroundColor: "green",
    paddingVertical: constants.spacing,
    justifyContent: "center",
    alignItems: "center",
    gap: constants.spacingM,
  },
  image: {
    height: constants.windowHeight * 0.5,
    width: "100%",
  },
});
