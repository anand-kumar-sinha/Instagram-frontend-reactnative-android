import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Svg, { Path } from 'react-native-svg'

const Back = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="18"
      fill="none"
      viewBox="0 0 10 18"
    >
      <Path
        fill="#262626"
        d="M9.577 1.28A.75.75 0 108.517.22L.706 8.03a1 1 0 000 1.413l7.81 7.81a.75.75 0 001.06-1.061L2.121 8.736 9.577 1.28z"
      ></Path>
    </Svg>
  )
}

export default Back

const styles = StyleSheet.create({})