import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalId: "",
  show: false
}

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.modalId = action.payload;
      state.show = true;
    },
    closeModal: (state) => {
      state.modalId = "";
      state.show = false;
    }
  }
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;