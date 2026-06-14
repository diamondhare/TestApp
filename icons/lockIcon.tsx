import * as React from "react"
import Svg, { Path } from "react-native-svg"
const LockComponent = ({color = "#ABABAB", width = 24, height = 24}) => (
  <Svg fill="none" width={width} height={height} viewBox="0 0 24 24">
    <Path
      stroke={color}
      strokeWidth={1.5}
      d="M.75 13.75a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
    />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12.25 8.25v-3a4.5 4.5 0 1 0-9 0v3"
    />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7.75 13.75h.009"
    />
  </Svg>
)
export default LockComponent
