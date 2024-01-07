export type ZIndexLevel =
  | 'levelNegative2'
  | 'levelNegative1'
  | 'level0'
  | 'level1'
  | 'level2'
  | 'level3'
  | 'level6'
  | 'level7'
  | 'level8'
  | 'level9'
  | 'popupLevel1'
  | 'popupLevel2'
  | 'popupLevel3';

export const Z_INDEX: Record<ZIndexLevel, number> = {
  levelNegative2: -2,
  levelNegative1: -1,
  level0: 0,
  level1: 1,
  level2: 2,
  level3: 3,
  level6: 6,
  level7: 7,
  level8: 8,
  level9: 9,
  popupLevel1: 10,
  popupLevel2: 11,
  popupLevel3: 12,
};
