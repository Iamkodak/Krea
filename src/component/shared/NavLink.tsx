import React from 'react';
import { ImageIcon, UpgradeIcon, UserIcon } from '../icons';
import { ThemeToggle } from '@/app/themeToggle';
import { Bell } from 'lucide-react';
import Link from 'next/link';

export default function NavLink() {
  return (
    <div>
        <div className="flex-row space-x-2.5 hidden md:flex pt-2">
            <div className="w-25 h-10 p-1.5 bg-[#efefef] dark:bg-black rounded-[10px]">
                <Link href="/gallery" className='flex flex-row space-x-2'>
                  <ImageIcon className='size-6' />
                <p className="text-[16px] font-medium text-black dark:text-white">Gallery</p>
                </Link>
            </div>

            <div className="w-25 h-10 p-1.5 bg-[#efefef] dark:bg-black rounded-[10px]">
                <Link href="/gallery" className='flex flex-row space-x-2'>
                  <ImageIcon className='size-6' />
                <p className="text-[16px] font-medium text-black dark:text-white">Gallery</p>
                </Link>
            </div>

             <div className="pt-2">
                <Bell className='size-6 text-black dark:text-white cursor-pointer' />
             </div>
            <ThemeToggle />
            <UserIcon className='cursor-pointer'/>
        </div>

        <div className="md:hidden flex flex-row space-x-2">
            <ThemeToggle />
            <div className="pt-1 pl-2 w-32 h-10 bg-[#c3c9ff] dark:bg-[#3a4bff] rounded-[10px] flex flex-row space-x-1.5">
                <div className="pt-0.5">
                    <UpgradeIcon className='size-10 mt-0.5' />
                </div>
                <div className="pt-0.5">
                    <p className="text-[18px] font-bold">Upgrade</p>
                </div>
            </div>
        </div>
    </div>
  )
}
