import * as React from 'react';
import type { ActiveSnapPoint, DrawerDirection, SnapPoints } from './types';

interface DrawerContextValue {
  drawerRef: React.RefObject<HTMLDivElement | null>;
  overlayRef: React.RefObject<HTMLDivElement | null>;
  onPress: (event: React.PointerEvent<HTMLDivElement>) => void;
  onRelease: (event: React.PointerEvent<HTMLDivElement> | null) => void;
  onDrag: (event: React.PointerEvent<HTMLDivElement>) => void;
  onNestedDrag: (
    event: React.PointerEvent<HTMLDivElement>,
    percentageDragged: number,
  ) => void;
  onNestedOpenChange: (o: boolean) => void;
  onNestedRelease: (
    event: React.PointerEvent<HTMLDivElement>,
    open: boolean,
  ) => void;
  dismissible: boolean;
  isOpen: boolean;
  isDragging: boolean;
  keyboardIsOpen: React.RefObject<boolean>;
  snapPointsOffset: number[] | null;
  snapPoints?: SnapPoints | null;
  activeSnapPointIndex?: number | null;
  modal: boolean;
  shouldFade: boolean;
  activeSnapPoint?: ActiveSnapPoint;
  setActiveSnapPoint: (o: ActiveSnapPoint) => void;
  closeDrawer: () => void;
  openProp?: boolean | undefined;
  onOpenChange?: (o: boolean) => void | undefined;
  direction: DrawerDirection;
  shouldScaleBackground: boolean;
  setBackgroundColorOnScale: boolean;
  noBodyStyles: boolean | undefined;
  handleOnly?: boolean | undefined;
  container?: HTMLElement | null | undefined;
  autoFocus?: boolean | undefined;
  shouldAnimate?: React.RefObject<boolean>;
}

export const DrawerContext = React.createContext<DrawerContextValue>({
  drawerRef: { current: null },
  overlayRef: { current: null },
  onPress: () => {},
  onRelease: () => {},
  onDrag: () => {},
  onNestedDrag: () => {},
  onNestedOpenChange: () => {},
  onNestedRelease: () => {},
  openProp: undefined,
  dismissible: false,
  isOpen: false,
  isDragging: false,
  keyboardIsOpen: { current: false },
  snapPointsOffset: null,
  snapPoints: null,
  handleOnly: false,
  modal: false,
  shouldFade: false,
  activeSnapPoint: null,
  onOpenChange: () => {},
  setActiveSnapPoint: () => {},
  closeDrawer: () => {},
  direction: 'bottom',
  shouldAnimate: { current: true },
  shouldScaleBackground: false,
  setBackgroundColorOnScale: true,
  noBodyStyles: false,
  container: null,
  autoFocus: false,
});

export const useDrawerContext = () => {
  const context = React.useContext(DrawerContext);
  if (!context) {
    throw new Error('useDrawerContext must be used within a Drawer.Root');
  }
  return context;
};
