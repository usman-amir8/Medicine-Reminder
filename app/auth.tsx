import Welcomecard from "@/components/welcome-card";
import { Colors } from "@/constants/Colors";
import styler from "@/style";
import { Ionicons } from "@expo/vector-icons";
import * as LocalAuthentication from "expo-local-authentication";
import { router } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Auth() {
  const [hasBiometrics, setHasBiometrics] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isAuthentic, setIsAuthentic] = useState(false);

    // Function to Check Biometrice
   
  const checkBiometric = async () => {
    const hasHardware = await LocalAuthentication.hasHardwareAsync();
    const isEnrolled = await LocalAuthentication.isEnrolledAsync();
    setHasBiometrics(hasHardware && isEnrolled);
  };

    // Function to Get Access of Biometrics  and Login

  const authenticate = async () => {
    try {
      setIsAuthentic(true);
      setError(null);
      const hasHardware = await LocalAuthentication.hasHardwareAsync();
      const supportedTypes =
        await LocalAuthentication.supportedAuthenticationTypesAsync();
      const hasBiometrics = await LocalAuthentication.isEnrolledAsync();
      const auth = await LocalAuthentication.authenticateAsync({
        promptMessage:
          hasHardware && hasBiometrics
            ? "Use Face ID or Finger Print"
            : "Use Pin to access Med Reminder",
        fallbackLabel: "Use Pin",
        cancelLabel: "cancel",
        disableDeviceFallback: false,
      });
      if (auth.success) {
        router.push("/home");
      } else {
        setError("Authentication Failed. Please Try Again");
      }
    } catch (err) {
      setError("An Eror Ocuured. Please try again");
      console.log(err);
    } finally {
      setIsAuthentic(false);
    }
  };

  return (
    <SafeAreaView
      edges={["left", "right"]}
      style={{ flex: 1, backgroundColor: Colors.primaryColor }}
    >
      {/* Auth Screen's Icon and Title and Punch Line */}

      <View style={styler.container}>
        <View style={styles.iconContainer}>
          <Ionicons name="medical" size={80} color="white" />
        </View>
        <Text style={styles.title}>Med Remind</Text>
        <Text style={styles.subtitle}>Your Personal Medication Reminder</Text>

        {/* Welcome Card */}

        <Welcomecard
          hasBiometrics={hasBiometrics}
          isAuthenticate={isAuthentic}
          error={error}
          onAuthenticate={authenticate}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    width: 120,
    height: 120,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  subtitle: {
    fontSize: 15,
    color: "rgba(255, 255, 255, 0.9)",
    marginBottom: 40,
    textAlign: "center",
  },
});
