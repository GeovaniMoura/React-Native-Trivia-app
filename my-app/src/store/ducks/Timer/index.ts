import { createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  timer: 0,
}

export const setThirtySeconds = createAction('SET_THIRTY_SECONDS');

export default createReducer(INITIAL_STATE, {
  [setThirtySeconds.type]: (state) => { state.timer = 30 }
});