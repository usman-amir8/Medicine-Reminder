import Input from "@/components/input";
import RenderDurationOption from "@/components/render-duration-options";
import RenderFrequenciesOptions from "@/components/render-frequencies-option";
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

export default function AddMedications() {
  const [form, setForm] = useState({
    name: "",
    dosage: "",
    frequency: "",
    duration: "",
    startDate: new Date(),
    times: ["09:00"],
    notes: "",
    reminderEnabled: true,
    refillReminder: false,
    currentSupply: "",
    refillAt: "",
  });

  return (
    <SafeAreaView
      edges={["left", "right"]}
      style={{ flex: 1, backgroundColor: "#ffffff" }}
    >
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Ionicons name="chevron-back" size={28} color="#1a8e2d" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Add Medication</Text>
      </View>
      
        <ScrollView>

        
        <Input title="Medication Name" />
        <Input title="Dosage (e.g., 500mg)" />
        <Text>How Often?</Text>
        {RenderFrequenciesOptions()}
        <Text>How Long</Text>
        {RenderDurationOption()}
        <TouchableOpacity>
          <View>
            <Ionicons name="calendar" size={20} color='#1a8e2d'/>
          </View>
          <Text>Start : {}</Text>
        </TouchableOpacity>
        <DateTimePicker
        value={form.startDate}
        mode="date"
        />
        <DateTimePicker 
        mode="time"
        value={(()=>{
          const [hours , minutes] = form.times[0].split(":").map(Number)
          const date = new Date()
          date.setHours(hours,minutes,0,0)
          return date
        })()}
        />
        
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
    flexDirection: "row",
    padding: Platform.OS ? 30 : 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: "white",
    marginLeft: 15,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});
