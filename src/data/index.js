export const pieces = {
  king: {
    symbol: "♚",
    name: "king"
  },
  queen: {
    symbol: "♛",
    name: "queen"
  },
  rook: {
    symbol: "♜",
    name: "rook"
  },
  bishop: {
    symbol: "♝",
    name: "bishop"
  },
  knight: {
    symbol: "♞",
    name: "knight"
  },
  pawn: {
    symbol: "♟",
    name: "pawn"
  }
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
