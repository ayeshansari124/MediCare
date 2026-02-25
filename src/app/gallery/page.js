"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const images = Array.from({ length: 23 }, (_, i) =>
  `/images/gallery/gallery${i + 1}.jpg`
);

export default function GalleryPage() {
  const [currentIndex, setCurrentIndex] = useState(null);

  const openImage = (index) => {
    setCurrentIndex(index);
  };

  const closeImage = () => {
    setCurrentIndex(null);
  };

  const showNext = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const showPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  // ESC key support
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") closeImage();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };

    if (currentIndex !== null) {
      window.addEventListener("keydown", handleKey);
    }

    return () => window.removeEventListener("keydown", handleKey);
  }, [currentIndex]);

  return (
    <main>

      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-white to-teal-50 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Hospital Gallery
        </h1>
        <p className="mt-4 text-gray-600">
          Explore our infrastructure and facilities.
        </p>
      </section>

      {/* Image Grid */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-3 gap-6">

          {images.map((src, index) => (
            <div
              key={index}
              onClick={() => openImage(index)}
              className="relative h-48 md:h-64 cursor-pointer overflow-hidden rounded-xl group"
            >
              <Image
                src={src}
                alt="Gallery Image"
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
              />
            </div>
          ))}

        </div>
      </section>

      {/* Modal */}
      {currentIndex !== null && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">

          {/* Close */}
          <button
            onClick={closeImage}
            className="absolute top-6 right-6 text-white"
          >
            <X size={30} />
          </button>

          {/* Prev */}
          <button
            onClick={showPrev}
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 
           bg-black/40 hover:bg-black/60 
           p-2 md:p-3 rounded-full text-white z-50"
          >
            <ChevronLeft size={40} />
          </button>

          {/* Image */}
          <div className="relative w-[90%] md:w-[70%] h-[60vh] md:h-[80vh]">
            <Image
              src={images[currentIndex]}
              alt="Full Image"
              fill
              className="object-contain"
            />
          </div>

          {/* Next */}
          <button
            onClick={showNext}
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 
           bg-black/40 hover:bg-black/60 
           p-2 md:p-3 rounded-full text-white z-50"
          >
            <ChevronRight size={40} />
          </button>

        </div>
      )}

    </main>
  );
}