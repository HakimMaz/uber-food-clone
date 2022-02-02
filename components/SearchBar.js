import React from "react";
import { View, Text } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesing from "react-native-vector-icons/AntDesign";
const GOOGLE_PLACES_KEY = "AIzaSyDmYoG7EanXXutLLJbodXZuB2bEblNIudE";
export default function SearchBar() {
  return (
    <View style={{ marginTop: 10, flexDirection: "row" }}>
      <GooglePlacesAutocomplete
        query={{ key: GOOGLE_PLACES_KEY }}
        placeholder="Search"
        styles={{
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 20,
            fontWeight: "700",
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
          },
        }}
        renderLeftButton={() => (
          <View style={{ marginLeft: 10 }}>
            <Ionicons name="location-sharp" size={25} />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              marginRight: 10,
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "white",
              padding: 9,
              borderRadius: 30,
            }}
          >
            <AntDesing name="clockcircle" style={{ marginRight: 6 }} />
            <Text>Search</Text>
          </View>
        )}
      />
    </View>
  );
}
