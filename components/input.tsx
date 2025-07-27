import React, { useState } from 'react'
import { StyleProp, StyleSheet, TextInput, TextInputProps, TextStyle } from 'react-native'


interface InputProps extends TextInputProps {
    title : string,
    style ? : StyleProp<TextStyle>
}


export default function Input({title ,style, ...rest} : InputProps) {
    const [focus , setFocus] = useState(false)
  return (
    <TextInput style = {[styles.inputContainer , style , focus&&styles.focus]}
    placeholder={title}
    placeholderTextColor='#999'
    onFocus={()=>setFocus(true)}
    onBlur={()=>setFocus(false)}
    {...rest}
    />
  )
}

const styles = StyleSheet.create({
    focus : {
    borderColor : '#000000',
    borderWidth : 1,
    },
    inputContainer: {
    backgroundColor: "white",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    paddingLeft : 10
  },
})