import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, Play } from "lucide-react";
import yourLogo from "../assets/01.png";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-accent/10 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-primary/10 rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-20 right-10 w-12 h-12 bg-accent/10 rounded-full animate-float" style={{ animationDelay: "3s" }}></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo Animation */}
          <div className={`mb-8 transition-all duration-1000 ${isLoaded ? "animate-scale-in" : ""}`}>
            <div className="flex items-center justify-center mb-6">
              {/* Use the imported logo */}
              <img
                src={yourLogo}
                alt="Your Company Logo"
                className="w-24 h-auto object-contain"
              />
            </div>
          </div>
          {/* Badge */}
          <div className={`inline-flex items-center space-x-2 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2 mb-8 transition-all duration-700 ${isLoaded ? "animate-fade-in" : ""}`} style={{ animationDelay: "0.2s" }}>
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground/80">
              AI-Powered IT Solutions
            </span>
          </div>

          {/* Main Heading */}
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-700 ${isLoaded ? "animate-slide-up" : ""}`} style={{ animationDelay: "0.4s" }}>
            <span className="text-foreground">Run Your Business on</span>
            <br />
            <span className="text-gradient">Autopilot with AI</span>
          </h1>

          {/* Subheading */}
          <p className={`text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-700 ${isLoaded ? "animate-slide-up" : ""}`} style={{ animationDelay: "0.6s" }}>
            Social Media, SEO, CRM, Support & Operations—Fully Automated.
            Custom AI Bots built by award-winning automation experts.
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12 transition-all duration-700 ${isLoaded ? "animate-slide-up" : ""}`} style={{ animationDelay: "0.8s" }}>
            <Button className="btn-gradient px-8 py-6 text-lg group">
              Book Free AI Audit
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button variant="outline" className="btn-ghost-brand px-8 py-6 text-lg group">
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              Explore Solutions
            </Button>
          </div>

          {/* Stats */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto transition-all duration-700 ${isLoaded ? "animate-fade-in" : ""}`} style={{ animationDelay: "1s" }}>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient mb-2">50+</div>
              <div className="text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient mb-2">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient mb-2">99%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;