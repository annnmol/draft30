import React from "react";
import { StyleSheet, View } from "react-native";
import { AppText } from "../../core";

interface Props {
  item: {
    label: string;
    value: number;
  };
}

const DayListingItem: React.FC<Props> = ({ item }) => {
  return (
    <View style={styles.card}>
      <AppText variant="h3" style={styles.title}>
        {item?.label}
      </AppText>
    </View>
  );
};

export default DayListingItem;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    borderWidth: StyleSheet.hairlineWidth,
  },

  title: {},
});
