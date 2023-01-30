
const INITIAL_STATE = {
  showMessage: false,
};


export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.TOGGLE_MESSAGE: {
      return {...state, showMessage: !state.showMessage};
    }

    default: 
      return state;
  };
};

/*  ACTIONS TYPES */
export const Types = {
  TOGGLE_MESSAGE: 'TOGGLE_MESSAGE',
}

/* ACTIONS CREATORS */
export const Creators = {
  toggleMessage: () => {
    return {
      type: Types.TOGGLE_MESSAGE,
    };
  },
}