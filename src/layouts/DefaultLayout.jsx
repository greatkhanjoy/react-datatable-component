import { Outlet } from "react-router-dom";

import Nav from "../components/Nav";
import Footer from "../components/Footer";

const DefaultLayout = () => {
  return (
    <>
      <div className="min-h-screen">
        <Nav />
        <div className="">
          <div className="max-w-7xl mx-auto min-h-[83vh] bg-white shadow-lg">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default DefaultLayout;
