import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";

const yelpRestaurantInfo = {
  name: "FarmHouse Kitchen Thai Cuisine",
  image:
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80",
  price: "$$",
  rating: 4.5,
  reviews: "2913",
  categories: [{ title: "Thai" }, { title: "Confort Food" }],
};

// const image ="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80"
// const title = "FarmHouse Kitchen Thai Cuisine";
// const description= "Thai • Comfort Food • $$ 💵 • 4 ⭐  (2913+)"
export default function About({ restaurantInfo }) {
  const { name, image_url, price, rating, review_count, categories } =
    restaurantInfo;
  const formattedCategories = categories.map((cat) => cat.title).join(" • ");

  const description = `${formattedCategories} ${
    price ? "•" + price : ""
  } • 💵 • ${rating} ⭐ (${review_count}) `;

  return (
    <View>
      <RestaurantImage image={image_url} />
      <RestaurantName name={name} />
      <RestaurantDescription description={description} />
    </View>
  );
}

const RestaurantImage = ({ image }) => (
  <Image source={{ uri: image }} style={{ width: "100%", height: 180 }} />
);

const RestaurantName = ({ name }) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: "600",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {name}
  </Text>
);

const RestaurantDescription = ({ description }) => (
  <Text
    style={{
      fontSize: 15.5,
      fontWeight: "400",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {description}
  </Text>
);
