import React, { useState, useCallback, useEffect, memo } from 'react'
import type { ViewStyle } from 'react-native'
import { View } from 'react-native'

import { getDefaultValue } from '../helpers'
import { useThemeTokens, createVar } from '../theme'

import type { ProgressPageProps } from './interface'
import Progress from './progress'
import { varCreator } from './style'

const ProgressPage: React.FC<ProgressPageProps> = ({
  children,
  loading: loadingOut,
  backgroundColor,
  defaultPercentage = 10,
}) => {
  const TOKENS = useThemeTokens()
  const CV = createVar(TOKENS, varCreator)

  backgroundColor = getDefaultValue(
    backgroundColor,
    CV.progress_page_background_color,
  )

  const [state, setState] = useState({
    loading: loadingOut,
    percentage: defaultPercentage,
    duration: 0,
    animated: false,
  })

  const onAnimationEnd = useCallback(() => {
    if (state.percentage === 100) {
      setState(s => ({
        ...s,
        loading: false,
      }))
    }
  }, [state.percentage])

  useEffect(() => {
    setState(s => ({
      ...s,
      percentage: loadingOut ? 90 : 100,
      duration: loadingOut ? 1000 : 100,
      animated: true,
    }))
  }, [loadingOut])

  const placeholderStyle: ViewStyle = {
    flex: 1,
    backgroundColor: backgroundColor,
  }

  if (state.loading) {
    return (
      <View style={placeholderStyle}>
        <Progress
          percentage={state.percentage}
          showPivot={false}
          animated={state.animated}
          animationDuration={state.duration}
          onAnimationEnd={onAnimationEnd}
          square
        />
      </View>
    )
  }

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>
}

export default memo<typeof ProgressPage>(ProgressPage)
