"use client";

import { useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { FIELDS } from "@/config/fields";
import { RevealOnScroll } from "../components/layout/reveal-on-scroll";

export function FieldSection() {
  // Remove emblaRef and rafRef – we don't need them for CSS-based scrolling

  return (
    <section className="py-16 font-display pb-40 overflow-hidden bg-[#075084]">
      <div className="mx-auto max-w-6xl px-6">
        <RevealOnScroll>
          <div className="mb-12">
            <h2 className="text-6xl font-semibold text-center text-white">
              Bidang di TechHub
            </h2>
            <p className="mt-3 text-zinc-50 text-center">
              Setiap bidang memiliki fokus dan peran dalam pengembangan UKM.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={150}>
          <Carousel
            opts={{
              align: "start",
              // Remove loop: true – we'll handle looping via CSS and duplicated items
              dragFree: true,
            }}
          // Remove setApi – not needed
          >
            <CarouselContent className="flex animate-scroll"> {/* Add the animation class */}
              {[...FIELDS, ...FIELDS].map((field, i) => (
                <CarouselItem
                  key={i}
                  className="md:basis-1/2 lg:basis-1/3 shrink-0"
                >
                  <Card className="h-full border">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold">
                        {field.title}
                      </h3>
                      <p className="mt-2 text-sm text-zinc-600">
                        {field.description}
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </RevealOnScroll>
      </div>
    </section>
  );
}
