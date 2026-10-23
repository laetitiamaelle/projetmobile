import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack>
    <Stack.Screen name="index" options={{title:"Friandise Shop",headerStyle:{backgroundColor:"#FAEEDA"},headerTitleStyle:{color:"#633806"},headerTitleAlign:"center"}}/>
    </Stack>;
}
