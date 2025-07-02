import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navber from "./components/sidebar/Navber";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        {/* Main layout wrapper */}
        <Route path="/" element={<Navber />}>
          {/* Nested pages inside layout */}
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
