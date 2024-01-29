import React from "react";
import Navbar from "../molecules/Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div data-testid="layout-test" className="w-full h-[100vh] bg-black">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
