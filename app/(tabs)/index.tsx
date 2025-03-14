import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Link, router, useRouter } from "expo-router";
import { Text, View, Image, ScrollView } from "react-native";

export default function Index() {
  const router = useRouter()
  return (
    <View className="flex-1 bg-primary"
    >
     <Image source={images.bg} className="absolute z-0 w-full" />

     <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 10,minHeight: "100%"}}>
      <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />
      <SearchBar
      placeholder="Search for a movie or TV show"
      onPress={() => router.push("/search")}
      />
     </ScrollView>
    </View>
  );
}
