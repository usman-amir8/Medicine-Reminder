import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FREQUENCIES from "./frequency";

type Props = {
  form: any; // or create a type for form if needed
  setForm: React.Dispatch<React.SetStateAction<any>>;
};

export default function RenderFrequenciesOptions({ form, setForm }: Props) {
  const [selectedFrequency, setSelectedFrequency] = useState("");
  return (
    <View style={styles.optionsGrid}>
      {FREQUENCIES.map((freq) => (
        <TouchableOpacity
          key={freq.id}
          style={[
            styles.optionCard,
            selectedFrequency === freq.label && styles.selectedOptionCard,
          ]}
           onPress={() => {
              setSelectedFrequency(freq.label);
              setForm({ ...form, frequency: freq.label });
            }}
        >
          <View
            style={[
              styles.optionIcon,
              selectedFrequency === freq.label && styles.selectedOptionCard,
            ]}
          >
            <Ionicons
              name={freq.icon}
              size={24}
              color={selectedFrequency === freq.label ? "white" : "#666"}
            />
            <Text
              style={[
                styles.optionLabel,
                selectedFrequency === freq.label && styles.selectedOptionLabel,
              ]}
            >
              {freq.label}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  optionsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: -5,
  },
  optionCard: {
    //width: (width - 60) / 2,
    backgroundColor: "white",
    borderRadius: 16,
    padding: 15,
    margin: 5,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e0e0e0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  selectedOptionCard: {
    backgroundColor: "#1a8e2d",
    borderColor: "#1a8e2d",
  },
  optionIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  selectedOptionIcon: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
  optionLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
  },
  selectedOptionLabel: {
    color: "white",
  },
});
