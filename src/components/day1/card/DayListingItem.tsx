import { AppText } from '@/components/core';
import { Link, router } from 'expo-router';
import React from "react";
import { Pressable, StyleSheet } from "react-native";

interface Props {
  item: {
    label: string;
    value: number;
  };
}

const DayListingItem: React.FC<Props> = ({ item }) => {

  const desiredRoute = `day${item?.value}`;

  const handleCardPress = () => {
    router.replace(desiredRoute);
  }


  return (
    <Link href={{pathname:desiredRoute,params:{id:item?.value}}} asChild>
    <Pressable style={styles.card}>
      <AppText variant="h4" style={styles.title}>
        {item?.label}
      </AppText>
    </Pressable>
    </Link>
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
