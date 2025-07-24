import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "./button";

type WelcomecardProps = {
  hasBiometrics: boolean;
  isAuthenticate: boolean;
  error: string | null;
  onAuthenticate: () => void;
};

export default function Welcomecard({
  hasBiometrics,
  isAuthenticate,
  error,
  onAuthenticate,
}: WelcomecardProps) {
  return (
    <View style={styles.container}>
      {/* Welcome Text and and Line to enter password */}
      <Text style={styles.welcomeText}>Welcome Back</Text>
      <Text style={styles.instructionText}>
        {hasBiometrics
          ? "Enter your PIN to access your medications"
          : "Use Face ID / Touch ID or PIN to access your medications"}
      </Text>

      {/* Button in Welcome Card */}

      <Button
        title={
          isAuthenticate
            ? "Verifying..."
            : hasBiometrics
            ? "Authenticate"
            : "Enter PIN"
        }
        icon={
          <Ionicons
            name={hasBiometrics ? "finger-print-outline" : "keypad-outline"}
            size={25}
            color="white"
          />
        }
        onPress={onAuthenticate}
        disabled={isAuthenticate}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 350,
    height: 200,
    borderRadius: 20,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  instructionText: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },
});
