import {
  GET_CATEGORY,
  SET_CATEGORY,
  GET_VIDEOS,
  ADD_TO_WATCHLATER,
  REMOVE_FROM_WATCHLATER,
} from "./actions";

export const initialValue = {
  category: [],
  videoList: JSON.parse(localStorage.getItem("data")) ?? [],
  selectedCat: localStorage.getItem("selectedCat") ?? "",
};
export const videoReducer = (state, { type, payload }) => {
  switch (type) {
    case GET_CATEGORY:
      return { ...state, category: payload };

    case GET_VIDEOS:
      return { ...state, videoList: payload };

    case SET_CATEGORY: {
      return { ...state, selectedCat: payload };
    }
    case ADD_TO_WATCHLATER: {
      const updated = state.videoList.map((data) =>
        data._id === payload ? { ...data, watchLater: true } : data
      );
      return { ...state, videoList: updated };
    }
    case REMOVE_FROM_WATCHLATER:
      const remove = state.videoList.map((data) =>
        data._id === payload ? { ...data, watchLater: false } : data
      );
      return { ...state, videoList: remove };
    default:
      return state;
  }
};
