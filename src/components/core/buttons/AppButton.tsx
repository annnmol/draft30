import React from "react";
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

//user defined components
import { AppText } from "../text";
import { theme } from "@/themes";

interface Props extends React.ComponentProps<typeof TouchableOpacity> {
  textStyle?: StyleProp<any>;
  variant?: "outline" | "primary" | "text";
  textVariant?: "button1" | "button2" | "button3";
  style?: StyleProp<ViewStyle>;
  subText?: string;
  onPress: () => void;
  children: React.ReactNode;
  [otherProps: string]: any;
}

const AppButton: React.FC<Props> = ({
  style,
  textStyle,
  variant = "primary",
  textVariant = "button1",
  children,
  onPress,
  subText,
  ...otherProps
}) => {
  if (variant === "outline")
    return (
      <TouchableOpacity
        onPress={() => onPress()}
        activeOpacity={0.9}
        style={[styles.outlineButton, style && style]}
        {...otherProps}
      >
        <AppText style={[styles.textOutline, textStyle]} variant={textVariant}>
          {children}
        </AppText>
      </TouchableOpacity>
    );

  if (variant === "text")
    return (
      <TouchableOpacity
        onPress={() => onPress()}
        activeOpacity={0.9}
        style={[styles.textButton, style && style]}
        {...otherProps}
      >
        <AppText style={[styles.text, textStyle]} variant={textVariant}>
          {children}
        </AppText>
      </TouchableOpacity>
    );

  return (
    <TouchableOpacity
      onPress={() => onPress()}
      activeOpacity={0.9}
      style={[styles.primaryButton, style && style]}
      {...otherProps}
    >
      <AppText style={[styles.text, textStyle]} variant={textVariant}>
        {children}
      </AppText>
      {subText && (
        <AppText variant={"body3"} style={[styles.text, { lineHeight: 14 }]}>
          {subText}
        </AppText>
      )}
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  //heading
  //* primary btn

  text: {
    color: "rgba(255,255,255,0.9)",
  },
  textOutline: {
    color: theme.accent,
  },

  primaryButton: {
    backgroundColor: theme.primary,
    width: "100%",
    height: 44,
    borderRadius: 8,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },

  //*outline
  outlineButton: {
    backgroundColor: theme.white,
    width: "100%",
    height: 44,
    borderRadius: 8,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },

  textButton: {
    width: "100%",
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    textAlign: "center",
  },
});
