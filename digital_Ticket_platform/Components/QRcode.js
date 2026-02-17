import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import QRCode from "react-native-qrcode-svg";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function QRcode() {
  const { ticketData } = useRoute().params;
  const navigation = useNavigation();
  console.log("data", ticketData);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ position: "absolute", top: 30, left: 5 }}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Text style={{ marginBottom: 3 }}>Name : {ticketData.name}</Text>
      <Text style={{ marginBottom: 10 }}>
        Ticket Type : {ticketData.ticket_type}
      </Text>
      <QRCode value={JSON.stringify(ticketData)} size={200} />
      <Text style={{ marginTop: 10 }}>Save your QR code </Text>
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
});
