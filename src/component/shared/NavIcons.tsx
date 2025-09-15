"use client";

import React, { useState } from "react";
import {
  AssetsIcon,
  CloseIcon,
  EditIcon,
  EnhancerIcon,
  HomeIcon,
  ImageIcon,
  KLogo,
  RealTimeIcon,
  SideIcon,
  VideoIcon,
} from "../icons";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import UserMenu from "./UserMenu";
import { AppsList } from "./AppList";
import AccountIcon from "./AccountIcon";

type NavItem = {
  href: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  active?: boolean;
};

export default function NavIcons() {
  const pathname = usePathname();

  const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(false);

  const navItems: NavItem[] = [
    { href: "/", Icon: HomeIcon, active: true },
    { href: "/gallery", Icon: ImageIcon, active: true },
    { href: "/video", Icon: VideoIcon },
    { href: "/enhancer", Icon: EnhancerIcon },
    { href: "/realtime", Icon: RealTimeIcon },
    { href: "/edit", Icon: EditIcon },
    { href: "/assets", Icon: AssetsIcon },
  ];

  return (
    <div className="">
      <div className="md:w-94 h-13 hidden md:block border md:bg-[#e7e7e7] md:dark:bg-black md:rounded-[15px]">
        <ul className="flex flex-row pt-2 pl-2">
          {navItems.map(({ href, Icon, active }) => {
            const isActive = active && pathname === href;

            return (
              <li
                key={href}
                className={`w-13 h-10.5 rounded-[10px] flex items-center justify-center ${
                  isActive ? "bg-white" : ""
                }`}
              >
                <Link
                  href={href}
                  className="flex items-center justify-center w-full h-full"
                >
                  <Icon
                    className={`size-6 ${
                      isActive ? "text-black" : "text-black dark:text-white"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="md:hidden p-2">
        {/* Open button */}
        {!isMobileNavbarOpen && (
          <button onClick={() => setIsMobileNavbarOpen(true)}>
            <SideIcon className="size-5 cursor-pointer" />
          </button>
        )}

        {/* Background Blur Overlay */}
        {isMobileNavbarOpen && (
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
            onClick={() => setIsMobileNavbarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <div
          className={cn(
            "fixed top-0 left-0 overflow-y-auto w-80 h-screen bg-white dark:bg-[#0A0A11] pt-6 px-3.5 transform transition-transform duration-300 ease-in-out z-50",
            isMobileNavbarOpen ? "translate-x-0" : "-translate-x-[2000px]"
          )}
        >
          <div className="flex flex-row space-x-2.5">
            {/* Close button */}
            <CloseIcon
              className="size-8 cursor-pointer"
              onClick={() => setIsMobileNavbarOpen(false)}
            />
            <UserMenu username="peaceunforgettablecent" />
          </div>

          {/* Home link with logo */}
          <div className="">
            <Link href="/" onClick={() => setIsMobileNavbarOpen(false)}>
              <div className="pt-7 flex flex-row space-x-10">
                <div className="w-15 h-15 bg-black dark:bg-white rounded-[10px] flex items-center justify-center">
                  <KLogo className="size-8 fill-white dark:fill-black" />
                </div>
                <div className="w-5 h-15 flex justify-center items-center">
                  <p className="text-[22px] font-bold text-center">Home</p>
                </div>
              </div>
            </Link>
          </div>

          {/* Account section */}
          <div className="pt-10">
            <div className="pl-3">
              <p className="text-[20px] font-bold">Account</p>
            </div>
            <div onClick={() => setIsMobileNavbarOpen(false)}>
              <AccountIcon />
            </div>
          </div>

          <AppsList />
        </div>
      </div>
    </div>
  );
}
