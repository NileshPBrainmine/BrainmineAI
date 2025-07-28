import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      toast({
        title: "Success!",
        description: "You've been subscribed to our weekly AI automation tips.",
      });
    }, 1000);
  };

  if (isSubscribed) {
    return (
      <section className="py-16 bg-card/20">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto card-glass">
            <CardContent className="p-8 text-center">
              <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Welcome to the AI Revolution!
              </h3>
              <p className="text-muted-foreground">
                Check your email for your first automation tip and exclusive resources.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-card/20">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto card-glass">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Get Weekly AI Automation Tips
              </h3>
              <p className="text-muted-foreground text-lg">
                Join 5,000+ business owners learning how to automate with AI. 
                Get actionable insights, case studies, and exclusive tools delivered weekly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-12 text-lg"
                  disabled={isSubmitting}
                />
                <Button
                  type="submit"
                  className="btn-gradient px-8 py-3 h-12 text-lg whitespace-nowrap"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Subscribing..." : "Get Free Tips"}
                </Button>
              </div>
              
              <p className="text-sm text-muted-foreground text-center">
                No spam. Unsubscribe anytime. 7,000+ subscribers trust us.
              </p>
            </form>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 pt-6 border-t border-border/50">
              <div className="text-center">
                <div className="text-sm font-medium text-foreground">Weekly Content</div>
                <div className="text-xs text-muted-foreground">Case studies & tutorials</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-medium text-foreground">Exclusive Tools</div>
                <div className="text-xs text-muted-foreground">Free automation templates</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-medium text-foreground">Early Access</div>
                <div className="text-xs text-muted-foreground">New features & products</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default NewsletterSignup;