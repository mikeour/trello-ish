export type CardData = {
  /** Unique ID for the card */
  id: string;
  /** Text content for the card */
  text: string;
  /** The column number the card belongs to */
  column: number;
  /** The associated user initial the card belongs to */
  user: MemberOptions;
  /** The time the card was last updated in milliseconds */
  lastUpdated: number;
};

export type ColumnData = {
  /** Unique ID for the column */
  id: string;
  /** Name for the column */
  name: string;
};

export type MemberOptions = "M" | "J" | "C";

export type DragEvent = React.DragEvent<HTMLDivElement>;
