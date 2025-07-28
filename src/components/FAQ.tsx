import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ChevronDown, 
  ChevronUp, 
  HelpCircle, 
  MessageCircle,
  Search,
  Brain,
  Settings,
  CreditCard,
  Shield,
  Zap
} from "lucide-react";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]);
  const [activeCategory, setActiveCategory] = useState("all");

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const categories = [
    { id: "all", label: "All Questions", icon: HelpCircle },
    { id: "ai", label: "AI & Automation", icon: Brain },
    { id: "erp", label: "ERPNext", icon: Settings },
    { id: "development", label: "Development", icon: Zap },
    { id: "pricing", label: "Pricing & Billing", icon: CreditCard },
    { id: "security", label: "Security", icon: Shield },
  ];

  const faqs = [
    {
      category: "ai",
      question: "What types of AI automation can you implement for my business?",
      answer: "We offer a wide range of AI automation solutions including document processing, customer service chatbots, inventory management, predictive analytics, workflow automation, data entry automation, and intelligent reporting systems. Our team assesses your specific needs and recommends the most suitable AI solutions for your industry and business size."
    },
    {
      category: "ai",
      question: "How long does it take to implement an AI automation solution?",
      answer: "Implementation timelines vary based on complexity. Simple automation can be deployed in 2-4 weeks, while comprehensive AI systems may take 8-16 weeks. We provide detailed project timelines during our consultation phase and keep you updated throughout the development process."
    },
    {
      category: "erp",
      question: "Do you provide ERPNext training for our team?",
      answer: "Yes! We provide comprehensive training programs including user training, administrator training, and custom workflow training. Our training includes hands-on sessions, documentation, video tutorials, and ongoing support to ensure your team can effectively use the system."
    },
    {
      category: "erp",
      question: "Can you customize ERPNext for our specific industry requirements?",
      answer: "Absolutely! We specialize in customizing ERPNext for various industries including manufacturing, retail, healthcare, education, and services. We can modify existing modules, create custom fields, develop new modules, and integrate third-party applications to meet your specific business needs."
    },
    {
      category: "development",
      question: "What technologies do you use for web and mobile app development?",
      answer: "We use modern, proven technologies including React, Next.js, Node.js, Python, React Native, Flutter, and cloud platforms like AWS and Azure. We choose the best technology stack based on your project requirements, scalability needs, and long-term maintenance considerations."
    },
    {
      category: "development",
      question: "Do you provide ongoing maintenance and support after project completion?",
      answer: "Yes, we offer comprehensive maintenance and support packages including bug fixes, security updates, performance optimization, feature enhancements, and technical support. We provide different support tiers to match your needs and budget."
    },
    {
      category: "pricing",
      question: "How do you structure your pricing for different services?",
      answer: "Our pricing varies by service type and project complexity. We offer fixed-price projects for well-defined scopes, hourly rates for consulting and small tasks, and monthly retainers for ongoing support. We provide detailed quotes after understanding your requirements during our free consultation."
    },
    {
      category: "pricing",
      question: "Do you offer payment plans for larger projects?",
      answer: "Yes, for projects over $10,000, we offer flexible payment schedules typically structured as: 30% upfront, 40% at key milestones, and 30% upon completion. We're open to discussing payment terms that work for both parties."
    },
    {
      category: "security",
      question: "How do you ensure data security in your solutions?",
      answer: "We implement industry-standard security measures including data encryption, secure authentication, regular security audits, GDPR compliance, backup strategies, and secure hosting environments. All our solutions follow security best practices and can meet specific compliance requirements."
    },
    {
      category: "security",
      question: "Do you sign NDAs and confidentiality agreements?",
      answer: "Absolutely! We understand the importance of protecting your business information and intellectual property. We're happy to sign NDAs, confidentiality agreements, and other legal documents before starting any project discussions."
    },
    {
      category: "ai",
      question: "What ROI can I expect from AI automation implementation?",
      answer: "ROI varies by industry and implementation scope, but our clients typically see 20-40% efficiency improvements, 60-80% reduction in manual tasks, and payback periods of 6-18 months. We provide ROI projections during our consultation based on your specific use case."
    },
    {
      category: "erp",
      question: "Can you migrate data from our existing system to ERPNext?",
      answer: "Yes, we have extensive experience in data migration from various systems including QuickBooks, SAP, Oracle, legacy databases, and spreadsheets. We ensure data integrity, provide backup strategies, and test thoroughly before going live."
    }
  ];

  const filteredFAQs = activeCategory === "all" 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  return (
    <section id="faq" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">FAQ</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Frequently Asked Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get answers to common questions about our services, processes, and solutions. 
            Can't find what you're looking for? Contact us directly.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={`transition-all duration-300 ${
                activeCategory === category.id 
                  ? "btn-gradient shadow-button" 
                  : "btn-ghost-brand"
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              <category.icon className="w-4 h-4 mr-2" />
              {category.label}
            </Button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-12">
              <HelpCircle className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2 text-foreground">No questions found</h4>
              <p className="text-muted-foreground">Try selecting a different category</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <Card key={index} className="card-glass transition-all duration-300 hover:shadow-glow">
                  <CardHeader 
                    className="cursor-pointer"
                    onClick={() => toggleItem(index)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Badge variant="secondary" className="text-xs">
                          {categories.find(cat => cat.id === faq.category)?.label}
                        </Badge>
                        <CardTitle className="text-lg text-left">
                          {faq.question}
                        </CardTitle>
                      </div>
                      <Button variant="ghost" size="icon" className="flex-shrink-0">
                        {openItems.includes(index) ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </CardHeader>
                  
                  {openItems.includes(index) && (
                    <CardContent className="pt-0 animate-fade-in">
                      <div className="border-t border-border/50 pt-6">
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-16 text-center">
          <Card className="card-gradient max-w-2xl mx-auto">
            <CardContent className="p-8">
              <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Still Have Questions?
              </h3>
              <p className="text-muted-foreground mb-6">
                Can't find the answer you're looking for? Our expert team is here to help. 
                Get in touch with us for personalized assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-gradient">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Start Live Chat
                </Button>
                <Button variant="outline" className="btn-ghost-brand">
                  Schedule Consultation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FAQ;