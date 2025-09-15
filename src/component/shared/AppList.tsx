"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/component/ui/accordion";
import { Button } from "@/component/ui/button";
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
  MotionIcon,
  PenSunIcon,
  DimeIcon,
} from "../icons";

export function AppsList() {
  const apps = [
    {
      label: "Image",
      icon: <ImageIcon className="w-5 h-5" />,
      bg: "bg-gradient-to-t from-[#294962] to-[#D0E3F1]",
    },
    {
      label: "Video",
      icon: <VideoIcon className="w-5 h-5" />,
      bg: "bg-[oklch(79.55%_0.1875_75.3501)]",
    },
    {
      label: "Realtime",
      icon: <RealTimeIcon className="w-5 h-5" />,
      bg: "bg-[linear-gradient(0deg,rgb(206,246,255)_0%,oklch(0.7972_0.1583_221.31)_35%,oklch(0.6575_0.1796_237.869)_100%)]",
    },
    {
      label: "Enhancer",
      icon: <EnhancerIcon className="w-5 h-5" />,
      bg: "bg-[linear-gradient(0deg,rgb(136,136,136)_0%,rgb(0,0,0)_100%)]",
    },
    {
      label: "Video Lipsync",
      icon: <PenSunIcon className="w-5 h-5" />,
      bg: "bg-[linear-gradient(0deg,rgb(187,202,145)_0%,rgb(60,135,143)_60%,rgb(7,40,15)_100%)]",
    },
    {
      label: "Motion Transfer",
      icon: <MotionIcon className="w-5 h-5" />,
      bg: "bg-[#1B1C1D]",
    },
    {
      label: "3D Objects",
      icon: <DimeIcon className="w-5 h-5" />,
      bg: "bg-[#2f2f2f]",
    },
  ];

  return (
    <Accordion type="single" collapsible className="w-full ">
      <AccordionItem value="apps">
        <AccordionTrigger className="text-lg font-semibold px-4">
          Apps
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col space-y-2 px-2">
            {apps.map((app, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-lg px-3 py-2 hover:bg-muted/20"
              >
                <div className="flex items-center gap-3">
                  {/* Icon Wrapper*/}
                  <div
                    className={`relative flex items-center justify-center w-13 h-13 rounded-[10px] ${app.bg}`}
                  >
                    {app.icon}
                  </div>
                  <span className="text-[16px] font-bold">{app.label}</span>
                </div>
                <Button
                  variant="secondary"
                  size="sm"
                  className="rounded-full bg-[#1A1A1A] hover:bg-[#2A2A2A] text-white px-6 py-2 text-sm"
                >
                  Open
                </Button>
              </div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
