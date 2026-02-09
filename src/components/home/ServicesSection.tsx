import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import fullBodyCheck from "@/assets/full-body-check.jpg";
import moleAssessment from "@/assets/mole-assessment.jpg";
import medicalSkincare from "@/assets/medical-skincare.jpg";

const services = [
  {
    title: "Full Body Skin Check",
    description:
      "Annual or 6-monthly exams for high-risk patients, including total body photography for change tracking.",
    image: fullBodyCheck,
    alt: "Full body skin check examination with dermoscopy",
    link: "/skin-checks",
  },
  {
    title: "Mole Assessment & Mapping",
    description:
      "Close-up dermoscopy for concerning spots, with biopsy referral if needed – fast results.",
    image: moleAssessment,
    alt: "Close-up dermoscopy mole assessment",
    link: "/skin-checks",
  },
  {
    title: "Medical Skin Care",
    description:
      "Treatment for acne, rosacea, eczema and sun damage using prescription therapies.",
    image: medicalSkincare,
    alt: "Medical skincare consultation with doctor",
    link: "/skin-care",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Our Skin Check Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dr Premila offers evidence-based skin services focused on prevention and early detection.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service) => (
            <Card
              key={service.title}
              className="overflow-hidden border-2 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-charcoal mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <Link to={service.link}>Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
