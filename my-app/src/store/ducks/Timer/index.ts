import { createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  timer: 0,
}

export const setThirtySeconds = createAction('SET_THIRTY_SECONDS');
export const DecrementTimer = createAction('DECREMENT_TIMER');

export default createReducer(INITIAL_STATE, {
  [setThirtySeconds.type]: (state) => { state.timer = 30 },
  [DecrementTimer.type]: (state) => { state.timer -= 1 },
});