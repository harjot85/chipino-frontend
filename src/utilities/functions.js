
const size = {
    xs: 1,
    sm: 2,
    md: 3,
    lg: 4,
    xl: 5
  };

export function getCardsForScreen(cardsFor) {
    window.innerWidth <= 765
      ? (cardsFor = size.xs)
      : window.innerWidth <= 1099
        ? (cardsFor = size.sm)
        : window.innerWidth <= 1399
          ? (cardsFor = size.md)
          : window.innerWidth <= 1699
            ? (cardsFor = size.lg)
            : (cardsFor = size.xl);
    return cardsFor;
  }
  
  