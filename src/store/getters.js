export default {
  getBoardById: state => boardId => state.boards.find(board => board.id === boardId),
};
