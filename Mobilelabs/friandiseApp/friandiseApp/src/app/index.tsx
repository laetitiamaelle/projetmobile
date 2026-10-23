import { Text, View, StyleSheet, FlatList,ScrollView } from "react-native";
import  CardFriandise from "@/components/cardFriandise";
import { Friandise } from "@/interfaces/friandise";
import {listeFriandise} from "@/app/data/data";


export default function Index() {
const friandise :Friandise={
  image:require("@/assets/images/oreo.jpg"),
  nom:"Oreo",
  prix:1000,
 
}
  return (
    <ScrollView style={styles.container}>
      <Text>Mes friandises</Text>
      <FlatList
        numColumns={2}
        columnWrapperStyle={{gap:8}}
        data={listeFriandise}
        renderItem={({item})=><CardFriandise objetFriandise={item}></CardFriandise>}
        />
     {/* <CardFriandise objetFriandise={friandise}></CardFriandise> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});
