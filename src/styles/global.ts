import { globalCss } from "@/styles";

export default globalCss({
  "@font-face": [
    {
      fontFamily: "Nunito",
      src: 'local("Nunito-Regular"), url("fonts/Nunito-Regular.ttf")',
      fontWeight: 400,
    },
    {
      fontFamily: "Nunito",
      src: 'local("Nunito-Light"), url("fonts/Nunito-Light.ttf")',
      fontWeight: 300,
    },
    {
      fontFamily: "Nunito",
      src: 'local("Nunito-SemiBold"), url("fonts/Nunito-SemiBold.ttf")',
      fontWeight: 600,
    },
  ],

  "*, :before, :after": {
    p: "$0",
    m: "$0",
    boxSizing: "border-box",
    fontFamily: "$primary",
  },

  "html, body, #root": {
    height: "100%",
  },

  body: {
    maxHeight: "100vh",
    fontSize: "16px",
    overscrollBehavior: "none",
    bg: "$mauve1",
  },

  "#root": {
    display: "grid",
    py: "$1",
    gta: '". header ." "columns columns columns"',
    gtc: "$appGap minmax(0, 1fr) $appGap",
    gtr: "auto minmax(0, 1fr)",
  },
});
