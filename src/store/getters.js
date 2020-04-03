export default {
  getBoardById: state => boardId => {
    return state.boards.find(board => board.id === boardId);
  },
};
