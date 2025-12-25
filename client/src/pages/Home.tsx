import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowRight, MapPin, Monitor, Users } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-foreground text-background">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-bg.jpg" 
            alt="Construction Site Structure" 
            className="w-full h-full object-cover opacity-40 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/80 to-transparent" />
        </div>
        
        <div className="container relative z-10 pt-20">
          <div className="max-w-4xl">
            <div className="inline-block bg-primary px-3 py-1 mb-6">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-primary-foreground">
                Tampa Bay's Premier Xactimate Training
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.9] mb-8">
              Master The <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Art of Estimation</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-10 font-light leading-relaxed">
              Certified Xactimate training and master estimation services by Brian Roberts. 
              Bridging the gap between field reality and software precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/training">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none h-14 px-8 text-lg font-bold uppercase tracking-wider">
                  View Courses
                </Button>
              </Link>
              <Link href="/estimation">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-none h-14 px-8 text-lg font-bold uppercase tracking-wider">
                  Estimation Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Technical Grid Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-10" 
             style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
        </div>
      </section>

      {/* Introduction / Value Prop */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black uppercase tracking-tight mb-8">
                Not Just a Classroom. <br />
                <span className="text-primary">A Masterclass.</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Most Xactimate training happens in a vacuum. We teach you how to apply the software to real-world scenarios. 
                Led by Brian Roberts, a Master Estimator with decades of experience in construction and restoration.
              </p>
              <ul className="space-y-4 mt-8">
                {[
                  "Certified Xactimate Trainer",
                  "Hybrid Learning: In-Person (Tampa) & Zoom",
                  "Small Class Sizes for Personal Attention",
                  "Decades of Field Experience"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-medium">
                    <div className="w-6 h-6 bg-primary flex items-center justify-center text-primary-foreground">
                      <Check size={14} strokeWidth={4} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-muted relative z-10 overflow-hidden">
                <img 
                  src="/images/training-class.jpg" 
                  alt="Training Session" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-primary z-0" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Split */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
        {/* Training Side */}
        <div className="relative group overflow-hidden bg-foreground text-background p-12 flex flex-col justify-center">
          <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
            <img src="/images/training-session.jpg" alt="Training" className="w-full h-full object-cover grayscale" />
          </div>
          <div className="relative z-10 max-w-md mx-auto">
            <Monitor className="w-12 h-12 text-primary mb-6" />
            <h3 className="text-3xl font-black uppercase tracking-tight mb-4">Xactimate Training</h3>
            <p className="text-muted-foreground mb-8">
              Comprehensive courses designed for adjusters and contractors. From Level 1 fundamentals to Level 3 mastery.
              Available in-person in Tampa or via live Zoom sessions.
            </p>
            <Link href="/training">
              <Button variant="link" className="text-white p-0 font-bold uppercase tracking-widest hover:text-primary transition-colors group-hover:translate-x-2 duration-300">
                Explore Courses <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Estimation Side */}
        <div className="relative group overflow-hidden bg-muted text-foreground p-12 flex flex-col justify-center">
          <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
            <img src="/images/estimation-services.jpg" alt="Estimation" className="w-full h-full object-cover grayscale" />
          </div>
          <div className="relative z-10 max-w-md mx-auto">
            <Users className="w-12 h-12 text-primary mb-6" />
            <h3 className="text-3xl font-black uppercase tracking-tight mb-4">Estimation Services</h3>
            <p className="text-muted-foreground mb-8">
              Outsource your estimation needs to a Master Estimator. Accurate, defensible, and timely estimates 
              for complex residential and commercial losses.
            </p>
            <Link href="/estimation">
              <Button variant="link" className="text-foreground p-0 font-bold uppercase tracking-widest hover:text-primary transition-colors group-hover:translate-x-2 duration-300">
                Get an Estimate <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Tampa Focus */}
      <section className="py-24 bg-background border-t border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <img 
                src="/images/tampa-skyline.jpg" 
                alt="Tampa Skyline" 
                className="w-full h-auto grayscale contrast-125"
              />
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex items-center gap-2 mb-4 text-primary font-mono font-bold uppercase tracking-widest">
                <MapPin size={16} />
                <span>Tampa Bay Regional Focus</span>
              </div>
              <h2 className="text-4xl font-black uppercase tracking-tight mb-6">
                Local Expertise. <br />Global Standards.
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                While we offer Zoom training for remote students, our heart is in Tampa. 
                We provide a hybrid model that gives locals the benefit of face-to-face instruction 
                without the overhead of a massive facility—passing the savings directly to you.
              </p>
              <div className="grid grid-cols-2 gap-8 font-mono text-sm">
                <div>
                  <h4 className="font-bold uppercase mb-2 text-foreground">Location</h4>
                  <p className="text-muted-foreground">Tampa Bay Area, FL</p>
                </div>
                <div>
                  <h4 className="font-bold uppercase mb-2 text-foreground">Format</h4>
                  <p className="text-muted-foreground">In-Person & Virtual (Zoom)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8">
            Ready to Level Up?
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-12 opacity-90">
            Whether you need to get certified or need a complex estimate written, 
            Brian Roberts is the expert you can trust.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/training">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100 rounded-none h-16 px-10 text-lg font-bold uppercase tracking-wider">
                Book Training
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 rounded-none h-16 px-10 text-lg font-bold uppercase tracking-wider">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
