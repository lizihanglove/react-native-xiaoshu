import React, { memo } from 'react'
import { View } from 'react-native'

import { useThemeTokens, createVar, createStyle } from '../theme'

import type { StepSelectorLineProps } from './interface'
import { varCreator, styleCreator } from './style'

const StepSelectorLine: React.FC<StepSelectorLineProps> = ({
  index,
  total,
  active = false,
}) => {
  const TOKENS = useThemeTokens()
  const CV = createVar(TOKENS, varCreator)
  const STYLES = createStyle(CV, styleCreator)

  return (
    <View style={STYLES.line}>
      {index !== 0 ? (
        <View style={[STYLES.line_bar, STYLES.line_bar_top]} />
      ) : null}
      <View style={[STYLES.line_dot, active ? STYLES.line_dot_active : null]} />
      {index !== total - 1 ? (
        <View style={[STYLES.line_bar, STYLES.line_bar_bottom]} />
      ) : null}
    </View>
  )
}

export default memo(StepSelectorLine)
