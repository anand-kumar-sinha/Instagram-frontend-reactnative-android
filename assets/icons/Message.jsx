import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Svg, { Path } from 'react-native-svg'

const Message = ({color}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="21"
      fill="none"
      viewBox="0 0 24 21"
    >
      <Path
        fill={color}
        fillRule="evenodd"
        d="M23.123 1.629L12.437 19.882a.75.75 0 01-1.371-.184L8.316 9.442l-.023-.032a.756.756 0 01-.052-.109l-7.52-7.52A.75.75 0 011.251.5h21.224c.58 0 .94.629.648 1.129zm-2.7 1.643L9.85 9.376l2.199 8.2 8.372-14.304zM3.062 2h16.564L9.125 8.062 3.062 2z"
        clipRule="evenodd"
      ></Path>
    </Svg>
  )
}

export default Message

const styles = StyleSheet.create({})