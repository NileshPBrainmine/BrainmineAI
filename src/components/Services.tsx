import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Bot, 
  Database, 
  Globe, 
  Smartphone, 
  ArrowRight, 
  Zap, 
  Shield, 
  TrendingUp,
  Settings,
  Brain,
  Workflow,
  Code
} from "lucide-react";

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      icon: Bot,
      title: "AI Automation",
      description: "Intelligent automation solutions that streamline workflows and boost productivity.",
      features: ["Process Automation", "Intelligent Chatbots", "Data Processing", "Workflow Optimization"],
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Database,
      title: "ERPNext Solutions",
      description: "Complete ERPNext implementation and customization for all business modules.",
      features: ["Accounting & Finance", "HR Management", "Inventory Control", "CRM Integration"],
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern, responsive websites and web applications built with cutting-edge technologies.",
      features: ["React & Next.js", "E-commerce", "Custom CMS", "API Development"],
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      features: ["React Native", "Flutter", "iOS & Android", "App Store Optimization"],
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
  ];

  const expertise = [
    { icon: Brain, title: "AI & Machine Learning", count: "15+" },
    { icon: Workflow, title: "Business Process Automation", count: "25+" },
    { icon: Code, title: "Custom Software Development", count: "30+" },
    { icon: Shield, title: "Enterprise Security", count: "20+" },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Comprehensive IT Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From AI automation to enterprise applications, we deliver cutting-edge technology 
            solutions that transform businesses and drive growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`card-gradient group cursor-pointer transition-all duration-500 hover:scale-105 ${
                hoveredCard === index ? "shadow-glow" : ""
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 ${service.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`w-8 h-8 ${service.color}`} />
                </div>
                <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground text-lg">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" className="group p-0 h-auto text-primary">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Expertise Section */}
        <div className="bg-gradient-secondary rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              Our Expertise
            </h3>
            <p className="text-muted-foreground text-lg">
              Proven track record delivering innovative solutions across industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-gradient mb-2">{item.count}</div>
                <div className="text-foreground/80 font-medium">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;