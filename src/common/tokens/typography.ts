import { MouseEvent } from 'react';

import styled, { css } from 'styled-components';

import { elevationBottomLvl4, typographyTextShadow } from './elevations';
import { ADAPTIVE } from './screen';
import { ellipsisEndingLine, getTextStyles } from '../utils/styles';
import { GetTypography, WeightRegularTexOptions } from '../utils/types';


// Heading styles
export const HeadingStylesCommon = css<{ color?: string }>`
  color: ${({ color }) => color};
`;

/**
 * Heading Level1 | H1: (mobile/tablet: 28/32) / (desktop: 48/56)
 *
 * @param color type - string; default value - colorCoreBlack900Base
 *
 * @builtin fontSize: Mobile/Tablet: 28px (2.5 rem); Desktop: 48px (3 rem)
 * @builtin lineHeight: Mobile/Tablet: 32px; Desktop: 56px
 * @builtin fontWeight: bold (700)
 * @builtin textTransform: uppercase
 * @builtin letterSpacing: 2%
 */
export const HeadingLevel1 = styled.h1<{ color?: string }>`
  ${HeadingStylesCommon}
  text-transform: uppercase;
  word-break: break-word;
  white-space: normal;
  text-shadow: ${typographyTextShadow};

  ${getTextStyles('Roboto', 700, 30, 38)}

  ${ADAPTIVE.minWidth.tablet} {
    ${getTextStyles(null, null, 36, 44)}
  }

  ${ADAPTIVE.minWidth.desktop} {
    ${getTextStyles(null, null, 48, 56)}
  }
`;

/**
 * Heading Level2 | H2: (mobile/tablet: 24/28) / (desktop: 32/40)
 *
 * @param color type - string; default value - colorCoreBlack900Base
 *
 * @builtin fontSize: Mobile/Tablet: 24px (1.5 rem); Desktop: 32px (2.5 rem)
 * @builtin lineHeight: Mobile/Tablet: 28px; Desktop: 40px
 * @builtin fontWeight: bold (700)
 * @builtin textTransform: uppercase
 * @builtin letterSpacing: 2%
 */
export const HeadingLevel2 = styled.h2<{ color?: string; width?: string; textAlign?: string }>`
  text-transform: uppercase;
  ${({ color }) => color && `color: ${color};`}
  ${({ width }) => width && `width: ${width};`}
  ${({ textAlign }) => textAlign && `text-align: ${textAlign};`}
  ${getTextStyles('Roboto', 700, 24, 32)}

  ${ADAPTIVE.minWidth.tablet} {
    ${getTextStyles('Roboto', 700, 30, 38)}
  }

  ${ADAPTIVE.minWidth.desktop} {
    ${getTextStyles('Roboto', 700, 36, 44)}
    text-shadow: ${typographyTextShadow};
  }
`;

/**
 * Heading Level3 | H3: (mobile/tablet: 18/24) / (desktop: 24/28)
 *
 * @param color type - string; default value - colorCoreBlack900Base
 *
 * @builtin fontSize: Mobile/Tablet: 18px (1.125 rem); Desktop: 24px (1.5 rem)
 * @builtin lineHeight: Mobile/Tablet: 24px; Desktop: 28px
 * @builtin fontWeight: bold (700)
 * @builtin textTransform: uppercase
 * @builtin letterSpacing: 2%
 */
export const HeadingLevel3 = styled.h3<{ color?: string }>`
  ${HeadingStylesCommon}

  ${getTextStyles('Roboto', 700, 20, 30)}

  ${ADAPTIVE.minWidth.tablet} {
    ${getTextStyles(null, null, 24, 32)}
  }

  ${ADAPTIVE.minWidth.desktop} {
    ${getTextStyles(null, null, 24, 28)}
  }

  text-shadow: ${typographyTextShadow};
`;

/**
 * Heading Level4 | H4: (mobile/tablet: 14/16) / (desktop: 18/24)
 *
 * @param color type - string; default value - constant color 'colorCoreBlack900Base'
 * @param alignSelf type - string; default value - 'flex-start'
 *
 * @builtin fontSize: Mobile/Tablet: 14px (0.875 rem); Desktop: 18px (1.125 rem)
 * @builtin lineHeight: Mobile/Tablet: 16px; Desktop: 24px
 * @builtin fontWeight: bold (700)
 * @builtin textTransform: uppercase
 * @builtin letterSpacing: 2%
 */
export const HeadingLevel4 = styled.h4<{ color?: string; alignSelf?: string; whiteSpace?: string }>`
  ${getTextStyles('Roboto', 700, 20, 30)}

  align-self: ${({ alignSelf = 'flex-start' }) => alignSelf};

  ${({ whiteSpace }) => whiteSpace && `white-space: ${whiteSpace};`}

  ${HeadingStylesCommon}

  ${ADAPTIVE.minWidth.tablet} {
    ${getTextStyles(null, null, 20, 30)}
  }

  ${ADAPTIVE.minWidth.desktop} {
    ${getTextStyles(null, null, 20, 30)}
  }
`;

// Regular text

