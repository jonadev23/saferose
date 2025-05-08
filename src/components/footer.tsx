
import Link from "next/link";
import Image from 'next/image';
import { Shirt } from "lucide-react";

import SafeRose from '@/app/SafeRose.png';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-primary text-primary-foreground py-8 md:py-10 mt-16 md:mt-20">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Logo and About */}
        <div className="flex flex-col items-center md:items-start">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold mb-2">
            {/* <Shirt className="h-7 w-7 text-accent" /> */}
            <Image src={SafeRose} alt="Children wearing school uniforms" className="h-9 w-9 rounded-r-md shadow-lg" />
            SafeRose
          </Link>
          <p className="text-sm text-primary-foreground/80 max-w-xs mx-auto md:mx-0">
            Providing quality uniforms across Uganda for various sectors.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-accent">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="#categories" className="text-sm hover:text-accent transition-colors">Categories</Link></li>
            <li><Link href="#featured" className="text-sm hover:text-accent transition-colors">Featured Products</Link></li>
            <li><Link href="#contact" className="text-sm hover:text-accent transition-colors">Contact Us</Link></li>
            {/* Add more links if needed */}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-accent">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li className="text-primary-foreground/80">29206, KAMPALA / 9 MILES BULAGA, MITYANA ROAD</li>
            <li><a href="tel:+256777123456" className="hover:text-accent transition-colors">0702815101 / 0772924104</a></li>
            <li><a href="mailto:saferose2017@gmail.com" className="hover:text-accent transition-colors">saferose2017@gmail.com</a></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 text-center text-xs mt-8 pt-6 border-t border-primary-foreground/20 text-primary-foreground/60">
        <p>&copy; {currentYear} SafeRose. All rights reserved.</p>
      </div>
    </footer>
  );
}
