import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, ExternalLink } from "lucide-react";

const BookSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal text-center mb-4">
            Book at Fitzroy North
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Skin checks by appointment only – contact Fitzroy North Medical Centre today.
          </p>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Map */}
            <div className="rounded-xl overflow-hidden shadow-lg aspect-[4/3]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.8!2d144.978!3d-37.78!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzQ4LjAiUyAxNDTCsDU4JzQxLjAiRQ!5e0!3m2!1sen!2sau!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Fitzroy North Medical Centre location map"
              />
            </div>

            {/* Contact Info */}
            <div className="bg-sage-light rounded-xl p-8">
              <h3 className="text-2xl font-bold text-charcoal mb-6">
                Fitzroy North Medical Centre
              </h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-sage-dark mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-foreground font-medium">Address</p>
                    <p className="text-muted-foreground">
                      379 St Georges Road, Fitzroy North VIC 3068
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-sage-dark mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-foreground font-medium">Phone</p>
                    <a
                      href="tel:0391253991"
                      className="text-sage-dark hover:underline"
                    >
                      (03) 9125 3991
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      Ask for Dr Premila's skin check
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Button variant="cta" className="w-full" asChild>
                  <Link to="/contact">Book Your Skin Check</Link>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=379+St+Georges+Rd+Fitzroy+North+VIC+3068"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Get Directions
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookSection;
