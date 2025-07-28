import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check, Star, Zap, Crown, Rocket } from "lucide-react";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const packages = [
    {
      name: "Starter",
      icon: Zap,
      description: "Perfect for small businesses getting started with AI automation",
      monthlyPrice: 299,
      annualPrice: 2390, // 20% off
      features: [
        "1 AI Automation Tool",
        "Basic Social Media Bot",
        "Email Support",
        "Setup & Training Included",
        "Monthly Performance Reports",
        "Standard Templates"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      icon: Star,
      description: "Comprehensive automation suite for growing businesses",
      monthlyPrice: 799,
      annualPrice: 6392, // 20% off
      features: [
        "3 AI Automation Tools",
        "Social Media + SEO + CRM",
        "Priority Support",
        "Custom Workflows",
        "Advanced Analytics",
        "WhatsApp Integration",
        "Monthly Strategy Calls"
      ],
      cta: "Book Demo",
      popular: true
    },
    {
      name: "Enterprise",
      icon: Crown,
      description: "Full-scale AI automation for large organizations",
      monthlyPrice: 1999,
      annualPrice: 15992, // 20% off
      features: [
        "All 8 AI Tools Included",
        "Custom LLM Development",
        "Dedicated Account Manager",
        "24/7 Priority Support",
        "Advanced Security Features",
        "API Access",
        "Custom Integrations",
        "Onsite Training Available"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const individualTools = [
    { name: "Social Media Automation", price: 199, description: "Auto-posting, AI captions, scheduling" },
    { name: "AI SEO Agent", price: 299, description: "Automated audits, keyword optimization" },
    { name: "AI-Powered CRM", price: 249, description: "Smart lead scoring, automated follow-ups" },
    { name: "Support Bot", price: 179, description: "24/7 customer support automation" },
    { name: "Custom LLM", price: 599, description: "Personalized AI for your business" },
    { name: "AI Data Analysis", price: 129, description: "Instant insights from your data" },
    { name: "Airtable Integration", price: 149, description: "Supercharge Airtable with AI" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Choose Your</span>
              <br />
              <span className="text-gradient">Automation Plan</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Flexible pricing to match your business needs. Start with individual tools or 
              go all-in with our comprehensive automation suites.
            </p>
            
            {/* Annual/Monthly Toggle */}
            <div className="flex items-center justify-center mb-8">
              <span className={`mr-3 ${!isAnnual ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
                Monthly
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  isAnnual ? 'bg-primary' : 'bg-muted'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isAnnual ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`ml-3 ${isAnnual ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
                Annual
              </span>
              {isAnnual && (
                <span className="ml-2 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs">
                  Save 20%
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Package Pricing */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">Bundle Packages</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Complete automation solutions with significant savings
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative card-glass hover:shadow-glow transition-all duration-300 ${pkg.popular ? 'ring-2 ring-primary' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center p-8">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <pkg.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{pkg.name}</h3>
                  <p className="text-muted-foreground mb-6">{pkg.description}</p>
                  
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-gradient">
                      ${isAnnual ? Math.round(pkg.annualPrice / 12) : pkg.monthlyPrice}
                    </div>
                    <div className="text-muted-foreground">
                      per month{isAnnual ? ' (billed annually)' : ''}
                    </div>
                    {isAnnual && (
                      <div className="text-sm text-primary">
                        Save ${(pkg.monthlyPrice * 12) - pkg.annualPrice} annually
                      </div>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent className="p-8 pt-0">
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full py-3 ${pkg.popular ? 'btn-gradient' : 'btn-ghost-brand'}`}
                    size="lg"
                  >
                    {pkg.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Tools */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">Individual Tools</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose specific automation tools for your unique needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {individualTools.map((tool, index) => (
              <Card key={index} className="card-glass hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">{tool.name}</h3>
                      <p className="text-muted-foreground text-sm">{tool.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gradient">${tool.price}</div>
                      <div className="text-xs text-muted-foreground">per month</div>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto card-glass">
            <CardContent className="p-12 text-center">
              <Rocket className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Not Sure Which Plan is Right?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Book a free consultation and get a personalized automation blueprint for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-gradient px-8 py-3">
                  Book Free AI Audit
                </Button>
                <Button variant="outline" className="btn-ghost-brand px-8 py-3">
                  Contact Sales Team
                </Button>
              </div>
              
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-border/50">
                <div className="text-center">
                  <div className="text-sm font-medium text-foreground">Money-Back Guarantee</div>
                  <div className="text-xs text-muted-foreground">30-day full refund</div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-medium text-foreground">Setup Included</div>
                  <div className="text-xs text-muted-foreground">Free onboarding & training</div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-medium text-foreground">Cancel Anytime</div>
                  <div className="text-xs text-muted-foreground">No long-term contracts</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Pricing;