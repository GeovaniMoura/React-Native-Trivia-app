import { createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  timer: 0,
}

export const SetThirtySeconds = createAction('SET_THIRTY_SECONDS');
export const ResetTimer = createAction('RESET_TIMER');
export const DecrementTimer = createAction('DECREMENT_TIMER');

export default createReducer(INITIAL_STATE, {
  [SetThirtySeconds.type]: (state) => { state.timer = 30 },
  [ResetTimer.type]: (state) => { state.timer = 0 },
  [DecrementTimer.type]: (state) => { state.timer -= 1 },
});