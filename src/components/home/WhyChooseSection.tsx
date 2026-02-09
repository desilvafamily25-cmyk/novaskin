import { CheckCircle2 } from "lucide-react";

const reasons = [
  {
    text: "Comprehensive full-body exams to spot skin cancers early, with detailed dermoscopy for suspicious moles.",
  },
  {
    text: "Personalised care tailored to your skin type, family history and sun exposure – no rushed appointments.",
  },
  {
    text: "Convenient Fitzroy North location inside Fitzroy North Medical Centre, with easy parking and public transport access.",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="py-20 bg-sage-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-charcoal text-center mb-6">
          Why Choose Dr Premila
        </h2>
        <p className="text-lg text-foreground text-center max-w-3xl mx-auto mb-12">
          As an AHPRA-registered GP with advanced training in skin cancer detection, Dr Premila provides thorough, gentle skin checks using dermoscopy and total body photography at Fitzroy North Medical Centre.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-background rounded-xl p-6 shadow-sm"
            >
              <CheckCircle2 className="h-6 w-6 text-sage-dark mt-1 flex-shrink-0" />
              <p className="text-foreground">{reason.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
