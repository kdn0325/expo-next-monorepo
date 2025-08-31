import React from "react";
import {
  Text as ReactNativeText,
  TextProps as RNTextProps,
} from "react-native";
import { cssInterop } from "nativewind";
import { cn } from "ui/utils/cn";

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
    | "success";
  weight?: "normal" | "medium" | "bold";
}

cssInterop(ReactNativeText, {
  className: "style",
});

export const Text = React.forwardRef<
  React.ElementRef<typeof ReactNativeText>,
  TextProps
>(
  (
    {
      children,
      className,
      variant = "body",
      color = "default",
      weight = "normal",
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

    const colorStyles = {
      default: "text-gray-900 dark:text-gray-100",
      primary: "text-blue-600 dark:text-blue-400",
      secondary: "text-purple-600 dark:text-purple-400",
      accent: "text-cyan-600 dark:text-cyan-400",
      muted: "text-gray-500 dark:text-gray-400",
      error: "text-red-600 dark:text-red-400",
      success: "text-green-600 dark:text-green-400",
    };

    const weightStyles = {
      normal: "font-normal",
      medium: "font-medium",
      bold: "font-bold",
    };

    return (
      <ReactNativeText
        ref={ref}
        className={cn(
          variantStyles[variant],
          colorStyles[color],
          weightStyles[weight],
          className
        )}
        {...props}
      >
        {children}
      </ReactNativeText>
    );
  }
);

Text.displayName = "Text";
