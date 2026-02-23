import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "../../Pages/Login";
import RegisterPage from "../../Pages/Register";
import HomePage from "../../Pages/Home";
import QRcode from "../../Pages/QRcode";
import { useEffect, useState } from "react";
import QRcheck from "../../Pages/QRcheck";
import Detail from "../../Pages/Detail";
import UserAuth from "../../Configs/UserAuth";

const Stack = createNativeStackNavigator();

export default function Navigations() {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  console.log("user1", user);
  useEffect(() => {
    const fetchUser = async () => {
      const storedUser = await UserAuth.getUserAuth(); // if async
      setUser(storedUser);
      setLoading(false);
    };

    fetchUser();
  }, []);
  if (loading) return null;
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={user ? "home" : "register"}
    >
      <Stack.Screen name="register" component={RegisterPage} />
      <Stack.Screen name="login" component={LoginPage} />
      <Stack.Screen name="home" component={HomePage} />
      <Stack.Screen name="qr" component={QRcode} />
      <Stack.Screen name="qrcheck" component={QRcheck} />
      <Stack.Screen name="ticketDetail" component={Detail} />
    </Stack.Navigator>
  );
}
