const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
  id: "",
  show: false
}

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.id = action.payload;
      state.show = true;
    },
    closeModal: (state) => {
      state.id = "";
      state.show = false;
    }
  }
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;