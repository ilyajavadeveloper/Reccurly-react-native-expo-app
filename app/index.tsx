import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-slate-900 px-4">
      <Text className="text-2xl font-bold text-white mb-2">
        Recurrly
      </Text>
      <Text className="text-base text-slate-400 text-center">
        NativeWind & Tailwind CSS успешно подключены! 🎉
      </Text>
    </View>
  );
}
