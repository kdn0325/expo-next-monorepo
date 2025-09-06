import React from "react";
import { Pressable, PressableProps, ViewStyle, StyleProp } from "react-native";
import { cssInterop } from "nativewind";
import { cn } from "../utils/cn";
import { colors } from "../theme/colors";

export interface ButtonProps extends PressableProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "accent"
    | "error"
    | "success"
    | "warning"
    | "info";
  disabled?: boolean;
  loading?: boolean;
  style?: StyleProp<ViewStyle>;
}

cssInterop(Pressable, {
  className: "style",
});

// Get button colors based on variant and color type
const getButtonColors = (
  variant: ButtonProps["variant"] = "default",
  colorType: ButtonProps["color"] = "default",
  disabled: boolean = false
): { background: ViewStyle } => {
  if (disabled) {
    return {
      background: { backgroundColor: colors.neutral[200] },
    };
  }

  // Base case for variant="default"
  if (variant === "default" || !variant) {
    const bgColor =
      colorType === "default"
        ? colors.neutral[900]
        : colors[colorType || "primary"].default;
    return {
      background: { backgroundColor: bgColor },
    };
  }

  // Handle other variants
  switch (variant) {
    case "primary":
      return {
        background: { backgroundColor: colors.primary.default },
      };
    case "secondary":
      return {
        background: { backgroundColor: colors.secondary.default },
      };
    case "outline":
      return {
        background: {
          backgroundColor: "transparent",
          borderWidth: 1,
          borderColor:
            colorType === "default"
              ? colors.neutral[300]
              : colors[colorType || "primary"].default,
        },
      };
    case "ghost":
      return {
        background: { backgroundColor: "transparent" },
      };
    case "link":
      return {
        background: { backgroundColor: "transparent" },
      };
    default:
      return {
        background: { backgroundColor: colors.neutral[900] },
      };
  }
};

export const Button = React.forwardRef<
  React.ComponentRef<typeof Pressable>,
  ButtonProps
>(
  (
    {
      children,
      className,
      variant = "default",
      size = "md",
      color = "default",
      disabled = false,
      loading = false,
      style,
      ...props
    },
    ref
  ) => {
    // Size styles
    const sizeStyles = {
      sm: "py-1 px-3",
      md: "py-2 px-4",
      lg: "py-3 px-5",
    };

    // Get button styles based on variant and color
    const buttonColors = getButtonColors(variant, color, disabled);

    // Base styles
    const baseButtonClass = "flex-row items-center justify-center rounded-md";

    const isLink = variant === "link";

    return (
      <Pressable
        ref={ref}
        className={cn(
          baseButtonClass,
          sizeStyles[size],
          !isLink && "shadow-sm",
          disabled && "opacity-50",
          className
        )}
        style={[buttonColors.background, style]}
        disabled={disabled || loading}
        {...props}
      >
        {children}
      </Pressable>
    );
  }
);

Button.displayName = "Button";

export default Button;
