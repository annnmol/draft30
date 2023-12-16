import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { DAYS_LISTING_DATA } from "./src/assets/dummyData/contants";
import DayListingItem from "./src/components/day0/card/DayListingItem";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  
  useEffect(() => {
    //     //hide the splash screen
    SplashScreen.hideAsync();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FlatList
        data={DAYS_LISTING_DATA}
        renderItem={({ item, index }) => (
          <DayListingItem item={item} key={index} />
        )}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        contentContainerStyle={styles.flatlist}
        columnWrapperStyle={styles.flatlistColumn}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d49b9b",
  },
  flatlist: {
    padding: 10,
    gap: 10,
  },
  flatlistColumn: {
    gap: 10,
  },

  item: {
    flex: 1,
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    borderWidth: StyleSheet.hairlineWidth,
  },
});
