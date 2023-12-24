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
    paddingHorizontal: constants.spacing,
    flex: 1,
    backgroundColor: theme.background,
    // borderWidth: 2,
    // borderColor: theme.error,
  },

  // text: {
  //   color: theme.white,
  //   ...typography.h4,
  // },
});

export default globalStyles;
