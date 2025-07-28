import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Check, Share2, Calendar, TrendingUp, BarChart3, Users, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SocialMediaAutomation = () => {
  const [darkMode, setDarkMode] = useState(false);

  const features = [
    {
      icon: Share2,
      title: "Auto-Posting Across Platforms",
      description: "Seamlessly post to LinkedIn, Instagram, X (Twitter), and YouTube simultaneously"
    },
    {
      icon: TrendingUp,
      title: "AI-Generated Captions",
      description: "Smart captions that match your brand voice and maximize engagement"
    },
    {
      icon: Calendar,
      title: "Intelligent Scheduling",
      description: "AI determines optimal posting times for maximum reach and engagement"
    },
    {
      icon: BarChart3,
      title: "Trend Optimization",
      description: "Automatically incorporate trending hashtags and topics in your niche"
    },
    {
      icon: Users,
      title: "Audience Analysis",
      description: "Deep insights into your audience behavior and preferences"
    },
    {
      icon: Zap,
      title: "Content Repurposing",
      description: "Transform one piece of content into multiple platform-specific posts"
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$97",
      period: "month",
      description: "Perfect for small businesses and solo entrepreneurs",
      features: [
        "3 social platforms",
        "30 posts per month",
        "Basic AI captions",
        "Standard scheduling",
        "Email support"
      ]
    },
    {
      name: "Professional",
      price: "$197",
      period: "month",
      description: "Ideal for growing businesses and agencies",
      features: [
        "All platforms",
        "Unlimited posts",
        "Advanced AI captions",
        "Smart scheduling",
        "Trend optimization",
        "Analytics dashboard",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large businesses with complex needs",
      features: [
        "Everything in Professional",
        "Custom integrations",
        "White-label solution",
        "Dedicated account manager",
        "Custom AI training",
        "Advanced analytics"
      ]
    }
  ];

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className={`min-h-screen bg-background ${darkMode ? "dark" : ""}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/10 text-primary">
              Better than Predis.ai
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-foreground">Never Worry About</span>
              <br />
              <span className="text-gradient">Social Media Again</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Auto-posting, AI captions, trend optimization, and smart scheduling 
              across LinkedIn, Instagram, X, and YouTube. Set it and forget it.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button className="btn-gradient px-8 py-6 text-lg group">
                Book Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="btn-ghost-brand px-8 py-6 text-lg">
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Powerful Features</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to dominate social media without the manual work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-glass hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Simple, Transparent Pricing</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose the plan that fits your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className={`card-glass ${tier.popular ? 'ring-2 ring-primary shadow-glow' : ''}`}>
                <CardHeader className="text-center">
                  {tier.popular && (
                    <Badge className="mb-4 bg-primary text-primary-foreground">
                      Most Popular
                    </Badge>
                  )}
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gradient">${tier.price}</span>
                    {tier.period && <span className="text-muted-foreground">/{tier.period}</span>}
                  </div>
                  <p className="text-muted-foreground mt-2">{tier.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                  <Button className={`w-full mt-6 ${tier.popular ? 'btn-gradient' : 'btn-ghost-brand'}`}>
                    {tier.price === "Custom" ? "Contact Sales" : "Get Started"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SocialMediaAutomation;