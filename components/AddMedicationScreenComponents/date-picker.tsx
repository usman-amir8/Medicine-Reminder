import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Props = {
  form: any; // or create a type for form if needed
  setForm: React.Dispatch<React.SetStateAction<any>>;
};
export default function DatePicker({ form, setForm }: Props) {
     const [showDatePicker, setShowDatePicker] = useState(false);
  return (
    <>
    <TouchableOpacity
              style={styles.dateButton}
              onPress={() => setShowDatePicker(true)}
            >
              <View style={styles.dateIconContainer}>
                <Ionicons name="calendar" size={20} color="#1a8e2d" />
              </View>
              <Text style={styles.dateButtonText}>
                Start {form.startDate.toLocaleDateString()}
              </Text>
              <Ionicons name="chevron-forward" size={20} color={"#666"} />
            </TouchableOpacity>
            {showDatePicker && (
              <DateTimePicker
                value={form.startDate}
                mode="date"
                onChange={(event, date) => {
                  setShowDatePicker(false);
                  if (date) setForm({ ...form, startDate: date });
                }}
              />
            )}</>
  )
}

const styles = StyleSheet.create({
    dateButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 16,
    padding: 15,
    marginTop: 15,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  dateIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  dateButtonText: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
})