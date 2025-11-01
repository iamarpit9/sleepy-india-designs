import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Filter, Grid, List } from "lucide-react";
import mattressProduct1 from "@/assets/mattress-product-1.jpg";
import mattressProduct2 from "@/assets/mattress-product-2.jpg";
import mattressProduct3 from "@/assets/mattress-product-3.jpg";
import { Link } from "react-router-dom";

const Products = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("featured");
  const [filterType, setFilterType] = useState("all");
  const [filterSize, setFilterSize] = useState("all");

  const mattresses = [
    {
      id: 1,
      name: "Orthopedic Duet Mattress",
      type: "Memory Foam",
      image: mattressProduct1,
      rating: 4.8,
      reviews: 234,
      originalPrice: 32999,
      sizes: ["Single", "Double", "Queen", "King"],
      features: [
        "Soft-touch quilted fabric",
        "Firm spine support",
        "Durable foam layers",
        "Balanced comfort & support",
      ],
      comfort: "Medium",
      thickness: "125mm – 200mm",
      warranty: "7 Years",
    },
    {
      id: 2,
      name: "Orthopedic + Memory Foam Duet Impress Mattress",
      type: "Orthopedic",
      image: mattressProduct2,
      rating: 4.7,
      reviews: 189,
      price: 28999,
      originalPrice: 35999,
      sizes: ["Single", "Double", "Queen", "King"],
      features: [
        "Premium quilted fabric",
        "Pressure-relieving memory foam",
        "Strong supportive base",
        "Spine alignment technology",
        "Support with extra comfort",
      ],
      comfort: "Soft",
      thickness: "125mm – 200mm",
      warranty: "7 Years",
    },
    {
      id: 3,
      name: "Luxury Orthopedic Duet Luxury Mattress",
      type: "Spring",
      image: mattressProduct3,
      rating: 4.9,
      reviews: 312,
      price: 35999,
      originalPrice: 44999,
      sizes: ["Double", "Queen", "King"],
      features: [
        "Premium breathable fabric",
        "Natural latex comfort layer",
        "Long-lasting core",
        "Firm orthopedic support",
        "Premium sleep experience",
      ],
      comfort: "Medium",
      thickness: "125mm – 200mm",
      warranty: "10 Years",
    },
    {
      id: 4,
      name: "Durabond Mattress",
      type: "Natural",
      image: mattressProduct1,
      rating: 4.6,
      reviews: 156,
      price: 22999,
      originalPrice: 28999,
      sizes: ["Single", "Double", "Queen"],
      features: [
        "Cotton jacquard quilted fabric",
        "Rebonded foam for firm support",
        "PU foam comfort layer",
        "Reliable everyday back care",
      ],
      comfort: "Firm",
      thickness: "100mm – 150mm",
      warranty: "5 Years",
    },
    {
      id: 5,
      name: "Durabond+ Mattress",
      type: "Memory Foam",
      image: mattressProduct2,
      rating: 4.8,
      reviews: 278,
      price: 31999,
      originalPrice: 39999,
      sizes: ["Double", "Queen", "King"],
      features: [
        "Premium quilted fabric finish",
        "HR foam + rebonded foam core",
        "Extra durability and comfort",
        "Orthopedic spine alignment",
      ],
      comfort: "Medium",
      thickness: "125mm – 150mm",
      warranty: "6 Years",
    },
    {
      id: 6,
      name: "Durabond Deluxe Mattress",
      type: "Foam",
      image: mattressProduct3,
      rating: 4.4,
      reviews: 89,
      price: 15999,
      originalPrice: 19999,
      sizes: ["Single", "Double", "Queen"],
      features: [
        "Cotton jacquard fabric with plush pillow top",
        "HR foam + rebonded foam support",
        "PU foam comfort layer",
        "Added cushioning for a luxury feel",
      ],
      comfort: "Medium",
      thickness: "100mm – 150mm",
      warranty: "5 Years",
    },
    {
      id: 7,
      name: "Latexpuf Silver Mattress",
      type: "Foam",
      image: mattressProduct3,
      rating: 4.4,
      reviews: 89,
      price: 15999,
      originalPrice: 19999,
      sizes: ["Single", "Double", "Queen"],
      features: [
        "Cotton jacquard quilted fabric",
        "PU foam + rebonded foam core",
        "Balanced comfort & back care",
        "Reliable everyday support",
      ],
      comfort: "Medium",
      thickness: "100mm – 150mm",
      warranty: "5 Years",
    },
    {
      id: 8,
      name: "Latexpuf Gold Mattress",
      type: "Foam",
      image: mattressProduct3,
      rating: 4.4,
      reviews: 89,
      price: 15999,
      originalPrice: 19999,
      sizes: ["Single", "Double", "Queen"],
      features: [
        "Premium quilted fabric",
        "HR foam + rebonded foam support",
        "Extra durability & comfort",
        "Long-lasting spine alignment",
      ],
      comfort: "Medium",
      thickness: "100mm – 150mm",
      warranty: "10 Years",
    },
    {
      id: 9,
      name: "Bonnell Spring Mattress",
      type: "Foam",
      image: mattressProduct3,
      rating: 4.4,
      reviews: 89,
      price: 15999,
      originalPrice: 19999,
      sizes: ["Single", "Double", "Queen"],
      features: [
        "High GSM jacquard fabric",
        "HD PU foam quilt",
        "HR foam layer",
        "Rubberized coir",
        "Bonnell spring core",
        "Durable support & balanced comfort",
      ],
      comfort: "Medium",
      thickness: "150mm – 250mm",
      warranty: "5 Years",
    },
    {
      id: 10,
      name: "Bonnell Impress Mattress",
      type: "Foam",
      image: mattressProduct3,
      rating: 4.4,
      reviews: 89,
      price: 15999,
      originalPrice: 19999,
      sizes: ["Single", "Double", "Queen"],
      features: [
        "High GSM knitted fabric",
        "Thermo memory quilt",
        "HD memory foam",
        "HR foam + rubberized coir",
        "Bonnell spring system",
        "Plush feel with lasting back care",
      ],
      comfort: "Soft",
      thickness: "200mm – 300mm",
      warranty: "5 Years",
    },
    {
      id: 11,
      name: "Pocket Spring Mattress",
      type: "Foam",
      image: mattressProduct3,
      rating: 4.4,
      reviews: 89,
      price: 15999,
      originalPrice: 19999,
      sizes: ["Single", "Double", "Queen"],
      features: [
        "High GSM jacquard fabric",
        "HD PU foam quilt",
        "HR foam layer",
        "Turkish felt",
        "Pocket spring core",
        "Balanced support with gentle bounce",
      ],
      comfort: "Medium",
      thickness: "150mm – 250mm",
      warranty: "5 Years",
    },
    {
      id: 12,
      name: "Pocket Spring Mattress",
      type: "Foam",
      image: mattressProduct3,
      rating: 4.4,
      reviews: 89,
      price: 15999,
      originalPrice: 19999,
      sizes: ["Single", "Double", "Queen"],
      features: [
        "High GSM knitted fabric",
        "Thermo memory quilt",
        "HD memory foam",
        "HR foam + Turkish felt",
        "Pocket spring system",
        "Plush comfort with body-contouring support",
      ],
      comfort: "Soft",
      thickness: "200mm – 300mm",
      warranty: "5 Years",
    },
  ];

  const pillows = [
    {
      id: 1,
      name: "Memory Foam Pillow",
      type: "Memory Foam",
      image: mattressProduct1,
      rating: 4.7,
      reviews: 156,
      price: 1999,
      originalPrice: 2999,
      sizes: ["Standard", "Queen", "King"],
      features: [
        "Contoured memory foam design",
        "Neck and spine alignment",
        "Breathable cooling cover",
        "Hypoallergenic materials",
      ],
      comfort: "Medium",
      thickness: "4-6 inches",
      warranty: "3 Years",
    },
    {
      id: 2,
      name: "Orthopedic Cervical Pillow",
      type: "Orthopedic",
      image: mattressProduct2,
      rating: 4.8,
      reviews: 203,
      price: 2499,
      originalPrice: 3499,
      sizes: ["Standard", "Large"],
      features: [
        "Ergonomic cervical support",
        "Reduces neck pain",
        "Premium quilted cover",
        "Doctor recommended design",
      ],
      comfort: "Firm",
      thickness: "4-5 inches",
      warranty: "5 Years",
    },
    {
      id: 3,
      name: "Luxury Down Alternative Pillow",
      type: "Fiber Fill",
      image: mattressProduct3,
      rating: 4.6,
      reviews: 189,
      price: 1499,
      originalPrice: 2199,
      sizes: ["Standard", "Queen", "King"],
      features: [
        "Soft microfiber fill",
        "Hotel-quality comfort",
        "Machine washable",
        "Plush and fluffy feel",
      ],
      comfort: "Soft",
      thickness: "5-7 inches",
      warranty: "2 Years",
    },
    {
      id: 4,
      name: "Cooling Gel Pillow",
      type: "Gel",
      image: mattressProduct1,
      rating: 4.7,
      reviews: 167,
      price: 2799,
      originalPrice: 3799,
      sizes: ["Standard", "Queen"],
      features: [
        "Cooling gel infusion",
        "Temperature regulation",
        "Memory foam base",
        "Stays cool all night",
      ],
      comfort: "Medium",
      thickness: "5-6 inches",
      warranty: "3 Years",
    },
    {
      id: 5,
      name: "Bamboo Pillow",
      type: "Natural",
      image: mattressProduct2,
      rating: 4.5,
      reviews: 134,
      price: 1799,
      originalPrice: 2499,
      sizes: ["Standard", "Queen"],
      features: [
        "Eco-friendly bamboo cover",
        "Breathable and soft",
        "Shredded memory foam fill",
        "Adjustable loft",
      ],
      comfort: "Medium",
      thickness: "5-6 inches",
      warranty: "3 Years",
    },
    {
      id: 6,
      name: "Latex Foam Pillow",
      type: "Latex",
      image: mattressProduct3,
      rating: 4.8,
      reviews: 178,
      price: 3299,
      originalPrice: 4299,
      sizes: ["Standard", "King"],
      features: [
        "Natural latex foam",
        "Durable and supportive",
        "Antimicrobial properties",
        "Excellent breathability",
      ],
      comfort: "Firm",
      thickness: "5-6 inches",
      warranty: "5 Years",
    },
  ];

  const filteredMattresses = mattresses.filter((product) => {
    if (filterType !== "all" && product.type !== filterType) return false;
    return true;
  });

  const filteredPillows = pillows.filter((product) => {
    if (filterType !== "all" && product.type !== filterType) return false;
    return true;
  });

  const ProductCard = ({ product }: { product: (typeof mattresses)[0] }) => (
    <Card className="group hover:shadow-hover transition-all duration-300 hover:scale-102">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />

          <div className="absolute top-3 right-3 flex items-center space-x-1 bg-white/90 px-2 py-1 rounded">
            <Star className="h-4 w-4 text-accent-light fill-current" />
            <span className="text-sm font-medium">{product.rating}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        {/* <div className="mb-2">
          <Badge variant="outline" className="text-xs">Comfort: {product.type}</Badge>
        </div> */}
        <CardTitle className="text-lg mb-2 line-clamp-2">
          {product.name}
        </CardTitle>

        <div className="space-y-3 mb-4">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>Comfort: {product.comfort}</span>
            <span>Thickness: {product.thickness}</span>
          </div>
          <span className="text-sm text-muted-foreground">
            Warranty: {product.warranty}
          </span>

          <ul className="space-y-1">
            {product.features.map((feature, index) => (
              <li
                key={index}
                className="text-sm text-muted-foreground flex items-center"
              >
                <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* <div className="flex items-center space-x-2 mb-4">
          <span className="text-2xl font-bold text-primary">
            ₹{product.price.toLocaleString()}
          </span>
          <span className="text-lg text-muted-foreground line-through">
            ₹{product.originalPrice.toLocaleString()}
          </span>
        </div> */}

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating)
                    ? "text-accent-light fill-current"
                    : "text-gray-300"
                }`}
              />
            ))}
            <span className="text-sm text-muted-foreground ml-1">
              ({product.reviews})
            </span>
          </div>
        </div>

        <div className="space-y-2">
          {/* <Button className="w-full" variant="default">
            View Details
          </Button> */}
          <Link to="/contact">
            <Button variant="hero" size="lg">
              Enquire Now
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-accent text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Products Collection
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Discover the perfect mattress and pillow for your comfort needs. Premium
              quality, affordable prices, made in India.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Controls */}
      {/* <section className="py-8 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center space-x-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">Filters:</span>
              </div>
              
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="Memory Foam">Memory Foam</SelectItem>
                  <SelectItem value="Orthopedic">Orthopedic</SelectItem>
                  <SelectItem value="Spring">Spring</SelectItem>
                  <SelectItem value="Natural">Natural</SelectItem>
                  <SelectItem value="Foam">Foam</SelectItem>
                </SelectContent>
              </Select>

              <Select value={filterSize} onValueChange={setFilterSize}>
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Sizes</SelectItem>
                  <SelectItem value="Single">Single</SelectItem>
                  <SelectItem value="Double">Double</SelectItem>
                  <SelectItem value="Queen">Queen</SelectItem>
                  <SelectItem value="King">King</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center space-x-4">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex border border-border rounded-md">
                <Button 
                  variant={viewMode === "grid" ? "default" : "ghost"} 
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="rounded-r-none"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button 
                  variant={viewMode === "list" ? "default" : "ghost"} 
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="rounded-l-none"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Products Tabs */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="mattresses" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="mattresses">Mattresses</TabsTrigger>
              <TabsTrigger value="pillows">Pillows</TabsTrigger>
            </TabsList>
            
            <TabsContent value="mattresses">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredMattresses.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="pillows">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPillows.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Features Banner */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">
                100 Night Trial
              </div>
              <p className="text-muted-foreground">
                Try risk-free for 100 nights
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">
                Free Delivery
              </div>
              <p className="text-muted-foreground">Across India in 3-7 days</p>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">
                10 Year Warranty
              </div>
              <p className="text-muted-foreground">Comprehensive coverage</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
