import { View, Text,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { StarIcon,MapPinIcon } from 'react-native-heroicons/solid'


const RestuarantCard = ({
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat
}) => {
  return (
    <TouchableOpacity className="mr-2 bg-gray-100 shadow">
      <Image
        source={{
            uri: imgUrl
        }}
        className="h-36 w-64 rounded-sm"
      />

      <View className="px-3 pb-4 ">
        <Text className="font-bold text-lg">{title}</Text>
        <View className="flex-row items-center space-x-1">
            <StarIcon color="gold" opacity={0.5} size={25}/>
            <Text className="text-xs text-gray-500">
                <Text>{rating} . {genre}</Text>
            </Text>
        </View>

        <View className="flex-row items-center space-x-1">
            <MapPinIcon size={20} color="#00cc88" />
            <Text className="text-gray-500 text-xs">Nearby .{address}</Text>
        </View> 
      </View>

    </TouchableOpacity>
  )
}

export default RestuarantCard