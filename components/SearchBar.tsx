import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'

type props = {
  onPress: () => void
  placeholder: string
  value: string
  onChangeText: (text: string) => void
}
const SearchBar = ({onPress,placeholder,value,onChangeText }:props) => {
  return (
    <View className='flex-row items-center bg-200  px-5 py-4 rounded-full'>
      <Image source={icons.search} className='size-5'  resizeMode='contain' tintColor={'#ab8bff'}/>
      <TextInput
      onPress={() => onPress()}
        placeholder={placeholder}
        className='flex-1 ml-3 text-[#ab8bff]'
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor='#ab8bff'
        
       />
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({})