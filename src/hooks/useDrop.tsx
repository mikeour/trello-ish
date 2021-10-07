import { useState } from "react";
import type { CardData, DragEvent } from "@/types";

/**
 *
 * @param handleDroppedCard function that is passed the data from the drop event
 * @returns
 */

function useDrop(handleDroppedCard: (droppedCard: CardData) => void) {
  const [isOver, setIsOver] = useState(false);

  function handleDragOver(event: DragEvent) {
    event.preventDefault();
  }

  function handleDrop(event: DragEvent) {
    const droppedData = event.dataTransfer.getData("text");
    const droppedCard = JSON.parse(droppedData) as CardData;

    handleDroppedCard(droppedCard);
    setIsOver(false);
  }

  function handleDragEnter(_: DragEvent) {
    setIsOver(true);
  }

  function handleDragLeave(event: DragEvent) {
    if (event.currentTarget.contains(event.relatedTarget as any)) {
      return;
    }

    setIsOver(false);
  }

  return {
    onDragEnter: handleDragEnter,
    onDragOver: handleDragOver,
    onDrop: handleDrop,
    onDragLeave: handleDragLeave,
    isOver,
  };
}

export default useDrop;
