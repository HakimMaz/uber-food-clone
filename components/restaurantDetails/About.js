import { View, Text, Image } from "react-native";
import React from "react";

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
