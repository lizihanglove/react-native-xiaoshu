import React from 'react'
import { G, Path } from 'react-native-svg'

import { genIcon } from './helper/gen'

const IconEyeOutLine = genIcon({
  render: color => {
    return (
      <G
        stroke={color}
        strokeWidth={2}
        fill="none"
        fillRule="evenodd"
        strokeLinejoin="round">
        <Path d="M21.988 12.22s-4.788 6.122-10.19 6.122c-5.403 0-9.782-6.121-9.782-6.121s4.38-6.208 9.781-6.208c5.403 0 10.19 6.208 10.19 6.208z" />
        <Path d="M15.048 12.236a3.004 3.004 0 1 1-6.007 0 3.004 3.004 0 0 1 6.007 0z" />
      </G>
    )
  },
})

export default IconEyeOutLine
