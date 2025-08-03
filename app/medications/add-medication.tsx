import DatePicker from "@/components/AddMedicationScreenComponents/date-picker";
import ReminderSection from "@/components/AddMedicationScreenComponents/reminder-section";
import RenderDurationOption from "@/components/AddMedicationScreenComponents/render-duration-options";
import RenderFrequenciesOptions from "@/components/AddMedicationScreenComponents/render-frequencies-option";
import TimePicker from "@/components/AddMedicationScreenComponents/time-picker";
import { FormType } from "@/components/AddMedicationScreenComponents/types";
import Button from "@/components/button";
import Heading from "@/components/heading";
import Input from "@/components/input";
import {
  scheduleMedicationReminder,
  scheduleRefillReminder,
} from "@/utils/notifications";

import { addMedication } from "@/utils/storage";
import { Ionicons } from "@expo/vector-icons";

import { router } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

export default function AddMedications() {
  const [form, setForm] = useState<FormType>({
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
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!form.name.trim()) {
      newErrors.name = "Medication name is required";
    }

    if (!form.dosage.trim()) {
      newErrors.dosage = "Dosage is required";
    }

    if (!form.frequency) {
      newErrors.frequency = "Frequency is required";
    }

    if (!form.duration) {
      newErrors.duration = "Duration is required";
    }

    if (form.refillReminder) {
      if (!form.currentSupply) {
        newErrors.currentSupply =
          "Current supply is required for refill tracking";
      }
      if (!form.refillAt) {
        newErrors.refillAt = "Refill alert threshold is required";
      }
      if (Number(form.refillAt) >= Number(form.currentSupply)) {
        newErrors.refillAt = "Refill alert must be less than current supply";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = async () => {
    try {
      if (!validateForm()) {
        Alert.alert("Error", "Please fill in all required fields correctly");
        return;
      }

      if (isSubmitting) return;
      setIsSubmitting(true);

      // Generate a random color
      const colors = ["#4CAF50", "#2196F3", "#FF9800", "#E91E63", "#9C27B0"];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];

      const medicationData = {
        id: Math.random().toString(36).substr(2, 9),
        ...form,
        currentSupply: form.currentSupply ? Number(form.currentSupply) : 0,
        totalSupply: form.currentSupply ? Number(form.currentSupply) : 0,
        refillAt: form.refillAt ? Number(form.refillAt) : 0,
        startDate: form.startDate.toISOString(),
        color: randomColor,
      };

      await addMedication(medicationData);

      //Schedule reminders if enabled
      if (medicationData.reminderEnabled) {
        await scheduleMedicationReminder(medicationData);
      }
      if (medicationData.refillReminder) {
        await scheduleRefillReminder(medicationData);
      }

      Alert.alert(
        "Success",
        "Medication added successfully",
        [
          {
            text: "OK",
            onPress: () => router.back(),
          },
        ],
        { cancelable: false }
      );
    } catch (error) {
      console.error("Save error:", error);
      Alert.alert(
        "Error",
        "Failed to save medication. Please try again.",
        [{ text: "OK" }],
        { cancelable: false }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView
      edges={["left", "right"]}
      style={{ flex: 1, backgroundColor: "#ffffff" }}
    >
      {/* Header */}

      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Ionicons name="chevron-back" size={28} color="#1a8e2d" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Add Medication</Text>
      </View>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ flex: 1 }}
          contentContainerStyle={styles.formContentContainer}
        >
          {/* Medication Name and Dosage Input */}
          <View style={{ gap: 20 }}>
            <Input
              title="Medication Name"
              style={[errors.name && styles.inputError]}
              value={form.name}
              onChangeText={(text) => {
                setForm({ ...form, name: text });
                if (errors.name) {
                  setErrors({ ...errors, name: "" });
                }
              }}
            />
            {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
            <Input
              title="Dosage (e.g., 500mg)"
              style={[errors.name && styles.inputError]}
              value={form.dosage}
              onChangeText={(text) => {
                setForm({ ...form, dosage: text });
                if (errors.dosage) {
                  setErrors({ ...errors, dosage: "" });
                }
              }}
            />
            {errors.dosage && (
              <Text style={styles.errorText}>{errors.dosage}</Text>
            )}
          </View>
          {/* how Often */}

          <Heading title="How Often" style={styles.sectionTitle} />

          {<RenderFrequenciesOptions form={form} setForm={setForm} />}
          {errors.duration && (
            <Text style={styles.errorText}>{errors.duration}</Text>
          )}

          {/* how Long */}

          <Heading title="How Long" style={styles.sectionTitle} />

          {<RenderDurationOption form={form} setForm={setForm} />}
          {errors.frequency && (
            <Text style={styles.errorText}>{errors.frequency}</Text>
          )}
          {/* Date Picker */}

          <DatePicker form={form} setForm={setForm} />

          {/* Time Picker */}

          <TimePicker form={form} setForm={setForm} />

          {/* Reminder Section */}

          <ReminderSection form={form} setForm={setForm} />

          <View style={styles.textAreaContainer}>
            <Input
              title="Add notes or special instructions..."
              style={styles.textArea}
              value={form.notes}
              onChangeText={(text) => setForm({ ...form, notes: text })}
              multiline
              numberOfLines={4}
              textAlignVertical="top"
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <View style={styles.footer}>
        <Button
          title={isSubmitting ? "Adding" : "Add Medication"}
          style={[styles.saveButton, isSubmitting && styles.saveButtonDisabled]}
          onPress={handleSave}
          disabled={isSubmitting}
        />

        <Button
          title="Cancel"
          style={styles.cancelButton}
          onPress={() => router.back()}
          disabled={isSubmitting}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    alignItems: "center",

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
  formContentContainer: {
    padding: 20,
  },
  inputError: {
    borderColor: "#FF5252",
  },
  errorText: {
    color: "#FF5252",
    fontSize: 12,
    marginTop: 4,
    marginLeft: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1a1a1a",
    marginBottom: 12,
    marginTop: 40,
  },

  textAreaContainer: {
    backgroundColor: "white",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  textArea: {
    height: 100,
    padding: 15,
    fontSize: 16,
    color: "#333",
  },
  saveButton: {
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 12,
  },
  saveButtonGradient: {
    paddingVertical: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  saveButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
  },
  cancelButton: {
    paddingVertical: 15,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgray",
  },
  
  footer: {
    padding: 20,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    alignItems: "center",
  },
  saveButtonDisabled: {
    opacity: 0.7,
  },
});
