import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { HelmetProvider } from "react-helmet-async";

// import Header from "/src/components/Header";
// import Home from "/src/pages/Home/Home";

const Header = lazy(() => import("/src/components/Header.jsx"));
const Menu = lazy(() => import("/src/pages/Menu/Menu.jsx"));

const App = () => {
  return (
    <HelmetProvider>
      <div className="container">
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Menu />} />
            <Route
              path="rock-paper-scissors"
              element={"Rock, Paper, Scissors Game"}
            />
          </Route>
        </Routes>
      </div>
    </HelmetProvider>
  );
};

export default App;
