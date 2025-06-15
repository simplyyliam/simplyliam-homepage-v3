import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { ThemeProvider } from "next-themes";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
            <Route index element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
