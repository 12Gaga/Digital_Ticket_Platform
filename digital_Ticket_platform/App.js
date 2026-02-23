import { NavigationContainer } from "@react-navigation/native";
import Navigations from "./Apps/Navigations/Navigations";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import UserAuth from "./Configs/UserAuth";
import HomePage from "./Pages/Home";
import { View, Text } from "react-native";

const linking = {
  prefixes: ["ticketapp://"],
  config: {
    screens: {
      qrcheck: "qrcheck/:id",
    },
  },
};

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Navigations />
    </NavigationContainer>
    // <NavigationContainer>
    //   <View className="bg-red-500 flex-1 items-center justify-center">
    //     <Text className="text-white text-lg">Hello NativeWind</Text>
    //   </View>
    // </NavigationContainer>
  );
}
