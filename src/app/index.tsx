import { Stack } from "expo-router";
import { FlatList, StyleSheet, View } from "react-native";

//user defined components
import { DAYS_LISTING_DATA } from "@/assets/dummyData/contants";
import { constants, globalStyles } from "@/themes";
import DayListingItem from "@components/day1/card/DayListingItem";

export default function App() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Draft 30" }} />
      <FlatList
        data={DAYS_LISTING_DATA}
        renderItem={({ item, index }) => (
          <DayListingItem item={item} key={index} />
        )}
        keyExtractor={(item, index) => index.toString()}
        numColumns={3}
        contentContainerStyle={styles.flatlistContainer}
        columnWrapperStyle={styles.flatlistColumn}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: globalStyles.appScreen,

  flatlistContainer: {
    gap: constants.spacingM,
  },

  flatlistColumn: {
    gap: constants.spacingM,
  },

  item: {
    flex: 1,
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: constants.borderRadius,
    borderWidth: constants.borderWidth,
  },
});
