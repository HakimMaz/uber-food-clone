import { View, Text, Image } from 'react-native';
import React from 'react';

const image ="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80"
const title = "FarmHouse Kitchen Thai Cuisine";
const description= "Thai • Comfort Food • $$ 💵 • 4 ⭐  (2913+)"
export default function About() {
  return (
    <View>
        <RestaurantImage image={image}/>
        <RestaurantTitle  title={title}/>
        <RestaurantDescription description={description}/>
    </View>
  );
}

const RestaurantImage=({image})=>(
    <Image source={{uri:image}}
    style={{ width:'100%',height:180}}
    />
)

const RestaurantTitle=({title})=>(
    <Text style={{
        fontSize:29,
        fontWeight:'600',
        marginTop:10,
        marginHorizontal:15
    }}>{title}</Text>
)

const RestaurantDescription=({description})=>(
    <Text style={{
        fontSize:15.5,
        fontWeight:'400',
        marginTop:10,
        marginHorizontal:15
    }}>
        {description}
    </Text>

)