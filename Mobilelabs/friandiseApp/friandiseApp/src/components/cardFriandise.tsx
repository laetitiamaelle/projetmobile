import { Friandise } from "@/interfaces/friandise";
import { Badge } from "expo-router";
import {Text, View,Image, Button,StyleSheet, Pressable}from "react-native";
import { useActionSheet } from "@expo/react-native-action-sheet";

type Props={
    objetFriandise:Friandise;
}


export default function CardFriandise({objetFriandise}:Props){
 const { showActionSheetWithOptions } = useActionSheet();
const displayAction=()=>{
 const actions :string[]=["supprimer","enregistrer","annuler"];
  showActionSheetWithOptions({
    title:"options",
    options:actions,
    cancelButtonIndex:2,
    destructiveButtonIndex:0
  },(selectIndex:number|undefined)=>{
  switch(selectIndex){
    case 0:
      alert("la friandise ne peux pas etre supprimer pour le moment");
      break;
    case 1:
      alert("la friandise a ete enregistrer dans votre panier");
  }
})
}
    return(
        <View style={style.container}>
            { objetFriandise.isnew && <View style={style.styleBadge}><Text style={{color:"white",fontWeight:"700"}}>Nouveau</Text></View>}
            <Image source={objetFriandise.image} style={style.imageCarte} resizeMode="stretch"></Image>
            <View style={style.container1}><Text style={style.nameTitle}>{objetFriandise.nom}</Text>
            <View style={style.container2}>
                <Text>{objetFriandise.prix} FCFA</Text>
                <Pressable onPress={displayAction}><Text style={style.menuTextStyle}>...</Text></Pressable>
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
    height:"180px",
    borderRadius:20,
    marginTop:20,
    marginLeft:10,
    overflow:'hidden',
    boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.1)',
    
  },
  container1:{
     paddingLeft:15,
     paddingRight:15,
     paddingBottom:15
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
  },
  styleBadge:{
    position:'absolute',
    left:10,
    top:10,
    backgroundColor:'#75B843',
    width:80,
    height:20,
    borderRadius:30,
    zIndex:2,
    justifyContent:"center",
    alignItems:"center"
    
  }
})