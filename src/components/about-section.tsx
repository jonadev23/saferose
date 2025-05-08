import Image from 'next/image';
import backgroundImg from '@/app/assets/SafeRose/699A0742.jpg'; // adjust based on Vite or Webpack config

export function AboutSection() {
  return (
    <section id="about-us" aria-labelledby="about-us-heading" className="py-12 md:py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

          {/* Left Side: Vertical Title and Image */}
          <div className="md:col-span-5 flex items-stretch relative min-h-[400px] md:min-h-[500px]">
            {/* Vertical Text Container */}
            <div className="absolute left-0 top-0 bottom-0 flex items-center justify-center bg-primary w-16 md:w-20 z-10 rounded-l-md">
              {/* Vertical Text */}
              <h2 id="about-us-heading" className="text-3xl md:text-4xl font-bold text-primary-foreground uppercase tracking-widest whitespace-nowrap origin-center transform -rotate-90">
                About Us
              </h2>
            </div>

            {/* relative Image Container - Occupies space next to the title */}
            <div className="w-full h-full ml-16 md:ml-20">
              <Image
                src={backgroundImg}
                alt="Children wearing school uniforms"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 80vw, 40vw"
                className="rounded-r-md shadow-lg"
              />
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div className="md:col-span-7 text-foreground space-y-4">
            {/* Brand Title */}
            <h3 className="text-xl md:text-2xl font-bold text-primary mb-1">
              SafeRose <span className="text-accent font-black">//</span>
            </h3>
            {/* Main Heading */}
            <h4 className="text-2xl md:text-3xl font-bold text-foreground -mt-1 mb-4">
              Quality wear is our business!
            </h4>

            {/* Paragraphs */}
            <p className="text-base text-muted-foreground leading-relaxed">
              Founded in 2014 as a street boutique, Safe Rose Inspirations was fully incorporated in Uganda on 10th August 2017 as a company limited by Shares.  <strong className="text-foreground font-semibold">Company Number:  80020000405600.</strong>.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              A contemporary small business that seeks to grow and expand her clientele providing quality tailoring, knitting, embroidery and other cloth making services, shoe making and general training and internships to uplift sector skills in Uganda. <strong className="text-foreground font-semibold">Our Vision;</strong> To make quality cloth products that inspire confidence and make our clients smile!
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              <strong className="text-foreground font-semibold">Our value Add;</strong> Making quality individual and institutional wear readily available and accessible at most affordable rates on the market.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed">
              <strong className="text-foreground font-semibold">Teamwork:</strong> We work together to derive the most benefit for our customer. We believe team effort achieves much more than an individual’s work and therefore promotes teamwork, utilizing each person’s competences to achieve our overall organizational goals.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}
