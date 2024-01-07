import { Indent } from '../../tokens/sizes';

import { GridSizes, GridInfoShape } from './types';

/**
 * Get size between gap
 * @param gap 'number'; options: sm = 16 | md = 24 | lg = 24 | extraLg = 32
 * @returns 'string' (css fn); 'calc( ${gap}px / 2 )'
 */
export const getSizeBetweenGap = (gap: number): string => `calc(${gap}px / 2)`;

/**
 * Get size for column
 * @param breakpoint 'string'; options: 'sm' | 'md' | 'lg' | 'extraLg'
 * @param count 'number'; options: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
 * @param customMaxWidth any 'string' (like '150px')
 * @param fixed boolean
 * @param margin any 'string' (like '36px')
 * @returns 'string'
 */
export const getWidthColumn = ({
  breakpoint,
  count,
  customMaxWidth,
  fixed,
  margin,
}: {
  breakpoint: GridInfoShape;
  count: GridSizes;
  customMaxWidth?: string;
  fixed?: boolean;
  margin?: string;
}): string => {
  if (customMaxWidth) {
    return `${customMaxWidth}`;
  }

  if (fixed) {
    return `calc(${(100 / breakpoint.column) * count}% - ${breakpoint.gap}px + ${margin})`;
  }

  return `calc(${(100 / breakpoint.column) * count}% - ${breakpoint.gap}px)`;
};

/**
 * Get size for outside gap
 * @param margin - string; options: INDENT.xs = 16px | INDENT.sm = 24px | INDENT.xl = 48px
 * @param gap - number; options: sm: 16 | md: 24 | lg: 24 | extraLg: 32
 * @returns string (css fn); 'calc( $margin - ( $gap / 2 ) )'
 */
export const getSizeOutsideGap = (margin: Indent, gap: number): string =>
  `calc(${margin} - (${gap}px / 2))`;
