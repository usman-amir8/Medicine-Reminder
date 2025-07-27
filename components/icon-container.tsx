

import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, View } from 'react-native'

interface IconContainerProps {
  icon: string
  size: number
  iconColor?: string
}

export default function IconContainer({ icon, size, iconColor }: IconContainerProps) {

//   10 is  adding 10 to the icon size (5 padding on each side) to make the container slightly larger.
//  For example, if the icon size is 28, the container will be 38, giving it a padded look.
  const containerSize = size + 10 

  return (
    <View
      style={[
        styles.iconContainer,
        {
          width: containerSize,
          height: containerSize,
          borderRadius: containerSize / 2,
        },
      ]}
    >
      <Ionicons name={icon as any} color={iconColor ?? "#ffffff"} size={size} />
    </View>
  )
}

const styles = StyleSheet.create({
  iconContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    alignItems: "center",
    justifyContent: "center",
  },
})
