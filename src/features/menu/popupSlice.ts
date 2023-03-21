import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface alertTypes {
  open: boolean;
  searchBarOpen: boolean;
}

const initialState: alertTypes = { open: true, searchBarOpen: false };

const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    notification(state) {
      state.open = !state.open;
    },
    searchBar(state) {
      state.searchBarOpen = !state.searchBarOpen;
    },
  },
});

export const { notification, searchBar } = popupSlice.actions;

export default popupSlice.reducer;

export const currentNotificationState = (state: RootState) => state.popup.open;
export const currentSearchBarState = (state: RootState) =>
  state.popup.searchBarOpen;
