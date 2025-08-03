import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Shadow } from "react-native-shadow-2";
import Button from "../button";
import IconContainer from "../icon-container";

export default function MedicationCard() {
  return (
    <>
      {true ? (
        <Shadow distance={20} startColor="rgba(0,0,0,0.15)" offset={[0, 4]}>
          <View style={styles.emptyState}>
            <IconContainer icon="medical-outline" size={48} iconColor="grey" />
            <Text style={styles.emptyStateText}>
              No Medications Scheduled for Today
            </Text>
           
            <Button title="Add Medications" />
          </View>
        </Shadow>
      ) : (
        <Shadow distance={20} startColor="rgba(0,0,0,0.15)" offset={[0, 4]}>
          <View style={styles.card}>
            <IconContainer icon="medical-outline" size={20} iconColor="red" />
            <View>
              <Text style={styles.medicineName}>Paracetamol</Text>
              <Text style={styles.medicineDosage}>500g</Text>
              <Text style={styles.medicineTime}>9pm</Text>
            </View>

            <View style={styles.takenBadge}>
              {false ? (
                <>
                  <IconContainer
                    icon="checkmark-circle-outline"
                    size={20}
                    iconColor="green"
                  />
                  <Text style={styles.takenText}>Taken</Text>
                </>
              ) : (
                <>
                  <IconContainer
                    icon="close-circle-outline"
                    size={20}
                    iconColor="green"
                  />
                  <Text style={styles.takenText}>Missed</Text>
                </>
              )}
            </View>
          </View>
        </Shadow>
      )}
    </>

    // <Shadow
    //   distance={20}
    //   startColor="rgba(0,0,0,0.15)"
    //   offset={[0, 4]}

    // >
    //   <View style={styles.card}>
    //     <IconContainer icon="medical-outline" size={20} iconColor="red" />
    //     <View>
    //       <Text style={styles.medicineName}>Paracetamol</Text>
    //       <Text style={styles.medicineDosage}>500g</Text>
    //       <Text style={styles.medicineTime}>9pm</Text>
    //     </View>
    //     <View style={styles.takenBadge}>
    //   {true ? (
    //           <><IconContainer icon="checkmark-circle-outline" size={20} iconColor="green" /><Text style={styles.takenText}>Taken</Text></>

    //         ) : (
    //           <><IconContainer icon="close-circle-outline" size={20} iconColor="green" /><Text style={styles.takenText}>missed</Text></>
    //         )

    //         }
    //        {/* <IconContainer icon="time-outline" size={20} iconColor="green" />
    //        <Text style={styles.takenText}>Taken</Text> */}
    //      </View>
    //    </View>
    //  </Shadow>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 350,
    backgroundColor: "#ffffff",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    borderRadius: 20,
    marginBottom: 15,
  },
  medicineName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  medicineDosage: {
    fontSize: 14,
    color: "#666",
  },
  medicineTime: {
    fontSize: 14,
    color: "#666",
  },
  takenText: {
    color: "green",
    fontWeight: "600",
    fontSize: 14,
  },
 
  emptyState: {
    alignItems: "center",
    paddingHorizontal: 30,
    backgroundColor: "white",
    borderRadius: 16,
    width: 350,
    marginBottom: 50,
    paddingVertical: 20,
    gap: 20,
  },
  emptyStateText: {
    fontSize: 16,
    color: "#666",
  },
  addMedicationButton: {
    backgroundColor: "#1a8e2d",
    paddingHorizontal: 20,
    paddingVertical: 10,

    borderRadius: 20,
  },
  addMedicationButtonText: {
    color: "white",
    fontWeight: "600",
  },


   
  takenBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E8F5E9",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    
  },
});
