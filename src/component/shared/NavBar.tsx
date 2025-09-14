import { ThemeToggle } from "@/app/themeToggle";
import React from "react";
import NavIcons from "./NavIcons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/component/ui/navigation-menu"
import { UserIcon } from "../icons";

export default function NavBar() {
  return (
    <div className="bg-white  dark:bg-black text-black dark:text-white transition-all duration-300">
      <NavIcons />
      <ThemeToggle />
      <NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem className="w-80 h-10 rounded-[10px] pl-4.5 bg-gray-100 dark:bg-black border-2">
      <NavigationMenuTrigger className="w-70 h-9  bg-gray-100 dark:bg-black">
        <UserIcon className="" />
        <p className="text-[18px]">peaceunforgetablecent</p>
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink className="w-180 h-50">Link</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
    </div>
  );
}
