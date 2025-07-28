import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  MapPin, 
  Clock, 
  Users, 
  Heart, 
  Briefcase,
  ArrowRight,
  Search,
  Filter,
  DollarSign,
  Calendar
} from "lucide-react";

const Careers = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("all");
  const [departmentFilter, setDepartmentFilter] = useState("all");
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const [applicationData, setApplicationData] = useState({
    name: "",
    email: "",
    phone: "",
    coverLetter: "",
    resume: null as File | null
  });

  const jobOpenings = [
    {
      id: 1,
      title: "Senior AI Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      experience: "5+ years",
      salary: "$120K - $160K",
      description: "Lead the development of cutting-edge AI automation solutions for enterprise clients. Work with machine learning, natural language processing, and computer vision technologies.",
      requirements: [
        "Master's in Computer Science or related field",
        "5+ years experience in AI/ML development",
        "Proficiency in Python, TensorFlow, PyTorch",
        "Experience with cloud platforms (AWS, Azure, GCP)",
        "Strong problem-solving and communication skills"
      ],
      responsibilities: [
        "Design and implement AI automation solutions",
        "Collaborate with cross-functional teams",
        "Mentor junior developers",
        "Research and evaluate new AI technologies",
        "Optimize system performance and scalability"
      ],
      posted: "2024-01-10",
      featured: true
    },
    {
      id: 2,
      title: "ERPNext Developer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      experience: "3+ years",
      salary: "$90K - $120K",
      description: "Develop and customize ERPNext solutions for clients across various industries. Work on implementation, customization, and integration projects.",
      requirements: [
        "Bachelor's in Computer Science or related field",
        "3+ years experience with ERPNext/Frappe",
        "Proficiency in Python, JavaScript, and SQL",
        "Experience with business process analysis",
        "Strong client interaction skills"
      ],
      responsibilities: [
        "Customize ERPNext modules for client needs",
        "Develop custom apps and integrations",
        "Provide technical support and training",
        "Participate in project planning and estimation",
        "Document solutions and best practices"
      ],
      posted: "2024-01-08",
      featured: true
    },
    {
      id: 3,
      title: "Full Stack Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      experience: "4+ years",
      salary: "$95K - $130K",
      description: "Build modern web applications and mobile apps using React, Node.js, and cloud technologies. Work on diverse projects for clients ranging from startups to enterprises.",
      requirements: [
        "Bachelor's degree in Computer Science",
        "4+ years full-stack development experience",
        "Expertise in React, Node.js, TypeScript",
        "Experience with cloud platforms and DevOps",
        "Knowledge of mobile development (React Native/Flutter)"
      ],
      responsibilities: [
        "Develop responsive web applications",
        "Build and maintain APIs and microservices",
        "Implement CI/CD pipelines",
        "Collaborate with designers and product managers",
        "Ensure code quality and best practices"
      ],
      posted: "2024-01-05",
      featured: false
    },
    {
      id: 4,
      title: "Business Analyst",
      department: "Consulting",
      location: "New York, NY",
      type: "Full-time",
      experience: "3+ years",
      salary: "$75K - $95K",
      description: "Work directly with clients to understand business requirements and design technology solutions. Bridge the gap between business needs and technical implementation.",
      requirements: [
        "Bachelor's in Business Administration or related field",
        "3+ years business analysis experience",
        "Experience with ERP systems",
        "Strong analytical and communication skills",
        "Knowledge of project management methodologies"
      ],
      responsibilities: [
        "Gather and analyze business requirements",
        "Create functional specifications and documentation",
        "Facilitate client workshops and meetings",
        "Support implementation and change management",
        "Provide training and user support"
      ],
      posted: "2024-01-03",
      featured: false
    },
    {
      id: 5,
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      experience: "4+ years",
      salary: "$100K - $135K",
      description: "Manage and optimize our cloud infrastructure, implement CI/CD pipelines, and ensure the reliability and scalability of our applications.",
      requirements: [
        "Bachelor's in Computer Science or related field",
        "4+ years DevOps/Infrastructure experience",
        "Expertise in AWS/Azure, Docker, Kubernetes",
        "Experience with Infrastructure as Code (Terraform)",
        "Strong scripting skills (Python, Bash)"
      ],
      responsibilities: [
        "Design and maintain cloud infrastructure",
        "Implement monitoring and alerting systems",
        "Automate deployment processes",
        "Ensure security and compliance",
        "Optimize performance and costs"
      ],
      posted: "2024-01-01",
      featured: false
    },
    {
      id: 6,
      title: "UI/UX Designer",
      department: "Design",
      location: "Los Angeles, CA",
      type: "Full-time",
      experience: "3+ years",
      salary: "$80K - $110K",
      description: "Create intuitive and beautiful user experiences for web and mobile applications. Work closely with developers and product managers to bring designs to life.",
      requirements: [
        "Bachelor's in Design or related field",
        "3+ years UI/UX design experience",
        "Proficiency in Figma, Adobe Creative Suite",
        "Experience with design systems",
        "Portfolio demonstrating design thinking"
      ],
      responsibilities: [
        "Create wireframes, prototypes, and high-fidelity designs",
        "Conduct user research and usability testing",
        "Develop and maintain design systems",
        "Collaborate with development teams",
        "Present designs to clients and stakeholders"
      ],
      posted: "2023-12-28",
      featured: false
    }
  ];

  const departments = ["all", "Engineering", "Consulting", "Design"];
  const locations = ["all", "Remote", "San Francisco, CA", "New York, NY", "Los Angeles, CA"];

  const filteredJobs = jobOpenings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = locationFilter === "all" || job.location === locationFilter;
    const matchesDepartment = departmentFilter === "all" || job.department === departmentFilter;
    return matchesSearch && matchesLocation && matchesDepartment;
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setApplicationData({
      ...applicationData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setApplicationData({
        ...applicationData,
        resume: e.target.files[0]
      });
    }
  };

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest. We'll review your application and get back to you soon.",
    });
    setApplicationData({ name: "", email: "", phone: "", coverLetter: "", resume: null });
    setSelectedJob(null);
  };

  const companyBenefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and wellness programs"
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Flexible working hours and remote work options to maintain work-life balance"
    },
    {
      icon: Users,
      title: "Learning & Growth",
      description: "Professional development budget, conference attendance, and skill advancement"
    },
    {
      icon: DollarSign,
      title: "Competitive Compensation",
      description: "Competitive salaries, performance bonuses, and equity participation"
    }
  ];

  return (
    <section id="careers" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 rounded-full px-4 py-2 mb-6">
            <Briefcase className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Careers</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Join Our Innovative Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Be part of a team that's shaping the future of AI and automation. 
            We're looking for passionate individuals who want to make a real impact.
          </p>
        </div>

        {/* Company Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {companyBenefits.map((benefit, index) => (
            <Card key={index} className="card-glass text-center group hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2 text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              type="text"
              placeholder="Search positions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-card"
            />
          </div>
          <div className="flex gap-4">
            <select
              value={departmentFilter}
              onChange={(e) => setDepartmentFilter(e.target.value)}
              className="px-3 py-2 bg-card border border-border rounded-lg text-foreground"
            >
              {departments.map(dept => (
                <option key={dept} value={dept}>
                  {dept === "all" ? "All Departments" : dept}
                </option>
              ))}
            </select>
            <select
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
              className="px-3 py-2 bg-card border border-border rounded-lg text-foreground"
            >
              {locations.map(loc => (
                <option key={loc} value={loc}>
                  {loc === "all" ? "All Locations" : loc}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Job Listings */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Job Cards */}
          <div className="space-y-6">
            {filteredJobs.length === 0 ? (
              <div className="text-center py-12">
                <Briefcase className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2 text-foreground">No positions found</h4>
                <p className="text-muted-foreground">Try adjusting your search criteria</p>
              </div>
            ) : (
              filteredJobs.map((job) => (
                <Card 
                  key={job.id} 
                  className={`card-glass cursor-pointer transition-all duration-300 hover:scale-105 ${
                    selectedJob === job.id ? "ring-2 ring-primary shadow-glow" : ""
                  }`}
                  onClick={() => setSelectedJob(job.id)}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary" className="text-xs">
                            {job.department}
                          </Badge>
                          {job.featured && (
                            <Badge className="text-xs bg-primary text-primary-foreground">
                              Featured
                            </Badge>
                          )}
                        </div>
                        <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {job.location}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {job.type}
                          </div>
                          <div className="flex items-center">
                            <DollarSign className="w-4 h-4 mr-1" />
                            {job.salary}
                          </div>
                        </div>
                      </div>
                      <ArrowRight className={`w-5 h-5 text-primary transition-transform duration-300 ${
                        selectedJob === job.id ? "rotate-90" : ""
                      }`} />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{job.description}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">
                        Posted {new Date(job.posted).toLocaleDateString()}
                      </span>
                      <span className="text-primary font-medium">
                        {job.experience} experience
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>

          {/* Job Detail & Application */}
          <div className="lg:sticky lg:top-8">
            {selectedJob ? (
              <Card className="card-gradient">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    {jobOpenings.find(job => job.id === selectedJob)?.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {(() => {
                    const job = jobOpenings.find(job => job.id === selectedJob);
                    return job ? (
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-3">Requirements</h4>
                          <ul className="space-y-2">
                            {job.requirements.map((req, index) => (
                              <li key={index} className="flex items-start">
                                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-muted-foreground text-sm">{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3">Responsibilities</h4>
                          <ul className="space-y-2">
                            {job.responsibilities.map((resp, index) => (
                              <li key={index} className="flex items-start">
                                <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-muted-foreground text-sm">{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Quick Apply Form */}
                        <div className="border-t border-border/50 pt-6">
                          <h4 className="font-semibold mb-4">Quick Apply</h4>
                          <form onSubmit={handleApplicationSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <Label htmlFor="name">Full Name</Label>
                                <Input
                                  id="name"
                                  name="name"
                                  value={applicationData.name}
                                  onChange={handleInputChange}
                                  required
                                  className="bg-background/50"
                                />
                              </div>
                              <div>
                                <Label htmlFor="email">Email</Label>
                                <Input
                                  id="email"
                                  name="email"
                                  type="email"
                                  value={applicationData.email}
                                  onChange={handleInputChange}
                                  required
                                  className="bg-background/50"
                                />
                              </div>
                            </div>
                            <div>
                              <Label htmlFor="phone">Phone</Label>
                              <Input
                                id="phone"
                                name="phone"
                                value={applicationData.phone}
                                onChange={handleInputChange}
                                className="bg-background/50"
                              />
                            </div>
                            <div>
                              <Label htmlFor="resume">Resume (PDF)</Label>
                              <Input
                                id="resume"
                                name="resume"
                                type="file"
                                accept=".pdf"
                                onChange={handleFileChange}
                                className="bg-background/50"
                              />
                            </div>
                            <div>
                              <Label htmlFor="coverLetter">Cover Letter</Label>
                              <Textarea
                                id="coverLetter"
                                name="coverLetter"
                                value={applicationData.coverLetter}
                                onChange={handleInputChange}
                                rows={4}
                                placeholder="Tell us why you're interested in this position..."
                                className="bg-background/50"
                              />
                            </div>
                            <Button type="submit" className="btn-gradient w-full">
                              Submit Application
                            </Button>
                          </form>
                        </div>
                      </div>
                    ) : null;
                  })()}
                </CardContent>
              </Card>
            ) : (
              <Card className="card-glass">
                <CardContent className="p-12 text-center">
                  <Briefcase className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h4 className="text-xl font-semibold mb-2 text-foreground">
                    Select a Position
                  </h4>
                  <p className="text-muted-foreground">
                    Click on any job listing to view details and apply
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;