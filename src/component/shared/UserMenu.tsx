"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@radix-ui/react-navigation-menu"; // adjust import to your setup
import { UserIcon } from "../icons";

interface UserMenuProps {
  username: string;
}

const menuItems = [
  { label: "Profile", href: "/profile" },
  { label: "Settings", href: "/settings" },
  { label: "Logout", href: "/logout", className: "text-red-500 hover:bg-red-50 dark:hover:bg-gray-800" },
];

export default function UserMenu({ username }: UserMenuProps) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem className="w-55 h-10 rounded-[10px] pl-4.5 bg-gray-100 dark:bg-black">
          {/* Trigger */}
          <NavigationMenuTrigger className="w-55 h-9 bg-gray-100 dark:bg-black space-x-2 flex items-center">
            <UserIcon className="w-6 h-6 rounded-full flex-shrink-0" />
            <p className="text-[18px] truncate overflow-hidden whitespace-nowrap">
              {username}
            </p>
          </NavigationMenuTrigger>

          {/* Dropdown */}
          <NavigationMenuContent className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
            <ul className="flex flex-col gap-2">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <NavigationMenuLink asChild>
                    <a
                      href={item.href}
                      className={`block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 ${item.className || ""}`}
                    >
                      {item.label}
                    </a>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
