"use client";

import * as React from "react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"; // Import Button for CTA
import Link from "next/link"; // Import Link for CTA


import slide from '@/app/assets/SafeRose/699A0742.jpg';
import slide1 from '@/app/assets/SafeRose/699A0845.jpg';
import slide2 from '@/app/assets/SafeRose/699A0846.jpg';
import slide3 from '@/app/assets/SafeRose/699A0847.jpg';

// Mock data for slides
const slides = [
  { id: 1, title: "Quality School Uniforms", description: "Durable, comfortable, and smart uniforms for all educational levels.", imageUrl: slide1, ctaLink: "#categories", ctaText: "View Categories" },
  { id: 2, title: "Professional Corporate Wear", description: "Elevate your brand image with our custom corporate attire.", imageUrl: slide2, ctaLink: "#categories", ctaText: "Explore Options" },
  { id: 3, title: "Reliable Industrial Workwear", description: "Safety and durability meet comfort in our industrial clothing range.", imageUrl: slide3, ctaLink: "#categories", ctaText: "See Industrial Wear" },
  { id: 4, title: "Elegant Hospitality Uniforms", description: "Present your staff professionally with our stylish hospitality outfits.", imageUrl: slide, ctaLink: "#categories", ctaText: "Discover Styles" },
];

export function HeroSlider() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false }) // Keep playing even on interaction
  )

  return (
    <section id="hero" aria-label="Hero Banner" className="relative -mx-4 md:mx-0"> {/* Adjust negative margin for full-width effect on smaller screens */}
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        opts={{
          loop: true,
        }}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.id}>
              {/* Use md:rounded-lg to only round corners on medium screens and up */}
              <Card className="overflow-hidden shadow-lg border-none md:rounded-lg">
                {/* Adjusted aspect ratio */}
                <CardContent className="relative flex aspect-[16/9] md:aspect-[12/5] items-center justify-center p-0">
                  <Image
                    src={slide.imageUrl}
                    alt={slide.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    priority={slide.id === 1} // Prioritize loading the first image
                    className="brightness-60" // Slightly darker for better contrast
                  />
                  {/* Adjusted text container: absolute positioning, padding, left alignment */}
                  <div className="absolute inset-0 flex flex-col items-start justify-center text-left p-6 md:p-12 lg:p-16 bg-gradient-to-r from-black/60 via-black/40 to-transparent">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4 drop-shadow-lg max-w-xl">
                      {slide.title}
                    </h1>
                    <p className="text-base md:text-lg lg:text-xl text-gray-200 mb-4 md:mb-6 max-w-lg drop-shadow-md">
                      {slide.description}
                    </p>
                    <Link href={slide.ctaLink} passHref>
                      <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-base md:text-lg font-semibold">
                        {slide.ctaText}
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* More prominent navigation buttons */}
        <CarouselPrevious className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 md:h-12 md:w-12 bg-background/70 hover:bg-background/90 text-foreground" />
        <CarouselNext className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 md:h-12 md:w-12 bg-background/70 hover:bg-background/90 text-foreground" />
      </Carousel>
    </section>
  )
}

