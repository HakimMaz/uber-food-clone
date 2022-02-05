import { View, Text, Platform } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function ViewCart() {
  return (
    <View style={{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        position: 'absolute',
        bottom:Platform.OS==='ios'?320:350,
        zIndex:999
    }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <TouchableOpacity
          style={{
            marginTop: 20,
            backgroundColor: "#000",
            width: 300,
            borderRadius: 25,
            position: 'relative',
            alignItems: "center",
            padding: 13,
          }}
        >
          <Text style={{ color: "#fff" ,fontSize:20}}>View Card</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
