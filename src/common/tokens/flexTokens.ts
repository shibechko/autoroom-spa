import styled, { css } from 'styled-components';

import { ADAPTIVE } from '../tokens/screen';
import { AspectRatio } from '../utils/constants';

type TMargin = 'margin' | 'margin-top' | 'margin-right' | 'margin-bottom' | 'margin-left';

type TPadding = 'padding' | 'padding-top' | 'padding-right' | 'padding-bottom' | 'padding-left';

type TOverflow = 'auto' | 'hidden' | 'unset' | 'initial'; // another possible options may add when will be needed it

export type TFlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';

type TJustifyContent =
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'left'
  | 'right';

type TFlexWrap = 'wrap';

type TAlignSelf =
  | 'auto'
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'start'
  | 'end'
  | 'baseline'
  | 'stretch';

type TAlignItems = 'center' | 'start' | 'end' | 'flex-start' | 'flex-end';

// Common styled components (custom)
interface IMargin {
  margin?: string;
  marginMobile?: string;
  marginTablet?: string;
  marginDesktop?: string;
}

interface IMarginTop {
  mt?: string;
  mtMobile?: string;
  mtTablet?: string;
  mtDesktop?: string;
}

interface IMarginRight {
  mr?: string;
  mrMobile?: string;
  mrTablet?: string;
  mrDesktop?: string;
}

interface IMarginBottom {
  mb?: string;
  mbMobile?: string;
  mbTablet?: string;
  mbDesktop?: string;
}

interface IMarginLeft {
  ml?: string;
  mlMobile?: string;
  mlTablet?: string;
  mlDesktop?: string;
}

interface IMarginProps extends IMargin, IMarginTop, IMarginRight, IMarginBottom, IMarginLeft {}

interface IPadding {
  padding?: string;
  paddingMobile?: string;
  paddingTablet?: string;
  paddingDesktop?: string;
}

interface IPaddingTop {
  pt?: string;
  ptMobile?: string;
  ptTablet?: string;
  ptDesktop?: string;
}

interface IPaddingBottom {
  pb?: string;
  pbMobile?: string;
  pbTablet?: string;
  pbDesktop?: string;
}

interface IPaddingLeft {
  pl?: string;
  plMobile?: string;
  plTablet?: string;
  plDesktop?: string;
}

interface IPaddingRight {
  pr?: string;
  prMobile?: string;
  prTablet?: string;
  prDesktop?: string;
}

interface IPaddingProps
  extends IPadding,
    IPaddingTop,
    IPaddingBottom,
    IPaddingLeft,
    IPaddingRight {}

export interface IFlexWrapper extends IMarginProps, IPaddingProps {
  flexDirection?: TFlexDirection;
  flex?: string;

  position?: string;

  alignSelf?: TAlignSelf;
  justifyContent?: TJustifyContent | undefined;
  alignItems?: TAlignItems;
  flexWrap?: TFlexWrap;

  gap?: string;
  bg?: string;
  height?: string;
  minHeight?: string;
  aspectRatio?: AspectRatio;

  textAlign?: string;
  filter?: string;

  flexShrink?: string;

  overflow?: TOverflow;

  isRightToLeft?: boolean;
  isFullWidth?: boolean;
}

interface IBuildFlexWrapperCssOptions {
  prop?: TMargin | TPadding;
  mobile?: string;
  tablet?: string;
  desktop?: string;
  general?: string;
}

interface IComponentHolder {
  bg?: string;
  position?: string;
  overflow?: TOverflow;
  p?: string;
  m?: string;
}

const buildFlexWrapperCssOptions = ({
  prop,
  mobile,
  tablet,
  desktop,
  general,
}: IBuildFlexWrapperCssOptions): any => css`
  ${() => general && prop && `${prop}: ${general};`}

  ${() =>
    prop &&
    mobile &&
    css`
      ${ADAPTIVE.minWidth.mobile} {
        ${`${prop}: ${mobile};`}
      }
    `}

  ${() =>
    prop &&
    tablet &&
    css`
      ${ADAPTIVE.minWidth.tablet} {
        ${`${prop}: ${tablet};`}
      }
    `}

  ${() =>
    prop &&
    desktop &&
    css`
      ${ADAPTIVE.minWidth.desktop} {
        ${`${prop}: ${desktop};`}
      }
    `}
`;

