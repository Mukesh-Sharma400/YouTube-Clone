import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Navbar,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
} from "./components";

function App() {
  return (
    <div className="container-fluid bg-black">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Feed />} />
          <Route exact path="/video/:id" element={<VideoDetail />} />
          <Route exact path="/channel/:id" element={<ChannelDetail />} />
          <Route exact path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
