// Options for attr 'target'

export const SELF = '_self';
export const BLANK = '_blank';
export const PARENT = '_parent';
export const TOP = '_top';

export const MOBILE = 'MOBILE';
export const TABLET = 'TABLET';
export const MIDDLE_DESKTOP = 'MIDDLE_DESKTOP';
export const DESKTOP = 'DESKTOP';

export enum AspectRatio {
  RectangleLevel1 = '32/9',
  RectangleLevel2 = '21/9',
  RectangleLevel3 = '16/9',
  RectangleLevel4 = '9/5',
  RectangleLevel5 = '3/2',
  RectangleLevel6 = '4/3',
  RectangleLevel7 = '2/1',
  VerticalRectangle = '2/3',
  Square = '1/1',
}

export const ASPECT_RATIO_CARD_COMMON_PARAMS = {
  sm: AspectRatio.RectangleLevel5,
  md: AspectRatio.RectangleLevel3,
  lg: AspectRatio.RectangleLevel3,
};

export const EVENT_NAME_MAP: Record<string, keyof WindowEventMap> = {
  click: 'click',
  mouseDown: 'mousedown',
};

export const keyCodes: Record<string, any> = {
  ARROW_LEFT: 'ArrowLeft',
  ARROW_RIGHT: 'ArrowRight',
  ARROW_UP: 'ArrowUp',
  ARROW_DOWN: 'ArrowDown',
  ESCAPE: 'Escape',
  ENTER: 'Enter',
};
