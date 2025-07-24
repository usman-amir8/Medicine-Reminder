import { Colors } from "@/constants/Colors";
import styler from "@/style";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import Animated, { Easing, FadeIn } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
export default function SplashScreen() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("/auth");
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    
    // Splash Screen

    <SafeAreaView edges={["left", "right"]} style={{ flex: 1 }}>
      <Animated.View
        style={[styler.container, { backgroundColor: Colors.primaryColor }]}
        entering={FadeIn.duration(1000).easing(Easing.inOut(Easing.ease))}
      >
        <Ionicons name="medical" size={100} color="white" />
        <Text style={styles.text}>MedReminder</Text>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 32,
    letterSpacing: 1,
    marginTop: 15,
  },
});
