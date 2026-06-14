import * as React from "react"
import Svg, { Path } from "react-native-svg"
const PhoneComponent = ({color = "#ABABAB", width = 24, height = 24}) => (
  <Svg fill="none" width={width} height={height} viewBox="0 0 24 24">
    <Path
      stroke={color}
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2.528 10.693C1.58 9.04 1.122 7.69.846 6.32c-.408-2.023.526-4 2.074-5.261.654-.533 1.404-.351 1.79.343l.874 1.566c.692 1.242 1.038 1.863.97 2.52-.07.659-.536 1.195-1.47 2.267l-2.556 2.937Zm0 0c1.919 3.346 4.93 6.359 8.28 8.28m0 0c1.653.948 3.003 1.405 4.371 1.681 2.024.409 4-.526 5.262-2.073.533-.654.351-1.404-.343-1.79l-1.566-.874c-1.242-.692-1.863-1.038-2.521-.97-.658.07-1.194.536-2.266 1.47l-2.937 2.556Z"
    />
  </Svg>
)
export default PhoneComponent
