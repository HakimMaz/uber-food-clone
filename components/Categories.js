import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
const items = [
  {
    image: require("../assets/images/shopping-bag.png"),
    text: "Pick-up",
  },
  {
    image: require("../assets/images/fast-food.png"),
    text: "Fast Foods",
  },
  {
    image: require("../assets/images/bread.png"),
    text: "Bareky Items",
  },
  {
    image: require("../assets/images/coffee.png"),
    text: "Coffee & Tea",
  },
  {
    image: require("../assets/images/desserts.png"),
    text: "Desserts",
  },
  {
    image: require("../assets/images/soft-drink.png"),
    text: "Soft drink",
  },
  {
    image: require("../assets/images/deals.png"),
    text: "Deals",
  },
];
export default function Categories() {
  return (
    <View style={{
        marginTop:5,
        backgroundColor:'white',
        paddingLeft:20,
        paddingVertical:10}}>
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {items.map((item, index) => (
        <View
          style={{
            alignItems: "center",
            marginRight: 30,
          }}
          key={index}
        >
          <Image
            source={item.image}
            style={{
              width: 50,
              height: 40,
              resizeMode: "contain",
            }}
          />
          <Text
            style={{
              fontWeight: "900",
              fontSize: 13,
            }}
          >
            {item.text}
          </Text>
        </View>
      ))}
    </ScrollView>
    </View>
  );
}
