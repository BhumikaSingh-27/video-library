import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router";
import VideoListing from "./pages/VideoList/VideoListing";
import SingleVideo from "./pages/SingleVideo/SingleVideo";
import WatchLater from "./pages/WatchLater/WatchLater";
import Playlist from "./pages/Playlist/Playlist";
import Explore from "./pages/Explore/Explore";
import SinglePlaylist from "./pages/Playlist/SinglePlaylist";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/explore" element={<Explore />}></Route>
        <Route path="/playlist" element={<Playlist />}></Route>
        <Route path="/watchLater" element={<WatchLater />}></Route>
        <Route path="/videoListing" element={<VideoListing />}></Route>
        <Route path="/playlist/:name" element={<SinglePlaylist />}></Route>
        <Route path="/single" element={<SingleVideo />}></Route>
      </Routes>
    </div>
  );
}

export default App;
