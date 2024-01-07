import styled, { css } from 'styled-components';

import { ADAPTIVE, BREAKPOINT } from '../../tokens/screen';

import { Col } from './Col';
import { Row } from './Row';
import { ContainerProps } from './types';

const ResetIndentStyled = css`
  margin-left: 0;
  margin-right: 0;
  width: 100%;
  max-width: 100%;
  flex: 1;
`;

export const ContainerStyled = styled.div<ContainerProps>`
  margin-left: auto;
  margin-right: auto;
  position: relative;
  scroll-snap-stop: normal;

  ${({ isRightToLeft }) => isRightToLeft && 'direction: rtl;'}

  max-width: ${({ maxWidth }) => maxWidth || `${BREAKPOINT.xlg}px`};

  ${({ minHeight }) => minHeight && `min-height: ${minHeight}`};

  ${({ width }) => width && `width: ${width}`};

  ${({ bgColor }) => bgColor && `background-color: ${bgColor};`}
  ${({ height }) => height && `height: ${height};`}
  
  ${({ isLoading }) =>
    isLoading &&
    css`
      opacity: 0.6;

      &:after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      }
    `}

  ${({ pt }) => pt && `padding-top: ${pt};`}
  ${({ pb }) => pb && `padding-bottom: ${pb};`}

  /* Reset margin */
  ${({ expanded }) => expanded && 'flex: 1 !important; margin: 0;'} 

  ${ADAPTIVE.minWidth.tablet} {
    ${({ mdPt }) => mdPt && `padding-top: ${mdPt};`}
    ${({ mdPb }) => mdPb && `padding-bottom: ${mdPb};`}

    /* Reset margin */
    ${({ mdExpanded }) => mdExpanded && 'flex: 1 !important; margin: 0;'}
  }

  ${ADAPTIVE.minWidth.desktop} {
    ${({ lgPt }) => lgPt && `padding-top: ${lgPt};`}
    ${({ lgPb }) => lgPb && `padding-bottom: ${lgPb};`}

    /* Reset margin */
    ${({ lgExpanded }) => lgExpanded && 'flex: 1 !important; margin: 0;'}
  }

  /* Reset margin for only desktop dimensions */
  ${({ lgIndentReset }) =>
    lgIndentReset &&
    css`
      ${ADAPTIVE.maxWidth.desktop} {
        ${Row},
        ${Col} {
          ${ResetIndentStyled}
        }
      }
    `}

  /* Reset margin for only tablet dimensions */
  ${({ mdIndentReset }) =>
    mdIndentReset &&
    css`
      ${ADAPTIVE.maxWidth.tablet} {
        ${Row},
        ${Col} {
          ${ResetIndentStyled}
        }
      }
    `}

  /* Reset margin for only mobile dimensions */
  ${({ smIndentReset }) =>
    smIndentReset &&
    css`
      ${ADAPTIVE.maxWidth.mobile} {
        ${Row},
        ${Col} {
          ${ResetIndentStyled}
        }
      }
    `}

  /* Reset margin for all dimensions  */
  ${({ defaultIndentReset }) =>
    defaultIndentReset &&
    css`
      ${Row},
      ${Col} {
        ${ResetIndentStyled}
      }
    `}
`;
