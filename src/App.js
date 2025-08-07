// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import DetailsPage from './pages/DetailsPage'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<DetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;