import * as React from "react"
import Svg, { Path } from "react-native-svg"
const PenComponent = ({color = "#fff", width = 24, height = 24}) => (
  <Svg fill="none" width={width} height={height} viewBox="0 0 24 24" >
    <Path
      stroke={color}
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.805 2.164c.56-.605.838-.908 1.135-1.085a2.33 2.33 0 0 1 2.328-.035c.302.168.59.462 1.166 1.05.576.59.864.883 1.028 1.192a2.47 2.47 0 0 1-.034 2.377c-.173.303-.47.589-1.062 1.16l-7.053 6.793c-1.123 1.082-1.685 1.623-2.387 1.897s-1.474.254-3.017.213l-.21-.005c-.47-.012-.705-.018-.841-.174-.137-.155-.118-.394-.081-.872l.02-.26c.105-1.347.158-2.02.42-2.626.264-.606.717-1.097 1.625-2.08l6.963-7.545ZM9 2.25l5.25 5.25"
    />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.75 15.75h6"
    />
  </Svg>
)
export default PenComponent
 