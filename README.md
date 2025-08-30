# Expo Next Monorepo

> A cross-platform application with a monorepo structure supporting iOS, Android, and web from a single codebase.

This project is a monorepo template integrating Expo, Next.js, and NativeWind, providing an environment to simultaneously develop mobile (iOS/Android) and web applications from a single codebase.

## Tech Stack

- **Monorepo Management**: Turborepo v2.5.6
- **Mobile App**: Expo v53.0.22 (React Native v0.79.6)
- **Web App**: Next.js v15.5.2
- **Styling**: NativeWind (Tailwind CSS v3.4.1 for React Native)
- **Language**: TypeScript v5.9.2

## Project Structure

```
expo-next-monorepo/
├── apps/
│   ├── native/          # Expo (React Native) app
│   └── web/             # Next.js web app
├── packages/
│   ├── app/             # Shared application logic
│   └── ui/              # Shared UI components
├── package.json
├── tsconfig.json
└── turbo.json
```

- **apps/native**: iOS/Android applications using Expo
- **apps/web**: Web application using Next.js
- **packages/ui**: UI components shared between mobile and web
- **packages/app**: Shared code including business logic, API calls, etc.

## Getting Started

### Using NPX (Recommended)

You can quickly create a new project using this template with the following command:

```bash
npx @kdn0325/create-expo-next-monorepo
```

This will guide you through setting up a new project with all the necessary configurations.

### Manual Installation

#### Prerequisites

- Node.js (LTS or higher)
- Yarn
- iOS Development: XCode & CocoaPods
- Android Development: Android Studio

### Installation

```bash
# Clone repository
git clone https://github.com/kdn0325/expo-next-monorepo.git
cd expo-next-monorepo

# Install dependencies
yarn install
```

### Running Development Servers

```bash
# Run web app development server
yarn workspace web dev

# Run mobile app development server
yarn workspace native start
```

## Features

- **Code Sharing**: Share business logic and UI components between mobile and web
- **Consistent Styling**: Use Tailwind CSS syntax for consistent styling across mobile and web through NativeWind
- **Type Safety**: Static type checking with TypeScript
- **Rapid Development**: Fast build and development speeds with Turborepo

## NativeWind Usage

```tsx
// Example component
import { View, Text } from "react-native";

export function MyComponent() {
  return (
    <View className="p-4 bg-blue-500 rounded-lg">
      <Text className="text-white font-bold">Hello World!</Text>
    </View>
  );
}
```

## Contributing

1. Fork this repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Submit a Pull Request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
