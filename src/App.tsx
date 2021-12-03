import { useState, useCallback } from "react";
import Stack from "@/components/Stack";
import Members from "@/components/Members";
import CardColumn from "@/components/CardColumn";
import Card from "@/components/Card";
import { styled } from "@/styles";
import { Brand } from "@/icons";
import {
  generateId,
  getCardsForColumn,
  getLastUpdated,
  initDummyData,
} from "@/utils";
import type { CardData, MemberOptions } from "@/types";

const { cards: dummyCards, columns, members } = initDummyData();

function App() {
  const [cards, setCards] = useState(dummyCards);
  const [selectedUsers, setSelectedUsers] = useState<MemberOptions[]>([]);

  /**
   * Function to handle iterating through cards and updating the card with it's new column
   * Wrapping in useCallback so the function doesn't needlessly get recreated
   */

  const updateCardColumn = useCallback(
    (card: CardData, updatedColumn: number) => {
      setCards((currentCards) => {
        const cards = [...currentCards];
        const cardIndex = cards.findIndex(
          (currentCard) => currentCard.id === card.id
        );

        cards[cardIndex] = {
          ...card,
          column: updatedColumn,
          lastUpdated: getLastUpdated(),
        };

        return cards;
      });
    },
    []
  );

  /**
   * Function to handle adding a new card into the existing card array
   * Wrapping in useCallback so the function doesn't needlessly get recreated
   */

  const addCardToColumn = useCallback((text: string, column: number) => {
    setCards((currentCards) => {
      const card: CardData = {
        id: generateId(),
        user: "M",
        text,
        column,
        lastUpdated: getLastUpdated(),
      };

      return [...currentCards, card];
    });
  }, []);

  function updateSelectedUser(user: MemberOptions) {
    setSelectedUsers((currentUsers) => {
      if (currentUsers.includes(user)) {
        return currentUsers.filter((currentUser) => currentUser !== user);
      } else {
        return [...currentUsers, user];
      }
    });
  }

  return (
    <>
      <Header>
        <BrandContents type="row" gap={1}>
          <BrandContainer type="row" gap={0}>
            <Brand />
          </BrandContainer>
        </BrandContents>
        <Members members={members} updateSelectedUser={updateSelectedUser} />
      </Header>
      <OverflowContainer>
        <ColumnsContainer>
          <Columns type="row" gap={3}>
            {columns.map((column, columnNumber) => {
              const cardsForColumn = getCardsForColumn(cards, columnNumber);

              return (
                <CardColumn
                  key={column.id}
                  name={column.name}
                  count={cardsForColumn.length}
                  column={columnNumber}
                  addCardToColumn={addCardToColumn}
                  updateCardColumn={updateCardColumn}
                >
                  {cardsForColumn
                    .filter((card) => {
                      if (selectedUsers.length === 0) return true;
                      return selectedUsers.includes(card.user);
                    })
                    .map((card) => {
                      return <Card key={card.id} data={card} />;
                    })}
                </CardColumn>
              );
            })}
          </Columns>
        </ColumnsContainer>
      </OverflowContainer>
    </>
  );
}

export default App;

const Header = styled("header", {
  gridArea: "header",
  display: "grid",
  justifyContent: "space-between",
  alignItems: "center",
  gridAutoFlow: "column",
  position: "relative",
  gridGap: "$1",
});

const BrandContents = styled(Stack, {});

const BrandContainer = styled(Stack, {
  height: "4rem",
  py: "$2",

  svg: {
    height: "100%",
    display: "block",
  },
});

const OverflowContainer = styled("main", {
  gridArea: "columns",
  position: "relative",
  width: "100%",
  display: "flex",
  overflow: "hidden",
});

const ColumnsContainer = styled("div", {
  width: "100%",
  overflowX: "auto",
});

const Columns = styled(Stack, {
  height: "100%",
  padding: "$1 $sizes$appGap $3",

  ">:last-child:after": {
    content: "",
    display: "block",
    position: "absolute",
    right: "calc($sizes$appGap * -1)",
    width: "$sizes$appGap",
    height: "1px",
  },
});
