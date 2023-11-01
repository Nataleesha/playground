import { Link, Outlet } from "react-router-dom";
import { Suspense } from "react";

const Header = () => {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
      </header>
      <main>
        <Suspense fallback={"Loading..."}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Header;
