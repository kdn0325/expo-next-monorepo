import { Text, Alert } from "react-native";
import { View } from "ui/view";
import { Button } from "ui/Button";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="mb-6">Edit app/index.tsx to edit this screen.</Text>
      <View className="gap-4 w-3/4">
        <Button
          title="Primary Button"
          onPress={() => Alert.alert("알림", "Primary 버튼이 클릭되었습니다!")}
        />
        <Button
          title="Secondary Button"
          variant="secondary"
          onPress={() =>
            Alert.alert("알림", "Secondary 버튼이 클릭되었습니다!")
          }
        />
        <Button
          title="Disabled Button"
          disabled={true}
          onPress={() => Alert.alert("알림", "이 알림은 표시되지 않습니다")}
        />
      </View>
    </View>
  );
}
