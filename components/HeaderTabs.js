import React ,{useState} from 'react'
import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'

export default function HeaderTabs() {
   const [activeTab, setActiveTab] = useState("Delivery")
    return (
        <View style={styles.container}>
            <HeaderButton 
            title="Delivery" 
            //backgroundColor ="#fff" 
            textColor="#000" 
            activeTab={activeTab}
            setActiveTab={setActiveTab}/>
            <HeaderButton 
            title="Pickup" 
            //backgroundColor ="#000"
            textColor="#fff"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </View>
    )
}

const HeaderButton = ({title,setActiveTab,activeTab}) => (
        <TouchableOpacity 
        onPress={()=>setActiveTab(title)}
        style={{backgroundColor:activeTab===title?"#000":"#fff",
                paddingVertical:6,
                paddingHorizontal:16,
                borderRadius:30}}>
             <Text style={{color:activeTab===title?"#fff":"#000", fontSize:15,fontWeight:"900"}}> {title} </Text>
        </TouchableOpacity>   
    
)

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignSelf:'center'
    }
})