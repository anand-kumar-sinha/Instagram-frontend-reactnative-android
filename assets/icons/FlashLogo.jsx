import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Svg, { Defs, G, Mask, Path, RadialGradient, Stop } from 'react-native-svg'

const FlashLogo = () => {
  return (
<Svg
      xmlns="http://www.w3.org/2000/svg"
      width="124"
      height="124"
      fill="none"
      viewBox="0 0 124 124"
    >
      <Path
        fill="url(#paint0_radial_7_294)"
        fillRule="evenodd"
        d="M28.19 123.939c-2.766-.098-6.33-.315-7.95-.642-2.473-.499-4.808-1.256-6.75-2.246a24.035 24.035 0 01-6.093-4.41 24.036 24.036 0 01-4.427-6.098c-.987-1.932-1.743-4.253-2.245-6.711-.333-1.637-.554-5.227-.654-8.01-.04-1.138-.061-2.61-.061-3.29L0 31.478c0-.676.02-2.149.06-3.288.1-2.765.316-6.33.643-7.949.499-2.473 1.256-4.808 2.246-6.75a24.058 24.058 0 014.41-6.093 24.059 24.059 0 016.098-4.427c1.932-.986 4.253-1.743 6.711-2.245 1.637-.333 5.227-.554 8.01-.654 1.138-.04 2.61-.061 3.289-.061L92.523 0c.676 0 2.149.02 3.287.06 2.766.1 6.33.316 7.95.643 2.473.5 4.808 1.256 6.75 2.246a24.04 24.04 0 016.092 4.41 24.033 24.033 0 014.427 6.098c.987 1.932 1.744 4.252 2.246 6.711.333 1.637.554 5.227.654 8.01.04 1.138.061 2.61.061 3.289l.01 61.056c0 .676-.021 2.149-.061 3.288-.099 2.765-.315 6.329-.642 7.949-.499 2.473-1.256 4.808-2.246 6.75a24.08 24.08 0 01-4.409 6.093 24.064 24.064 0 01-6.099 4.426c-1.932.987-4.253 1.744-6.711 2.246-1.637.333-5.227.554-8.01.653-1.138.041-2.61.062-3.29.062l-61.055.01c-.677 0-2.15-.021-3.288-.061z"
        clipRule="evenodd"
      ></Path>
      <Mask
        id="mask0_7_294"
        style={{ maskType: "luminance" }}
        width="124"
        height="124"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M28.19 123.939c-2.766-.098-6.33-.315-7.95-.642-2.473-.499-4.808-1.256-6.75-2.246a24.035 24.035 0 01-6.093-4.41 24.036 24.036 0 01-4.427-6.098c-.987-1.932-1.743-4.253-2.245-6.711-.333-1.637-.554-5.227-.654-8.01-.04-1.138-.061-2.61-.061-3.29L0 31.478c0-.676.02-2.149.06-3.288.1-2.765.316-6.33.643-7.949.499-2.473 1.256-4.808 2.246-6.75a24.058 24.058 0 014.41-6.093 24.059 24.059 0 016.098-4.427c1.932-.986 4.253-1.743 6.711-2.245 1.637-.333 5.227-.554 8.01-.654 1.138-.04 2.61-.061 3.289-.061L92.523 0c.676 0 2.149.02 3.287.06 2.766.1 6.33.316 7.95.643 2.473.5 4.808 1.256 6.75 2.246a24.04 24.04 0 016.092 4.41 24.033 24.033 0 014.427 6.098c.987 1.932 1.744 4.252 2.246 6.711.333 1.637.554 5.227.654 8.01.04 1.138.061 2.61.061 3.289l.01 61.056c0 .676-.021 2.149-.061 3.288-.099 2.765-.315 6.329-.642 7.949-.499 2.473-1.256 4.808-2.246 6.75a24.08 24.08 0 01-4.409 6.093 24.064 24.064 0 01-6.099 4.426c-1.932.987-4.253 1.744-6.711 2.246-1.637.333-5.227.554-8.01.653-1.138.041-2.61.062-3.29.062l-61.055.01c-.677 0-2.15-.021-3.288-.061z"
          clipRule="evenodd"
        ></Path>
      </Mask>
      <G mask="url(#mask0_7_294)">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M62.25 15.951c-12.45 0-14.014.055-18.906.28-4.883.224-8.216 1.001-11.132 2.142-3.017 1.178-5.576 2.754-8.126 5.319-2.55 2.564-4.118 5.137-5.293 8.17-1.137 2.933-1.912 6.286-2.131 11.195-.22 4.92-.276 6.493-.276 19.02 0 12.526.055 14.094.277 19.014.224 4.91.997 8.262 2.13 11.195 1.173 3.033 2.74 5.607 5.29 8.17 2.55 2.566 5.108 4.146 8.123 5.324 2.918 1.141 6.252 1.918 11.134 2.143 4.893.224 6.455.279 18.911.279 12.458 0 14.017-.055 18.91-.279 4.882-.225 8.22-1.002 11.138-2.143 3.016-1.178 5.57-2.758 8.119-5.324 2.552-2.563 4.119-5.137 5.294-8.17 1.128-2.933 1.902-6.286 2.131-11.194.22-4.92.277-6.489.277-19.015 0-12.527-.057-14.1-.277-19.02-.229-4.91-1.003-8.262-2.131-11.194-1.175-3.034-2.742-5.607-5.294-8.171-2.551-2.566-5.103-4.142-8.122-5.319-2.924-1.14-6.26-1.918-11.142-2.143-4.892-.224-6.45-.279-18.904-.279zm-4.108 8.313c.8-.002 1.659-.001 2.586-.001h1.53c12.246 0 13.697.045 18.534.266 4.472.205 6.899.957 8.516 1.588 2.14.836 3.666 1.835 5.27 3.45 1.606 1.614 2.6 3.152 3.433 5.304.628 1.624 1.376 4.065 1.58 8.562.22 4.863.267 6.323.267 18.633 0 12.31-.047 13.77-.267 18.632-.205 4.498-.952 6.939-1.58 8.563-.831 2.152-1.827 3.685-3.432 5.298-1.605 1.615-3.13 2.614-5.271 3.45-1.615.634-4.044 1.384-8.516 1.59-4.835.22-6.288.268-18.535.268s-13.699-.048-18.534-.269c-4.472-.207-6.9-.959-8.517-1.59-2.14-.836-3.67-1.835-5.275-3.45-1.605-1.614-2.6-3.148-3.433-5.301-.627-1.624-1.376-4.065-1.58-8.562-.219-4.863-.263-6.323-.263-18.64 0-12.318.044-13.77.264-18.633.204-4.497.952-6.938 1.58-8.564.83-2.153 1.827-3.69 3.432-5.304 1.605-1.615 3.134-2.614 5.275-3.452 1.617-.634 4.045-1.384 8.517-1.59 4.231-.193 5.87-.25 14.42-.26v.012zm23.095 13.191c0-3.056 2.465-5.533 5.504-5.533v-.002c3.039 0 5.504 2.48 5.504 5.535 0 3.056-2.465 5.535-5.504 5.535-3.039 0-5.504-2.479-5.504-5.535zm-18.98.934c-13.008 0-23.555 10.606-23.555 23.687 0 13.082 10.547 23.683 23.555 23.683 13.009 0 23.551-10.601 23.551-23.683 0-13.08-10.543-23.687-23.552-23.687h.001zm15.29 23.688c0-8.492-6.846-15.375-15.29-15.375-8.444 0-15.29 6.883-15.29 15.375 0 8.49 6.846 15.375 15.29 15.375 8.444 0 15.29-6.885 15.29-15.375z"
          clipRule="evenodd"
        ></Path>
      </G>
      <Defs>
        <RadialGradient
          id="paint0_radial_7_294"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(-90 83.244 50.306) scale(122.893)"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FD5"></Stop>
          <Stop offset="0.1" stopColor="#FD5"></Stop>
          <Stop offset="0.5" stopColor="#FF543E"></Stop>
          <Stop offset="1" stopColor="#C837AB"></Stop>
        </RadialGradient>
      </Defs>
    </Svg>
  )
}

export default FlashLogo

const styles = StyleSheet.create({})