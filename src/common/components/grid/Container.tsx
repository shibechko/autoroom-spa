import React, { ReactElement } from 'react';

import { ContainerStyled } from './styled';
import { ContainerProps } from './types';

/**
 * Container type description
 *
 * params for expanded width of Column
 * @param expanded boolean value - for all dimensions from mobile
 * @param mdExpanded boolean value - for tablet
 * @param lgExpanded boolean value - for desktop
 *
 * Padding-top options
 * @param pt - any string | like "24px"
 * @param mdPt - any string | like "24px"
 * @param lgPt - any string | like "24px"
 *
 * Padding-bottom options
 * @param pb - any string | like "24px"
 * @param mdPb - any string | like "24px"
 * @param lgPb - any string | like "24px"
 *
 * @param children - any ReactNode
 * @param bgColor - any string options (only for color)
 * @param maxWidth - string | with related options
 * @param width - string | with related options
 * @param isRightToLeft - boolean
 *
 * Extra custom styles
 * @param style ContainerStyleProps;
 *
 * @returns ReactNode
 */
export function Container(props: ContainerProps): ReactElement {
  const { children, style, dataTestId, ...rest } = props;

  return (
    <ContainerStyled
      data-testid={dataTestId}
      {...rest}
      style={{
        ...style,
      }}
    >
      {children}
    </ContainerStyled>
  );
}

Container.displayName = 'Container_Component';
