import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Zap, Target, Eye, Heart } from "lucide-react";

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const milestones = [
    { year: "2020", event: "Founded Brainmine AI", description: "Started with a vision to democratize AI automation" },
    { year: "2021", event: "First 100 Automations", description: "Reached milestone of 100 successful business automations" },
    { year: "2022", event: "Award Recognition", description: "Won 'Best AI Innovation' award for custom automation solutions" },
    { year: "2023", event: "500+ Happy Clients", description: "Expanded to serve over 500 businesses globally" },
    { year: "2024", event: "2000+ Automations Built", description: "Achieved 2000+ successful automation implementations" }
  ];

  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "Constantly pushing boundaries in AI automation technology"
    },
    {
      icon: Heart,
      title: "Customer-Centricity", 
      description: "Every solution is tailored to solve real business challenges"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Delivering award-winning automation solutions consistently"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-700 ${isLoaded ? "animate-slide-up" : ""}`}>
              <span className="text-foreground">About</span>
              <br />
              <span className="text-gradient">Brainmine AI</span>
            </h1>
            <p className={`text-xl text-muted-foreground mb-8 max-w-3xl mx-auto transition-all duration-700 ${isLoaded ? "animate-fade-in" : ""}`} style={{ animationDelay: "0.2s" }}>
              Democratizing AI automation for businesses worldwide. From startups to enterprises, 
              we make intelligent automation accessible to everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <Card className="card-glass">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Target className="w-8 h-8 text-primary mr-3" />
                  <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To democratize AI automation for businesses of all sizes, making intelligent 
                  process automation accessible, affordable, and transformative for every organization.
                </p>
              </CardContent>
            </Card>

            <Card className="card-glass">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Eye className="w-8 h-8 text-primary mr-3" />
                  <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  A world where every business runs on intelligent automation, freeing human 
                  creativity and innovation while maximizing efficiency and growth potential.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Founder's Story */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-gradient">Founder's Story</span>
              </h2>
            </div>
            
            <Card className="card-glass">
              <CardContent className="p-8 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-1">
                    <div className="w-48 h-48 mx-auto bg-gradient-primary rounded-full flex items-center justify-center">
                      <Users className="w-24 h-24 text-primary-foreground" />
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-bold text-foreground mb-4">The Journey Begins</h3>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        At 19, our founder saw firsthand the overwhelm of managing a business—watching his father field hundreds of daily phone calls, juggling tasks across hospitality and retail. It was messy, reactive, and exhausting. But instead of accepting it, he built a better way.
                      </p>
                      <p>
                        He designed his first software to organize operations and automate daily reporting—a simple system that brought structure to the chaos. That early success led to a deeper interest in technology as a tool for transformation.
                      </p>
                      <p>
                        Soon after, he moved to the UK to study Artificial Intelligence and Computer Science, stepping out of his comfort zone to go all-in on automation. While studying, he took on part-time projects, helping:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Amazon sellers automate review management and product workflows and many more</li>
                        <li>Fleet managers improve vehicle utilization and efficiency through custom dashboards</li>
                      </ul>
                      <p>
                        During his time at university, he was awarded for a cloud automation project plan and won two national hackathons hosted by EY and PwC—both focused on building real-world automation tools for business.
                      </p>
                      <p>
                        With the rise of AI and the deep technical foundation gained through his education, he saw an opportunity: to use what he had learned to help other businesses automate smarter, work faster, and dramatically increase productivity.
                      </p>
                      <p>
                        That vision led to the creation of Brainmine AI.
                      </p>
                      <p>
                        Today, Brainmine AI is built on a simple belief:
                      </p>
                      <p className="font-semibold text-primary">
                        👉 Every business can scale better—with less effort—when powered by the right automation.
                      </p>
                      <p>
                        Our only goal is to increase productivity using intelligent AI agents, custom automation tools, and smart systems designed around your workflows.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">Our Core Values</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="card-glass hover:shadow-glow transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Milestones */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">Our Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Key milestones in our mission to democratize AI automation
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground font-bold">{milestone.year}</span>
                    </div>
                  </div>
                  <Card className="flex-1 card-glass">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-2">{milestone.event}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">2000+</div>
              <div className="text-muted-foreground">Automations Built</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">500+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">300%</div>
              <div className="text-muted-foreground">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;