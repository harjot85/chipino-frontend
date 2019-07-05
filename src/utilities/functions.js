
const size = {
    xs: 1,
    sm: 2,
    md: 3,
    lg: 4,
    xl: 5
  };

export function getElementsPerScreen() {
    var showCards
    window.innerWidth <= 765
      ? (showCards = size.xs)
      : window.innerWidth <= 1099
        ? (showCards = size.sm)
        : window.innerWidth <= 1399
          ? (showCards = size.md)
          : window.innerWidth <= 1699
            ? (showCards = size.lg)
            : (showCards = size.xl);
    return showCards;
  }
  
  