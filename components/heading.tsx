import React from 'react';
import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native';


interface HeadingProps {
title : string,
fontColor ?: string
style?: StyleProp<TextStyle>;
}

export default function Heading({title,fontColor, style } : HeadingProps) {
  return (
    
      <>
      <Text style = {[styles.title , {color : fontColor ?? "#ffffff"} ,style ]}>{title}</Text>
      </>
   
  )
}

const styles = StyleSheet.create({
    title : {
    fontSize: 20,
    fontWeight: "600",    
    
    }
})