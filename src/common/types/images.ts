export interface ImageProps {
  url: string;
  label: string;
  width: number;
  height: number;
}

export interface ImageSrcSetProps {
  src: string;
  rule?: string;
  role?: string;
  media?: string;
  type?: string;
}

export interface ImageCommonProps {
  src: string;
  srcSet?: ImageSrcSetProps[];
  alt?: string;
}

export interface ImageComponentProps {
  src: string;
  srcSet?: ImageSrcSetProps[];
  alt?: string;
  decorative?: boolean;
  caption?: string;
  width?: number;
  height?: number;
  maxHeight?: number | string;
  isFullHeight?: boolean;
  fallbackSrc?: string;
}
