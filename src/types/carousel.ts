export interface CarouselCard {
  category: string;
  title: string;
  src: string;
  description: string;
}

export interface FocusCard {
  title: string;
  description: string;
  image: string;
  href?: string;
}

export interface AnimationVariants {
  hidden: {
    opacity: number;
    y?: number;
    scale?: number;
    rotateX?: number;
  };
  visible: {
    opacity: number;
    y?: number;
    scale?: number;
    rotateX?: number;
    transition?: {
      duration?: number;
      ease?: string | number[];
      delay?: number;
    };
  };
}
