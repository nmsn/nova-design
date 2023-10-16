import { Outlet } from "react-router-dom";
import Side from "./Side";

import { components } from "../router";
const Layout = () => {
  return (
    <div className="w-full flex">
      <Side
        options={components.map((item) => ({
          label: item.path,
          value: item.path,
        }))}
      />
      <div className="p4">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
