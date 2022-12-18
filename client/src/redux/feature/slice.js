import { createSlice } from '@reduxjs/toolkit';
const axios = require('axios');
const API_URL = 'http://localhost:5000/';

export const itemSlide = createSlice({
  name: 'item',
  initialState: {
    data: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.data.push(action.payload);
    },
    deleteItem: (state, action) => {
      state.data = [action.payload];
    },
  },
});

export const deleteItemAsync = (data) => async (dispatch) => {
  try {
    const response = await axios.get(`${API_URL}/${data}`);
    dispatch(deleteItem(response.data));
  } catch (err) {
    throw new Error(err);
  }
};

export const addItemAsync = (data) => async (dispatch) => {
  try {
    const response = await axios.post(API_URL, data);
    dispatch(addItem(response.data));
  } catch (err) {
    throw new Error(err);
  }
};

export const { addItem, deleteItem } = itemSlide.actions;
export const showItem = (state) => state.item.data;
export default itemSlide.reducer;
