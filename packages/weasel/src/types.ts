export type DrawerDirection = 'top' | 'bottom' | 'left' | 'right';
export interface SnapPoint {
  fraction: number;
  height: number;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyFunction = (...args: any) => any;

export type SnapPointValue = number | string;
export type SnapPoints = SnapPointValue[];
export type ActiveSnapPoint = SnapPointValue | null;
