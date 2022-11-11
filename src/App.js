import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Pages/Header/Header';
import Sidebar from './Pages/Sidebar/Sidebar';


function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/search/:searchTerm"
            element={[
              <div className="app__page">
                <Sidebar />
                {/* <SearchPage /> */}
              </div>,
            ]}
          ></Route>
          <Route
            path="/"
            element={[
              <div className="app__page">
                <Sidebar />
                {/* <RecommendedVideos /> */}
              </div>,
            ]}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
