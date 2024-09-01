import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const _layout = () => {
  return (
    <Stack initialRouteName='login'>
      <Stack.Screen name='login' options={{headerShown: false}}/>
      <Stack.Screen name='signup' options={{headerShown: false}}/>
    </Stack>
  )
}

export default _layout

const styles = StyleSheet.create({})