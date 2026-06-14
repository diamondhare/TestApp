import * as React from "react"
import Svg, { Path } from "react-native-svg"
const ArrowComponent = ({color = "#000", width = 24, height = 24}) => (
  <Svg fill="none" width={width} height={height} viewBox="0 0 17 11" >
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.75 10.75s-5-3.682-5-5 5-5 5-5M.75 5.75h16"
    />
  </Svg>
)
export default ArrowComponent
