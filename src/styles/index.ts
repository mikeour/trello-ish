import { createStitches } from "@stitches/react";
import {
  mauve,
  violet,
  indigo,
  grass,
  crimson,
  blackA,
} from "@radix-ui/colors";
import type * as Stitches from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      ...mauve,
      ...violet,
      ...indigo,
      ...grass,
      ...crimson,
      ...blackA,
    },
    fonts: {
      primary: "Nunito, sans-serif",
    },
    sizes: {
      columnWidth: "290px",
      appGap: "2rem",
    },
    space: {
      0: "0rem",
      1: "0.75rem",
      2: "1rem",
      3: "1.5rem",
      4: "2rem",
      5: "4rem",
      6: "6rem",
      7: "8rem",
      8: "10rem",
    },
    radii: {
      0: "0px",
      1: "4px",
      2: "8px",
      3: "12px",
      round: "9999px",
    },
    fontSizes: {
      1: "0.85rem",
      2: "1rem",
      3: "1.25rem",
      4: "1.6rem",
      5: "2.1rem",
      6: "3rem",
    },
  },
  media: {
    bp1: "(max-width: 480px)",
  },
  utils: {
    // Abbreviated margin properties
    m: (value: Stitches.ScaleValue<"space">) => ({
      margin: value,
    }),
    mt: (value: Stitches.ScaleValue<"space">) => ({
      marginTop: value,
    }),
    mr: (value: Stitches.ScaleValue<"space">) => ({
      marginRight: value,
    }),
    mb: (value: Stitches.ScaleValue<"space">) => ({
      marginBottom: value,
    }),
    ml: (value: Stitches.ScaleValue<"space">) => ({
      marginLeft: value,
    }),
    mx: (value: Stitches.ScaleValue<"space">) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.ScaleValue<"space">) => ({
      marginTop: value,
      marginBottom: value,
    }),

    // Abbreviated padding properties
    p: (value: Stitches.ScaleValue<"space">) => ({
      padding: value,
    }),
    pt: (value: Stitches.ScaleValue<"space">) => ({
      paddingTop: value,
    }),
    pr: (value: Stitches.ScaleValue<"space">) => ({
      paddingRight: value,
    }),
    pb: (value: Stitches.ScaleValue<"space">) => ({
      paddingBottom: value,
    }),
    pl: (value: Stitches.ScaleValue<"space">) => ({
      paddingLeft: value,
    }),
    px: (value: Stitches.ScaleValue<"space">) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.ScaleValue<"space">) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    // A property for applying width/height together
    size: (value: Stitches.PropertyValue<"width">) => ({
      width: value,
      height: value,
    }),

    bg: (value: Stitches.PropertyValue<"backgroundColor">) => ({
      background: value,
    }),

    gtr: (value: Stitches.PropertyValue<"gridTemplateRows">) => ({
      gridTemplateRows: value,
    }),

    gtc: (value: Stitches.PropertyValue<"gridTemplateColumns">) => ({
      gridTemplateColumns: value,
    }),

    gta: (value: Stitches.PropertyValue<"gridTemplateAreas">) => ({
      gridTemplateAreas: value,
    }),

    // An abbreviated property for border-radius
    br: (value: Stitches.PropertyValue<"borderRadius">) => ({
      borderRadius: value,
    }),
  },
});
