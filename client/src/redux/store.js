import { configureStore } from '@reduxjs/toolkit';
import itemSlide from './feature/slice';

export default configureStore({
  reducer: {
    item: itemSlide,
  },
});
