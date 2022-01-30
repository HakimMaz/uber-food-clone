import { View, Text, Image ,TouchableOpacity} from "react-native";
import React from "react";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
export default function RestaurantItem() {
  return (
    <View>
      <ImageRestaurant />
      <View></View>
    </View>
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
      <TouchableOpacity style={{position:'absolute',right:20,top:20}}>
          <MaterialCommunityIcons name='heart-outline' size={26} color='#fff'/>
      </TouchableOpacity>
    </>
  );
};
