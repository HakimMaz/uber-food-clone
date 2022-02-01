import React, { useState,useEffect} from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import Categories from "../components/Categories";
import HeaderTabs from "../components/HeaderTabs";
import RestaurantItems from "../components/RestaurantItems";
import SearchBar from "../components/SearchBar";
import { localRestaurants } from "../components/RestaurantItems";

const YELP_API_KEY = " ";
export default function Home() {
  const [restaurants, setRestaurants] = useState(localRestaurants);
  useEffect(() => {
    console.log(" hereeeee");
    getRestaurentsFromYelp(); 
  }, []);
  
  const getRestaurentsFromYelp = () => {
    const yelpUrl =
      "https://api.yelp.com/v3/businesses/search?term=delis&latitude=37.786882&longitude=-122.399972";
    const yelpOptions = {
      headers: {
        Authorisation: `Bearer ${YELP_API_KEY}`,
      },
    };
    return fetch(yelpUrl, yelpOptions)
      .then((res) => res.json())
      .then((json) => //
      //setRestaurants(json.businesses)
      console.log(" just here")
      );
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
