import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Star, Shield, Truck, RotateCcw, Award, Users, Clock, MapPin, Play, Pause } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import heroImage from "@/assets/hero-bedroom.jpg";
// Video will be added when available - using placeholder for now
import familySleep from "@/assets/family-sleep.jpg";
import mattressShowcase from "@/assets/mattress-showcase.jpg";

const Home = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const features = [
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "10 Year Warranty",
      description: "Comprehensive warranty covering manufacturing defects"
    },
    {
      icon: <Truck className="h-8 w-8 text-primary" />,
      title: "Free Home Delivery",
      description: "Fast delivery across India within 3-7 business days"
    },
    {
      icon: <RotateCcw className="h-8 w-8 text-primary" />,
      title: "100 Night Trial",
      description: "Try our mattress for 100 nights, return if not satisfied"
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Made in India",
      description: "Proudly manufactured in India with premium materials"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      rating: 5,
      review: "Best mattress I've ever owned! My back pain is completely gone and I sleep so much better now."
    },
    {
      name: "Rajesh Kumar",
      location: "Delhi", 
      rating: 5,
      review: "Excellent quality and fast delivery. The customer service team was very helpful throughout."
    },
    {
      name: "Anjali Patel",
      location: "Bangalore",
      rating: 5,
      review: "My whole family loves our new mattresses. Great value for money and superb comfort!"
    }
  ];

  const stats = [
    { number: "50,000+", label: "Happy Customers" },
    { number: "15+", label: "Years Experience" },
    { number: "200+", label: "Cities Served" },
    { number: "98%", label: "Customer Satisfaction" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        {/* Video functionality ready - add video file to src/assets/hero-video.mp4 when available */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30" />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge className="mb-6 bg-accent text-accent-foreground px-4 py-2 text-lg">
            #1 Mattress Brand in India
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Sleep Better,
            <span className="text-accent-light block">Live Better</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Experience the perfect blend of comfort and support with our premium mattresses, 
            designed specifically for Indian homes and families.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/products">
              <Button variant="hero" size="lg">
                Explore Products
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              <Play className="mr-2 h-4 w-4" />
              Watch Our Story
            </Button>
          </div>
        </div>
      </section>

      {/* Key Selling Points */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Choose SleepWell?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Quality sleep, affordable prices, and trusted service across India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-hover transition-all duration-300 hover:scale-105">
                <CardContent className="pt-6">
                  <div className="mb-4 flex justify-center">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="text-accent-foreground">
                <div className="text-4xl md:text-5xl font-bold text-accent-light mb-2">{stat.number}</div>
                <div className="text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Premium Mattresses for Every Need
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                From memory foam to orthopedic support, our collection offers the perfect 
                sleep solution for every body type and sleeping preference. Made with 
                high-quality materials and backed by our satisfaction guarantee.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Memory foam for pressure relief</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Orthopedic support for spine alignment</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Cooling technology for hot sleepers</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Anti-bacterial and dust mite resistant</span>
                </li>
              </ul>
              <Link to="/products">
                <Button variant="default" size="lg">
                  View All Products
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img 
                src={mattressShowcase} 
                alt="Premium mattress collection" 
                className="rounded-lg shadow-card hover:shadow-hover transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of satisfied customers across India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-hover transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-accent-light fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic leading-relaxed">
                    "{testimonial.review}"
                  </p>
                  <div className="flex items-center space-x-2">
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Ready for Better Sleep?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Join thousands of Indians who have transformed their sleep with SleepWell mattresses.
            Start your 100-night trial today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products">
              <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-white/90">
                Shop Now
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="secondary" size="lg">
                Get Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;