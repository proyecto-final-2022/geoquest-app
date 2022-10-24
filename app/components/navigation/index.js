import React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import Game from "../screens/Game";
"../screens/DrawerContent";

const Drawer = createDrawerNavigator();

export default function Navigation() {
  return(                
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Game" component={Game} options={{ headerShown: false, headerStyle: {backgroundColor: "#FFF9CA"}}}/>
  </Drawer.Navigator>
  );
}
