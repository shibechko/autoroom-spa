# Grid / Breakpoints / Adaptive / Info

```
  The grid is the foundation for positioning elements within your design. Designing to the grid helps create seamless, consistent, harmonious, and easy to follow experiences.
```

## Breakpoints

| device          | name                         | options  | description                                                      |
| --------------- | ---------------------------- | -------- | ---------------------------------------------------------------- |
| Mobile          | xs - extra-small             | >= 320px | -> extra mobile options                                          |
| Mobile          | sm - small                   | >= 360px | default mobile options                                           |
| Tablet          | md - medium                  | >= 768px | default                                                          |
| Desktop         | lg - large                   | > 1024px | -> Default option for desktop                                    |
| Desktop (Extra) | extraLg - (The same - large) | > 1024px | -> Extra Desktop option -> Branded Card for the Commerce Section |

## Requirements

| Devices screen | mobile | tablet | desktop | desktop (Extra for Branded Card grid) |
| -------------- | ------ | ------ | ------- | ------------------------------------- |
| Column grid    | 4      | 8      | 12      | 12                                    |
| Margins        | 16px   | 24px   | 48px    | 48px                                  |
| Gutters        | 16px   | 24px   | 24px    | 32px                                  |
| Width          | auto   | auto   | auto    | auto                                  |

## Usage

**_The example is compiled for the case according principle "Mobile First"_**

```
import { css } from "styled-components/macro";

import { ADAPTIVE } from 'components/shared/tokens/screen';

const styledComponents = css`
  // CSS (Styles) for [Mobile] screen (+ common styles for this selector)

  ${ADAPTIVE.minWidth.tablet} {
    // CSS (styles) for [Tablet] screen
  }

  ${ADAPTIVE.minWidth.desktop} {
    // CSS (styles) for [Desktop] screen
  }

  ${ADAPTIVE.minWidth.desktopLg} {
    // CSS (styles) for extraLg Screen [Desktop]
  }
`;
```

### Example for Usage Grid Components

```
  <Container>
    <Row>
      <Col sm={2} lg={2}>
        <p>content 1<p>
      </Col>
      <Col sm={2} md={4} lg={4}>
        <p>content 2<p>
      </Col>
      <Col md={4} lg={6}>
        <p>content 3<p>
      </Col>
    </Row>
  </Container>
```

### Results

```

1) mobile view / sm:

| col_1 | col_2 | col_3 | col_4 |
|-------|-------|-------|-------|
|   content 1   |   content 2   |
|---------------|---------------|
|           content 3           |
|-------|-------|-------|-------|

Note: default value for sm --> sm={4}
Note: content 1, content 2 --> has 2 column -> sm={2}
Note: content 3 -> hasn't value for sm prop, but default 4 for column -> value={4} / Full width = 100%


2) Tablet view / md:

| col_1 | col_2 | col_3 | col_4 | col_5 | col_6 | col_7 | col_8 |
|-------|-------|-------|-------|-------|-------|-------|-------|
|                            content 1                          |
|-------------------------------|-------------------------------|
|           content 2           |            content 2          |
|-------|-------|-------|-------|-------|-------|-------|-------|

Note: default value for md --> md={8}
Note: content 1 -> hasn't value for md prop, but default value={8} / Full width = 100%
Note: content 2, content 3 -> has 4 column -> md={4}


3) Desktop view / lg:

| col1 | col2 | col3 | col4 | col5 | col6 | col7 | col8 | col9 | col10 | col11 | col12 |
|------|------|------|------|------|------|------|------|------|------ |------ |------ |
| content 1   |         content 2         |                 content 3                  |
|------|------|------|------|------|------|------|------|------|------ |------ |------ |

Note: default value for lg --> lg={12}
Note: content 1 -> has 2 column -> lg={2}
Note: content 2 -> has 4 column -> lg={4}
Note: content 3 -> has 6 column -> lg={6}


```

## Referents (info / requirements)

- [Figma](https://www.figma.com/file/1AvCVJdBZRAVYsB5H0vFkC/YME-Design-System?node-id=55%3A241)
- [Confluence](https://support.yamnet.com/confluence/pages/viewpage.action?spaceKey=B2CAPPS&title=Breakpoints%2C+Devices%2C+Browsers+and+OS)
- [Mobile First Principle](https://developer.mozilla.org/en-US/docs/Glossary/Mobile_First)
- [Mobile First Principle](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Responsive/Mobile_first)
- [Mobile first on MDN](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Responsive/Mobile_first);
- [Mobile first on MDN](https://developers.google.com/search/mobile-sites/mobile-first-indexing);
