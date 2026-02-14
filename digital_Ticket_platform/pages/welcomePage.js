import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import globalApi from "../Apis/globalApi";

export default function WelcomePage() {
  const [data, setData] = useState({ Name: "", Email: "", Password: "" });
  const click_btn = async () => {
    try {
      if (!data.Name || !data.Email || !data.Password) {
        alert("Please fill all fields");
        return;
      }

      const resp = await globalApi.setUser(data);

      if (resp.ok) {
        console.log("Successfully registered ✅", resp.data);
      } else {
        console.log("Failed ❌", resp.data);
      }
    } catch (error) {
      console.log("Register error ❌", error);
    }
  };
  return (
    <View>
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
        onChangeText={(text) => setData({ ...data, Name: text })}
        style={styles.text_input}
      />
      <TextInput
        placeholder="Email"
        value={data.email}
        onChangeText={(text) => setData({ ...data, Email: text })}
        style={styles.text_input}
      />
      <TextInput
        placeholder="Password"
        value={data.password}
        onChangeText={(text) => setData({ ...data, Password: text })}
        style={styles.text_input}
      />
      <TouchableOpacity style={styles.register_btn} onPress={click_btn}>
        <Text style={{ color: "white" }}>Resigter</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
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
  },
});
