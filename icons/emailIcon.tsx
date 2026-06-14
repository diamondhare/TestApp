import * as React from "react"
import Svg, { Path } from "react-native-svg"
const EmailComponent = ({color = "#ABABAB", width = 24, height = 24}) => (
  <Svg fill="none" width={width} height={height}>
    <Path
      stroke={color}
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m.75 3.25 6.913 3.917c2.549 1.444 3.625 1.444 6.174 0L20.75 3.25"
    />
    <Path
      stroke="#ABABAB"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M.766 10.726c.065 3.065.098 4.598 1.229 5.733 1.131 1.136 2.705 1.175 5.854 1.254 1.94.05 3.862.05 5.802 0 3.149-.079 4.723-.118 5.854-1.254 1.131-1.135 1.164-2.668 1.23-5.733.02-.986.02-1.966 0-2.952-.066-3.065-.099-4.598-1.23-5.733C18.374.905 16.8.866 13.651.787a115.11 115.11 0 0 0-5.802 0C4.7.866 3.126.905 1.995 2.04.864 3.176.831 4.709.765 7.774a69.066 69.066 0 0 0 0 2.952Z"
    />
  </Svg>
)
export default EmailComponent
