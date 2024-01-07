import styled from 'styled-components';

import { ADAPTIVE } from '../../tokens/screen';
import { INDENT } from '../../tokens/sizes';

import { GRID_INFO, GRID_INFO_FLEXIBLE } from './constants';
import { getSizeBetweenGap, getWidthColumn } from './helpers';
import { ColumnsProps, SideColumnsProps } from './types';

export const CommonColStyled = styled.div<ColumnsProps>`
  box-sizing: border-box;

  /* CSS Variable */
  --visibility-cal: ${({ hide }) => (hide === 'sm' ? 'none' : 'inherit')};

  /* Reset margin */
  ${({ expanded }) => expanded && 'flex: 1 !important; margin: 0;'}

  ${({ order }) => order && `order: ${order};`}

  /* Limitation styles only for mobile devices */
  ${ADAPTIVE.maxWidth.tablet} {
    ${({ smCustomMargin }) => smCustomMargin && `margin: ${smCustomMargin};`}
  }

  ${({ smMargin }) => smMargin && `margin: ${smMargin};`}

  ${ADAPTIVE.minWidth.tablet} {
    --visibility-cal: ${({ hide }) => (hide === 'md' ? 'none' : 'inherit')};

    /* Reset margin */
    ${({ mdExpanded }) => mdExpanded && 'flex: 1 !important; margin: 0;'}

    ${({ mdOrder }) => mdOrder && `order: ${mdOrder};`}

    ${({ mdMargin }) => mdMargin && `margin: ${mdMargin};`}
  }

  ${ADAPTIVE.minWidth.desktop} {
    --visibility-cal: ${({ hide }) => (hide === 'lg' ? 'none' : 'inherit')};

    /* Reset margin */
    ${({ lgExpanded }) => lgExpanded && 'flex: 1 !important; margin: 0;'}

    ${({ lgOrder }) => lgOrder && `order: ${lgOrder};`}

    ${({ lgMargin }) => lgMargin && `margin: ${lgMargin};`}
  }

  /* Common styles with using variable which define on the each breakpoint */

  display: var(--visibility-cal);

  /* Extra styles */
  ${({ justifyContent }) => justifyContent && `justify-content: ${justifyContent};`}
  ${({ alignItems }) => alignItems && `align-items: ${alignItems};`}
  ${({ bgColor }) => bgColor && `background-color: ${bgColor};`}
  ${({ display }) => display && `display: ${display};`}
`;

/**
 * "Mobile First" Approach (Common styles)
 *
 * Count of columns
 * @param sm options: 1 | 2 | 3 | 4; (from type GridSizesSM); | for 'mobile' and 'all' dimensions
 * @param md options: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
 * (from type GridSizesMD); | from 'tablet' and more biggie dimensions
 * @param lg options: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 12;
 * (from type GridSizesLG); | from 'desktop' and biggest dimensions
 *
 * params for expanded width of Column
 * @param expanded boolean value - for mobile view and more bigger views
 * @param mdExpanded boolean value - for tablet view and more bigger views
 * @param lgExpanded boolean value - for desktop view and more bigger views
 *
 * Order props
 * @param order number | order styles - for 'all' dimensions | from 'mobile' and more biggie dimensions
 * @param mdOrder number | order styles - from 'tablet' and more biggie dimensions
 * @param lgOrder number | order styles - from 'desktop' and biggest dimensions
 *
 * @param smCustomMargin string
 * @param customMargin string
 *
 * @param customMaxWidth "sm" | "md" | "lg" | "extraLg"
 *
 * Special prop - for hiding Column element
 * @param hide GridInfoBreakpoints | options: "sm" | "md" | "lg" | "extraLg"
 *
 * Common props
 * @param bgColor Common the same props - for 'all' dimensions
 */
