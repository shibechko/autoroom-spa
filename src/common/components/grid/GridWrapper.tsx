import React, { ReactElement, ReactNode } from 'react';

import { Col } from './Col';
import { Container } from './Container';
import { Row } from './Row';
import { ColumnsProps, ContainerProps, RowProps } from './types';

/**
 * @param children - ReactNode
 * @return ReactElement
 */
export function GridWrapper({
  children,
  containerProps,
  colProps,
  rowProps,
  className,
  id,
}: {
  children: ReactNode;
  containerProps?: ContainerProps;
  rowProps?: RowProps;
  colProps?: ColumnsProps;
  className?: string;
  id?: string;
}): ReactElement {
  return (
    <Container
      {...containerProps}
      id={id}
      className={className}
    >
      <Row {...rowProps}>
        <Col {...colProps}>{children}</Col>
      </Row>
    </Container>
  );
}

Container.displayName = 'Container_Component';
