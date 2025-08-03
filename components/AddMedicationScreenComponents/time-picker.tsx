    // import { Ionicons } from '@expo/vector-icons';
    // import DateTimePicker from "@react-native-community/datetimepicker";
    // import React, { useState } from 'react';
    // import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
    // type Props = {
    // form: any; 
    // setForm: React.Dispatch<React.SetStateAction<any>>;
    // };
    // export default function TimePicker({ form, setForm }: Props) {
    //     const [showTimePicker, setShowTimePicker] = useState(false);
    // return (
    // <>
    
    //         {form.frequency && form.frequency !== "As Needed" && (
    //             <View style={styles.timesContainer}>
    //             <Text style={styles.timesTitle}>Medication Times</Text>
    
    //             {form.times.map((time, index) => (
    //                 <TouchableOpacity
    //                 style={styles.timeButton}
    //                 key={index}
    //                 onPress={() => {
    //                     setShowTimePicker(true);
    //                 }}
    //                 >
    //                 <View style={styles.timeIconContainer}>
    //                     <Ionicons name="time-outline" size={20} color={"#1a8e2d"} />
    //                 </View>
    //                 <Text style={styles.timeButtonText}>{time}</Text>
    //                 <Ionicons name="chevron-forward" size={20} color={"#666"} />
    //                 </TouchableOpacity>
    //             ))}
    //             </View>
    //         )}
    
    //         {showTimePicker && (
    //             <DateTimePicker
    //             mode="time"
    //             value={(() => {
    //                 const [hours, minutes] = form.times[0].split(":").map(Number);
    //                 const date = new Date();
    //                 date.setHours(hours, minutes, 0, 0);
    //                 return date;
    //             })()}
    //             onChange={(event, date) => {
    //                 setShowTimePicker(false);
    //                 if (date) {
    //                 const newTime = date.toLocaleTimeString("default", {
    //                     hour: "2-digit",
    //                     minute: "2-digit",
    //                     hour12: false,
    //                 });
    //                 setForm((prev) => ({
    //                     ...prev,
    //                     times: prev.times.map((t, i) => (i === 0 ? newTime : t)),
    //                 }));
    //                 }
    //             }}
    //             />
    //         )}
    // </>
    // )
    // }

    // const styles = StyleSheet.create({
    //     timesContainer: {
    //     marginTop: 20,
    // },
    // timesTitle: {
    //     fontSize: 16,
    //     fontWeight: "600",
    //     color: "#333",
    //     marginBottom: 10,
    // },
    // timeButton: {
    //     flexDirection: "row",
    //     alignItems: "center",
    //     backgroundColor: "white",
    //     borderRadius: 16,
    //     padding: 15,
    //     marginBottom: 10,
    //     borderWidth: 1,
    //     borderColor: "#e0e0e0",
    //     shadowColor: "#000",
    //     shadowOffset: { width: 0, height: 2 },
    //     shadowOpacity: 0.05,
    //     shadowRadius: 8,
    //     elevation: 2,
    // },
    // timeIconContainer: {
    //     width: 40,
    //     height: 40,
    //     borderRadius: 20,
    //     backgroundColor: "#f5f5f5",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     marginRight: 10,
    // },
    // timeButtonText: {
    //     flex: 1,
    //     fontSize: 16,
    //     color: "#333",
    // },
    // })
import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FormType } from './types';


type Props = {
  form: FormType;
  setForm: React.Dispatch<React.SetStateAction<FormType>>;
};

export default function TimePicker({ form, setForm }: Props) {
  const [showTimePicker, setShowTimePicker] = useState(false);

  return (
    <>
      {form.frequency && form.frequency !== "As Needed" && (
        <View style={styles.timesContainer}>
          <Text style={styles.timesTitle}>Medication Times</Text>

          {form.times.map((time, index) => (
            <TouchableOpacity
              style={styles.timeButton}
              key={index}
              onPress={() => setShowTimePicker(true)}
            >
              <View style={styles.timeIconContainer}>
                <Ionicons name="time-outline" size={20} color={"#1a8e2d"} />
              </View>
              <Text style={styles.timeButtonText}>{time}</Text>
              <Ionicons name="chevron-forward" size={20} color={"#666"} />
            </TouchableOpacity>
          ))}
        </View>
      )}

      {showTimePicker && (
        <DateTimePicker
          mode="time"
          value={
            (() => {
              if (form.times.length === 0 || !form.times[0].includes(":")) {
                return new Date(); // fallback default
              }
              const [hours, minutes] = form.times[0].split(":").map(Number);
              const date = new Date();
              date.setHours(hours || 0, minutes || 0, 0, 0);
              return date;
            })()
          }
          onChange={(event, date) => {
            setShowTimePicker(false);
            if (date) {
              const newTime = date.toLocaleTimeString("default", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
              });
              setForm((prev) => ({
                ...prev,
                times: prev.times.map((t, i) => (i === 0 ? newTime : t)),
              }));
            }
          }}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  timesContainer: {
    marginTop: 20,
  },
  timesTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 10,
  },
  timeButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 16,
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  timeIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  timeButtonText: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
});
