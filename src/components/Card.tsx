import Stack from "@/components/Stack";
import Avatar from "@/components/Avatar";
import useDrag from "@/hooks/useDrag";
import { styled } from "@/styles";
import type { CardData } from "@/types";

type CardProps = {
  data: CardData;
};

function Card({ data }: CardProps) {
  const dragProps = useDrag(data);

  const { id, text, user } = data;

  return (
    <Wrapper key={id} {...dragProps}>
      <Stack type="column" gap={1} css={{ gtc: "minmax(0, 1fr)" }}>
        <CardText>{text}</CardText>
        <Stack type="row" gap={0} css={{ justifyContent: "flex-end" }}>
          <Avatar user={user} />
        </Stack>
      </Stack>
    </Wrapper>
  );
}

export default Card;

const Wrapper = styled("div", {
  p: "$1",
  bg: "white",
  br: "$2",
  width: "100%",
  transition: "background 300ms ease-in-out",
  boxShadow: "0 2px 6px $colors$indigo6",
  opacity: "1",

  "&:hover": {
    bg: "$indigo2",
  },

  variants: {
    isDragging: {
      true: {
        opacity: "0.5",
      },
    },
  },
});

const CardText = styled("span", {
  color: "#132142",
  fontSize: "14.5px",
  lineHeight: 1.5,
});
