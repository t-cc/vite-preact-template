import { BASE_FONT_SIZE_PX } from '$/constants/ui';

export function px2rem(px: number): string {
  return `${px / BASE_FONT_SIZE_PX}rem`;
}
