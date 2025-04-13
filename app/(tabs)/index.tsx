import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import useFetch from "@/Hooks/useFetch";
import { fetchMovies } from "@/utils/api";
import { Link, router, useRouter } from "expo-router";
import { Text, View, Image, ScrollView, ActivityIndicator, FlatList } from "react-native";

export default function Index() {
  const router = useRouter()
  const {data:popularMovies,loading,error:popularMoviesError,refetch}=useFetch(()=>fetchMovies({query:""}));
  console.log(popularMovies)
  return (
    <View className="flex-1 bg-primary"
    >
     <Image source={images.bg} className="absolute z-0 w-full" />
     {
      loading ? (
        <ActivityIndicator size="large" color="white" />
      ):popularMoviesError?(
        <Text className="text-red-500 font-bold text-center">{popularMoviesError.message}</Text>):(
          <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 10,minHeight: "100%"}}>
          <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />
          <SearchBar
          placeholder="Search for a movie or TV show"
          value=""
          onChangeText={(text) => console.log(text)}
          onPress={() => router.push("/search")}
          />
        
          <FlatList
          data={popularMovies}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <MovieCard
            {...item}
            />
          )}
          numColumns={3}
          columnWrapperStyle={{justifyContent: "flex-start",
            gap: 20,
            paddingRight: 5,
            marginBottom: 10,

          }}
         className="mt-2 pb-32"

        
          />
         </ScrollView>
        )
     }

    
    </View>
  );
}
