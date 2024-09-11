import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Svg, { Path } from 'react-native-svg'

const FillLike = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="25"
      fill="none"
      viewBox="0 0 38 38"
    >
      <Path
        fill="#FF0034"
        d="M21.788 38.036c-.463 0-.926-.107-1.318-.41-4.738-3.455-9.672-7.267-13.324-12.504-1.282-1.853-3.01-4.72-3.081-8.354-.09-4.364 2.387-8.372 6.163-10.01 3.794-1.64 8.3-.678 11.489 2.457l.143.143c.142-.143.285-.285.427-.41 3.563-3.242 8.532-3.883 12.326-1.603 3.937 2.369 5.86 7.25 4.72 11.899-1.015 4.079-3.508 7.178-5.824 9.69-3.17 3.42-6.876 6.27-10.082 8.603-.392.285-1.015.517-1.657.517l.018-.018z"
      ></Path>
    </Svg>
  )
}

export default FillLike

const styles = StyleSheet.create({})