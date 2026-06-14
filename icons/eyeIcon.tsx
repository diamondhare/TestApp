import * as React from "react"
import Svg, { Path } from "react-native-svg"
const EyeComponent = ({color = "#ABABAB", width = 24, height = 24}) => (
  <Svg fill="none" width={width} height={height} viewBox="0 0 24 24">
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M20.75.75s-4 6-10 6-10-6-10-6"
    />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.75 6.25 1.5 2.5M18.75 3.75l2 2M.75 5.75l2-2M7.75 6.25l-1.5 2.5"
    />
  </Svg>
)
export default EyeComponent 
