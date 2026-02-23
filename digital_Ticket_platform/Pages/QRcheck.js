import React, { useEffect, useRef, useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function QRcheck() {
  const navigation = useNavigation();
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus the hidden input when page opens
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleScan = (text) => {
    // Only accept your app QR scheme
    if (text.startsWith("ticketapp://qrcheck/")) {
      const ticketId = text.split("/").pop();
      console.log("Scanned Ticket ID:", ticketId);
      navigation.navigate("ticketDetail", { id: ticketId });
    } else {
      alert("Invalid QR for this app!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>QR Check</Text>
      <Text style={styles.scanPrompt}>
        Scan a ticket with your Bluetooth scanner
      </Text>

      <TextInput
        ref={inputRef}
        style={styles.hiddenInput}
        autoFocus
        onChangeText={handleScan}
        blurOnSubmit={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  ticket: { fontSize: 20, color: "green" },
  scanPrompt: { fontSize: 16, color: "gray" },
  hiddenInput: { height: 0, width: 0, opacity: 0 },
});
