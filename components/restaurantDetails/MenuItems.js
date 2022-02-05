import { View, Text, Image,ScrollView} from "react-native";
import React from "react";
import { CheckBox, Divider } from "react-native-elements";

 const food = [
  {
    title: "Beachside Bar",
    image_url:
      "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
    categories: ["Cafe", "Bar"],
    description:'same description averywhere,you go',
    price: "$16",
    reviews: 1244,
    rating: 4.5,
  },
  {
    title: "Benihana",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Cafe", "Bar"],
    description:'same description averywhere,you go',
    price: "$20",
    reviews: 1244,
    rating: 3.7,
  },
  {
    title: "India's Grill",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Indian", "Bar"],
    description:'same description averywhere,you go than so last',
    price: "$47",
    reviews: 700,
    rating: 4.9,
  },
  {
    title: "Beachside Bar",
    image_url:
      "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
    categories: ["Cafe", "Bar"],
    description:'same description averywhere,you go',
    price: "$16",
    reviews: 1244,
    rating: 4.5,
  },
  {
    title: "Beachside Bar",
    image_url:
      "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
    categories: ["Cafe", "Bar"],
    description:'same description averywhere,you go',
    price: "$16",
    reviews: 1244,
    rating: 4.5,
  },
  {
    title: "Beachside Bar",
    image_url:
      "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
    categories: ["Cafe", "Bar"],
    description:'same description averywhere,you go',
    price: "$16",
    reviews: 1244,
    rating: 4.5,
  },
];
export default function MenuItems() {
  return (
    <ScrollView  showsHorizontalScrollIndicator={false}>
    {food.map((item,index)=>(
    <View key={index}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          margin:20
        }}
      >
        {/* <CheckBox/> */}
        <FoodInfo food={item} />
        <FoodImage image={item.image_url} />
      </View>
      <Divider widht={0.5} orientation='vertical' style={{marginHorizontal:20}}/>
    </View>
    )
    )}
    </ScrollView>
  );
}

const FoodInfo = ({ food }) => (
  <View style={{ width: 200, justifyContent: "space-evenly" }}>
    <Text style={{ fontSize: 19, fontWeight: "600" }}>
      {food.title}
    </Text>
    <Text>{food.description}</Text>
    <Text>{food.price}</Text>
  </View>
);

const FoodImage = ({ image }) => (
  <Image
    source={{ uri: image }}
    style={{
      borderRadius: 8,
      height: 90,
      width: 90,
    }}
  />
);
