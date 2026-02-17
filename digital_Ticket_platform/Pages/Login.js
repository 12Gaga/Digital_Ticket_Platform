import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import globalApi from "../Configs/globalApi";
import { useNavigation } from "@react-navigation/native";
import UserAuth from "../Configs/UserAuth";

export default function LoginPage() {
  const [data, setData] = useState({ identifier: "", password: "" });
  const [success, setSuccess] = useState(true);
  const navigation = useNavigation();
  const loginUser = async () => {
    try {
      if (!data.identifier || !data.password) {
        alert("Please fill all fields");
        return;
      }

      const resp = await globalApi.checkUser(data);

      if (resp.ok) {
        navigation.navigate("home");
        await UserAuth.setUserAuth(data);
        setSuccess(true);
        setData({ identifier: "", password: "" });
      } else {
        console.log("Failed ❌", resp.data);
        setSuccess(false);
      }
    } catch (error) {
      console.log("Error ❌", error);
      setSuccess(false);
    }
  };
  return (
    <View style={styles.container}>
      <Text
        style={{
          marginBottom: 20,
          fontSize: 25,
          fontStyle: "italic",
          textAlign: "center",
          color: "#0383CE",
          fontWeight: "bold",
        }}
      >
        Log In
      </Text>
      <TextInput
        placeholder="User Name"
        value={data.identifier}
        onChangeText={(text) => setData({ ...data, identifier: text })}
        style={styles.text_input}
      />
      <TextInput
        placeholder="Password"
        value={data.password}
        onChangeText={(text) => setData({ ...data, password: text })}
        style={styles.text_input}
      />
      {!success ? (
        <Text
          style={{
            color: "red",
            fontSize: 11,
            fontWeight: "bold",
            marginBottom: 10,
          }}
        >
          Username or Password invalid.
        </Text>
      ) : (
        <></>
      )}
      <TouchableOpacity style={styles.register_btn} onPress={loginUser}>
        <Text style={{ color: "white" }}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("register");
        }}
      >
        <Text
          style={{
            color: "#0383CE",
            textAlign: "center",
            fontSize: 10,
          }}
        >
          Register
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text_input: {
    width: 330,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 8,
    marginBottom: 18,
    fontSize: 13,
  },
  register_btn: {
    width: 100,
    backgroundColor: "#0383CE",
    padding: 10,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    marginBottom: 10,
  },
});
