import Link from "next/link";
import React from "react";
import { ProIcon, SettingIcon, UserIcon } from "../icons";
import { Button } from "../ui/button";

export default function AccountIcon() {
  return (
    <div className="space-y-5 pt-5">

      {/* Upgrade */}
      <Link href="" className="flex flex-row justify-between">
        <div className="flex flex-row space-x-4">
          <div className="w-14 h-14 bg-white rounded-[10px] flex items-center justify-center">
            <ProIcon className="w-6 h-6 text-black" />
          </div>

          <div className="w-14 h-14 flex justify-center items-center">
            <p className="w-15 h-5 text-[16px] font-bold">Upgrade</p>
          </div>
        </div>
        <div className="pt-3">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-2">
          Get Pro
        </Button>
        </div>
      </Link>

      {/* Profile */}
      <Link href="" className="flex flex-row justify-between">
               <div className="flex flex-row space-x-4">
          <div className="w-14 h-14 bg-gray-800 rounded-[10px] flex items-center justify-center">
            <UserIcon className="w-14 h-14 text-white" />
          </div>

          <div className="w-14 h-14 flex justify-center items-center">
            <p className="w-15 h-5 text-[16px] font-bold">Profile</p>
          </div>
        </div>
        <div className="pt-3">
          <Button className="rounded-full bg-[#1A1A1A] hover:bg-[#2A2A2A] text-white px-6 py-2 text-[16px]">
          Open
        </Button>
        </div>
      </Link>

      {/* Settings */}
      <Link href="" className="flex flex-row justify-between">
               <div className="flex flex-row space-x-4">
          <div className="relative w-14 h-14 bg-[#1A1A1A] rounded-[10px] flex items-center justify-center">
            <SettingIcon className="w-6 h-6 text-white" />
          </div>

          <div className="w-14 h-14 flex justify-center items-center">
            <p className="w-15 h-5 text-[16px] font-bold">Settings</p>
          </div>
        </div>
        <div className="pt-3">
          <Button className="rounded-full bg-[#1A1A1A] hover:bg-[#2A2A2A] text-white px-6 py-2 text-[16px]">
          Open
        </Button>
        </div>
      </Link>
    </div>
  );
}
