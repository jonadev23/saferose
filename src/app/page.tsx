import { CategoryDisplay } from '@/components/category-display';
import { FeaturedProducts } from '@/components/featured-products';
import { ContactSection } from '@/components/contact-section';
import { HeroSlider } from '@/components/hero-slider';
import { AboutSection } from '@/components/about-section';
import { UspSection } from '@/components/usp-section'; // Import the new USP section
import { MoreProducts } from '@/components/more-products';

export default function Home() {
  return (
    <div className="space-y-12 md:space-y-20">
      {/* Add vertical spacing between sections */}
      <HeroSlider />
      <AboutSection /> {/* About Us section */}
      <MoreProducts />
      {/* Wrap remaining sections in a container for consistent padding */}
      <div className="container mx-auto px-4">
        <UspSection /> {/* Add the new USP section here */}
        <CategoryDisplay />
        <FeaturedProducts />
        <ContactSection />
      </div>
    </div >
  );
}

