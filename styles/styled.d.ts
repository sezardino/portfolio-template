import { theme } from "./theme";

import "styled-components";
import { media } from "./media";
import { colors } from "./colors";
import { spacing } from "./spacing";
import { fonts } from "./fonts";

declare module "styled-components" {
  export interface DefaultTheme {
    media: typeof media;
    colors: typeof colors;
    spacing: typeof spacing;
    fonts: typeof fonts;
  }
}
