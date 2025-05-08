import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DraftingCompass, ThumbsUp, BadgeDollarSign, Truck } from 'lucide-react';

const uspItems = [
  {
    title: "Customer centered",
    description: "Customer satisfaction is the cornerstone of all our performance. We aim to dialogue and model the needs of each customer until we refine a product that truly meets their taste and functionality. Ours is a classroom where the customer is the teacher!",
    icon: DraftingCompass,
    bgColor: "bg-blue-600", // Custom background color
  },
  {
    title: "Building local talent",
    description: "We aim to be a platform where young designers and tailors can come and perfect their craft. We believe this will further contribute to a skilled workforce in the fabric industry.",
    icon: ThumbsUp,
    bgColor: "bg-purple-600", // Custom background color
  },
  {
    title: "Integrity",
    description: "We believe that our clients should get an honest service in every way possible, and we strive to achieve this all the time.", // Note: Description from screenshot might be misplaced, using original
    icon: BadgeDollarSign,
    bgColor: "bg-yellow-500", // Custom background color (approximating gold/orange)
  },
  {
    title: "Value for Money",
    description: "We provide competitive pricing for all our services to reasonably meet the needs of the client/customer and still uphold quality. There is business value in each of our service provisions.", // Note: Reusing description as per screenshot
    icon: Truck,
    bgColor: "bg-pink-600", // Custom background color (approximating pink/red)
  },
];

export function UspSection() {
  return (
    <section id="usp" aria-labelledby="usp-heading" className="bg-[url('../app/assets/SafeRose/699A0742.jpg')] bg-fixed bg-cover bg-center bg-no-repeat py-8 md:py-12">
      {/* Optional heading - uncomment if needed
      <h2 id="usp-heading" className="text-3xl font-bold text-center mb-8 text-primary">
        Why Choose Us?
      </h2>
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {uspItems.map((item) => (
          <Card key={item.title} className={`text-primary-foreground shadow-lg overflow-hidden rounded-lg ${item.bgColor}`}>
            <CardHeader className="pt-6 pb-4 items-center">
              <item.icon className="h-10 w-10 mb-3" />
              <CardTitle className="text-lg font-semibold text-center">{item.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-sm text-primary-foreground/90 pb-6 px-4">
              <p>{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
