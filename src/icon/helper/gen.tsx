import React, { memo } from 'react'
import type { TouchableOpacityProps, ViewStyle } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { Svg } from 'react-native-svg'
import pick from 'lodash/pick'
import omit from 'lodash/omit'

import type { ThemeVarType } from '../../theme'
import { useTheme } from '../../theme'
import { getDefaultValue, hex2rgba } from '../../helpers'
import type { IconCommonProps } from '../interface'
import * as helper from './'

type OutlineRender = (
  color: string,
  props: {
    themeVar: ThemeVarType
    disabled?: boolean
  },
) => React.ReactNode

type GenIconOption = {
  render: OutlineRender
  size?: 'default' | 'small'
}

/**
 * TouchableOpacity 相关的属性字段
 */
const TOUCHABLE_OPACITY_PROPS_KEYS: (keyof TouchableOpacityProps)[] = [
  'delayLongPress',
  'disabled',
  'onLongPress',
  'onPress',
  'onPressIn',
  'onPressOut',
  'pressRetentionOffset',
]

const touchableOpacityStyle: ViewStyle = {
  alignSelf: 'center',
  justifyContent: 'center',
  alignItems: 'center',
}

/**
 * 生成一个 Outline 类型的 icon 组件
 */
export const genIcon = ({
  render,
  size = 'default',
}: GenIconOption): React.FC<IconCommonProps> => {
  return memo(
    ({
      size: iconSize,
      color,
      svgStyle,

      // 点击相关的属性
      style,
      hitSlop,
      ...restProps
    }) => {
      const THEME_VAR = useTheme()
      /** 适用于点击的属性 */
      const touchableOpacityProps = pick<TouchableOpacityProps>(
        restProps,
        TOUCHABLE_OPACITY_PROPS_KEYS,
      )
      /** 剔除点击相关的属性*/
      const svgProps = omit(restProps, TOUCHABLE_OPACITY_PROPS_KEYS)
      /** viewBox 的尺寸 */
      const viewBoxSize =
        size === 'default' ? helper.DEFAULT_SIZE : helper.SMALL_SIZE
      /** 向外延伸的点击范围 */
      const hitSlopSize =
        size === 'default' ? helper.DEFAULT_HIT_SLOP : helper.SMALL_HIT_SLOP

      // 修正数据
      iconSize = getDefaultValue(iconSize, viewBoxSize)
      color = getDefaultValue(color, THEME_VAR.icon_color)
      hitSlop = getDefaultValue(hitSlop, hitSlopSize)

      // 继续修正
      if (restProps.disabled) {
        color = hex2rgba(color, 0.4)
      }

      return (
        <TouchableOpacity
          {...touchableOpacityProps}
          activeOpacity={THEME_VAR.active_opacity}
          hitSlop={hitSlop}
          style={style || touchableOpacityStyle}>
          <Svg
            {...svgProps}
            style={svgStyle}
            height={iconSize}
            width={iconSize}
            viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}>
            {render(color, {
              themeVar: THEME_VAR,
              disabled: restProps.disabled,
            })}
          </Svg>
        </TouchableOpacity>
      )
    },
  )
}
