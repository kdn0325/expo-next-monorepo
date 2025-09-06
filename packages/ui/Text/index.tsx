import React from "react";
import {
  Text as ReactNativeText,
  TextProps as RNTextProps,
  TextStyle,
} from "react-native";
import { cssInterop } from "nativewind";
import { cn } from "../utils/cn";
import { colors } from "../theme/colors";

interface TextProps extends RNTextProps {
  children: React.ReactNode;
  className?: string;
  variant?: "h1" | "h2" | "h3" | "h4" | "body" | "caption" | "small";
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "accent"
    | "muted"
    | "error"
    | "success"
    | "warning"
    | "info"
    | "white"
    | "dark";
  weight?: "normal" | "medium" | "bold";
}

cssInterop(ReactNativeText, {
  className: "style",
});

// 컬러 유틸 함수: colors 객체에서 색상 가져오기
const getTextColor = (colorType: TextProps["color"]): TextStyle => {
  if (!colorType || colorType === "default") {
    return { color: colors.neutral[900] }; // 기본 색상
  }

  // 색상 타입에 따라 해당하는 색상 반환
  switch (colorType) {
    case "primary":
      return { color: colors.primary.default };
    case "secondary":
      return { color: colors.secondary.default };
    case "accent":
      return { color: colors.accent.default };
    case "muted":
      return { color: colors.neutral[500] };
    case "error":
      return { color: colors.error.default };
    case "success":
      return { color: colors.success.default };
    case "warning":
      return { color: colors.warning.default };
    case "info":
      return { color: colors.info.default };
    case "white":
      return { color: colors.white.default };
    case "dark":
      return { color: colors.dark.default };
    default:
      return { color: colors.neutral[900] }; // 기본 색상
  }
};

export const Text = React.forwardRef<
  React.ComponentRef<typeof ReactNativeText>,
  TextProps
>(
  (
    {
      children,
      className,
      variant = "body",
      color = "default",
      weight = "normal",
      style,
      ...props
    },
    ref
  ) => {
    // Basic style mapping
    const variantStyles = {
      h1: "text-4xl leading-tight",
      h2: "text-3xl leading-tight",
      h3: "text-2xl leading-tight",
      h4: "text-xl leading-tight",
      body: "text-base leading-normal",
      caption: "text-sm leading-normal",
      small: "text-xs leading-normal",
    };

    const weightStyles = {
      normal: "font-normal",
      medium: "font-medium",
      bold: "font-bold",
    };

    // 텍스트 색상 가져오기
    const textColorStyle = getTextColor(color);

    return (
      <ReactNativeText
        ref={ref}
        className={cn(variantStyles[variant], weightStyles[weight], className)}
        style={[textColorStyle, style]}
        {...props}
      >
        {children}
      </ReactNativeText>
    );
  }
);

Text.displayName = "Text";
