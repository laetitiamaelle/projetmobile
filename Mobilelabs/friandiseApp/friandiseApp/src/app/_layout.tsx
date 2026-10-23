import { Stack } from "expo-router";
import { ActionSheetProvider } from"@expo/react-native-action-sheet";
export default function RootLayout() {
  return (
    <ActionSheetProvider>
      <Stack>
        <Stack.Screen name="index" options={{title:"Friandise Shop",headerStyle:{backgroundColor:"#FAEEDA"},headerTitleStyle:{color:"#633806"},headerTitleAlign:"center"}}/>
      </Stack>
    </ActionSheetProvider>
  );
}
