export const pieces = {
  king: "♚",
  queen: "♛",
  rook: "♜",
  bishop: "♝",
  knight: "♞",
  pawn: "♟"
};

const { rook, knight, bishop, queen, king } = pieces;

export const specialRow = [
  rook,
  knight,
  bishop,
  queen,
  king,
  bishop,
  knight,
  rook
];
