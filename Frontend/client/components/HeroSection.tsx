import SearchBar from "./SearchBar";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToProducts = () => {
    const productsSection = document.getElementById("products");
    productsSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[calc(100vh-4rem)] md:min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24 pb-12 md:pb-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-muted/10"></div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute top-3/4 right-1/4 w-20 h-20 bg-gradient-to-r from-blue-400/15 to-purple-400/15 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/3 w-32 h-32 bg-gradient-to-r from-green-400/25 to-blue-400/25 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in space-y-6 md:space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-medium">
            <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
            <span className="whitespace-nowrap">Premium Quality Showcase</span>
          </div>

          {/* Main heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight px-4">
            <span className="gradient-text">Discover</span>
            {" "}
            <span className="text-foreground/90">Excellence</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg lg:text-xl text-foreground/70 max-w-2xl mx-auto px-4 leading-relaxed">
            Explore our curated collection of premium products. Connect directly
            to discuss, negotiate, and make your perfect purchase.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-4">
            <Button
              size="lg"
              className="w-full sm:w-auto text-base md:text-lg px-6 md:px-8 py-5 md:py-6 rounded-full group magnetic-hover shimmer relative overflow-hidden"
              onClick={scrollToProducts}
            >
              Browse Products
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-base md:text-lg px-6 md:px-8 py-5 md:py-6 rounded-full magnetic-hover border-2"
              onClick={() =>
                document
                  .getElementById("categories")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Categories
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 md:mt-16 animate-slide-up">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto px-4">
            {[
              { number: "50+", label: "Premium Products" },
              { number: "8+", label: "Categories" },
              { number: "1000+", label: "Happy Customers" },
              { number: "24/7", label: "WhatsApp Support" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 md:mb-2">
                  {stat.number}
                </div>
                <div className="text-foreground/60 text-xs sm:text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      {/* <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hover:scale-110 transition-transform"
        onClick={scrollToProducts}
      >
        <div className="w-6 h-10 border-2 border-foreground/20 rounded-full p-1 hover:border-foreground/40 transition-colors">
          <div className="w-1 h-3 bg-foreground/40 rounded-full mx-auto animate-pulse"></div>
        </div>
      </div> */}
    </section>
  );
}
