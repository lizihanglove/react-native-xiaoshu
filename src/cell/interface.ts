import type React from 'react'
import type {
  ViewStyle,
  TextStyle,
  TouchableHighlightProps,
  StyleProp,
  TextProps,
  TouchableOpacityProps,
} from 'react-native'

export type CellGroupProps = {
  /**
   * 分组名称
   */
  title?: React.ReactNode

  /**
   * 头部右侧自定义内容
   */
  extra?: React.ReactNode

  /**
   * 自定义样式
   */
  style?: StyleProp<ViewStyle>

  /**
   * 分组名自定义文字样式
   */
  titleTextStyle?: StyleProp<TextStyle>

  /**
   * body 区域自定义样式
   */
  bodyStyle?: StyleProp<ViewStyle>

  /**
   * 是否显示 body 区域上分割线
   * @default false
   */
  bodyTopDivider?: boolean

  /**
   * 是否显示 body 区域上分割线
   * @default false
   */
  bodyBottomDivider?: boolean

  /**
   * 点击分组名称区域，包含 title、extra
   */
  onPressTitle?: TextProps['onPress']

  /**
   * 点击分组名称文案
   */
  onPressTitleText?: TextProps['onPress']
}

export interface CellPrivateProps {
  /**
   * 内部布局样式
   */
  innerStyle?: StyleProp<ViewStyle>

  /**
   * 左侧标题
   */
  title?: React.ReactNode

  /**
   * 左侧标题样式，作用元素内部有必填标志、titleExtra、title
   */
  titleStyle?: StyleProp<ViewStyle>

  /**
   * 左侧标题样文案式
   */
  titleTextStyle?: StyleProp<TextStyle>

  /**
   * 标题的左侧自定义内容
   */
  titleExtra?: React.ReactNode

  /**
   * 右侧内容
   */
  value?: React.ReactNode

  /**
   * 右侧内容样式，作用元素内部有 value
   */
  valueStyle?: StyleProp<ViewStyle>

  /**
   * 右侧内容样文案式
   */
  valueTextStyle?: StyleProp<TextStyle>

  /**
   * 右侧内容的右侧自定义内容
   */
  valueExtra?: React.ReactNode

  /**
   * 垂直模式模式下右侧内容包裹的样式，作用元素内部有 valueStyle、valueExtra、linkJSX
   */
  contentStyle?: StyleProp<ViewStyle>

  /**
   * 是否显示分割线
   * @default true
   */
  divider?: boolean

  /**
   * 分割线左侧边距
   * @default cell_group_title_padding_horizontal
   */
  dividerLeftGap?: number

  /**
   * 分割线左侧边距
   * @default cell_group_title_padding_horizontal
   */
  dividerRightGap?: number

  /**
   * 是否展示右侧箭头
   * @default false
   */
  isLink?: boolean

  /**
   * 点击右侧箭头图标
   */
  onPressLink?: TouchableOpacityProps['onPress']

  /**
   * 是否使内容垂直居中
   * @default false
   */
  center?: boolean

  /**
   * 箭头方向
   * @default 'right'
   */
  arrowDirection?: 'left' | 'up' | 'right' | 'down'

  /**
   * 是否显示表单必填星号
   * @default false
   */
  required?: boolean

  /**
   * 垂直布局，title 在上，value 在下
   * @default false
   */
  vertical?: boolean

  /**
   * value 区域 Text 的 numberOfLines
   */
  valueTextNumberOfLines?: number

  /**
   * title 区域 Text 的 numberOfLines
   */
  titleTextNumberOfLines?: number

  /**
   * 文字对齐方向
   * @default 'right'
   */
  textAlign?: 'right' | 'center' | 'left'

  /**
   * onPress debounce wait
   * @default 0
   */
  onPressDebounceWait?: number
}

export interface CellProps extends TouchableHighlightProps, CellPrivateProps {}
