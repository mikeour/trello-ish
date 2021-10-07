import React, { useCallback } from "react";
import AddTodo from "@/components/AddTodo";
import Stack from "@/components/Stack";
import useDrop from "@/hooks/useDrop";
import { styled } from "@/styles";
import { EmptyCardSilhouette } from "@/icons";
import type { CardData } from "@/types";

type CardContainerProps = {
  name: string;
  count: number;
  column: number;
  addCardToColumn: (text: string, column: number) => void;
  updateCardColumn: (card: CardData, updatedColumn: number) => void;
  children: React.ReactNode;
};

function CardColumn({
  name,
  count,
  column,
  addCardToColumn,
  updateCardColumn,
  children,
}: CardContainerProps) {
  const handleDroppedCard = useCallback(
    (droppedCard: CardData) => {
      updateCardColumn(droppedCard, column);
    },
    [updateCardColumn, column]
  );

  const dropProps = useDrop(handleDroppedCard);

  const isEmpty = React.Children.toArray(children).length === 0;

  return (
    <Wrapper type="column" gap={1} {...dropProps}>
      <ContainerHeader type="row">
        <Title>{name}</Title>
        <CardCount>{count}</CardCount>
      </ContainerHeader>
      <CardsContainer
        type="column"
        gap={1}
        css={{ gtr: isEmpty ? "minmax(0, 1fr)" : "" }}
      >
        {isEmpty ? (
          <EmptyState>
            <EmptyCardSilhouette />
            <EmptyText>Drag cards here!</EmptyText>
          </EmptyState>
        ) : (
          children
        )}
      </CardsContainer>

      <AddTodo name={name} column={column} addCardToColumn={addCardToColumn} />
    </Wrapper>
  );
}

export default CardColumn;

const Wrapper = styled(Stack, {
  bg: "$indigo3",
  br: "$3",
  gtr: "auto 1fr",
  height: "100%",
  width: "$columnWidth",
  boxShadow: "0 2px 6px $colors$indigo6",
  gtc: "minmax(0, 1fr)",

  variants: {
    isOver: {
      true: {
        bg: "$indigo5",
      },
    },
  },
});

const ContainerHeader = styled(Stack, {
  justifyContent: "space-between",
  px: "$2",
  py: "$2",
});

const Title = styled("span", {
  fontSize: "$2",
  color: "$indigo12",
  fontWeight: "600",
});

const CardCount = styled("span", {
  size: "24px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  bg: "$indigo6",
  color: "$indigo11",
  fontSize: "12px",
  fontWeight: "600",
  borderRadius: "8px",
});

const CardsContainer = styled(Stack, {
  alignContent: "flex-start",
  height: "100%",
  bg: "inherit",
  px: "$1",
  br: "inherit",
  marginTop: "-1.5rem",
  overflowY: "auto",
  gridGap: "0.5rem !important",
  gtc: "minmax(0, 1fr)",
});

const EmptyState = styled("div", {
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  border: "2px dashed $colors$indigo5",
  br: "$3",
  position: "relative",

  svg: {
    position: "absolute",
    top: "50%",
    left: "50%",
    opacity: 0.3,
    transform: "translate(-50%, -50%)",
    zIndex: "0",
    size: "92%",
    display: "block",
    fill: "$indigo5",
  },
});

const EmptyText = styled("span", {
  fontSize: "$2",
  color: "$indigo11",
  position: "relative",
  zIndex: "2",
});
