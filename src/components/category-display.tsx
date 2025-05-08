import Image from 'next/image';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Eye } from 'lucide-react'; // Import Eye icon

import product1 from '../app/assets/SafeRose/699A0723.jpg';
import product2 from '../app/assets/SafeRose/699A0826.jpg';
import product3 from '../app/assets/SafeRose/699A0702.jpg';

import product4 from '../app/assets/SafeRose/699A0696.jpg';

// Mock data for categories - Added taglines
const categories = [
  { id: 1, title: 'School Uniforms', image: product1, link: '#contact', tagline: 'Smart & Durable' },
  { id: 2, title: 'School shoes', image: product2, link: '#contact', tagline: 'Professional Attire' },
  { id: 3, title: 'Industrial Wear', image: product3, link: '#contact', tagline: 'Safety & Comfort' },
];

export function CategoryDisplay() {
  return (
    <section id="categories" aria-labelledby="categories-heading" className="relative py-12 md:py-16 bg-gradient-to-b from-background via-secondary/30 to-background">
      {/* Diagonal background element - adjust styling as needed */}
      <div className="absolute top-0 right-0 bottom-0 left-1/2 bg-secondary/20 skew-x-[-15deg] transform origin-top-right z-[-1] hidden md:block"></div>
      {/* Little school girl image placeholder - Adjust positioning and image source */}
      <div className="absolute top-4 right-4 md:right-10 lg:right-20 z-10 hidden lg:block opacity-80">
        <Image src="https://picsum.photos/seed/schoolgirl/100/150" alt="School uniform icon" width={80} height={120} className="animate-bounce-slow" />
      </div>

      {/* Title Section */}
      <div className="text-center mb-10 md:mb-12 relative z-10">
        <h3 className="text-lg md:text-xl font-bold text-accent mb-1 tracking-wider">
          GO THROUGH <span className="text-primary font-black">//</span>
        </h3>
        <h2 id="categories-heading" className="text-3xl md:text-4xl font-bold text-primary">
          Our Most Selling Uniforms
        </h2>
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative z-10">
        {categories.map((category) => (
          <div key={category.id} className="relative group overflow-hidden rounded-lg shadow-lg aspect-w-4 aspect-h-3">
            {/* Image */}
            <Image
              src={category.image}
              alt={category.title}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 33vw"
              className="transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-300 ease-in-out flex items-center justify-center p-4">
              <div className="text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out transform translate-y-4 group-hover:translate-y-0">
                <h3 className="text-xl font-semibold mb-1">{category.title}</h3>
                <p className="text-sm text-gray-200 mb-4">{category.tagline}</p>
                <Link href={category.link} passHref>
                  <Button variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-primary">
                    <Eye className="mr-2 h-4 w-4" /> View Details
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


// Add custom animation to globals.css if needed, or use Tailwind defaults
// Ensure globals.css includes @tailwind base; @tailwind components; @tailwind utilities;
// and potentially keyframes for bounce-slow if not using standard bounce
/* Example for globals.css if needed:
@layer utilities {
  @keyframes bounce-slow {
    0%, 100% {
      transform: translateY(-5%);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: translateY(0);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
  }
  .animate-bounce-slow {
    animation: bounce-slow 3s infinite;
  }
}
*/
