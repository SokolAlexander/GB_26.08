import { TOGGLE_SHOW_NAME, CHANGE_NAME, SET_WEATHER } from "./actions";

const initialState = {
  showName: false,
  name: "default",
  weather: "",
};

export const profileReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TOGGLE_SHOW_NAME: {
      return {
        ...state,
        showName: !state.showName,
      };
    }
    case CHANGE_NAME: {
      return {
        ...state,
        name: payload,
      };
    }
    case SET_WEATHER: {
      return {
        ...state,
        weather: payload,
      };
    }
    default:
      return state;
  }
};
