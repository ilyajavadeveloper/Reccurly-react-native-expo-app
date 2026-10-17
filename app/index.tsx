import '../global.css'
import { Text, View, Pressable } from "react-native";
import {Link} from "expo-router";

export default function App() {
  return (
    <View className='flex-1 items-center justify-center bg-background px-4'>
      <Text className='text-xl font-bold text-success mb-2'>
        Welcome to Nativewind!
      </Text>
      <Link href='/onboarding' asChild>
        <Pressable className='mt-4 w-48 items-center rounded-xl bg-primary p-4 active:opacity-80'>
          <Text className='text-white font-medium'>Go to onboarding</Text>
        </Pressable>
      </Link>
      <Link href='/(auth)/sign-in' asChild>
        <Pressable className='mt-4 w-48 items-center rounded-xl bg-primary p-4 active:opacity-80'>
          <Text className='text-white font-medium'>Go Sign in</Text>
        </Pressable>
      </Link>
      <Link href='/(auth)/sign-up' asChild>
        <Pressable className='mt-4 w-48 items-center rounded-xl bg-primary p-4 active:opacity-80'>
          <Text className='text-white font-medium'>Go Sign up</Text>
        </Pressable>
      </Link>
    </View>
  );
}
