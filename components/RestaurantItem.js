import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
export default function RestaurantItem() {
  return (
    <TouchableOpacity 
        activeOpacity={1}
        style={{marginBottom:30}}>
      <View style={{ padding: 15, marginTop: 10, backgroundColor: "#fff" }}>
        <ImageRestaurant />
        <RestaurantInfo />
      </View>
    </TouchableOpacity>
  );
}
const ImageRestaurant = () => {
  return (
    <>
      <Image
        source={{
          uri: "https://static3.depositphotos.com/1003631/209/i/600/depositphotos_2099183-stock-photo-fine-table-setting-in-gourmet.jpg",
        }}
        style={{ width: "100%", height: 180 }}
      />
      <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
        <MaterialCommunityIcons name="heart-outline" size={26} color="#fff" />
      </TouchableOpacity>
    </>
  );
};

const RestaurantInfo = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
      }}
    >
      <View style={{}}>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>
          {" "}
          dummy restaurant india
        </Text>
        <Text style={{ fontSize: 13, color: "gray", marginLeft: 5 }}>
          30 -45 • min
        </Text>
      </View>
      <View
        style={{
          borderRadius: 50,
          backgroundColor: "#eee",
          height: 30,
          width: 30,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>4</Text>
      </View>
    </View>
  );
};
