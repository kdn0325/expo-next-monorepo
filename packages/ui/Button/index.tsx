import React from "react";
import { Pressable, Text, StyleSheet, PressableProps } from "react-native";

export interface ButtonProps extends PressableProps {
  title: string;
  variant?: "primary" | "secondary";
  disabled?: boolean;
}

export const Button = ({
  title,
  variant = "primary",
  disabled = false,
  ...props
}: ButtonProps) => {
  const buttonStyle = [
    styles.button,
    variant === "primary" ? styles.primaryButton : styles.secondaryButton,
    disabled && styles.disabledButton,
  ];

  const textStyle = [
    styles.text,
    variant === "primary" ? styles.primaryText : styles.secondaryText,
  ];

  return (
    <Pressable style={buttonStyle} disabled={disabled} {...props}>
      <Text style={textStyle}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 8,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  primaryButton: {
    backgroundColor: "#dc2626",
  },
  secondaryButton: {
    backgroundColor: "#9ca3af",
  },
  disabledButton: {
    opacity: 0.5,
  },
  text: {
    fontWeight: "bold",
  },
  primaryText: {
    color: "#ffffff",
  },
  secondaryText: {
    color: "#111827",
  },
});

export default Button;
