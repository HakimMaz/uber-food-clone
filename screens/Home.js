import React, { useState,useEffect} from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import Categories from "../components/Categories";
import HeaderTabs from "../components/HeaderTabs";
import RestaurantItems from "../components/RestaurantItems";
import SearchBar from "../components/SearchBar";
import { localRestaurants } from "../components/RestaurantItems";
import axios from 'axios'
import {YELP_API_KEY} from '@env'

export default function Home() {
  const [restaurants, setRestaurants] = useState(localRestaurants);
  const[city,setCity]=useState('San Francesco');

  useEffect(() => {
    getRestaurentsFromYelp(); 
  }, [city]);
  
  const getRestaurentsFromYelp = () => {
    const yelpUrl =
      `https://api.yelp.com/v3/businesses/search?term=restaurant&location=${city}`;
    const yelpOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };
     axios.get(yelpUrl,yelpOptions).then(res=>{
         setRestaurants(res.data.businesses)
    });   
  };
  
  const handleCity=(city)=>{
      setCity(city)
  }
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", height: "100%" }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <SearchBar CityHandler={handleCity}/>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={restaurants}/>
      </ScrollView>
    </SafeAreaView>
  );
}
