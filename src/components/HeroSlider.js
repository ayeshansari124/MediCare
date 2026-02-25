"use client";
import Image from "next/image";

import { useEffect, useState } from "react";

const slides = [
  {
    image: "/images/slide1.jpg",
    title: "Advanced Medical Care",
    description:
      "State-of-the-art facilities and expert doctors at your service.",
  },
  {
    image: "/images/slide2.jpg",
    title: "Book Appointments Easily",
    description: "Schedule consultations with trusted professionals instantly.",
  },
  {
    image: "/images/slide3.jpg",
    title: "24/7 Emergency Services",
    description: "Always ready to provide urgent and critical care support.",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[60vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt="hospital"
            fill
            className="object-cover"
            priority
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Text Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              {slide.title}
            </h1>
            <p className="max-w-2xl text-sm md:text-lg">{slide.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
