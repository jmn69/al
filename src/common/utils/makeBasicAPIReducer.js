export default (REQUEST, SUCCESS, FAILURE) => {
  return (state, action) => {
    if (!state) {
      state = {
        isLoading: false,
        error: null,
        data: null,
      };
    }
    switch (action.type) {
      case REQUEST:
        return { ...state, isLoading: true, error: null };
      case SUCCESS: {
        return {
          ...state,
          isLoading: false,
          data: action.payload,
          error: null,
        };
      }
      case FAILURE:
        return { ...state, isLoading: false, error: action.payload };
      default:
        return state;
    }
  };
};
