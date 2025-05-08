import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from 'lucide-react'; // Icon for CTA
import Link from "next/link"; // Import Link

import product1 from '@/app/assets/SafeRose/699A0831.jpg';
import product2 from '@/app/assets/SafeRose/699A0739.png';
import product3 from '@/app/assets/SafeRose/699A0712.jpg';

// Mock data for featured products
const featuredProducts = [
  { id: 101, title: 'School shoes', description: 'Durable and stylish blazer for students.', image: product1, category: 'School Uniforms', link: '#contact' },
  { id: 102, title: 'Executive Office Shirt', description: 'Comfortable and professional shirts for corporate settings.', image: product2, category: 'Corporate Wear', link: '#contact' },
  { id: 103, title: 'High-Visibility Safety Vest', description: 'Essential safety wear for industrial environments.', image: product3, category: 'Industrial Wear', link: '#contact' },
];

export function FeaturedProducts() {
  return (
    <section id="featured" aria-labelledby="featured-heading">
      <h2 id="featured-heading" className="text-3xl font-bold text-center mb-8 text-primary">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {featuredProducts.map((product) => (
          <Card key={product.id} className="flex flex-col featured-card shadow-md rounded-lg overflow-hidden bg-card">
            <CardHeader className="p-0">
              <div className="relative h-56 w-full">
                <Image
                  src={product.image} // Use actual image path
                  alt={product.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 33vw" // Optimize image loading
                  className="transition-transform duration-300 ease-in-out group-hover:scale-105" // Added group hover for consistency
                />
              </div>
            </CardHeader>
            <CardContent className="flex-grow p-4">
              <CardTitle className="text-xl font-semibold text-primary mb-2">{product.title}</CardTitle>
              <CardDescription className="text-muted-foreground text-sm">{product.description}</CardDescription>
            </CardContent>
            <CardFooter className="p-4 pt-2 border-t border-border mt-auto"> {/* Add border top */}
              <Link href={product.link} passHref className="w-full">
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <ShoppingCart className="mr-2 h-4 w-4" /> Enquire Now
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
