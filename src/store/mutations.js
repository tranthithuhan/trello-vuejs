const mutations = {
  addBoard(state, newBoard) {
    state.boards = state.boards.concat({
      img: 'https://picsum.photos/600/300/?image=25',
      list: [],
      ...newBoard,
    });

    localStorage.setItem('trello-vuejs', JSON.stringify(state));
  },
  addList(state, payload) {
    state.boards = state.boards.map((board) => {
      if (board.id !== payload.boardId) return board;

      return {
        ...board,
        list: [
          ...board.list,
          {
            id: `${board.list.length + 1}`,
            title: payload.title,
            cards: [],
          },
        ],
      };
    });
    localStorage.setItem('trello-vuejs', JSON.stringify(state));
  },
  addListCard(state, payload) {
    state.boards = state.boards.map((board) => {
      if (board.id !== payload.boardId) return board;

      return {
        ...board,
        list: board.list.map((listItem) => {
          if (listItem.id !== payload.listId) return listItem;

          return {
            ...listItem,
            cards: listItem.cards.concat({
              id: `${listItem.cards.length + 1}`,
              title: payload.title,
            }),
          };
        }),
      };
    });
    localStorage.setItem('trello-vuejs', JSON.stringify(state));
  },
  deleteListCard(state, payload) {
    state.boards = state.boards.map((board) => {
      if (board.id !== payload.boardId) return board;

      return {
        ...board,
        list: board.list.map((listItem) => {
          if (listItem.id !== payload.listId) return listItem;

          return {
            ...listItem,
            cards: listItem.cards.filter(card => card.id !== payload.cardId),
          };
        }),
      };
    });
    localStorage.setItem('trello-vuejs', JSON.stringify(state));
  },
};

export default mutations;
