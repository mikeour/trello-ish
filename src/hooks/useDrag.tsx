import { useState } from "react";
import type { CardData, DragEvent } from "@/types";

function useDrag(data: CardData) {
  const [isDragging, setIsDragging] = useState(false);

  function handleDragStart(event: DragEvent) {
    setIsDragging(true);
    event.dataTransfer.setData("text", JSON.stringify(data));
    event.dataTransfer.effectAllowed = "move";
  }

  function handleDragEnd(_: DragEvent) {
    setIsDragging(false);
  }

  return {
    draggable: true,
    onDragStart: handleDragStart,
    onDragEnd: handleDragEnd,
    isDragging,
  };
}

export default useDrag;
