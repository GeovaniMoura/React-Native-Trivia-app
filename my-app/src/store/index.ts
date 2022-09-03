import { configureStore } from '@reduxjs/toolkit';
import reducerTimer from './ducks/Timer';

export default configureStore({
  reducer: { 
    reducerTimer,
  }
});