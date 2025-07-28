import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ExternalLink, 
  Calendar, 
  Users, 
  TrendingUp, 
  Award,
  ArrowRight,
  Eye,
  Code,
  Smartphone,
  Database
} from "lucide-react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "ai", label: "AI Automation" },
    { id: "erp", label: "ERPNext" },
    { id: "web", label: "Web Development" },
    { id: "mobile", label: "Mobile Apps" },
  ];

  const projects = [
    {
      id: 1,
      title: "Complete Amazon Business Automation",
      category: "ai",
      client: "Pocket EV",
      description: "Helped in automating everything from Amazon procurement to ads to orders, creating a fully streamlined e-commerce operation.",
      image: "/api/placeholder/600/400",
      technologies: ["Python", "Amazon API", "Automation", "AI"],
      results: {
        efficiency: "95%",
        automation: "100%",
        growth: "+200%"
      },
      link: "#",
      featured: true
    },
    {
      id: 2,
      title: "AI-Powered CRM & Support Bot",
      category: "ai",
      client: "Enertech",
      description: "Built an AI-powered CRM and a highly complex support bot to revolutionize their customer service and sales processes.",
      image: "/api/placeholder/600/400",
      technologies: ["AI/ML", "CRM", "Chatbot", "NLP"],
      results: {
        efficiency: "90%",
        satisfaction: "4.9/5",
        response: "24/7"
      },
      link: "#",
      featured: true
    },
    {
      id: 3,
      title: "AI-Powered Inventory Management",
      category: "ai",
      client: "TechCorp Solutions",
      description: "Automated inventory tracking with predictive analytics, reducing manual work by 85% and improving accuracy.",
      image: "/api/placeholder/600/400",
      technologies: ["Python", "TensorFlow", "React", "MongoDB"],
      results: {
        efficiency: "85%",
        accuracy: "99.2%",
        savings: "$250K"
      },
      link: "#",
      featured: false
    },
    {
      id: 4,
      title: "Complete ERPNext Implementation",
      category: "erp",
      client: "Manufacturing Plus",
      description: "Full ERPNext deployment across 5 departments with custom modules for manufacturing workflows.",
      image: "/api/placeholder/600/400",
      technologies: ["ERPNext", "Frappe", "MariaDB", "Nginx"],
      results: {
        departments: "5",
        users: "150+",
        productivity: "40%"
      },
      link: "#",
      featured: false
    },
    {
      id: 5,
      title: "E-commerce Platform",
      category: "web",
      client: "Retail Galaxy",
      description: "Modern e-commerce platform with AI-powered recommendations and automated customer service.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "Stripe", "PostgreSQL", "Redis"],
      results: {
        conversion: "32%",
        sales: "+180%",
        satisfaction: "4.9/5"
      },
      link: "#",
      featured: false
    },
    {
      id: 6,
      title: "Mobile CRM Application",
      category: "mobile",
      client: "SalesForce Pro",
      description: "Cross-platform mobile CRM with offline capabilities and real-time synchronization.",
      image: "/api/placeholder/600/400",
      technologies: ["React Native", "Node.js", "AWS", "GraphQL"],
      results: {
        downloads: "10K+",
        rating: "4.8/5",
        retention: "92%"
      },
      link: "#",
      featured: false
    },
    {
      id: 7,
      title: "Smart Document Processing",
      category: "ai",
      client: "Legal Innovations",
      description: "AI-powered document analysis and classification system with automated data extraction.",
      image: "/api/placeholder/600/400",
      technologies: ["Python", "OpenCV", "NLP", "Docker"],
      results: {
        processing: "90%",
        accuracy: "96%",
        time: "-75%"
      },
      link: "#",
      featured: false
    },
    {
      id: 8,
      title: "Custom ERP Dashboard",
      category: "erp",
      client: "Global Logistics",
      description: "Real-time dashboard with advanced analytics for supply chain management and reporting.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "D3.js", "ERPNext API", "WebSocket"],
      results: {
        visibility: "100%",
        decisions: "+60%",
        costs: "-25%"
      },
      link: "#",
      featured: false
    }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Solutions",
      role: "CTO",
      content: "Brainmine AI transformed our operations with their AI automation solution. The results exceeded our expectations, and their team was exceptional throughout the project.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "Manufacturing Plus",
      role: "Operations Director",
      content: "The ERPNext implementation was seamless. Our productivity increased by 40% within the first quarter. Outstanding expertise and support.",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      company: "Retail Galaxy",
      role: "CEO",
      content: "Our e-commerce platform has become our biggest competitive advantage. Sales increased 180% in just 6 months. Incredible work!",
      rating: 5
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 rounded-full px-4 py-2 mb-6">
            <Award className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Our Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Success Stories & Case Studies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how we've helped businesses transform their operations with innovative 
            AI solutions, custom software, and strategic technology implementations.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              className={`transition-all duration-300 ${
                activeFilter === filter.id 
                  ? "btn-gradient shadow-button" 
                  : "btn-ghost-brand"
              }`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className={`card-gradient group hover:scale-105 transition-all duration-500 ${
                project.featured ? "lg:col-span-2" : ""
              }`}
            >
              <div className={`grid ${project.featured ? 'lg:grid-cols-2' : 'grid-cols-1'} gap-6`}>
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-lg bg-gradient-secondary">
                  <div className="aspect-video flex items-center justify-center">
                    <div className="text-center p-8">
                      {project.category === 'ai' && <Code className="w-16 h-16 text-primary mx-auto mb-4" />}
                      {project.category === 'erp' && <Database className="w-16 h-16 text-primary mx-auto mb-4" />}
                      {project.category === 'web' && <Eye className="w-16 h-16 text-primary mx-auto mb-4" />}
                      {project.category === 'mobile' && <Smartphone className="w-16 h-16 text-primary mx-auto mb-4" />}
                      <p className="text-muted-foreground">Project Screenshot</p>
                    </div>
                  </div>
                  {project.featured && (
                    <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                      Featured
                    </Badge>
                  )}
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <CardHeader className="p-0 mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {project.client}
                      </Badge>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                    <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                    <p className="text-muted-foreground">{project.description}</p>
                  </CardHeader>

                  <CardContent className="p-0">
                    {/* Technologies */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Results */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {Object.entries(project.results).map(([key, value], resultIndex) => (
                        <div key={resultIndex} className="text-center">
                          <div className="text-lg font-bold text-gradient">{value}</div>
                          <div className="text-xs text-muted-foreground capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    <Button variant="ghost" className="group p-0 h-auto text-primary">
                      View Case Study
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="bg-gradient-secondary rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              Client Testimonials
            </h3>
            <p className="text-muted-foreground text-lg">
              What our clients say about working with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-glass">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <div key={i} className="w-4 h-4 bg-primary rounded-full mr-1"></div>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;