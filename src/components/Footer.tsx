import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  MessageCircle,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-accent-light">Dr.Back</h3>
            <p className="text-accent-foreground/80 leading-relaxed">
              India's trusted mattress brand committed to providing quality
              sleep solutions for every home across the nation.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 hover:text-accent-light cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 hover:text-accent-light cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 hover:text-accent-light cursor-pointer transition-colors" />
              <MessageCircle className="h-5 w-5 hover:text-accent-light cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-accent-light">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="hover:text-accent-light transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="hover:text-accent-light transition-colors"
                >
                  Our Products
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-accent-light transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-accent-light transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-accent-light">
              Contact Us
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-accent-light" />
                <span>+91 89503 53673</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-accent-light" />
                <span>info@sleepwell.in</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-10 text-accent-light mt-1" />
                <span>
                  Batra Foam Traders, Mandir Rd, Near Nanda Plywood, Geeta
                  Colony, Panipat, Haryana 132103
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-accent-foreground/20 mt-8 pt-8 text-center">
          <p className="text-accent-foreground/80">
            © 2025 Dr. Back. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
