import { INDENT, Indent } from '../../tokens/sizes';

import { GridInfoShape, GridInfoBreakpoints, GridSizes } from './types';

export const COLUMN: Record<GridInfoBreakpoints, GridSizes> = {
  sm: 4,
  md: 8,
  lg: 12,
  extraLg: 12, // extra options for 'Branded Card Grid'
} as const;

const COLUMN_RESPONSIVE: Record<GridInfoBreakpoints, GridSizes> = {
  sm: 12,
  md: 12,
  lg: 12,
  extraLg: 12, // extra options for 'Branded Card Grid'
} as const;

const DEFAULT_GAP: Record<GridInfoBreakpoints, number> = {
  sm: 16,
  md: 24,
  lg: 24,
  extraLg: 32, // extra options for 'Branded Card Grid'
} as const;

const MARGIN_GAP: Record<GridInfoBreakpoints, Indent> = {
  sm: INDENT.xs, // xs = 16
  md: INDENT.sm, // sm = 24
  lg: INDENT.xl, // xl = 48
  extraLg: INDENT.xl, // xl = 48 --> // extra options for 'Branded Card Grid'
} as const;

/**
 * @param sm | column: 4 | gap: 16 | margin: 16
 * @param md | column: 8 | gap: 24 | margin: 24
 * @param lg | column: 12 | gap: 24 | margin: 48
 * @param extraLg | column: 12 | gap: 32 | margin: 48 // extra config-options for 'Branded Card Grid'
 */
export const GRID_INFO: { [key in GridInfoBreakpoints]: GridInfoShape } = {
  sm: {
    column: COLUMN.sm,
    gap: DEFAULT_GAP.sm,
    margin: MARGIN_GAP.sm,
  },
  md: {
    column: COLUMN.md,
    gap: DEFAULT_GAP.md,
    margin: MARGIN_GAP.md,
  },
  lg: {
    column: COLUMN.lg,
    gap: DEFAULT_GAP.lg,
    margin: MARGIN_GAP.lg,
  },
  extraLg: {
    column: COLUMN.extraLg,
    gap: DEFAULT_GAP.extraLg,
    margin: MARGIN_GAP.extraLg,
  },
} as const;

// Grid config with flexible options (12 column for all devices)
export const GRID_INFO_FLEXIBLE: { [key in GridInfoBreakpoints]: GridInfoShape } = {
  sm: {
    ...GRID_INFO.sm,
    column: COLUMN_RESPONSIVE.sm,
  },
  md: {
    ...GRID_INFO.md,
    column: COLUMN_RESPONSIVE.md,
  },
  lg: {
    ...GRID_INFO.lg,
    column: COLUMN_RESPONSIVE.lg,
  },
  extraLg: {
    ...GRID_INFO.lg,
    column: COLUMN_RESPONSIVE.extraLg,
  },
} as const;
