import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import DURATIONS from './duration'
export default function RenderDurationOption() {
  return (
     <View>
     {DURATIONS.map((dur)=>(
        <TouchableOpacity key={dur.id}>
          <View>
           <Text>{dur.value > 0 ? dur.value : "∞"}</Text>
            <Text>{dur.label}</Text>
          </View>
        </TouchableOpacity>
     ))}
    </View>
  )
}

const styles = StyleSheet.create({})