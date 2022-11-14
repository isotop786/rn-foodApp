import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestuarantCard from './RestuarantCard'

const FeaturedRow = ({id,title,description}) => {
  return (
    <View>
        <View className="mt-4 flex-row items-center justify-between px-4">
            <Text className="font-bold text-lg">{title}</Text>
            <ArrowRightIcon color="#00cc88"/>
        </View>
        <Text className="text-xs text-gray-500 px-4">{description}</Text>

        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                paddingHorizontal: 15,
            }}
            className="pt-4"
        >
        <RestuarantCard
            id="1"
            imgUrl="https://thumbs.dreamstime.com/b/pizza-rustic-italian-mozzarella-cheese-basil-leaves-35669930.jpg"
            title="Sushi "
            rating="4.5"
            genre="Japanese"
            address="123 Main St"
            short_description="Lorem ipusm dolro something text"
            dishes={[]}
            long={20}
            lat={0}
        />
        <RestuarantCard
            id="1"
            imgUrl="https://thumbs.dreamstime.com/b/pizza-rustic-italian-mozzarella-cheese-basil-leaves-35669930.jpg"
            title="Sushi "
            rating="4.5"
            genre="Japanese"
            address="123 Main St"
            short_description="Lorem ipusm dolro something text"
            dishes={[]}
            long={20}
            lat={0}
        />
        </ScrollView>
    </View>
  )
}

export default FeaturedRow