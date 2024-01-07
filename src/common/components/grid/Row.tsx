import styled, { css } from 'styled-components';

import { ADAPTIVE } from '../../tokens/screen';

import { GRID_INFO } from './constants';
import { getSizeOutsideGap } from './helpers';
import { RowProps } from './types';

/**
 * @param justifyContent options: flex-start | center | flex-end | space-between | space-around | space-evenly
 * @param alignItems options: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline'
 * @param flexDirection options: 'row' | 'row-reverse' | 'column' | 'column-reverse'
 * @param minHeight - any string (like - '50px')
 * @param rowGap - any string (like - '150px') for add getter between rows
 * @param bgColor - any string (like - '#cccccc'); only for define color
 * @param isBrandedCardGrid - boolean | Option for Branded Card layout
 * @param mb string - 'margin-bottom' (for all dimensions | from mobile)
 * @param mdMb string - 'margin-bottom' (from tablet)
 * @param lgMb string - 'margin-bottom' (from desktop)
 * @param mt string - 'margin-top' (all dimensions | from mobile)
 * @param mdMt string - 'margin-top' (from tablet)
 * @param lgMt string - 'margin-top' (from desktop)
 * @param children - ReactNode
 *
 * @returns Styled Component
 */
export const Row = styled.div<RowProps>`
  display: flex;
  flex-flow: row wrap;

  ${({ height }) => height && `height: ${height};`}

  ${({ mb }) => mb && `margin-bottom: ${mb};`}
  ${({ mt }) => mt && `margin-top: ${mt};`}

  /* Adaptive styles */
  --outside-gap: ${getSizeOutsideGap(GRID_INFO.sm.margin, GRID_INFO.sm.gap)};

  ${ADAPTIVE.minWidth.tablet} {
    --outside-gap: ${getSizeOutsideGap(GRID_INFO.md.margin, GRID_INFO.md.gap)};

    ${({ mdMb }) => mdMb && `margin-bottom: ${mdMb};`}
    ${({ mdMt }) => mdMt && `margin-top: ${mdMt};`}
  }

  ${({ isBrandedCardGrid }) =>
    isBrandedCardGrid
      ? css`
          ${ADAPTIVE.minWidth.desktop} {
            --outside-gap: ${getSizeOutsideGap(GRID_INFO.extraLg.margin, GRID_INFO.extraLg.gap)};
          }
        `
      : css`
          ${ADAPTIVE.minWidth.desktop} {
            --outside-gap: ${getSizeOutsideGap(GRID_INFO.lg.margin, GRID_INFO.lg.gap)};
          }
        `}

  ${ADAPTIVE.minWidth.desktop} {
    ${({ lgMb }) => lgMb && `margin-bottom: ${lgMb};`}
    ${({ lgMt }) => lgMt && `margin-top: ${lgMt};`}
  }

  margin-right: var(--outside-gap);
  margin-left: var(--outside-gap);

  /* Extra styles */
  ${({ bgColor }) => bgColor && `background-color: ${bgColor};`}
  ${({ minHeight }) => minHeight && `min-height: ${minHeight};`}
  ${({ justifyContent }) => justifyContent && `justify-content: ${justifyContent};`}
  ${({ flexDirection }) => flexDirection && `flex-direction: ${flexDirection};`}
  ${({ alignItems }) => alignItems && `align-items: ${alignItems};`}

  /* TODO: (D.K.) Need check */
  ${({ rowGap }) => rowGap && `row-gap: ${rowGap};`}
`;

Row.displayName = 'Row_Component';
