import "../global.css";
import { View, Text } from "ui";
import { ScrollView } from "react-native";

export default function Index() {
  return (
    <ScrollView>
      <View className="flex-1 items-center p-6 bg-gray-100 dark:bg-gray-900">
        <Text variant="h1" color="primary" weight="bold" className="mb-8 mt-12">
          Text 컴포넌트 테스트
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
      </View>
    </ScrollView>
  );
}
