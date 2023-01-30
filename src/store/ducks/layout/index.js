import { createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  showMessage: false,
};

export const toggleMessage = createAction('TOGGLE_MESSAGE');

export default createReducer(INITIAL_STATE, {
  [toggleMessage.type]: (state, action) => ({ ...state, showMessage: !state.showMessage })
});

// export default function reducer(state = INITIAL_STATE, action) {
//   switch (action.type) {
//     case toggleMessage.type: {
//       return {...state, showMessage: !state.showMessage};
//     }

//     default: 
//       return state;
//   };
// };