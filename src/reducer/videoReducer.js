import { act } from "react-dom/test-utils";
import * as action from "./actions";

export const initialValue = {
  category: [],
  videoList: JSON.parse(localStorage.getItem("data")) ?? [],
  selectedCat: localStorage.getItem("selectedCat") ?? "",
  playlist: JSON.parse(localStorage.getItem("play")) ?? [],
  note:[]
};

export const videoReducer = (state, { type, payload }) => {
  switch (type) {
    case action.GET_CATEGORY:
      return { ...state, category: payload };

    case action.GET_VIDEOS:
      return { ...state, videoList: payload };

    case action.SET_CATEGORY: {
      return { ...state, selectedCat: payload };
    }
    case action.ADD_TO_WATCHLATER: {
      const updated = state.videoList.map((data) =>
        data._id === payload ? { ...data, watchLater: true } : data
      );
      return { ...state, videoList: updated };
    }
    case action.REMOVE_FROM_WATCHLATER:
      const remove = state.videoList.map((data) =>
        data._id === payload ? { ...data, watchLater: false } : data
      );
      return { ...state, videoList: remove };

    case action.NEW_PLAYLIST: {
      return { ...state, playlist: [...state.playlist, payload] };
    }

    case action.REMOVE_PLAYLIST: {
      return {
        ...state,
        playlist: state.playlist.filter((data) => data.id !== payload),
      };
    }

    case action.ADD_NOTE: {
      const update = state.videoList.map((data) =>
        data._id === payload.id ? { ...data, note: [payload.note]} : data
      );
      return { ...state, videoList: update };
    }
    default:
      return state;
  }
};
