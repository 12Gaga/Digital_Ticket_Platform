import { NavigationContainer } from "@react-navigation/native";
import Navigations from "./Apps/Navigations/Navigations";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import UserAuth from "./Configs/UserAuth";
import HomePage from "./Pages/Home";

export default function App() {
  const [user, setUser] = useState(null);
  console.log("user", user);

  useEffect(() => {
    const fetchUser = async () => {
      const storedUser = await UserAuth.getUserAuth(); // if async
      setUser(storedUser);
    };

    fetchUser();
  }, []);
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      {user ? <HomePage /> : <Navigations />}
    </NavigationContainer>
  );
}
