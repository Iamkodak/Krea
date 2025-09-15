import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/component/ui/navigation-menu";
import { KLogo, UserIcon } from "../icons";
import Link from "next/link";

export default function User() {
  return (
    <div className="hidden md:block">
     <div className="flex flex-row space-x-2 p-2">
      <div className="w-8 h-10">
       <Link href="/">
        <KLogo className="w-8 h-10 dark:text-white text-black" />
       </Link>
      </div>
      <div className="">
        <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem className="w-55 h-10 rounded-[10px] pl-4.5 bg-gray-100 dark:bg-black">
                    <NavigationMenuTrigger className="w-55 h-9 bg-gray-100 dark:bg-black space-x-2 flex items-center">
                      <UserIcon className="w-6 h-6 rounded-full flex-shrink-0" />
                      <p className="text-[18px] truncate overflow-hidden whitespace-nowrap">
                        peaceunforgettablecent
                      </p>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
                      <ul className="flex flex-col gap-2">
                        <li>
                          <NavigationMenuLink asChild>
                            <a
                              href="/profile"
                              className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                            >
                              Profile
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a
                              href="/settings"
                              className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                            >
                              Settings
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a
                              href="/logout"
                              className="block px-3 py-2 rounded-md text-red-500 hover:bg-red-50 dark:hover:bg-gray-800"
                            >
                              Logout
                            </a>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
      </div>
     </div>
    </div>
  );
}
