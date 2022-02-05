import React, { useState,useEffect} from "react";
import { View,  ScrollView } from "react-native";
import Categories from "../components/Home/Categories";
import HeaderTabs from "../components/Home/HeaderTabs";
import RestaurantItems from "../components/Home/RestaurantItems";
import SearchBar from "../components/Home/SearchBar";
import { localRestaurants } from "../components/Home/RestaurantItems";
import BottomTabs from "../components/Home/BottomTabs";
import axios from 'axios'
import {YELP_API_KEY} from '@env'
import { Divider } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home({navigation}) {
  const [restaurants, setRestaurants] = useState(localRestaurants);
  const[city,setCity]=useState('San Francisco');
  const[activeTab,setActiveTab]=useState('Delivery')

  useEffect(() => {
    getRestaurentsFromYelp(); 
  }, [city,activeTab]);
  
  const getRestaurentsFromYelp = () => {
    const yelpUrl =
      `https://api.yelp.com/v3/businesses/search?term=restaurant&location=${city}`;
    const yelpOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };
     axios.get(yelpUrl,yelpOptions).then((res)=>{
         const restaurants =  res.data.businesses.filter(
             item=> item.transactions.includes(activeTab.toLowerCase())); 
         setRestaurants(restaurants);
                
    });   
  };
  
  const handleCity=(city)=>{
      setCity(city)
  }
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", height: "100%" }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
        <SearchBar CityHandler={handleCity}/>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={restaurants} navigation={navigation}/>
      </ScrollView>
      <Divider width={1} />
      <BottomTabs/>
    </SafeAreaView>
  );
}
