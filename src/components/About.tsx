import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Eye, Lightbulb, Users, Award, Clock, ArrowRight } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission",
      description: "To democratize AI technology and make intelligent automation accessible to businesses of all sizes.",
    },
    {
      icon: Eye,
      title: "Vision",
      description: "Creating a future where AI-powered solutions drive sustainable growth and innovation for every organization.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Continuously pushing boundaries with cutting-edge technologies and creative problem-solving approaches.",
    },
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: Award, value: "50+", label: "Projects Completed" },
    { icon: Clock, value: "24/7", label: "Support Available" },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 rounded-full px-4 py-2 mb-6">
            <Lightbulb className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">About Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Pioneering AI Innovation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're a team of passionate technologists dedicated to transforming businesses 
            through intelligent automation and cutting-edge software solutions.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Left Column - Story */}
          <div>
            <h3 className="text-3xl font-bold mb-6 text-foreground">Our Story</h3>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Founded with a vision to bridge the gap between advanced AI technologies and 
                practical business applications, Brainmine AI has been at the forefront of 
                digital transformation for businesses worldwide.
              </p>
              <p>
                Our expertise spans across AI automation, enterprise resource planning with 
                ERPNext, and modern web and mobile application development. We believe that 
                technology should be an enabler, not a barrier, to business growth.
              </p>
              <p>
                With a team of skilled developers, AI specialists, and business consultants, 
                we deliver solutions that are not just technically sound but also aligned 
                with your business objectives and growth strategies.
              </p>
            </div>
            <Button className="btn-gradient mt-8 group">
              Learn More About Us
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>

          {/* Right Column - Values */}
          <div>
            <h3 className="text-3xl font-bold mb-6 text-foreground">Our Values</h3>
            <div className="space-y-6">
              {values.map((value, index) => (
                <Card key={index} className="card-glass group hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                        <value.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2 text-foreground">{value.title}</h4>
                        <p className="text-muted-foreground">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-hero rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              Trusted by Businesses Worldwide
            </h3>
            <p className="text-muted-foreground text-lg">
              Our commitment to excellence speaks through our results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="w-20 h-20 bg-card rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-card group-hover:shadow-glow transition-shadow duration-300">
                  <stat.icon className="w-10 h-10 text-primary" />
                </div>
                <div className="text-4xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-foreground/80 font-medium text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;