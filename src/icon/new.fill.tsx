import React, { memo } from 'react'
import { Svg, Path } from 'react-native-svg'
import * as defaultVar from '../theme/default-var'
import * as helper from './helper'
import type { IconCommonFillProps } from './interface'

const IconNewFill: React.FC<IconCommonFillProps> = ({
  size = helper.DEFAULT_SIZE,
  color = defaultVar.error,
  style = helper.ICON_DEFAULT_STYLE,
  hitSlop = helper.DEFAULT_HIT_SLOP,
  ...restProps
}) => {
  return (
    <Svg
      {...restProps}
      style={style}
      height={size}
      width={size}
      hitSlop={hitSlop}
      viewBox="0 0 24 24">
      <Path
        d="M16.333 5a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H4V9a4 4 0 0 1 4-4h8.333zm-5.021 3.949a13.107 13.107 0 0 1-.572 1.518H9.53a8.68 8.68 0 0 0-.583-1.496l-.704.253c.22.385.418.803.583 1.243H7.561v.715h2.222v1.232H7.737v.726h2.046v2.926c0 .264-.143.396-.429.396-.154 0-.319-.022-.495-.055l.165.737h.594c.638 0 .957-.297.957-.891V13.14h1.936v-.726h-1.936v-1.232h2.123v-.715h-1.243c.209-.374.396-.803.572-1.276l-.715-.242zm5.522-1.826c-1.067.462-2.266.715-3.597.737v4.708c-.055 1.672-.407 2.981-1.056 3.927l.561.594c.792-1.122 1.21-2.629 1.265-4.521v-1.309h1.628v5.874h.781v-5.874h1.144V10.5h-3.553V8.498a10.482 10.482 0 0 0 3.223-.671l-.396-.704zm-8.327 6.611a8.6 8.6 0 0 1-1.133 2.64l.66.418c.506-.825.913-1.793 1.199-2.904l-.726-.154zm3.157-.077l-.66.176c.308.66.561 1.342.77 2.035l.66-.253c-.176-.594-.44-1.243-.77-1.958zM10.08 6.881l-.814.132c.187.286.352.605.506.957H7.671v.726h4.961V7.97h-2.079a12.906 12.906 0 0 0-.473-1.089z"
        fill={color}
        fillRule="evenodd"
      />
    </Svg>
  )
}

export default memo(IconNewFill)
