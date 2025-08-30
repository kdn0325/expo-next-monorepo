# Expo Next Monorepo

> 하나의 코드베이스에서 iOS, Android, 웹을 지원하는 모노레포 구조의 크로스 플랫폼 애플리케이션

이 프로젝트는 Expo, Next.js, NativeWind를 통합한 모노레포 템플릿으로, 하나의 코드베이스에서 모바일(iOS/Android)과 웹 애플리케이션을 동시에 개발할 수 있는 환경을 제공합니다.

## 기술 스택

- **모노레포 관리**: Turborepo
- **모바일 앱**: Expo (React Native)
- **웹 앱**: Next.js
- **스타일링**: NativeWind (Tailwind CSS for React Native)
- **언어**: TypeScript

## 프로젝트 구조

```
expo-next-monorepo/
├── apps/
│   ├── native/          # Expo (React Native) 앱
│   └── web/             # Next.js 웹 앱
├── packages/
│   ├── app/             # 공유 애플리케이션 로직
│   └── ui/              # 공유 UI 컴포넌트
├── package.json
├── tsconfig.json
└── turbo.json
```

- **apps/native**: Expo를 사용한 iOS/Android 애플리케이션
- **apps/web**: Next.js를 사용한 웹 애플리케이션
- **packages/ui**: 모바일과 웹에서 공유되는 UI 컴포넌트
- **packages/app**: 비즈니스 로직, API 호출 등 공유 코드

## 시작하기

### 필수 조건

- Node.js (lts 이상)
- Yarn
- iOS 개발: XCode & CocoaPods
- Android 개발: Android Studio

### 설치

```bash
# 저장소 클론
git clone https://github.com/kdn0325/expo-next-monorepo.git
cd expo-next-monorepo

# 의존성 설치
yarn install
```

### 개발 서버 실행

```bash
# 웹 앱 개발 서버 실행
yarn workspace web dev

# 모바일 앱 개발 서버 실행
yarn workspace native start
```

## 기능

- **코드 공유**: 모바일과 웹 간에 비즈니스 로직과 UI 컴포넌트 공유
- **일관된 스타일링**: NativeWind를 통해 Tailwind CSS 문법으로 모바일과 웹에서 일관된 스타일링
- **타입 안전성**: TypeScript를 통한 정적 타입 검사
- **빠른 개발**: Turbo를 통한 빠른 빌드 및 개발 속도

## NativeWind 사용법

```tsx
// 예시 컴포넌트
import { View, Text } from "react-native";

export function MyComponent() {
  return (
    <View className="p-4 bg-blue-500 rounded-lg">
      <Text className="text-white font-bold">Hello World!</Text>
    </View>
  );
}
```

## 기여하기

1. 이 저장소를 포크합니다
2. 새 브랜치를 생성합니다 (`git checkout -b feature/amazing-feature`)
3. 변경사항을 커밋합니다 (`git commit -m 'feat: 새로운 기능 추가'`)
4. 브랜치에 푸시합니다 (`git push origin feature/amazing-feature`)
5. Pull Request를 제출합니다

## 라이센스

이 프로젝트는 MIT 라이센스를 따릅니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.
