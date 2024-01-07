export const INDENT = {
  xxxxs: '4px',
  xxxs: '8px',
  xxs: '12px',
  xs: '16px',
  s: '20px',
  sm: '24px',
  m: '32px',
  l: '40px',
  xl: '48px',
  xxl: '56px',
  xxxl: '64px',
  none: '0px',
  auto: 'auto',
} as const;

export type AnyObject = unknown; // Actual options any {}

export type KeysFromConst<T extends AnyObject> = T[keyof T];

export type Indent = KeysFromConst<typeof INDENT>;

export const WIDTH_DIMENSION = {
  px: 'px',
  percent: '%',
} as const;
