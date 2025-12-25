import { Link, useLocation } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [location] = useHashLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/training", label: "Xactimate Training" },
    { href: "/estimation", label: "Estimation Services" },
    { href: "/about", label: "About Brian" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-background/95 backdrop-blur-sm border-border py-4"
          : "bg-transparent border-transparent py-6"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <a className="text-2xl font-black tracking-tighter uppercase">
            Adjuster<span className="text-primary">Master</span>
          </a>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <a
                className={cn(
                  "text-sm font-medium uppercase tracking-wide hover:text-primary transition-colors",
                  location === link.href ? "text-primary font-bold" : "text-muted-foreground"
                )}
              >
                {link.label}
              </a>
            </Link>
          ))}
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none font-bold uppercase tracking-wider">
            Book Now
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-4 flex flex-col gap-4 shadow-2xl">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <a
                className={cn(
                  "text-lg font-medium uppercase tracking-wide py-2 block",
                  location === link.href ? "text-primary" : "text-foreground"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            </Link>
          ))}
          <Button className="w-full bg-primary text-primary-foreground rounded-none font-bold uppercase tracking-wider">
            Book Now
          </Button>
        </div>
      )}
    </nav>
  );
}
