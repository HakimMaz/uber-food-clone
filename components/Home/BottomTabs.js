import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
export default function BottomTabs() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 30,
        marginTop: 10,
      }}
    >
      <Icon name="home" title="Home" />
      <Icon name="search" title="Browse" />
      <Icon name="shopping-bag" title="Grosery" />
      <Icon name="receipt" title="Orders" />
      <Icon name="user" title="Account" />
    </View>
  );
}

const Icon = ({ name, title }) => (
  <TouchableOpacity>
    <FontAwesome5
      name={name}
      size={25}
      style={{ marginBottom: 3, alignSelf: "center" }}
    />

    <Text>{title}</Text>
  </TouchableOpacity>
);
