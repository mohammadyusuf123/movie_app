import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { icons } from '@/constants/icons'

const MovieCard = ({id,title,poster_path,vote_average,release_date}:Movie) => {
  return (
    <Link href={`/movies/${id}`} asChild className="w-1/3">
        <TouchableOpacity className="w-[30%]">
            <Image source={{
                uri: poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : "https://via.placeholder.com/300"
            }} className="w-full h-52 rounded-lg" 
            resizeMode="cover"
            />
            <Text className="text-white font-bold" numberOfLines={1}>{title}</Text>
            <View className="flex-row items-center justify-start gap-x-1">
                <Image source={icons.star} className="w-4 h-4" />
                <Text className="text-white">{Math.round(vote_average/2)}</Text>
            </View>
            <Text className="text-white">{release_date}</Text>
        </TouchableOpacity>
    </Link>
  )
}
        


export default MovieCard

const styles = StyleSheet.create({
})