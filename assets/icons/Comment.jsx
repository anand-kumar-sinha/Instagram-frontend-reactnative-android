import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Svg, { Path } from 'react-native-svg'

const Comment = ({color}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="24"
      fill="none"
      viewBox="0 0 22 24"
    >
      <Path
        fill={color}
        fillRule="evenodd"
        d="M22 11.5c0-6.075-4.925-11-11-11S0 5.425 0 11.5s4.925 11 11 11c1.326 0 3.148-.484 5.465-1.451l3.746 1.461.111.037a1 1 0 001.224-1.204l-1.044-4.297.17-.41C21.559 14.482 22 12.77 22 11.5zm-2.729 4.6l-.345.817.936 3.847-3.417-1.333-.933.387C13.544 20.612 12.024 21 11 21a9.5 9.5 0 119.5-9.5c0 1.046-.403 2.595-1.229 4.6z"
        clipRule="evenodd"
      ></Path>
    </Svg>
  )
}

export default Comment

const styles = StyleSheet.create({})