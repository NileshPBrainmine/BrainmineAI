import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowRight, 
  Search,
  BookOpen,
  TrendingUp,
  Lightbulb,
  Brain,
  Zap
} from "lucide-react";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Posts", icon: BookOpen },
    { id: "ai", label: "AI & Automation", icon: Brain },
    { id: "erp", label: "ERPNext", icon: TrendingUp },
    { id: "development", label: "Development", icon: Zap },
    { id: "insights", label: "Industry Insights", icon: Lightbulb },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI Automation in Small Businesses",
      excerpt: "Discover how AI automation is revolutionizing small business operations and why now is the perfect time to embrace intelligent solutions.",
      author: "Sarah Johnson",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "ai",
      featured: true,
      tags: ["AI", "Automation", "Small Business", "Technology"],
      image: "/api/placeholder/600/400"
    },
    {
      id: 2,
      title: "ERPNext Implementation: A Complete Guide for 2024",
      excerpt: "Everything you need to know about implementing ERPNext in your organization, from planning to deployment and beyond.",
      author: "Michael Chen",
      date: "2024-01-12",
      readTime: "12 min read",
      category: "erp",
      featured: true,
      tags: ["ERPNext", "Implementation", "ERP", "Business"],
      image: "/api/placeholder/600/400"
    },
    {
      id: 3,
      title: "Modern Web Development Trends for 2024",
      excerpt: "Explore the latest trends in web development that are shaping the digital landscape and how to leverage them for your business.",
      author: "Emma Rodriguez",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "development",
      featured: false,
      tags: ["Web Development", "Trends", "Technology", "Innovation"],
      image: "/api/placeholder/600/400"
    },
    {
      id: 4,
      title: "ROI of AI Implementation: Real Numbers from Real Businesses",
      excerpt: "Concrete data and case studies showing the tangible returns businesses are seeing from AI automation investments.",
      author: "David Park",
      date: "2024-01-08",
      readTime: "10 min read",
      category: "insights",
      featured: false,
      tags: ["ROI", "AI", "Business Case", "Analytics"],
      image: "/api/placeholder/600/400"
    },
    {
      id: 5,
      title: "Custom ERPNext Modules: When and How to Build Them",
      excerpt: "Learn when to customize ERPNext with custom modules and best practices for successful implementation.",
      author: "Sarah Johnson",
      date: "2024-01-05",
      readTime: "9 min read",
      category: "erp",
      featured: false,
      tags: ["ERPNext", "Customization", "Development", "Best Practices"],
      image: "/api/placeholder/600/400"
    },
    {
      id: 6,
      title: "Mobile App Development: Native vs Cross-Platform in 2024",
      excerpt: "A comprehensive comparison of native and cross-platform development approaches to help you make the right choice.",
      author: "Alex Kumar",
      date: "2024-01-03",
      readTime: "7 min read",
      category: "development",
      featured: false,
      tags: ["Mobile Development", "React Native", "Flutter", "Strategy"],
      image: "/api/placeholder/600/400"
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === "all" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <BookOpen className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Blog & Insights</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Latest Technology Insights</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest trends in AI, automation, and software development. 
            Expert insights and practical guides to help your business thrive.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-card"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
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
        </div>

        {/* Featured Posts */}
        {activeCategory === "all" && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-foreground">Featured Articles</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Card key={post.id} className="card-gradient group hover:scale-105 transition-all duration-500">
                  <div className="grid lg:grid-cols-2 gap-6">
                    {/* Post Image */}
                    <div className="relative overflow-hidden rounded-lg bg-gradient-secondary">
                      <div className="aspect-video flex items-center justify-center">
                        <BookOpen className="w-16 h-16 text-primary" />
                      </div>
                      <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                        Featured
                      </Badge>
                    </div>

                    {/* Post Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="secondary" className="text-xs">
                          {categories.find(cat => cat.id === post.category)?.label}
                        </Badge>
                        <div className="flex items-center text-muted-foreground text-sm">
                          <Clock className="w-3 h-3 mr-1" />
                          {post.readTime}
                        </div>
                      </div>

                      <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                        {post.title}
                      </h4>
                      
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{post.author}</span>
                          <Calendar className="w-4 h-4 text-muted-foreground ml-2" />
                          <span className="text-sm text-muted-foreground">
                            {new Date(post.date).toLocaleDateString()}
                          </span>
                        </div>
                        
                        <Button variant="ghost" className="group p-0 h-auto text-primary">
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* All Posts Grid */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-foreground">
            {activeCategory === "all" ? "All Articles" : `${categories.find(cat => cat.id === activeCategory)?.label} Articles`}
          </h3>
          
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2 text-foreground">No articles found</h4>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="card-glass group hover:scale-105 transition-all duration-300">
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg bg-gradient-secondary">
                      <div className="aspect-video flex items-center justify-center">
                        <BookOpen className="w-12 h-12 text-primary" />
                      </div>
                      {post.featured && (
                        <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs">
                          Featured
                        </Badge>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary" className="text-xs">
                        {categories.find(cat => cat.id === post.category)?.label}
                      </Badge>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>

                    <CardTitle className="text-lg mb-3 group-hover:text-primary transition-colors duration-300">
                      {post.title}
                    </CardTitle>
                    
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <User className="w-3 h-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{post.author}</span>
                      </div>
                      
                      <Button variant="ghost" size="sm" className="group p-0 h-auto text-primary">
                        Read
                        <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 bg-gradient-primary rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold mb-4 text-primary-foreground">
            Never Miss an Update
          </h3>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest insights on AI, automation, 
            and technology trends delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
            />
            <Button variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;