import { CHANGE_LOCALE } from './action';

const INITIAL_STATE = {
  locale: 'fr',
};
const localeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_LOCALE:
      return {
        ...state,
        locale: action.payload,
      };
    default:
      return state;
  }
};

export default localeReducer;
