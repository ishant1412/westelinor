"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import carousel1 from "@/assets/westelinor/corausel.jpeg";
import carousel2 from "@/assets/westelinor/carousel2.jpeg";
import carousel3 from "@/assets/westelinor/carousel3.jpeg";

export default function Carousel() {
  const images = [carousel1, carousel2, carousel3];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative  h-screen overflow-hidden z-0  ">
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="relative min-w-full h-full flex-shrink-0"
          >
            <Image
              src={image}
              alt={`slide-${index}`}
              fill
              className="object-cover"
              priority={index === 0}
            />

          

            {/* Content */}
            
          </div>
        ))}
      </div>

      {/* Dots */}
   
    </section>
  );
}