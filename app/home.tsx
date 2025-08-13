import Heading from "@/components/heading";
import Circularprogress from "@/components/HomeScreenComponents/circular-progress";
import MedicationCard from "@/components/HomeScreenComponents/medication-card";
import ModalComponent from "@/components/HomeScreenComponents/modal";
import QuickActions from "@/components/HomeScreenComponents/quick-action";
import QuickActionCard from "@/components/HomeScreenComponents/quick-action-card";
import IconContainer from "@/components/icon-container";
import { Colors } from "@/constants/Colors";
import { registerForPushNotificationsAsync, scheduleMedicationReminder } from "@/utils/notifications";
import {
  DoseHistory,
  getMedications,
  getTodaysDoses,
  Medication,
  recordDose,
} from "@/utils/storage";
import { useFocusEffect } from "@react-navigation/native";

import React, { useCallback, useEffect, useState } from "react";
import { Alert, AppState, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Home() {
  const [todaysMedications, setTodaysMedications] = useState<Medication[]>([]);
  const [doseHistory, setDoseHistory] = useState<DoseHistory[]>([]);
  const [completedDoses, setCompletedDoses] = useState(0);
  const [medications, setMedications] = useState<Medication[]>([]);
  const loadMedications = useCallback(async () => {
    try {
      const [allMedications, todaysDoses] = await Promise.all([
        getMedications(),
        getTodaysDoses(),
      ]);
      setDoseHistory(todaysDoses);
      setMedications(allMedications);
      const today = new Date();
      const todayMeds = allMedications.filter((med) => {
        const startDate = new Date(med.startDate);
        const durationdays = parseInt(med.duration.split("")[0]);
        if (
          durationdays === -1 ||
          (today >= startDate &&
            today <=
              new Date(
                startDate.getTime() + durationdays * 24 * 24 * 60 * 1000
              ))
        ) {
          return true;
        }
        return false;
      });
      setTodaysMedications(todayMeds);
      const completed = todaysDoses.filter((dose) => dose.taken).length;
      setCompletedDoses(completed);
    } catch (error) {
      console.log("Error Loading Medications : ", error);
    }
  }, []);
   const setupNotifications = async () => {
    try {
      const token = await registerForPushNotificationsAsync();
      if (!token) {
        console.log("Failed to get push notification token");
        return;
      }

      // Schedule reminders for all medications
      const medications = await getMedications();
      for (const medication of medications) {
        if (medication.reminderEnabled) {
          await scheduleMedicationReminder(medication);
        }
      }
    } catch (error) {
      console.error("Error setting up notifications:", error);
    }
  };

  // Use useEffect for initial load
  useEffect(() => {
    loadMedications();
    setupNotifications();

    // Handle app state changes for notifications
    const subscription = AppState.addEventListener("change", (nextAppState) => {
      if (nextAppState === "active") {
        loadMedications();
      }
    });

    return () => {
      subscription.remove();
    };
  }, []);

  // Use useFocusEffect for subsequent updates
  useFocusEffect(
    useCallback(() => {
      const unsubscribe = () => {
        // Cleanup if needed
      };

      loadMedications();
      return () => unsubscribe();
    }, [loadMedications])
  );

  const handleTakeDose = async (medication: Medication) => {
    try {
      await recordDose(medication.id, true, new Date().toISOString());
      await loadMedications(); // Reload data after recording dose
    } catch (error) {
      console.error("Error recording dose:", error);
      Alert.alert("Error", "Failed to record dose. Please try again.");
    }
  };

  const isDoseTaken = (medicationId: string) => {
    return doseHistory.some(
      (dose) => dose.medicationId === medicationId && dose.taken
    );
  };

  const progress =
    todaysMedications.length > 0
      ? completedDoses / (todaysMedications.length * 2)
      : 0;

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

            <TouchableOpacity>
              <IconContainer icon="notifications-outline" size={30} />
            </TouchableOpacity>
          </View>

          {/* Circular Progress */}

          <Circularprogress completedDoses={completedDoses} progress={progress} totalDoses={todaysMedications.length*2} />
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

        {/* Medicine Card */}
        <MedicationCard todaysMedication={todaysMedications}/>

        <ModalComponent />
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

  quickAction: {
    flexDirection: "row",
    width: "100%",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 10,
    paddingHorizontal: 15,
  },
});
