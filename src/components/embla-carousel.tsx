"use client";

import React, { useCallback, useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface EmblaCarouselProps {
  slides: { id: number; imageUrl: string; altText: string; }[];
}

export function EmblaCarousel({ slides }: EmblaCarouselProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const autoplayPlugin = isMounted ? Autoplay({ delay: 2000 }) : null;

  return (
    <Carousel
      className="w-full max-w-screen-xl mx-auto"
      opts={{
        loop: true,
      }}
      plugins={autoplayPlugin ? [autoplayPlugin] : []}
    >
      <CarouselContent className="md:pl-1 lg:pl-0">
        {slides.map((slide) => (
          <CarouselItem key={slide.id} className="basis-1/3">
            <Card className="border-none bg-transparent">
              <CardContent className="flex aspect-square items-center justify-center p-0 ">
                <Image
                  src={slide.imageUrl}
                  alt={slide.altText}
                  width={400}
                  height={300}
                  className="object-cover rounded-md"
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-1 top-1/2 h-10 w-10 rounded-full bg-background/70 hover:bg-background/90 text-foreground" />
      <CarouselNext className="absolute right-1 top-1/2 h-10 w-10 rounded-full bg-background/70 hover:bg-background/90 text-foreground" />
    </Carousel>
  );
}
