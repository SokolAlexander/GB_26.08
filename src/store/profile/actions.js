export const TOGGLE_SHOW_NAME = "PROFILE::TOGGLE_SHOW_NAME";
export const CHANGE_NAME = "PROFILE::CHANGE_NAME";
export const SET_WEATHER = "PROFILE::SET_WEATHER";

export const toggleShowName = {
  type: TOGGLE_SHOW_NAME,
};

export const changeName = (name) => ({
  type: CHANGE_NAME,
  payload: name,
});

const setWeather = (data) => ({
  type: CHANGE_NAME,
  payload: data,
});

export const requestWeather = () => async (dispatch) => {
  const response = await fetch('url');
  const result = await response.json();

  dispatch(setWeather(result));
}