interface RegularTextProps {
  weight?: WeightRegularTexOptions;
  color?: string;
  isUppercase?: boolean;
  isDisplayFlex?: boolean;
  isLineThrough?: boolean;
  alignItems?: string;
  className?: string;
  textDecoration?: string;
  textAlign?: string;
  isEllipsisEndingLine?: boolean;
  isUserSelectDisabled?: boolean;
  gap?: string;
}

export const RegularTextStylesCommon = css<RegularTextProps>`
  font-weight: ${({ weight = 400 }) => weight};
  color: ${({ color }) => color};

  ${({ isDisplayFlex }) => isDisplayFlex && 'display: flex;'}
  ${({ alignItems }) => alignItems && `align-items: ${alignItems};`}
  ${({ isUppercase = false }) => isUppercase && 'text-transform: uppercase;'}
  ${({ textDecoration }) => textDecoration && `text-decoration: ${textDecoration};`}
  ${({ textAlign }) => textAlign && `text-align: ${textAlign};`}
  ${({ isLineThrough }) => isLineThrough && 'text-decoration: line-through;'}

  // Cutting line with add three dots in the end of line
  ${({ isEllipsisEndingLine }) => isEllipsisEndingLine && ellipsisEndingLine}
  
  ${({ isUserSelectDisabled }) => isUserSelectDisabled && 'user-select: none;'}

  ${({ gap }) => gap && `gap: ${gap};`}

`;

// Regular text | paragraph (p) | Body 24
export const RegularTextLevel1 = styled.p<RegularTextProps>`
  ${getTextStyles('Roboto', 400, 16, 24)}

  ${ADAPTIVE.minWidth.tablet} {
    ${getTextStyles(null, null, 18, 28)}
  }

  ${ADAPTIVE.minWidth.desktop} {
    ${getTextStyles(null, null, 20, 30)}
  }

  ${RegularTextStylesCommon}
`;

// Regular text | paragraph (p) | Body 18
export const RegularTextLevel2 = styled.p<RegularTextProps>`
  ${getTextStyles('Roboto', null, 18, 28)}

  ${RegularTextStylesCommon}
`;

// Regular text | paragraph (p) | Body 16
export const RegularTextLevel3 = styled.p<RegularTextProps>`
  ${getTextStyles('Roboto', null, 16, 24)}

  ${RegularTextStylesCommon}
`;

// Regular text | text (span) | UI 14 (Body 14)
export const RegularTextLevel4 = styled.span<RegularTextProps>`
  ${getTextStyles('Roboto', null, 14, 20)}

  ${RegularTextStylesCommon}
`;

// Regular text | text (span) | Label 12 (Body 12)
export const RegularTextLevel5 = styled.span<RegularTextProps>`
  ${getTextStyles('Roboto', null, 12, 16)}

  ${RegularTextStylesCommon}
`;

// Regular link
type LinkWeight = 400 | 500;

interface RegularLinkProps {
  weight?: LinkWeight; // TODO - need check this new option
  color?: string;
  isUppercase?: boolean;
  isDisplayFlex?: boolean;
  isUnderlined?: boolean;
  alignItems?: string;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  isEllipsisEndingLine?: boolean;
  'data-testid'?: string;
}

export const RegularLinkStylesCommon = css<RegularLinkProps>`
  color: ${({ color }) => color};

  ${({ isDisplayFlex }) => isDisplayFlex && 'display: flex;'}
  ${({ alignItems }) => alignItems && `align-items: ${alignItems};`}
  ${({ isUppercase = false }) => isUppercase && 'text-transform: uppercase;'}
  ${({ isUnderlined = true }) => isUnderlined && 'text-decoration: underline;'}

  // Cutting line with add three dots in the end of line
  ${({ isEllipsisEndingLine }) => isEllipsisEndingLine && ellipsisEndingLine}

  cursor: pointer;
`;

// Regular link | Link 16
export const RegularLinkLevel1 = styled.a<RegularLinkProps>`
  ${getTextStyles('Roboto', 400, 16, 24)}

  ${RegularLinkStylesCommon}
`;

// Regular link | Link 14
export const RegularLinkLevel2 = styled.a<RegularLinkProps>`
  ${getTextStyles('Roboto', 400, 14, 20)}

  ${RegularLinkStylesCommon}
`;

// Regular Label

// Regular Label | Label 12
export const RegularLabelLevel1 = styled.label<RegularLinkProps>`
  ${getTextStyles('Roboto', null, 12, 16)}

  font-weight: ${({ weight = 400 }) => weight};
  color: ${({ color }) => color};

  ${({ isDisplayFlex }) => isDisplayFlex && 'display: flex;'}
  ${({ alignItems }) => alignItems && `align-items: ${alignItems};`}
  ${({ isUppercase = false }) => isUppercase && 'text-transform: uppercase;'}
`;

// Helpers for typography

export const getTypography: GetTypography = ({
  variant: { font, weight, size, lineHeight },
  color,
}) => css`
  ${getTextStyles(font, weight, size, lineHeight)}

  ${color && `color: ${color}`};
`;

export const commonTextShadow = css`
  text-shadow: ${elevationBottomLvl4};

  ${ADAPTIVE.minWidth.tablet} {
    text-shadow: none;
  }
`;
