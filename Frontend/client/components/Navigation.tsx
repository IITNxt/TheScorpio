import SearchBar from "./SearchBar";
import { Menu, MessageCircle, Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Categories", href: "/categories" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-14 md:h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-1.5 md:space-x-2 flex-shrink-0">
            <img 
              src="/logo.png" 
              alt="Scorpio Logo" 
              className="h-7 md:h-9 object-contain" 
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
            <span className="text-base md:text-xl font-bold text-primary whitespace-nowrap">The Scorpio</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            {/* Search Bar */}
            <div className="hidden lg:block">
              <SearchBar
                placeholder="Search..."
                className="w-64"
              />
            </div>
            
            {/* Navigation Links */}
            <div className="flex items-center space-x-4 lg:space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm lg:text-base text-foreground/70 hover:text-foreground transition-colors duration-200 font-medium"
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/contact">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 lg:h-9 lg:w-9 border-primary/20 hover:bg-primary/10 hover:border-primary/40 rounded-full"
                  title="Contact Us"
                >
                  <MessageCircle className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                </Button>
              </Link>
              {/* Mobile search button */}
              <div className="lg:hidden">
                <Link to="/search">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 border-primary/20 hover:bg-primary/10 hover:border-primary/40 rounded-full"
                    title="Search"
                  >
                    <Search className="w-3.5 h-3.5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <Link to="/search">
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 text-foreground"
                title="Search"
              >
                <Search className="h-5 w-5" />
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="h-9 w-9 text-foreground"
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-fade-in pb-3">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/98 backdrop-blur-md rounded-lg mt-2 shadow-lg border border-gray-100">
              
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-4 py-2.5 text-base text-foreground/70 hover:text-foreground hover:bg-gray-50 rounded-md transition-colors duration-200 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block px-4 py-2.5 text-base text-foreground/70 hover:text-foreground hover:bg-gray-50 rounded-md transition-colors duration-200 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
