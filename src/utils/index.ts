import type { CardData, ColumnData, MemberOptions } from "@/types";

/**
 *  Reusable function to generate easy IDs for things like cards and columns
 */

export function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

/**
 *  Utility function to quickly generate time for cards
 */

export function getLastUpdated() {
  return new Date().getTime();
}

/**
 *  Utility function to quickly separate cards by their associated column number
 */

export function getCardsForColumn(cards: Array<CardData>, column: number) {
  return cards
    .filter((card) => card.column === column)
    .sort((a, b) => (a.lastUpdated < b.lastUpdated ? -1 : 1));
}

/**
 * Generates dummy data to populate the trello board on first load
 * @returns
 */

export function initDummyData() {
  const cards: Array<CardData> = [
    {
      id: generateId(),
      text: "Some sample text",
      column: 0,
      user: "M",
      lastUpdated: getLastUpdated(),
    },
    {
      id: generateId(),
      text: "Some more sample text",
      column: 0,
      user: "C",
      lastUpdated: getLastUpdated(),
    },
    {
      id: generateId(),
      text: "Some more sample text",
      column: 0,
      user: "C",
      lastUpdated: getLastUpdated(),
    },
    {
      id: generateId(),
      text: "Some sample text",
      column: 1,
      user: "J",
      lastUpdated: getLastUpdated(),
    },
    {
      id: generateId(),
      text: "Some more sample text that goes even further than I would like",
      column: 1,
      user: "M",
      lastUpdated: getLastUpdated(),
    },
    {
      id: generateId(),
      text: "Some sample text",
      column: 3,
      user: "J",
      lastUpdated: getLastUpdated(),
    },
    {
      id: generateId(),
      text: "Some more sample text",
      column: 3,
      user: "C",
      lastUpdated: getLastUpdated(),
    },
    {
      id: generateId(),
      text: "Some more sample text",
      column: 3,
      user: "M",
      lastUpdated: getLastUpdated(),
    },
  ];

  const columns: Array<ColumnData> = [
    { id: generateId(), name: "Backlog" },
    { id: generateId(), name: "To Do" },
    { id: generateId(), name: "In Progress" },
    { id: generateId(), name: "QA" },
    { id: generateId(), name: "Done" },
  ];

  const members: Array<MemberOptions> = ["M", "J", "C"];

  return { cards, columns, members };
}