export const FlexWrapper = styled.div<IFlexWrapper>`
  display: flex;

  box-sizing: border-box;

  ${({ marginMobile, marginTablet, marginDesktop, margin }: IMargin) =>
    buildFlexWrapperCssOptions({
      prop: 'margin',
      mobile: marginMobile,
      tablet: marginTablet,
      desktop: marginDesktop,
      general: margin,
    })};

  ${({ mtMobile, mtTablet, mtDesktop, mt }: IMarginTop) =>
    buildFlexWrapperCssOptions({
      prop: 'margin-top',
      mobile: mtMobile,
      tablet: mtTablet,
      desktop: mtDesktop,
      general: mt,
    })};

  ${({ mrMobile, mrTablet, mrDesktop, mr }: IMarginRight) =>
    buildFlexWrapperCssOptions({
      prop: 'margin-right',
      mobile: mrMobile,
      tablet: mrTablet,
      desktop: mrDesktop,
      general: mr,
    })};

  ${({ mbMobile, mbTablet, mbDesktop, mb }: IMarginBottom) =>
    buildFlexWrapperCssOptions({
      prop: 'margin-bottom',
      mobile: mbMobile,
      tablet: mbTablet,
      desktop: mbDesktop,
      general: mb,
    })};

  ${({ mlMobile, mlTablet, mlDesktop, ml }: IMarginLeft) =>
    buildFlexWrapperCssOptions({
      prop: 'margin-left',
      mobile: mlMobile,
      tablet: mlTablet,
      desktop: mlDesktop,
      general: ml,
    })};

  ${({ ptMobile, ptTablet, ptDesktop, pt }: IPaddingTop) =>
    buildFlexWrapperCssOptions({
      prop: 'padding-top',
      mobile: ptMobile,
      tablet: ptTablet,
      desktop: ptDesktop,
      general: pt,
    })};

  ${({ pbMobile, pbTablet, pbDesktop, pb }: IPaddingBottom) =>
    buildFlexWrapperCssOptions({
      prop: 'padding-bottom',
      mobile: pbMobile,
      tablet: pbTablet,
      desktop: pbDesktop,
      general: pb,
    })};

  ${({ plMobile, plTablet, plDesktop, pl }: IPaddingLeft) =>
    buildFlexWrapperCssOptions({
      prop: 'padding-left',
      mobile: plMobile,
      tablet: plTablet,
      desktop: plDesktop,
      general: pl,
    })};

  ${({ prMobile, prTablet, prDesktop, pr }: IPaddingRight) =>
    buildFlexWrapperCssOptions({
      prop: 'padding-right',
      mobile: prMobile,
      tablet: prTablet,
      desktop: prDesktop,
      general: pr,
    })};

  ${({ paddingMobile, paddingTablet, paddingDesktop, padding }: IPadding) =>
    buildFlexWrapperCssOptions({
      prop: 'padding',
      mobile: paddingMobile,
      tablet: paddingTablet,
      desktop: paddingDesktop,
      general: padding,
    })};

  ${({ pr }) => pr && `padding-right: ${pr};`}
  ${({ pl }) => pl && `padding-left: ${pl};`}

  ${({ gap }) => gap && `gap: ${gap};`}
  ${({ alignSelf }) => alignSelf && `align-self: ${alignSelf};`}
  ${({ alignItems }) => alignItems && `align-items: ${alignItems};`}
  ${({ flexDirection }) => flexDirection && `flex-direction: ${flexDirection};`}
  ${({ justifyContent }) => justifyContent && `justify-content: ${justifyContent};`}
  ${({ flexWrap }) => flexWrap && `flex-wrap: ${flexWrap};`}
  ${({ flexShrink }) => flexShrink && `flex-shrink: ${flexShrink};`}

  ${({ position }) => position && `position: ${position};`}

  ${({ bg }) => bg && `background-color: ${bg};`}
  ${({ height }) => height && `height: ${height};`}
  ${({ minHeight }) => minHeight && `min-height: ${minHeight};`}
  ${({ isFullWidth }) => isFullWidth && 'width: 100%;'}

  ${({ aspectRatio }) => aspectRatio && `aspect-ratio: ${aspectRatio};`}
  ${({ flex }) => flex && `flex: ${flex};`}

  ${({ textAlign }) => textAlign && `text-align: ${textAlign};`}
  ${({ filter }) => filter && `filter: ${filter};`}

  ${({ overflow }) => overflow && `overflow: ${overflow};`}

  ${({ isRightToLeft }) => isRightToLeft && 'direction: rtl;'}
`;

export const ComponentHolder = styled.div<IComponentHolder>`
  ${({ position }) => position && `position: ${position};`}

  ${({ bg }) => bg && `background: ${bg};`}

  transition: background 150ms;

  ${({ p }) => p && `padding: ${p};`}
  ${({ m }) => m && `margin: ${m};`}
  
  ${({ overflow }) => overflow && `overflow: ${overflow};`}
`;
