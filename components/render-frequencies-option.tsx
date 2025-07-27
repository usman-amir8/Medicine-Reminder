import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import FREQUENCIES from './frequency'

export default function RenderFrequenciesOptions() {
  return (
    <View>
     {FREQUENCIES.map((freq)=>(
        <TouchableOpacity key={freq.id}>
          <View>
            <Ionicons name={freq.icon} size={24}/>
            <Text>{freq.label}</Text>
          </View>
        </TouchableOpacity>
     ))}
    </View>
  )
}

const styles = StyleSheet.create({})