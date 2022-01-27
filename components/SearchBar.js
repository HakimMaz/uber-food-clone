import React from 'react'
import { View, Text } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from 'react-native-vector-icons/Ionicons'
export default function SearchBar() {
    return (
        <View style={{marginTop:10,flexDirection:'row'}}>
            <GooglePlacesAutocomplete
            placeholder='Search'
           styles={{
               textInput:{
                   backgroundColor:'#eee',
                   borderRadius:20,
                   fontWeight:'700',
                   marginTop:7
               },
               textInputContainer:{
                   backgroundColor:'#eee',
                   borderRadius:50,
                   flexDirection:'row',
                   alignItems:'center',
                   marginRight:10
               },  
           }}
           renderLeftButton={()=>(
               <View style={{marginLeft:10}}>
                   <Ionicons name='location-sharp' size={25}/>
               </View>
           )}
           />
        </View>
    )
}
