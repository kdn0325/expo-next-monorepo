import type { NextConfig } from "next";
import { withExpo } from "@expo/next-adapter";

const nextConfig: NextConfig = withExpo({
  reactStrictMode: true,
  turbo: false,
  transpilePackages: ["react-native", "react-native-web", "ui"],
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "react-native$": "react-native-web",
      "react-native/Libraries/Image/AssetRegistry":
        "react-native-web/dist/cjs/modules/AssetRegistry",
    };
    config.resolve.extensions = [
      ".web.js",
      ".web.jsx",
      ".web.ts",
      ".web.tsx",
      ...config.resolve.extensions,
    ];
    return config;
  },
});

export default nextConfig;
