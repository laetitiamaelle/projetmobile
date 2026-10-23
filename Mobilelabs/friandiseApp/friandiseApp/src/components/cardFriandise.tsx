import { Friandise } from "@/interfaces/friandise";
import { Badge } from "expo-router";
import {Text, View,Image, Button,StyleSheet, Pressable}from "react-native";

type Props={
    objetFriandise:Friandise;
}
export default function CardFriandise({objetFriandise}:Props){
    return(
        <View style={style.container}>
            { objetFriandise.isnew && <Badge>nouveau</Badge>}
            <Image source={objetFriandise.image} style={style.imageCarte}></Image>
            <View style={style.container1}><Text style={style.nameTitle}>{objetFriandise.nom}</Text>
            <View style={style.container2}>
                <Text>{objetFriandise.prix} FCFA</Text>
                <Pressable onPress={()=>alert("menu ouvert")}><Text style={style.menuTextStyle}>...</Text></Pressable>
            </View>
            </View>
        </View>
        )
    

}
const style= StyleSheet.create({
imageCarte: {
    width: "100%",
    height:"110px",
    
  },
  container:{
    width:"170px",
    height:"170px",
    borderRadius:20,
    marginTop:20,
    marginLeft:10,
    overflow:'hidden',
    boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.1)',
    
  },
  container1:{
     paddingLeft:15,
     paddingRight:15,
     paddingBottom:10
  },
  nameTitle:{
    fontWeight:700,
    marginTop:"10px"
  },
  container2:{
    flexDirection:'row',
     justifyContent:'space-between',
     alignItems:"center"
  },
  menuTextStyle:{
    fontSize:24
  }
})