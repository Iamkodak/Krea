"use client";

import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Slide = {
  id: number;
  img: string;
  title: string;
  text: string;
  buttontext: string;
};

const slides: Slide[] = [
  {
    id: 1,
    img: "/wan.webp",
    title: "WAN 2.2 Image Generation",
    text: "Generate complex images with the brand new and powerful WAN 2.2 model. Expectional prompt adherence and ultra realistic texture",
    buttontext: "Try WAN 2.2",
  },
  {
    id: 2,
    img: "/flux.png",
    title: "FLUX.1 Krea",
    text: "We're making the weights to our FLUX.1 Krea model open-source. Download and run our model weights, read the technical report, or generate with it in Krea Image.",
    buttontext: "Try Flux.1",
  },
  {
    id: 3,
    img: "/gin.webp",
    title: "Train a character or style",
    text: "Upload images of a style, face, or object and train your own custom LoRA model.",
    buttontext: "Try LoRA Model",
  },
  {
    id: 4,
    img: "/seedream.webp",
    title: "Seedream 4.0",
    text: "Try the brand new and record-breaking image generation model Seedream 4.0 by ByteDance.",
    buttontext: "Try Seedream 4.0",
  },
  {
    id: 5,
    img: "/Motion.png",
    title: "Introducing Motion Transfer",
    text: "Bring motion into your characters. Upload any image, record a video of yourself, and make your characters smile, talk, and dance. Powered by Runway Act 2.",
    buttontext: "Try Motion Transfer",
  },
  {
    id: 6,
    img: "/quick.webp",
    title: "Clothes Changer",
    text: "Upload selfies and try on different outfits with our free AI virtual try-on tool.",
    buttontext: "Try Clothes Changer",
  },
  {
    id: 7,
    img: "/nano.webp",
    title: "Nano Banana Image Editor",
    text: "Free AI photo editing with Nano Banana.",
    buttontext: "Try Nano Banana",
  },
  {
    id: 8,
    img: "/Fish.png",
    title: "Real-Time Video Generation",
    text: "Announcing Realtime Video. Generate videos in real-time. Fully frame-consistent, controllable video clips.",
    buttontext: "Try Video Generation",
  },
];

export default function Slider() {
  const [current, setCurrent] = useState<number>(0);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  // Track screen size
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024); // lg breakpoint
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const secondSlideIndex = (current + 1) % slides.length;

  return (
    <div className="w-full">
      {/* Slides */}
      <div className="w-full flex justify-center">
        {isDesktop ? (
          // Desktop: show current + next
          <div className="flex w-full h-[500px] gap-4 overflow-hidden">
            {[current, secondSlideIndex].map((index, i) => (
              <div
                key={slides[index].id}
                className={`${
                  i === 0 ? "flex-[3]" : "flex-[1]"
                } flex-shrink-0 h-full rounded-xl overflow-hidden bg-cover bg-center`}
                style={{ backgroundImage: `url(${slides[index].img})` }}
              >
                <div className="w-full h-full flex flex-col justify-end text-white p-4 sm:p-6 bg-black/30">
                  <h2 className="text-lg sm:text-2xl md:text-4xl font-bold">
                    {slides[index].title}
                  </h2>
                  <div className="flex flex-row justify-between items-end gap-2 sm:gap-4">
                    <p className="mt-1 sm:mt-2 w-full sm:w-1/2 text-sm md:text-lg">
                      {slides[index].text}
                    </p>
                    <Button
                      variant="default"
                      className="rounded-full bg-white text-black hover:bg-gray-100 px-3 sm:px-4 py-2 font-medium mt-2 sm:mt-6"
                    >
                      {slides[index].buttontext}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Mobile: show only one
          <div
            className="w-full h-[300px] rounded-xl overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[current].img})` }}
          >
            <div className="w-full h-full flex flex-col justify-end text-white p-4 sm:p-6 bg-black/30">
              <h2 className="text-lg sm:text-2xl md:text-4xl font-bold">
                {slides[current].title}
              </h2>
              <div className="flex flex-row justify-between items-end gap-2 sm:gap-4">
                <p className="mt-1 sm:mt-2 w-full sm:w-1/2 text-sm md:text-lg">
                  {slides[current].text}
                </p>
                <Button
                  variant="default"
                  className="rounded-full bg-white text-black hover:bg-gray-100 px-3 sm:px-4 py-2 font-medium mt-2 sm:mt-6"
                >
                  {slides[current].buttontext}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Controls Section (Dots + Arrows) */}
      <div className="flex items-center justify-between mt-4">
        {/* Dots */}
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                current === index ? "bg-black" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Arrows */}
        <div className="flex space-x-2">
          <button
            onClick={prevSlide}
            className="bg-white rounded-full p-2 shadow"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="bg-white rounded-full p-2 shadow"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
