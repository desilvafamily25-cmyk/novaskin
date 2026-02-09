import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import drPremila from "@/assets/dr-premila.jpg";

const AboutSection = () => {
  return (
    <section className="py-20 bg-sage-light">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <img
              src={drPremila}
              alt="Dr Premila Hewage – GP specialising in skin cancer medicine at Fitzroy North"
              className="rounded-2xl shadow-lg w-full"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
              About Dr Premila
            </h2>
            <p className="text-lg text-foreground mb-6">
              Dr Premila Hewage is a dedicated GP specialising in skin cancer medicine, working primarily at Fitzroy North Medical Centre. With expertise in dermoscopy and patient education, she ensures every skin check is thorough and reassuring.
            </p>
            <Button variant="outline" size="lg" asChild>
              <Link to="/about">Read Full Bio</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
