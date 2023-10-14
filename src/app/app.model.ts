import { HEADER_ICON_TYPE, HEADER_RIGHT_BLOCK } from './app.config';

export interface SVGIcon {
  src: string;
  alt: string;
  size: string;
  link?: string;
}

export interface HeaderIcons {
  [key: string]: SVGIcon;
}

export interface HeaderSettings {
  leftButton: HEADER_ICON_TYPE;
  title?: string;
  right?: HEADER_RIGHT_BLOCK;
}
