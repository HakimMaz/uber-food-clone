import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import About from '../components/restaurantDetails/About';
import { Divider } from 'react-native-elements';
import MenuItems from '../components/restaurantDetails/MenuItems';

export default function RestaurantDetail({route}) {
    const {restaurant} = route.params
  return (
    <View>
        <About restaurantInfo={restaurant}/>
        <Divider width={1.8}  style={{marginVertical:20}}/>
        <MenuItems/>
    </View>
  );
}
