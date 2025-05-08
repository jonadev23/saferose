import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";
import { Phone, Mail, MapPin } from 'lucide-react';

export function ContactSection() {
  return (
    // Use primary background for contrast, add more padding
    // <section id="contact" aria-labelledby="contact-heading" className="bg-primary text-primary-foreground py-12 md:py-16 rounded-lg shadow-inner">

    <section
      id="contact"
      aria-labelledby="contact-heading"
      className={`bg-[url('@/app/assets/SafeRose/699A0742.jpg')] bg-fixed bg-cover bg-center bg-no-repeat text-primary-foreground py-12 md:py-16 rounded-lg`}>

      <div className="container mx-auto px-4">
        <h2 id="contact-heading" className="text-3xl font-bold text-center mb-10 text-primary-foreground">Get In Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Use card with default background (which will be white/light gray based on theme) */}
          <Card className="shadow-md rounded-lg bg-card text-card-foreground">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-primary">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5"> {/* Increased spacing */}
              <div className="flex items-start gap-4"> {/* Use start alignment for potentially long addresses */}
                <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-primary">Address</h3>
                  <p className="text-muted-foreground">29206, KAMPALA / 9 MILES BULAGA, MITYANA ROAD</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-primary">Phone</h3>
                  <a href="tel:+256777123456" className="text-muted-foreground hover:text-primary transition-colors">0702815101 / 0772924104</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-primary">Email</h3>
                  <a href="mailto:saferose2017@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">saferose2017@gmail.com</a>
                </div>
              </div>
              <p className="text-muted-foreground pt-4 border-t border-border">Reach out to us for inquiries, quotes, or custom orders. We're here to help you find the perfect uniform solution!</p>
            </CardContent>
          </Card>
          {/* Use card with default background */}
          <Card className="shadow-md rounded-lg bg-card text-card-foreground">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-primary">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </section >
  );
}
