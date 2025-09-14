"use client";

import React from "react";
import {
  AssetsIcon,
  EditIcon,
  EnhancerIcon,
  HomeIcon,
  ImageIcon,
  RealTimeIcon,
  VideoIcon,
} from "../icons";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavIcons() {
  const pathname = usePathname();

  return (
    <div>
      <div className="md:w-94 h-13 hidden md:block border md:bg-gray-200 md:dark:bg-black md:rounded-[15px]">
        <ul className="flex flex-row pt-1 pl-1">
          <li
            className={`w-13 h-10.5 rounded-[10px] 
    ${pathname === "/" ? "bg-white" : ""}`}
          >
            <Link
              href=""
              className="flex items-center justify-center w-full h-full"
            >
              <HomeIcon
                className={`size-6 ${
                  pathname === "/" ? "text-black" : "text-white"
                }`}
              />
            </Link>
          </li>

          <li
            className={`w-13 h-10.5 rounded-[10px] 
    ${pathname === "/gallery" ? "bg-white" : ""}`}
          >
            <Link
              href=""
              className="flex items-center justify-center w-full h-full"
            >
              <ImageIcon
                className={`size-6 ${
                  pathname === "/gallery" ? "text-black" : "text-white"
                }`}
              />
            </Link>
          </li>
          <li className="w-13 h-10.5 flex items-center justify-center">
            <Link href="">
              <VideoIcon className="size-6" />
            </Link>
          </li>
          <li className="w-13 h-10.5 flex items-center justify-center">
            <Link href="">
              <EnhancerIcon className="size-6" />
            </Link>
          </li>
          <li className="w-13 h-10.5 flex items-center justify-center">
            <Link href="">
              <RealTimeIcon className="size-6" />
            </Link>
          </li>
          <li className="w-13 h-10.5 flex items-center justify-center">
            <Link href="">
              <EditIcon className="size-6" />
            </Link>
          </li>
          <li className="w-13 h-10.5 flex items-center justify-center">
            <AssetsIcon className="size-6" />
          </li>
        </ul>
      </div>
    </div>
  );
}
