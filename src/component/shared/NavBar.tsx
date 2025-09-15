import React from "react";
import NavIcons from "./NavIcons";
import User from "./user";
import NavLink from "./NavLink";
export default function NavBar() {
  return (
    <div className="w-full bg-white  dark:bg-black text-black dark:text-white transition-all duration-300 flex flex-row justify-between p-4 md:sticky">
      <User />
      <NavIcons />
      <NavLink />
    </div>
  );
}