export const Col = styled(CommonColStyled)<ColumnsProps>`
  flex: 0 0
    ${({ sm, customMaxWidth }) =>
      getWidthColumn({
        breakpoint: GRID_INFO.sm,
        count: sm || GRID_INFO.sm.column,
        customMaxWidth: customMaxWidth?.sm,
      })};

  max-width: ${({ sm, customMaxWidth }) =>
    getWidthColumn({
      breakpoint: GRID_INFO.sm,
      count: sm || GRID_INFO.sm.column,
      customMaxWidth: customMaxWidth?.sm,
    })};

  margin-right: ${getSizeBetweenGap(GRID_INFO.sm.gap)};
  margin-left: ${getSizeBetweenGap(GRID_INFO.sm.gap)};

  ${ADAPTIVE.minWidth.tablet} {
    flex: 0 0
      ${({ md, customMaxWidth }) =>
        getWidthColumn({
          breakpoint: GRID_INFO.md,
          count: md || GRID_INFO.md.column,
          customMaxWidth: customMaxWidth?.md,
        })};

    max-width: ${({ md, customMaxWidth }) =>
      getWidthColumn({
        breakpoint: GRID_INFO.md,
        count: md || GRID_INFO.md.column,
        customMaxWidth: customMaxWidth?.md,
      })};

    margin-right: ${getSizeBetweenGap(GRID_INFO.md.gap)};
    margin-left: ${getSizeBetweenGap(GRID_INFO.md.gap)};
  }

  ${ADAPTIVE.minWidth.desktop} {
    flex: 0 0
      ${({ lg, customMaxWidth }) =>
        getWidthColumn({
          breakpoint: GRID_INFO.lg,
          count: lg || GRID_INFO.lg.column,
          customMaxWidth: customMaxWidth?.lg,
        })};

    max-width: ${({ lg, customMaxWidth }) =>
      getWidthColumn({
        breakpoint: GRID_INFO.lg,
        count: lg || GRID_INFO.lg.column,
        customMaxWidth: customMaxWidth?.lg,
      })};

    margin-right: ${getSizeBetweenGap(GRID_INFO.lg.gap)};
    margin-left: ${getSizeBetweenGap(GRID_INFO.lg.gap)};
  }
`;

export const FlexibleCol = styled(CommonColStyled)`
  flex: 0 0
    ${({ sm, customMaxWidth }) =>
      getWidthColumn({
        breakpoint: GRID_INFO_FLEXIBLE.sm,
        count: sm || GRID_INFO_FLEXIBLE.sm.column,
        customMaxWidth: customMaxWidth?.sm,
      })};

  max-width: ${({ sm, customMaxWidth }) =>
    getWidthColumn({
      breakpoint: GRID_INFO_FLEXIBLE.sm,
      count: sm || GRID_INFO_FLEXIBLE.sm.column,
      customMaxWidth: customMaxWidth?.sm,
    })};

  margin-right: ${getSizeBetweenGap(GRID_INFO_FLEXIBLE.sm.gap)};
  margin-left: ${getSizeBetweenGap(GRID_INFO_FLEXIBLE.sm.gap)};

  ${ADAPTIVE.minWidth.tablet} {
    flex: 0 0
      ${({ md, customMaxWidth }) =>
        getWidthColumn({
          breakpoint: GRID_INFO_FLEXIBLE.md,
          count: md || GRID_INFO_FLEXIBLE.md.column,
          customMaxWidth: customMaxWidth?.md,
        })};

    max-width: ${({ md, customMaxWidth }) =>
      getWidthColumn({
        breakpoint: GRID_INFO_FLEXIBLE.md,
        count: md || GRID_INFO_FLEXIBLE.md.column,
        customMaxWidth: customMaxWidth?.md,
      })};

    margin-right: ${getSizeBetweenGap(GRID_INFO_FLEXIBLE.md.gap)};
    margin-left: ${getSizeBetweenGap(GRID_INFO_FLEXIBLE.md.gap)};
  }

  ${ADAPTIVE.minWidth.desktop} {
    flex: 0 0
      ${({ lg, customMaxWidth }) =>
        getWidthColumn({
          breakpoint: GRID_INFO_FLEXIBLE.lg,
          count: lg || GRID_INFO_FLEXIBLE.lg.column,
          customMaxWidth: customMaxWidth?.lg,
        })};

    max-width: ${({ lg, customMaxWidth }) =>
      getWidthColumn({
        breakpoint: GRID_INFO_FLEXIBLE.lg,
        count: lg || GRID_INFO_FLEXIBLE.lg.column,
        customMaxWidth: customMaxWidth?.lg,
      })};

    margin-right: ${getSizeBetweenGap(GRID_INFO_FLEXIBLE.lg.gap)};
    margin-left: ${getSizeBetweenGap(GRID_INFO_FLEXIBLE.lg.gap)};
  }
`;

