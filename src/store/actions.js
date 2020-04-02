const actions = {
  addBoard({ commit, state }, data) {
    return new Promise((resolve) => {
      const newId = state.boards.length + 1;

      commit('addBoard', { id: newId, ...data });
      resolve(newId);
    });
  },
};

export default actions;
