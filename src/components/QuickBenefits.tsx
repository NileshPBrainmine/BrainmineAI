import { CheckCircle, Clock, Bot, Code, Award } from "lucide-react";

const QuickBenefits = () => {
  const benefits = [
    {
      icon: CheckCircle,
      text: "Save 30+ hours/week",
      description: "Automate repetitive tasks and focus on growing your business"
    },
    {
      icon: Bot,
      text: "Custom AI Bots",
      description: "Tailored AI solutions built specifically for your business needs"
    },
    {
      icon: Code,
      text: "Enterprise Options",
      description: "Simple setup for everyone, powerful features for enterprises"
    },
    {
      icon: Award,
      text: "Built by Award-Winning Automation Experts",
      description: "Trusted by 500+ businesses with proven automation expertise"
    }
  ];

  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-start p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-3">
                <benefit.icon className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-foreground font-semibold">{benefit.text}</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickBenefits;