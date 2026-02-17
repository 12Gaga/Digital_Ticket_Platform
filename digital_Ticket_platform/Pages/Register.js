import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import globalApi from "../Configs/globalApi";
import { useNavigation } from "@react-navigation/native";

export default function RegisterPage() {
  const [data, setData] = useState({ username: "", email: "", password: "" });
  const navigation = useNavigation();
  const click_btn = async () => {
    try {
      if (!data.username || !data.email || !data.password) {
        alert("Please fill all fields");
        return;
      }

      const resp = await globalApi.setUser(data);

      if (resp.ok) {
        navigation.navigate("login");
        setData({ username: "", email: "", password: "" });
      } else {
        alert("Failed Registration.");
        console.log("Failed ❌", resp.data);
      }
    } catch (error) {
      alert("Registration Error");
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
        Register Here
      </Text>
      <TextInput
        placeholder="User Name"
        value={data.name}
        onChangeText={(text) => setData({ ...data, username: text })}
        style={styles.text_input}
      />
      <TextInput
        placeholder="Email"
        value={data.email}
        onChangeText={(text) => setData({ ...data, email: text })}
        style={styles.text_input}
      />
      <TextInput
        placeholder="Password"
        value={data.password}
        onChangeText={(text) => setData({ ...data, password: text })}
        style={styles.text_input}
      />
      <TouchableOpacity style={styles.register_btn} onPress={click_btn}>
        <Text style={{ color: "white" }}>Resigter</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("login");
        }}
      >
        <Text style={{ color: "#0383CE", textAlign: "center", fontSize: 10 }}>
          Log In
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
    backgroundColor: "#0383CE",
    padding: 10,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    marginBottom: 10,
  },
});
