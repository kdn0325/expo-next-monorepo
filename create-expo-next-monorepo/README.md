# @kdn0325/create-expo-next-monorepo

> A template generator for building cross-platform applications with Expo, Next.js, and NativeWind in a monorepo structure

This package creates a monorepo template for cross-platform applications using the `npx @kdn0325/create-expo-next-monorepo` command.

## Installation and Usage

```bash
npx @kdn0325/create-expo-next-monorepo
```

Running this command will display an interactive prompt where you can select your project name and preferred package manager.

## Template Features

- **Code Sharing**: Share business logic and UI components between mobile and web platforms
- **Consistent Styling**: Use Tailwind CSS syntax for consistent styling across mobile and web through NativeWind
- **Type Safety**: Static type checking with TypeScript
- **Rapid Development**: Fast build and development speeds with Turborepo

## Generated Project Structure

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

## License

MIT
