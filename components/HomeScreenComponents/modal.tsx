import React from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import IconContainer from "../icon-container";

export default function ModalComponent() {
  return (
    <Modal visible = {false} transparent = {true} animationType="slide">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Notifications</Text>
          <TouchableOpacity>
            <IconContainer icon="close" size={28} iconColor="red" />
          </TouchableOpacity>
        </View>
        {[].map((medication) => (
          <>
            <View style={styles.notificationItem}>
              <View>
                <IconContainer icon="medical" size={24} />
              </View>
              <View style={styles.notificationContent}>
                <Text style = {styles.notificationTitle}>Medication Name </Text>
                <Text style = {styles.notificationMessage}>Medication Dosage </Text>
                <Text style = {styles.notificationTime}>Medication Time </Text>
              </View>
            </View>
          </>
        ))}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    maxHeight: "80%",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  notificationItem: {
    flexDirection: "row",
    padding: 15,
    borderRadius: 12,
    backgroundColor: "#f5f5f5",
    marginBottom: 10,
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },
  notificationMessage: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  notificationTime: {
    fontSize: 12,
    color: "#999",
  },
});
