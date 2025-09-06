import "../global.css";
import { View, Text, Button } from "ui";
import { ScrollView, Alert } from "react-native";

export default function Index() {
  // Button press event handler
  const handlePress = (buttonName: string) => {
    Alert.alert(`${buttonName} 버튼이 클릭되었습니다!`);
  };

  return (
    <ScrollView>
      <View className="flex-1 items-center p-6 bg-white dark:bg-gray-900">
        <Text variant="h1" color="primary" weight="bold" className="mb-8 mt-12">
          UI 컴포넌트 테스트
        </Text>

        <View className="w-full space-y-8 bg-white dark:bg-gray-800 p-6 rounded-xl">
          <View className="space-y-4">
            <Text variant="h2" color="accent" className="border-b pb-2">
              텍스트 변형(Variants)
            </Text>
            <Text variant="h1" className="mb-2">
              H1 제목 텍스트
            </Text>
            <Text variant="h2" className="mb-2">
              H2 제목 텍스트
            </Text>
            <Text variant="h3" className="mb-2">
              H3 제목 텍스트
            </Text>
            <Text variant="h4" className="mb-2">
              H4 제목 텍스트
            </Text>
            <Text variant="body" className="mb-2">
              Body 본문 텍스트
            </Text>
            <Text variant="caption" className="mb-2">
              Caption 텍스트
            </Text>
            <Text variant="small">Small 텍스트</Text>
          </View>

          <View className="space-y-4">
            <Text variant="h2" color="accent" className="border-b pb-2">
              텍스트 색상(Colors)
            </Text>
            <Text color="default" className="mb-2">
              기본 색상 텍스트
            </Text>
            <Text color="primary" className="mb-2">
              주요 색상 텍스트
            </Text>
            <Text color="secondary" className="mb-2">
              보조 색상 텍스트
            </Text>
            <Text color="accent" className="mb-2">
              강조 색상 텍스트
            </Text>
            <Text color="muted" className="mb-2">
              흐린 색상 텍스트
            </Text>
            <Text color="error" className="mb-2">
              오류 색상 텍스트
            </Text>
            <Text color="success">성공 색상 텍스트</Text>
          </View>

          <View className="space-y-4">
            <Text variant="h2" color="accent" className="border-b pb-2">
              텍스트 두께(Weights)
            </Text>
            <Text weight="normal" className="mb-2">
              기본 두께 텍스트
            </Text>
            <Text weight="medium" className="mb-2">
              중간 두께 텍스트
            </Text>
            <Text weight="bold">굵은 두께 텍스트</Text>
          </View>

          <View className="space-y-4 mb-12">
            <Text variant="h2" color="accent" className="border-b pb-2">
              조합 예시
            </Text>
            <Text variant="h3" color="primary" weight="bold" className="mb-2">
              중요 제목 텍스트
            </Text>
            <Text
              variant="body"
              color="secondary"
              weight="medium"
              className="mb-2"
            >
              강조된 본문 텍스트
            </Text>
            <Text
              variant="caption"
              color="error"
              weight="bold"
              className="mb-2"
            >
              오류 메시지 텍스트
            </Text>
            <Text variant="small" color="success" className="italic">
              성공 안내 텍스트
            </Text>
          </View>
        </View>

        {/* 버튼 컴포넌트 테스트 섹션 */}
        <Text variant="h1" color="primary" weight="bold" className="mb-8 mt-12">
          Button 컴포넌트 테스트
        </Text>

        <View className="w-full space-y-8 bg-white dark:bg-gray-800 p-6 rounded-xl">
          <View className="space-y-4">
            <Text variant="h2" color="accent" className="border-b pb-2">
              버튼 변형(Variants)
            </Text>

            <View className="space-y-6">
              <Button
                variant="default"
                className="w-full my-2"
                onPress={() => handlePress("Default")}
              >
                <Text color="white" weight="medium" className="text-white">
                  Default 버튼
                </Text>
              </Button>

              <Button
                variant="primary"
                className="w-full my-2"
                onPress={() => handlePress("Primary")}
              >
                <Text color="white" weight="medium" className="text-white">
                  Primary 버튼
                </Text>
              </Button>

              <Button
                variant="secondary"
                className="w-full my-2"
                onPress={() => handlePress("Secondary")}
              >
                <Text color="white" weight="medium" className="text-white">
                  Secondary 버튼
                </Text>
              </Button>

              <Button
                variant="outline"
                color="primary"
                className="w-full my-2"
                onPress={() => handlePress("Outline")}
              >
                <Text color="primary" weight="medium">
                  Outline 버튼
                </Text>
              </Button>

              <Button
                variant="ghost"
                color="primary"
                className="w-full my-2"
                onPress={() => handlePress("Ghost")}
              >
                <Text color="primary" weight="medium">
                  Ghost 버튼
                </Text>
              </Button>

              <Button
                variant="link"
                color="primary"
                className="w-full my-2"
                onPress={() => handlePress("Link")}
              >
                <Text color="primary" weight="medium">
                  Link 버튼
                </Text>
              </Button>
            </View>
          </View>

          <View className="space-y-4">
            <Text variant="h2" color="accent" className="border-b pb-2">
              버튼 크기(Sizes)
            </Text>

            <View className="space-y-6">
              <Button
                variant="primary"
                size="sm"
                className="w-full my-2"
                onPress={() => handlePress("Small")}
              >
                <Text color="white" weight="medium" className="text-white">
                  Small 버튼
                </Text>
              </Button>

              <Button
                variant="primary"
                size="md"
                className="w-full my-2"
                onPress={() => handlePress("Medium")}
              >
                <Text color="white" weight="medium" className="text-white">
                  Medium 버튼
                </Text>
              </Button>

              <Button
                variant="primary"
                size="lg"
                className="w-full my-2"
                onPress={() => handlePress("Large")}
              >
                <Text color="white" weight="medium" className="text-white">
                  Large 버튼
                </Text>
              </Button>
            </View>
          </View>

          <View className="space-y-4">
            <Text variant="h2" color="accent" className="border-b pb-2">
              버튼 색상(Colors)
            </Text>

            <View className="space-y-6">
              <Button
                variant="default"
                color="primary"
                className="w-full my-2"
                onPress={() => handlePress("Primary 색상")}
              >
                <Text color="white" weight="medium" className="text-white">
                  Primary 색상
                </Text>
              </Button>

              <Button
                variant="default"
                color="secondary"
                className="w-full my-2"
                onPress={() => handlePress("Secondary 색상")}
              >
                <Text color="white" weight="medium" className="text-white">
                  Secondary 색상
                </Text>
              </Button>

              <Button
                variant="default"
                color="accent"
                className="w-full my-2"
                onPress={() => handlePress("Accent 색상")}
              >
                <Text color="white" weight="medium" className="text-white">
                  Accent 색상
                </Text>
              </Button>

              <Button
                variant="default"
                color="error"
                className="w-full my-2"
                onPress={() => handlePress("Error 색상")}
              >
                <Text color="white" weight="medium" className="text-white">
                  Error 색상
                </Text>
              </Button>

              <Button
                variant="default"
                color="success"
                className="w-full my-2"
                onPress={() => handlePress("Success 색상")}
              >
                <Text color="white" weight="medium" className="text-white">
                  Success 색상
                </Text>
              </Button>
            </View>
          </View>

          <View className="space-y-4 mb-12">
            <Text variant="h2" color="accent" className="border-b pb-2">
              상태 예시
            </Text>

            <View className="space-y-6">
              <Button
                variant="primary"
                disabled
                className="w-full my-2"
                onPress={() => handlePress("비활성화")}
              >
                <Text
                  color="default"
                  weight="medium"
                  className="text-neutral-500"
                >
                  비활성화 버튼
                </Text>
              </Button>

              <Button
                variant="outline"
                color="error"
                className="w-full my-2"
                onPress={() => handlePress("에러 테두리")}
              >
                <Text color="error" weight="medium">
                  에러 테두리 버튼
                </Text>
              </Button>

              <Button
                variant="ghost"
                color="success"
                className="w-full my-2"
                onPress={() => handlePress("성공 고스트")}
              >
                <Text color="success" weight="medium">
                  성공 고스트 버튼
                </Text>
              </Button>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
