import { createContext, useContext, useEffect, useReducer } from "react";
import { initialValue, videoReducer } from "../reducer/videoReducer";
import { GET_CATEGORY, GET_VIDEOS } from "../reducer/actions";
import { categories } from "../data/categories";
import { videos } from "../data/video";
const VideoContext = createContext();

export const VideoContextProvider = ({ children }) => {
  const [videoData, videoDispatch] = useReducer(videoReducer, initialValue);

  useEffect(() => {
    videoDispatch({ type: GET_CATEGORY, payload: categories });
    videoDispatch({ type: GET_VIDEOS, payload: videos });
  }, []);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(videos));
  }, [videoData.videoList]);
  
  return (
    <VideoContext.Provider value={{ videoData, videoDispatch }}>
      {children}
    </VideoContext.Provider>
  );
};

export const useData = () => useContext(VideoContext);
