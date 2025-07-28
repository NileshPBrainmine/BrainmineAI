import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, TrendingUp, Users, Zap } from "lucide-react";

const SocialProof = () => {
  const [automationCount, setAutomationCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAutomationCount(prev => {
        if (prev < 2000) {
          return prev + 50;
        }
        clearInterval(interval);
        return 2000;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechFlow Inc",
      image: "/placeholder.svg",
      content: "Brainmine AI's social media automation saved us 40+ hours per week. Our engagement increased by 300%!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "CEO",
      company: "DataSync Solutions",
      image: "/placeholder.svg",
      content: "The AI CRM transformed our sales process. We're closing 60% more deals with half the manual work.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Operations Manager",
      company: "RetailMax",
      image: "/placeholder.svg",
      content: "Their support bots handle 80% of our customer queries automatically. Game-changing!",
      rating: 5
    }
  ];

  const metrics = [
    {
      icon: TrendingUp,
      value: "300%",
      label: "Average ROI Increase",
      color: "text-green-500"
    },
    {
      icon: Users,
      value: "500+",
      label: "Happy Clients",
      color: "text-blue-500"
    },
    {
      icon: Zap,
      value: `${automationCount.toLocaleString()}+`,
      label: "Automations Built",
      color: "text-purple-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-card rounded-full mb-4 shadow-lg">
                <metric.icon className={`w-8 h-8 ${metric.color}`} />
              </div>
              <div className="text-4xl font-bold text-gradient mb-2">{metric.value}</div>
              <div className="text-muted-foreground">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Trusted by Industry Leaders</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            See how businesses transform with our AI automation solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-glass hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;