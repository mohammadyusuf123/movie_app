
import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import useFetch from "@/Hooks/useFetch";
import { fetchMovies } from "@/utils/api";
import { Link, router, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View, Image, ScrollView, ActivityIndicator, FlatList } from "react-native";

export default function search() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("");
  console.log(searchQuery)
  const {data:popularMovies,loading,error:popularMoviesError,refetch,reset}=useFetch(()=>fetchMovies({query:searchQuery}),false);
  useEffect(()=>{
    const fetchData=async()=>{
     
      if(searchQuery.trim()){
        await refetch();
      }
      else{
        reset();
      }
    }
    fetchData();
  },[searchQuery])
  return (
    <View className="flex-1 bg-primary"
    >
     <Image source={images.bg} className="absolute z-0 w-full" />
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
          ListHeaderComponent={
            <>
              <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />
          <SearchBar
          placeholder="Search movies or TV shows..."
          value={searchQuery}
          onChangeText={(text: string) => {
            setSearchQuery(text);
          }}
          onPress={() => {
            console.log("Search button pressed");
          }}
          />
           {
            loading ? (
              <ActivityIndicator size="large" color="white" />
            ):popularMoviesError?(
              <Text className="text-red-500 font-bold text-center">{popularMoviesError.message}</Text>):(
              <Text className="text-white font-bold text-xl">Search results for "{searchQuery}"</Text>
            )
          }
          
            </>
          }
          ListEmptyComponent={
            <Text className="text-white font-bold text-center">No results found</Text>}
         className="mt-2 pb-32"
         
          />
    </View>
  );
}
