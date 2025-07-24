import Circularprogress from "@/components/circular-progress";
import Heading from "@/components/heading";
import QuickActions from "@/components/quick-action";
import QuickActionCard from "@/components/quick-action-card";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Home() {
  return (
    <SafeAreaView
      edges={["left", "right"]}
      style={{ flex: 1, backgroundColor: "#ffffff" }}
    >
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        
        
        
        <View style={styles.container}>

          {/* Daily Progress and Notification Icon*/}

          <View
            style={{
              width: 350,
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 40,
            }}
          >
            <Heading title="Daily Progress" />
            <TouchableOpacity style={styles.icon}>
              <Ionicons name="notifications-outline" size={30} color="white" />
            </TouchableOpacity>
          </View>

          {/* Circular Progress */}

          <Circularprogress completedDoses={5} progress={0.5} totalDoses={10} />
        </View>

        {/* Quick Actions */}

        <Heading
          title="Quick Actions"
          fontColor="#000000"
          style={{ width: 350, marginBottom: 12, marginTop: 40 }}
        />

        {/* Quick Action Boxes */}

        <View style={styles.quickAction}>
          {QuickActions.map((item, index) => (
            <QuickActionCard
              key={index}
              icon={item.icon}
              title={item.title}
              color={item.color}
              route={item.route}
            />
          ))}
        </View>

       {/* Today's Schedule */}

        <Heading
          title="Today's Schedule"
          fontColor="#000000"
          style={{ width: 350, marginBottom: 12, marginTop: 40 }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: Colors.primaryColor,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    width: "100%",
    paddingBottom: 40,
    gap: 10,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    alignItems: "center",
    justifyContent: "center",
  },
  greeting: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
  },
  quickAction: {
    flexDirection: "row",
    width: "100%",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 10,
    paddingHorizontal: 15,
  },
});
