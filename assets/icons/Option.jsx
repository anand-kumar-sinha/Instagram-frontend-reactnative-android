import React from 'react'
import { StyleSheet } from 'react-native'
import Svg, { Circle } from 'react-native-svg'

const Option = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <Circle cx="6.5" cy="11.5" r="2" fill="#000000"></Circle>
      <Circle cx="14" cy="11.5" r="2" fill="#000000"></Circle>
      <Circle cx="21.5" cy="11.5" r="2" fill="#000000"></Circle>
    </Svg>
  )
}

export default Option

const styles = StyleSheet.create({})