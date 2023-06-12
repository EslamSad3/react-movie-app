import { createSlice } from "@reduxjs/toolkit";
import {toast} from "react-toastify"
const initialState = {
  favMovies: [],
};

const addFavSlices = createSlice({
  name: "Favorites",
  initialState,
  reducers: {
    addToFav(state, action) {
      if (true){
        state.favMovies.push(action.payload);
        toast.success("Added To Favorites",{position:"bottom-left"})
      }
    },
  },
});

export const { addToFav } = addFavSlices.actions;
export default addFavSlices.reducer;
