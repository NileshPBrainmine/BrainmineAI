import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Share2, 
  Search, 
  Users, 
  MessageCircle, 
  Brain, 
  BarChart3, 
  Briefcase, 
  Database 
} from "lucide-react";
import { Link } from "react-router-dom";

const ProductShowcase = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const products = [
    {
      id: 1,
      title: "Social Media Automation Bot",
      description: "Never worry about social media again. Auto-posting, AI captions, trend optimization.",
      icon: Share2,
      link: "/social-media-automation",
      features: ["LinkedIn, Instagram, X", "AI-Generated Content", "Smart Scheduling"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "AI SEO Agent",
      description: "AI that dominates search rankings. Automated audits, keyword optimization.",
      icon: Search,
      link: "/seo-agent",
      features: ["Automated Audits", "Keyword Research", "Backlink Building"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "AI-Powered CRM",
      description: "CRM that thinks like your best salesperson. Smart lead scoring and follow-ups.",
      icon: Users,
      link: "/ai-crm",
      features: ["Smart Lead Scoring", "Auto Follow-ups", "WhatsApp Integration"],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      title: "Intelligent Support Bots",
      description: "24/7 support that never sleeps. Multilingual bots with AI diagnostics.",
      icon: MessageCircle,
      link: "/support-bots",
      features: ["24/7 Availability", "Multilingual", "AI Diagnostics"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      title: "Custom LLM Development",
      description: "Your business brain, powered by AI. Custom ChatGPT using your data.",
      icon: Brain,
      link: "/custom-llms",
      features: ["Custom Training", "Secure Deployment", "Business Knowledge"],
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      id: 6,
      title: "AI Data Analysis",
      description: "Turn data into instant insights. Upload Excel/CSV for automated analysis.",
      icon: BarChart3,
      link: "/ai-data-analysis",
      features: ["Instant Insights", "Excel/CSV Upload", "Automated Reports"],
      gradient: "from-teal-500 to-cyan-500"
    },
    {
      id: 7,
      title: "AI Consulting Services",
      description: "Expert AI strategy and implementation. Get your free automation blueprint.",
      icon: Briefcase,
      link: "/ai-consulting",
      features: ["Strategy Planning", "Implementation", "Free Consultation"],
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      "id": 8,
      "title": "Airtable Apps",
      "description": "Transform your data into powerful, user-friendly applications. We build custom interfaces, portals, and dashboards directly on your Airtable bases.",
      "icon": Database,
      "link": "/custom-airtable-apps",
      "features": [
        "Custom Interfaces & Forms",
        "Client & Team Portals",
        "Advanced Workflow Automation"
      ],
      "gradient": "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">AI-Powered Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive automation tools designed to transform every aspect of your business operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card
              key={product.id}
              className={`group relative overflow-hidden card-glass transition-all duration-300 hover:scale-105 hover:shadow-glow cursor-pointer ${
                hoveredCard === index ? "shadow-glow" : ""
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <CardContent className="p-6 h-full flex flex-col">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${product.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <product.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {product.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 flex-grow">
                  {product.description}
                </p>
                
                <div className="space-y-1 mb-4">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="text-xs text-muted-foreground flex items-center">
                      <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <Link to={product.link}>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                  >
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;