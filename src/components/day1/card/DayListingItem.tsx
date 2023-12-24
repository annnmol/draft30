import { useRouter } from "expo-router";
import React from "react";
import { Pressable, StyleSheet } from "react-native";

//user defined components
import { AppText } from "@/components/core/text";

interface Props {
  item: {
    label: string;
    value: number;
  };
}

const DayListingItem: React.FC<Props> = ({ item }) => {
  const router = useRouter();
  const desiredRoute = `day${item?.value}`;
  
  const handleCardPress = () => {
    router.push({ pathname: desiredRoute });
  };

  return (
    <Pressable style={styles.card} onPress={handleCardPress}>
      <AppText variant="h4" style={styles.title}>
        {item?.label}
      </AppText>
    </Pressable>
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
