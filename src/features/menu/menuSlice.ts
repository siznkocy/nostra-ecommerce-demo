import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface menuTypes {
  ShopDropdown: boolean;
  mobileMenuState: boolean;
}

const initialState: menuTypes = { mobileMenuState: false, ShopDropdown: false };

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    mouseOver(state) {
      state.ShopDropdown = true;
    },
    mouseLeave(state) {
      state.ShopDropdown = false;
    },
    mobileMenu(state) {
      state.mobileMenuState = !state.mobileMenuState;
    },
  },
});

// redux actions
export const { mouseOver, mouseLeave, mobileMenu } = menuSlice.actions;

export default menuSlice.reducer;

// exporting menuSlice state.
export const currentMouseState = (state: RootState) => state.menu.ShopDropdown;
export const currentMenuState = (state: RootState) =>
  state.menu.mobileMenuState;