export const SideCol = styled(Col)<SideColumnsProps>`
  flex: 0 0
    ${({ sm, customMaxWidth, smFixed }) =>
      getWidthColumn({
        breakpoint: GRID_INFO.sm,
        count: sm || GRID_INFO.sm.column,
        customMaxWidth: customMaxWidth?.sm,
        fixed: smFixed,
        margin: INDENT.xs,
      })};

  max-width: ${({ sm, customMaxWidth, smFixed }) =>
    getWidthColumn({
      breakpoint: GRID_INFO.sm,
      count: sm || GRID_INFO.sm.column,
      customMaxWidth: customMaxWidth?.sm,
      fixed: smFixed,
      margin: INDENT.xs,
    })};

  margin-right: ${({ smFixed, isLeftAlign: isFixedLeft }) =>
    smFixed && !isFixedLeft ? `-${INDENT.xxxs}` : `${getSizeBetweenGap(GRID_INFO.sm.gap)}`};
  margin-left: ${({ smFixed, isLeftAlign: isFixedLeft }) =>
    smFixed && isFixedLeft ? `-${INDENT.xxxs}` : `${getSizeBetweenGap(GRID_INFO.sm.gap)}`};

  ${ADAPTIVE.minWidth.tablet} {
    flex: 0 0
      ${({ md, customMaxWidth, mdFixed }) =>
        getWidthColumn({
          breakpoint: GRID_INFO.md,
          count: md || GRID_INFO.md.column,
          customMaxWidth: customMaxWidth?.md,
          fixed: mdFixed,
          margin: INDENT.sm,
        })};

    max-width: ${({ md, customMaxWidth, mdFixed }) =>
      getWidthColumn({
        breakpoint: GRID_INFO.md,
        count: md || GRID_INFO.md.column,
        customMaxWidth: customMaxWidth?.md,
        fixed: mdFixed,
        margin: INDENT.sm,
      })};

    margin-right: ${({ mdFixed, isLeftAlign: isFixedLeft }) =>
      mdFixed && !isFixedLeft ? `-${INDENT.xxs}` : `${getSizeBetweenGap(GRID_INFO.md.gap)}`};
    margin-left: ${({ mdFixed, isLeftAlign: isFixedLeft }) =>
      mdFixed && isFixedLeft ? `-${INDENT.xxs}` : `${getSizeBetweenGap(GRID_INFO.md.gap)}`};
  }

  ${ADAPTIVE.minWidth.desktop} {
    flex: 0 0
      ${({ lg, customMaxWidth, lgFixed }) =>
        getWidthColumn({
          breakpoint: GRID_INFO.lg,
          count: lg || GRID_INFO.lg.column,
          customMaxWidth: customMaxWidth?.lg,
          fixed: lgFixed,
          margin: INDENT.xl,
        })};

    max-width: ${({ lg, customMaxWidth, lgFixed }) =>
      getWidthColumn({
        breakpoint: GRID_INFO.lg,
        count: lg || GRID_INFO.lg.column,
        customMaxWidth: customMaxWidth?.lg,
        fixed: lgFixed,
        margin: INDENT.xl,
      })};

    margin-right: ${({ lgFixed, isLeftAlign: isFixedLeft }) =>
      lgFixed && !isFixedLeft ? '-36px' : `${getSizeBetweenGap(GRID_INFO.lg.gap)}`};
    margin-left: ${({ lgFixed, isLeftAlign: isFixedLeft }) =>
      lgFixed && isFixedLeft ? '-36px' : `${getSizeBetweenGap(GRID_INFO.lg.gap)}`};
  }
`;

Col.displayName = 'Col_Component';
FlexibleCol.displayName = 'FlexibleCol_Component';
SideCol.displayName = 'SideCol_Component';
