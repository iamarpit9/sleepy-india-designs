import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  HelpCircle,
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description:
        "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone Support",
      details: "+91 89503 53673",
      subtitle: "Mon-Sat, 9 AM - 7 PM",
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email Support",
      details: "info@sleepwell.in",
      subtitle: "24/7 email support",
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-primary" />,
      title: "WhatsApp Support",
      details: "+91 98977 00334",
      subtitle: "Quick responses",
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Visit Our Store",
      details:
        "Batra Foam Traders, Mandir Rd, Near Nanda Plywood, Geeta Colony",
      subtitle: "Panipat, Haryana 132103",
    },
  ];

  const faqs = [
    {
      question: "What sizes are available?",
      answer: `We offer mattresses in Single (36"x72"), Double (48"x72"), Queen (60"x78"), and King (72"x78") sizes.
 If you need a specific dimension, customizable sizes are also available on request.`,
    },
    {
      question: "What materials are used in your mattresses?",
      answer:
        "Our mattresses are made with high-quality orthopedic foam designed for back support and comfort. We use certified, hypoallergenic materials to ensure safe and healthy sleep.",
    },
    {
      question: "How do I know which mattress is right for me?",
      answer:
        "If you suffer from back pain or prefer firm support, our orthopedic range is ideal. For balanced comfort, our medium-firm mattresses are a great choice. You can also reach out to our sleep experts for personalized recommendations.",
    },
    {
      question: "Do you offer a warranty?",
      answer:
        "Yes, all our mattresses come with a 7 or 10 years warranty against manufacturing defects. This ensures you sleep worry-free for years to come.",
    },
    {
      question: " Do you deliver to my city?",
      answer:
        "Most likely we can deliver to your location, but we always recommend checking with our Sleep Experts for confirmation before placing your order.",
    },
    {
      question: "What is the delivery time?",
      answer:
        "Delivery time depends on the mattress size, availability, and your location. Standard sizes are usually delivered within 5–7 business days, while custom sizes may take a little longer. Our team will share the exact timeline once you place your order.",
    },
    {
      question: " How do I care for my mattress?",
      answer: [
        "Use a mattress protector to avoid spills and stains",
        "Rotate the mattress every 3–6 months",
        "Avoid folding or bending it",
        "Keep it in a well-ventilated room",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-accent text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Have questions about our mattresses? We're here to help you find
              the perfect sleep solution.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-hover transition-all duration-300 hover:scale-105"
              >
                <CardContent className="pt-6">
                  <div className="mb-4 flex justify-center">{info.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                  <p className="font-medium text-foreground mb-1">
                    {info.details}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {info.subtitle}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            {/* Contact Form */}
            {/* <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Send className="h-5 w-5 text-primary" />
                  <span>Send us a Message</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your sleep needs, preferred mattress type, size requirements, or any questions you have..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card> */}

            {/* Map and Store Info */}
            <div className="space-y-6">
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Visit Our Showroom</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">
                        SleepWell Experience Center
                      </h4>
                      <p className="text-muted-foreground">
                        123 Sleep Street, Comfort Colony
                        <br />
                        Mumbai, Maharashtra 400001
                        <br />
                        India
                      </p>
                    </div>

                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>Mon-Sat: 10 AM - 8 PM | Sun: 11 AM - 6 PM</span>
                    </div>

                    <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
                      <div className="text-center text-muted-foreground">
                        <MapPin className="h-8 w-8 mx-auto mb-2" />
                        <p>Interactive Map</p>
                        <p className="text-sm">
                          Visit our showroom to try our mattresses
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-4">Quick Actions</h4>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Now: +91 98765 43210
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      WhatsApp Support
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Mail className="h-4 w-4 mr-2" />
                      Email: info@sleepwell.in
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <HelpCircle className="h-8 w-8 text-primary" />
              <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
            </div>
            <p className="text-xl text-muted-foreground">
              Find answers to common questions about our mattresses and services
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 hover:shadow-soft transition-shadow"
              >
                <AccordionTrigger className="text-left font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>

                {Array.isArray(faq.answer) ? (
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    <ul className="list-disc pl-5">
                      {faq.answer.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </AccordionContent>
                ) : (
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                )}
              </AccordionItem>
            ))}
          </Accordion>


        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Find Your Perfect Mattress?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Let our sleep experts help you choose the ideal mattress for your
            comfort and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
            >
              Schedule Consultation
            </Button>
            <Button variant="secondary" size="lg">
              Browse Products
            </Button>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Contact;
