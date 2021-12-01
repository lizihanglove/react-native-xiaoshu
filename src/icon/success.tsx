import React from 'react'
import { Path } from 'react-native-svg'

import { genIcon } from './helper/gen'

const IconSuccessOutline = genIcon({
  render: color => {
    return (
      <Path
        d="M6,12 10,16 18,7"
        fill="none"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    )
  },
})

export default IconSuccessOutline
