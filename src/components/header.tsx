
"use client"; // Needed for Sheet state

import Image from 'next/image';
import Link from 'next/link';
import { Shirt, Menu, X } from 'lucide-react'; // Using Shirt icon as a placeholder logo, Menu for mobile
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import * as React from "react";

import SafeRose from '@/app/SafeRose.png';

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { href: "#about-us", label: "About Us" },
    { href: "#categories", label: "Categories" },
    { href: "#featured", label: "Featured" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="bg-background text-foreground shadow-md sticky top-0 z-50 border-b border-border">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-xl md:text-2xl font-bold text-primary">
          {/* <Shirt className="h-7 w-7 md:h-8 md:w-8 text-primary" /> */}
          <Image src={SafeRose} alt="Children wearing school uniforms" className="h-9 w-9 rounded-r-md shadow-lg" />
          SafeRose
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 items-center">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="#contact" passHref>
                <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">Enquire Now</Button>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Navigation Trigger */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background p-4">
              <div className="flex justify-between items-center mb-6">
                <Link href="/" className="flex items-center gap-2 text-lg font-bold text-primary" onClick={() => setIsOpen(false)}>
                  {/* <Shirt className="h-6 w-6 text-primary" /> */}
                  <Image src={SafeRose} alt="Children wearing school uniforms" className="h-9 w-9 rounded-r-md shadow-lg" />
                  SafeRose
                </Link>
                <SheetClose asChild>
                  <Button variant="ghost" size="icon">
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </SheetClose>
              </div>
              <nav>
                <ul className="space-y-4">
                  {navItems.map((item) => (
                    <li key={item.label}>
                      <SheetClose asChild>
                        <Link href={item.href} className="block py-2 text-foreground hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                          {item.label}
                        </Link>
                      </SheetClose>
                    </li>
                  ))}
                  <li>
                    <SheetClose asChild>
                      <Link href="#contact" passHref>
                        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90" onClick={() => setIsOpen(false)}>Enquire Now</Button>
                      </Link>
                    </SheetClose>
                  </li>
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
