import { View, Text,ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Category = () => {
  return (
    <ScrollView 
        contentContainerStyle={{
            paddingHorizontal:15,
            paddingTop:10
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
    >
        <CategoryCard imgUrl="https://thumbs.dreamstime.com/b/pizza-rustic-italian-mozzarella-cheese-basil-leaves-35669930.jpg" title="Testing 1"/>
        <CategoryCard imgUrl="https://thumbs.dreamstime.com/b/pizza-rustic-italian-mozzarella-cheese-basil-leaves-35669930.jpg" title="Testing 2"/>
        <CategoryCard imgUrl="https://thumbs.dreamstime.com/b/pizza-rustic-italian-mozzarella-cheese-basil-leaves-35669930.jpg" title="Testing 3"/>
        <CategoryCard imgUrl="https://thumbs.dreamstime.com/b/pizza-rustic-italian-mozzarella-cheese-basil-leaves-35669930.jpg" title="Testing 3"/>
        <CategoryCard imgUrl="https://thumbs.dreamstime.com/b/pizza-rustic-italian-mozzarella-cheese-basil-leaves-35669930.jpg" title="Testing 3"/>
        <CategoryCard imgUrl="https://thumbs.dreamstime.com/b/pizza-rustic-italian-mozzarella-cheese-basil-leaves-35669930.jpg" title="Testing 3"/>
        
      
    </ScrollView>
  )
}

export default Category