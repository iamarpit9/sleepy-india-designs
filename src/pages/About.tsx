import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  Award,
  Users,
  Heart,
  Shield,
  Truck,
  Star,
  Target,
  Eye,
  CheckCircle,
} from "lucide-react";
import familySleep from "@/assets/family-sleep.jpg";
import mattressShowcase from "@/assets/mattress-showcase.jpeg";

const About = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Customer First",
      description: `Every decision we make begins with one question: Will this improve our customers’ comfort and satisfaction? Your sleep is at the heart of everything we do`,
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Quality Assurance",
      description:
        "We uphold the highest standards in materials, craftsmanship, and testing, ensuring every Dr. Back mattress delivers lasting comfort and reliability.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Indian Heritage",
      description:
        " Proudly made in India, our mattresses are designed with a deep understanding of Indian families, homes, and sleeping habits.",
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Innovation",
      description:
        "We continuously evolve, blending modern sleep science with advanced technology to create mattresses that set new benchmarks in comfort and support.",
    },
  ];

  const milestones = [
    {
      year: "2009",
      title: "Foundation",
      description:
        "SleepWell was founded with a vision to make quality sleep accessible to every Indian family.",
    },
    {
      year: "2012",
      title: "First Factory",
      description:
        "Established our first manufacturing facility in Mumbai with state-of-the-art equipment.",
    },
    {
      year: "2015",
      title: "National Expansion",
      description:
        "Expanded operations to serve customers across 100+ cities in India.",
    },
    {
      year: "2018",
      title: "50,000 Customers",
      description:
        "Reached the milestone of 50,000 satisfied customers across India.",
    },
    {
      year: "2020",
      title: "Online Launch",
      description:
        "Launched our online platform making premium mattresses accessible nationwide.",
    },
    {
      year: "2024",
      title: "Industry Leader",
      description:
        "Recognized as one of India's leading mattress brands with 200+ cities served.",
    },
  ];

  const teamMembers = [
    {
      name: "Rajesh Agarwal",
      position: "Founder & CEO",
      description:
        "25+ years experience in sleep industry, passionate about improving Indian sleep quality.",
      image: "👨‍💼",
    },
    {
      name: "Dr. Priya Sharma",
      position: "Head of R&D",
      description:
        "Sleep scientist with expertise in ergonomics and orthopedic support systems.",
      image: "👩‍🔬",
    },
    {
      name: "Amit Kumar",
      position: "Manufacturing Director",
      description:
        "Ensures quality control and sustainable manufacturing practices across all facilities.",
      image: "👨‍🏭",
    },
  ];

  const achievements = [
    {
      icon: <Users className="h-6 w-6" />,
      stat: "50,000+",
      label: "Happy Customers",
    },
    {
      icon: <Award className="h-6 w-6" />,
      stat: "15",
      label: "Years Experience",
    },
    {
      icon: <Truck className="h-6 w-6" />,
      stat: "200+",
      label: "Cities Served",
    },
    {
      icon: <Star className="h-6 w-6" />,
      stat: "4.8",
      label: "Average Rating",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-accent text-accent-foreground">
                About Dr.Back Mattresses
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Transforming Sleep
                <span className="text-primary block">Across India</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                For over 35 years, Dr. Back has been a trusted name in sleep
                solutions across India. Our journey began with a simple vision:
                to create mattresses that not only provide comfort but also
                support healthy, restful sleep.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/products">
                  <Button variant="default" size="lg">
                    View Our Products
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src={familySleep}
                alt="Happy family sleeping"
                className="rounded-lg shadow-card hover:shadow-hover transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <Card className="p-8 hover:shadow-hover transition-shadow duration-300">
              <CardContent className="pt-8">
                <div className="flex items-center mb-6">
                  <Target className="h-8 w-8 text-primary mr-3" />
                  <h2 className="text-3xl font-bold">Our Mission</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To make quality sleep accessible and affordable for every
                  Indian family by designing innovative, comfortable, and
                  durable mattresses that support health, well-being, and a
                  better lifestyle.
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="p-8 hover:shadow-hover transition-shadow duration-300">
              <CardContent className="pt-8">
                <div className="flex items-center mb-6">
                  <Eye className="h-8 w-8 text-primary mr-3" />
                  <h2 className="text-3xl font-bold">Our Vision</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be India’s most trusted sleep brand, transforming the way
                  the nation rests by delivering world-class mattresses that
                  blend traditional comfort with modern technology.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at Dr.Back
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-hover transition-all duration-300 hover:scale-105"
              >
                <CardContent className="pt-6">
                  <div className="mb-4 flex justify-center">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story Timeline */}
      {/* <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground">
              15 years of innovation and growth in the Indian mattress industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <Card key={index} className="p-6 hover:shadow-hover transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <Badge className="bg-primary text-primary-foreground text-lg px-3 py-1">
                      {milestone.year}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{milestone.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Team Section */}
      {/* <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground">
              The passionate individuals behind SleepWell's success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-hover transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="text-6xl mb-4">{member.image}</div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.position}</p>
                  <p className="text-muted-foreground leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Achievements */}
      {/* <section className="py-16 bg-accent text-accent-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {achievements.map((achievement, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-center text-accent-light">{achievement.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-accent-light">{achievement.stat}</div>
                <div className="text-lg">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Why Choose Dr. Back?</h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Therapeutic Support Meets Daily Comfort
              </p>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                At Dr. Back, we go beyond ordinary mattresses. Our designs
                combine medical-grade back support with plush comfort to ensure
                healthy, restful sleep — especially for those dealing with slip
                disc, spondylitis, or chronic back pain.
              </p>

              <div className="space-y-4">
                {[
                  "Spine-aligned orthopedic design for proper posture",
                  "Motion isolation so you sleep undisturbed",
                  "Luxurious feel with breathable, premium fabrics",
                  "Doctor-recommended support trusted by health experts",
                  "35+ years of expertise in sleep solutions for Indian families",
                  "Trusted by over 5 Million happy sleepers across India",
                ].map((point, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-muted-foreground">{point}</span>
                  </div>
                ))}
              </div>

              {/* <div className="mt-8">
                <Link to="/products">
                  <Button variant="default" size="lg">
                    Experience SleepWell
                  </Button>
                </Link>
              </div> */}
            </div>

            <div className="relative">
              <img
                src={mattressShowcase}
                alt="Dr.Back mattress collection"
                className="rounded-lg shadow-card hover:shadow-hover transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Experience Better Sleep?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Join the SleepWell family and discover why thousands of Indians trust us for their sleep needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products">
              <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-white/90">
                Shop Mattresses
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="secondary" size="lg">
                Get Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default About;
