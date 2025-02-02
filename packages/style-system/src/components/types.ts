import * as React from 'react'
import {MouseEventHandler, ReactNode, UIEventHandler} from 'react'
import {FelaStyle} from 'react-fela'
import {BaseTheme} from '../theming/baseTheme'

export type ResponsiveProps<T> = {
  [P in keyof T]: T[P] | Array<T[P]>
}

export interface FlatBoxProps<T extends BaseTheme>
  extends MarginProps,
    PaddingProps,
    FlexChildProps,
    FontProps<T>,
    StylingProps<T>,
    BoxModelProps {}

export interface BoxBaseProps<T extends BaseTheme>
  extends ResponsiveProps<MarginProps>,
    ResponsiveProps<PaddingProps>,
    ResponsiveProps<FlexChildProps>,
    ResponsiveProps<FontProps<T>>,
    StylingProps<T>,
    ResponsiveProps<BoxModelProps> {
  innerRef?: React.RefObject<HTMLDivElement>
}

export interface FlexBaseProps<T extends BaseTheme> extends BoxBaseProps<T>, ResponsiveProps<FlexContainerProps> {}

export interface TextBaseProps<T extends BaseTheme>
  extends MarginProps,
    PaddingProps,
    FlexChildProps,
    FontProps<T>,
    StylingProps<T> {
  innerRef?: React.RefObject<HTMLSpanElement>
}

export interface BoxModelProps {
  display?: Display
  inline?: boolean
  width?: number | string
  height?: number | string
  maxWidth?: number | string
  maxHeight?: number | string
  minWidth?: number | string
  minHeight?: number | string
  fullWidth?: boolean
  fullHeight?: boolean
  lineClamp?: boolean | number
  position?: Position
  top?: number | string
  right?: number | string
  bottom?: number | string
  left?: number | string
}

export interface FlexChildProps {
  grow?: number
  shrink?: number
  basis?: number | string
  order?: number
  align?: AlignItems
}

export interface FlexContainerProps {
  inline?: boolean
  direction?: Direction
  nowrap?: boolean
  center?: boolean
  justifyContent?: JustifyContent
  alignItems?: AlignItems
}

export interface FontProps<T extends BaseTheme> {
  fontStyle?: keyof T['fontStyles']
  fontSize?: keyof T['fontSizes']
  color?: string | keyof T['colors']
  bold?: boolean
  italic?: boolean
  ellipsis?: boolean
  textAlign?: TextAlign
  underline?: boolean
  uppercase?: boolean
  wordBreakAll?: boolean
  wordWrapAll?: boolean
}

export interface MarginProps {
  m?: Spacing
  mt?: Spacing
  mb?: Spacing
  ml?: Spacing
  mr?: Spacing
  mx?: Spacing
  my?: Spacing
}

export declare interface PaddingProps {
  p?: Spacing
  pt?: Spacing
  pb?: Spacing
  pl?: Spacing
  pr?: Spacing
  px?: Spacing
  py?: Spacing
}

export interface StylingProps<T extends BaseTheme> {
  bg?: string | keyof T['colors']
  cursorPointer?: boolean
  overflowHidden?: boolean
  shadow?: keyof T['shadows']
  r?: number | string
  rt?: number | string
  rb?: number | string
  rl?: number | string
  rr?: number | string
  rtl?: number | string
  rtr?: number | string
  rbl?: number | string
  rbr?: number | string
}

export interface WithBaseTheme {
  theme?: BaseTheme
}

export interface WithStyle<T extends BaseTheme> {
  style?: FelaStyle<T>
}

export interface BaseProps<T extends BaseTheme, H> extends WithStyle<T> {
  children?: ReactNode
  onClick?: MouseEventHandler<H>
  onMouseDown?: MouseEventHandler<T>
  onMouseOver?: MouseEventHandler<T>
  onMouseOut?: MouseEventHandler<T>
  onScroll?: UIEventHandler<T>
  htmlAttrs?: H
  testId?: string
}

export type Display =
  | 'inline'
  | 'block'
  | 'contents'
  | 'flex'
  | 'grid'
  | 'inline-block'
  | 'inline-flex'
  | 'inline-grid'
  | 'inline-table'
  | 'list-item'
  | 'run-in'
  | 'table'
  | 'table-caption'
  | 'table-column-group'
  | 'table-header-group'
  | 'table-footer-group'
  | 'table-row-group'
  | 'table-cell'
  | 'table-column'
  | 'table-row'
  | 'none'
  | 'initial'
  | 'inherit'
export type Position = 'static' | 'absolute' | 'fixed' | 'relative' | 'sticky' | 'initial' | 'inherit'
export type Direction = 'column' | 'column-reverse' | 'row-reverse' | 'initial' | 'inherit'
export type AlignItems = 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'initial' | 'inherit'
export type JustifyContent = 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
export type Spacing = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
export type TextAlign = 'left' | 'right' | 'center' | 'justify' | 'initial' | 'inherit'
export type HtmlDivAttributesWithoutStyle = Omit<React.HTMLAttributes<HTMLDivElement>, 'style'>
export type HtmlSpanAttributesWithoutStyle = Omit<React.HTMLAttributes<HTMLSpanElement>, 'style'>
