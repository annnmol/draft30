import { Slot, Stack } from "expo-router";

export default function AppLayout() {
  return (
    <Stack
      screenOptions={{
        headerTintColor: "white",
        headerTitleAlign: "center",
        headerBackTitleStyle: false,
        gestureEnabled: true,
        presentation: "card",
        headerShown: false,
      }}
      initialRouteName="index"
    />
  );
}
