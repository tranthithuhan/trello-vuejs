const mutations = {
  addBoard(state, newBoard) {
    console.log(newBoard);
    state.boards.push(newBoard);
  },
};

export default mutations;
