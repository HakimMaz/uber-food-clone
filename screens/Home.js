import React, { useState,useEffect} from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import Categories from "../components/Categories";
import HeaderTabs from "../components/HeaderTabs";
import RestaurantItems from "../components/RestaurantItems";
import SearchBar from "../components/SearchBar";
import { localRestaurants } from "../components/RestaurantItems";
import axios from 'axios'
const YELP_API_KEY = "youOcyO1q_sHQ-dUaKYTmy2yDPPjHvZU3BaHAn1ZDt8-PFU20SfQ0U6DyQiBBsb7NHj59x0WHExU_3_f3WTOdzfRuZGH98TjybliFxKebbelHX21ZHBEO6wNhGH6YXYx";
export default function Home() {
  const [restaurants, setRestaurants] = useState(localRestaurants);
  useEffect(() => {
    getRestaurentsFromYelp(); 
  }, []);
  
  const getRestaurentsFromYelp = () => {
    const yelpUrl =
      "https://api.yelp.com/v3/businesses/search?term=restaurant&location=Hollywood";
    const yelpOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };
     axios.get(yelpUrl,yelpOptions).then(res=>{
         setRestaurants(res.data.businesses)
    });   
  };
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", height: "100%" }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={restaurants} />
      </ScrollView>
    </SafeAreaView>
  );
}
