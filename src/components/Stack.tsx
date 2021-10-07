import { styled } from "@/styles";

const Stack = styled("div", {
  display: "grid",
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",

  variants: {
    type: {
      column: {
        gridAutoFlow: "row",
      },
      row: {
        gridAutoFlow: "column",
      },
    },
    gap: {
      0: {
        gridGap: "$0",
      },
      1: {
        gridGap: "$1",
      },
      2: {
        gridGap: "$2",
      },
      3: {
        gridGap: "$3",
      },
      4: {
        gridGap: "$4",
      },
      5: {
        gridGap: "$5",
      },
      6: {
        gridGap: "$6",
      },
      7: {
        gridGap: "$7",
      },
      8: {
        gridGap: "$8",
      },
      9: {
        gridGap: "$9",
      },
    },
  },
  defaultVariants: {
    gap: "$0",
  },
});

export default Stack;
