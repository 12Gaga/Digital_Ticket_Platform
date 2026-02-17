import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "../../Pages/Login";
import RegisterPage from "../../Pages/Register";
import HomePage from "../../Pages/Home";
import QRcode from "../../Components/QRcode";
import { useEffect, useState } from "react";

const Stack = createNativeStackNavigator();

export default function Navigations() {
  const [user, setUser] = useState(null);
  console.log("user", user);
  useEffect(() => {
    const fetchUser = async () => {
      const storedUser = await UserAuth.getUserAuth(); // if async
      setUser(storedUser);
    };

    fetchUser();
  }, []);
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={user ? "home" : "register"}
    >
      <Stack.Screen name="register" component={RegisterPage} />
      <Stack.Screen name="login" component={LoginPage} />
      <Stack.Screen name="home" component={HomePage} />
      <Stack.Screen name="qr" component={QRcode} />
    </Stack.Navigator>
  );
}
