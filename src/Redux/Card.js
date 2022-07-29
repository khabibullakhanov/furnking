const card = JSON.parse(localStorage.getItem("card") || "[]");

export const reCard = (state = card, action) => {
  switch (action.type) {
    case "ADD_CARD":
      return [...state, action.payload];

    case "DELETE_CARD":
      return state.filter((item) => item.id !== action.payload);

    case "CLEAR_CARD":
      return [];

    default:
      return state;
  }
};

export const acAddCard = (card) => ({
  type: "ADD_CARD",
  payload: card,
});

export const acDeleteInCard = (id) => ({
  type: "DELETE_CARD",
  payload: id,
});


