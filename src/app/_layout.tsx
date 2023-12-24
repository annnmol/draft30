import * as SplashScreen from "expo-splash-screen";
import { Stack } from "expo-router";
import { useEffect } from "react";
import { StyleSheet } from "react-native";

//user defined components
import { theme, typography } from "@/themes";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function AppLayout() {
  useEffect(() => {
    //     //hide the splash screen
    SplashScreen.hideAsync();
  }, []);
  return (
    <Stack
      screenOptions={{
        //stack
        gestureEnabled: true,
        presentation: "transparentModal",

        //status bar
        statusBarStyle: "auto",
        statusBarTranslucent: true,

        //header back button

        //header
        headerTintColor: "white",
        headerTitleAlign: "center",
        headerStyle: styles.header,
        headerTitleStyle: styles.text,
      }}
      initialRouteName="index"
    />
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: theme.primary,
  },

  text: {
    color: theme.white,
    ...typography.h4,
  },

  backTitleStyle: {
    fontSize: typography.body3.fontSize,
  },
});
