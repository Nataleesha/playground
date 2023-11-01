import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { HelmetProvider } from "react-helmet-async";

const Header = lazy(() => import("/src/components/Header.jsx"));
const Menu = lazy(() => import("/src/pages/Menu/Menu.jsx"));
const RockPaperScissors = lazy(() =>
  import("/src/pages/RockPaperScissors/RockPaperScissors.jsx")
);

const App = () => {
  return (
    <HelmetProvider>
      <div className="container">
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Menu />} />
            <Route path="rock-paper-scissors" element={<RockPaperScissors />} />
          </Route>
        </Routes>
      </div>
    </HelmetProvider>
  );
};

export default App;
