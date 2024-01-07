import { ReactNode } from 'react';

import { Indent } from '../../tokens/sizes';

/**
 * @param sm - small | Mobile: ( >= 320px )
 * @param md - medium | Tablet: ( >= 768px )
 * @param lg - large | Desktop: ( > 1024px ) -> Default option for desktop
 * @param extraLg - large | Desktop: ( > 1024px ) -> extra options for 'Product Card Grid'
 */
export type GridInfoBreakpoints = 'sm' | 'md' | 'lg' | 'extraLg';

export type GridSizes = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type GridSizesSM = 1 | 2 | 3 | 4;
export type GridSizesMD = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export type GridSizesLG = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface GridInfoShape {
  column: GridSizes;
  gap: number;
  margin: Indent;
}

/**
 * @param option 'column' - count of columns
 * @param option 'gap' - value of gap (gutter) between columns
 * @param option 'margin' - value for gap (gutter) around of whole row (outside gap)
 */
export type GridInfoParameter = 'column' | 'gap' | 'margin';

type GridItemsAlignmentProps = 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';

type GridJustifyProps =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

type GridFlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';

export type ContainerStyleProps = {
  direction?: 'rtl' | 'ltr';
  display?: string;
  width?: string;
};

// Types for expanded Props
export interface ExpandedProps {
  expanded?: boolean;
  mdExpanded?: boolean;
  lgExpanded?: boolean;
}

// Types for expanded Props
export interface IndentReset {
  defaultIndentReset?: boolean;
  smIndentReset?: boolean;
  mdIndentReset?: boolean;
  lgIndentReset?: boolean;
}

export interface ContainerProps extends ExpandedProps, IndentReset {
  children?: ReactNode;
  maxWidth?: string;
  minHeight?: string;
  width?: string;
  isRightToLeft?: boolean;
  isLoading?: boolean;
  bgColor?: string;

  pt?: string;
  pb?: string;

  mdPt?: string;
  mdPb?: string;

  lgPt?: string;
  lgPb?: string;

  height?: string;

  className?: string;

  // Extra custom styles
  style?: ContainerStyleProps;
  id?: string;
  dataTestId?: string;
}

export interface RowProps {
  children?: ReactNode;
  isBrandedCardGrid?: boolean;
  minHeight?: string;
  bgColor?: string;
  justifyContent?: GridJustifyProps;
  flexDirection?: GridFlexDirection;
  alignItems?: GridItemsAlignmentProps;

  height?: string;

  // 'margin-bottom' options
  mb?: string;
  mdMb?: string;
  lgMb?: string;

  // 'margin-top' options
  mt?: string;
  mdMt?: string;
  lgMt?: string;

  rowGap?: string;
}

export interface ColumnsProps extends ExpandedProps {
  // Count of columns
  sm?: GridSizesSM | GridSizesLG;
  md?: GridSizesMD | GridSizesLG;
  lg?: GridSizesLG | GridSizesLG;

  // Order props
  order?: number;
  mdOrder?: number;
  lgOrder?: number;

  // deprecated
  smCustomMargin?: string;
  customMargin?: string;

  smMargin?: string;
  mdMargin?: string;
  lgMargin?: string;

  customMaxWidth?: Record<GridInfoBreakpoints, string | undefined>;

  // Special prop - for hiding Column element
  hide?: GridInfoBreakpoints;

  // Common the same props - for 'all' dimensions
  bgColor?: string;
  display?: string;
  justifyContent?: GridJustifyProps;
  alignItems?: GridItemsAlignmentProps;
}

export interface SideColumnsProps extends ColumnsProps {
  smFixed: boolean;
  mdFixed: boolean;
  lgFixed: boolean;
  isLeftAlign: boolean;
}
