import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import globalApi from "../Configs/globalApi";

export default function Detail() {
  const navigation = useNavigation();
  const { id } = useRoute().params;
  const [ticketData, setTicketData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const resp = await globalApi.getTicketById(id);
      if (resp.ok) {
        console.log("detail", resp.data.data);
        setTicketData(resp.data.data);
      }
    };
    fetchData();
  }, [id]);

  const handleValid = async () => {
    try {
      const resp = await globalApi.changeTicketStatus(ticketData[0].documentId);
      if (resp.ok) {
        setTicketData([]);
        navigation.navigate("home");
      } else {
        alert("Failed to update ticket");
        console.log("error", resp.problem);
      }
    } catch (error) {
      console.error(error);
      alert("Error updating ticket");
    }
  };

  return (
    <View style={styles.container}>
      {ticketData.length > 0 ? (
        <>
          <Text>Ticket Detail</Text>
          <Text>Name : {ticketData[0].Name}</Text>
          <Text>Ticket Type : {ticketData[0].ticket_type.Name}</Text>
        </>
      ) : (
        <Text>Ticket can't found in the database or Used Ticket</Text>
      )}
      <TouchableOpacity
        style={[styles.btn, { width: 150 }]}
        onPress={handleValid}
      >
        <Text style={{ color: "white" }}>Valid</Text>
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
  btn: {
    width: 100,
    backgroundColor: "#0383CE",
    padding: 10,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    marginTop: 10,
  },
});
