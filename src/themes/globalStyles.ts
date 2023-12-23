import { StyleSheet } from "react-native";
import theme from "@/themes/theme";
import typography from "@/themes/typography";
import constants from "@/themes/constants";

const globalStyles = StyleSheet.create({
  paddingHorizontal: {
    paddingHorizontal: constants.spacingM,
  },
  paddingVertical: {
    paddingVertical: constants.spacingM,
  },
  padding: {
    paddingVertical: constants.spacingM,
    paddingHorizontal: constants.spacingM,
    borderWidth: 2,
    borderColor: theme.error,
  },
  appScreen: {
    paddingVertical: constants.spacingM,
    paddingHorizontal: constants.spacingM,
    borderWidth: 2,
      borderColor: theme.error,
      flex: 1,
    backgroundColor: theme.background,
  },

  // text: {
  //   color: theme.white,
  //   ...typography.h4,
  // },
});

export default globalStyles;

