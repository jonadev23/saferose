"use client";

import Image from 'next/image';
import Link from "next/link";
import { EmblaCarousel } from "./embla-carousel";

import product from '@/app/assets/SafeRose/699A0689.jpg';
import product1 from '@/app/assets/SafeRose/699A0696.jpg';
import product2 from '@/app/assets/SafeRose/699A0700.jpg';
import product3 from '@/app/assets/SafeRose/699A0702.jpg';
import product4 from '@/app/assets/SafeRose/699A0708.jpg';
import product5 from '@/app/assets/SafeRose/699A0712.jpg';
import product6 from '@/app/assets/SafeRose/699A0714.jpg';
import product7 from '@/app/assets/SafeRose/699A0723.jpg';
import product8 from '@/app/assets/SafeRose/699A0820.jpg';
import product9 from '@/app/assets/SafeRose/699A0823.jpg';

const slides = [
  {
    id: 1,
    imageUrl: product1,
    altText: 'Product 1',
  },
  {
    id: 2,
    imageUrl: product2,
    altText: 'Product 2',
  },
  {
    id: 3,
    imageUrl: product3,
    altText: 'Product 3',
  },
  {
    id: 4,
    imageUrl: product4,
    altText: 'Product 4',
  },
  {
    id: 5,
    imageUrl: product5,
    altText: 'Product 5',
  },
  {
    id: 6,
    imageUrl: product6,
    altText: 'Product 6',
  },
  {
    id: 7,
    imageUrl: product7,
    altText: 'Product 7',
  },
  {
    id: 8,
    imageUrl: product8,
    altText: 'Product 8',
  },
  {
    id: 9,
    imageUrl: product9,
    altText: 'Product 9',
  },
];

export function MoreProducts() {
  return (
    <section id="more-products" className="bg-primary text-primary-foreground py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            WE HAVEN&#39;T FINISHED YET! <span className="text-accent">//</span>
          </h2>
          <p className="text-base md:text-lg text-primary-foreground/80">
            We Have More, Keep Browsing
          </p>
        </div>
        <div className="mb-8 text-center">
          <p className="text-base md:text-lg text-primary-foreground/80">
            Being one of the best Hospital Uniform Manufacturers, we offer comfortable and customize
            industry-specific uniform to elevate your comfort and brand identity.
          </p>
        </div>
        <div className="mb-8 text-center">
          <Link href="#contact">
            <button className="bg-black text-white py-2 px-6 rounded-md hover:bg-gray-800">
              More Products
            </button>
          </Link>
        </div>

        <EmblaCarousel slides={slides} />
      </div>
    </section>
  );
}
