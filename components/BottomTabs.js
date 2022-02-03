import { View, Text } from 'react-native';
import React from 'react';

export default function BottomTabs() {
  return (
    <View style={{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:30,
        marginTop:10}}>
      <View>
          <Text>1</Text>
          <Text>1</Text>
      </View>
      <View>
          <Text>2</Text>
          <Text>2</Text>
      </View>
      <View>
          <Text>3</Text>
          <Text>3</Text>
      </View>
      <View>
          <Text>4</Text>
          <Text>4</Text>
      </View>
    </View>
  );
}
