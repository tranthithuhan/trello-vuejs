const mutations = {
  addBoard(state, newBoard) {
    console.log(newBoard);
    state.boards = state.boards.concat({
      img: 'https://picsum.photos/600/300/?image=25',
      list: [],
      ...newBoard,
    });
  },
};

export default mutations;
