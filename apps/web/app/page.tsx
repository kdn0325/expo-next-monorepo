"use client";

import { View } from "ui/view";
import { Button } from "ui/Button";

export default function Home() {
  return (
    <View className="flex-1 justify-center items-center">
      <p className="mb-6">
        Get started by editing&nbsp;
        <code className="font-mono font-bold">app/page.tsx</code>
      </p>
      <View className="gap-4">
        <Button
          title="Primary Button"
          onPress={() => alert("Primary button clicked!")}
        />
        <Button
          title="Secondary Button"
          variant="secondary"
          onPress={() => alert("Secondary button clicked!")}
        />
        <Button
          title="Disabled Button"
          disabled={true}
          onPress={() => alert("This won't be called")}
        />
      </View>
    </View>
  );
}
