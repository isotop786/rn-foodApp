import {Text, View, SafeAreaView,Image,TextInput, ScrollView} from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
    ChevronDownIcon,
    MagnifyingGlassIcon,
    UserIcon,
    AdjustmentsVerticalIcon
} from "react-native-heroicons/outline"

import Category from '../Component/Category'
import FeaturedRow from '../Component/FeaturedRow'


const Home = () => {
 const navigation = useNavigation()

 useLayoutEffect(()=>{
    navigation.setOptions({
        headerShown:false 
    })
 },[])
  return (
    <SafeAreaView className="bg-white pt-5">
    
      {/* Header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image 
            source={{uri:'https://links.papareact.com/wru'}}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
      <View className="flex-1">
        <Text className="font-bold, text-gray-400 text-xs ">Deliver Now!</Text>
        <Text className="font-bold text-xl ">Current Location
            <ChevronDownIcon size={20} color="#00cc88"/>
        </Text>
      </View>
      <UserIcon size={35} color="#00cc88"/>
      </View>
      {/* HeaderEnds */}

      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-1 flex-row space-x-2 bg-gray-200 p-3 ">
            <MagnifyingGlassIcon color="grey"/>
            <TextInput
                placeholder='Restuarants and cuisines'
                keyboardType='default'
            />
        </View>
        <AdjustmentsVerticalIcon color="#00cc88"/>
      </View>
      {/* SearchEnds */}


    {/* Body */}
    <ScrollView>
        {/* Category */}
        <Category/>
        {/* Category ends */}

        {/* Featured Rows */}
        <FeaturedRow 
            id="1"
            title="Featured"
            description="Paid placements from our partners"
            featuredCategory="featured"
        />

        <FeaturedRow 
            id="2"
            title="Featured"
            description="Paid placements from our partners"
            featuredCategory="featured"
        />

        <FeaturedRow 
            id="3"
            title="Featured"
            description="Paid placements from our partners"
            featuredCategory="featured"
        />

        {/* Featured Rows Ends */}

    </ScrollView>
    {/* Body Ends */}

    </SafeAreaView>
  )
}

export default Home
