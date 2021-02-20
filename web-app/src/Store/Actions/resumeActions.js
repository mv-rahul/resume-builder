const createResume = async (store, values) => {
  try {
    await store.update((state) => {
      const temp = state.resumeList;
      temp.push(values);
      state.resumeList = temp;
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const updateResume = async (store, id, values) => {
  try {
    await store.update((state) => {
      const updatedList = state.resumeList.map((item) => {
        if (item.id === id) return values;
        else return item;
      });
      state.resumeList = updatedList;
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const deleteResume = async (store, id) => {
  try {
    await store.update((state) => {
      const updatedList = state.resumeList.filter((item) => item.id !== id);
      state.resumeList = updatedList;
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const updateCurrentResume = async (store, values) => {
  try {
    await store.update((state) => {
      state.currentResume = values;
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const resumeActions = {
  createResume,
  updateResume,
  deleteResume,
  updateCurrentResume,
};
