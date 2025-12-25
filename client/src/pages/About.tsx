import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      <section className="container py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Image Column */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[3/4] bg-muted relative z-10">
              <img 
                src="/images/brian-roberts-placeholder.jpg" 
                alt="Brian Roberts" 
                className="w-full h-full object-cover grayscale contrast-110"
              />
            </div>
            <div className="absolute top-6 -left-6 w-full h-full border-4 border-primary z-0 hidden lg:block" />
          </div>

          {/* Content Column */}
          <div className="lg:col-span-7">
            <div className="inline-block bg-primary px-3 py-1 mb-6">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-primary-foreground">
                The Instructor
              </span>
            </div>
            <h1 className="text-5xl font-black uppercase tracking-tighter mb-8">
              Brian Roberts
            </h1>
            <h2 className="text-2xl font-bold text-muted-foreground mb-8">
              Certified Xactimate Trainer & Master Estimator
            </h2>
            
            <div className="prose prose-lg text-muted-foreground max-w-none">
              <p>
                In the world of insurance adjusting, theory only gets you so far. You need an instructor who has 
                climbed the roofs, crawled the crawlspaces, and negotiated the claims.
              </p>
              <p>
                Brian Roberts is not just a software trainer; he is a veteran of the construction and restoration 
                industries with decades of hands-on experience. He understands that Xactimate is a tool, and like 
                any tool, it's only as effective as the craftsman using it.
              </p>
              <p>
                His teaching philosophy is simple: <strong>Precision + Practicality.</strong>
              </p>
              <p>
                He bridges the gap between the rigid logic of the software and the messy reality of field work. 
                Whether you are a new adjuster looking to get certified or a seasoned contractor needing to 
                refine your estimating process, Brian provides the insights that can only come from years of experience.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-border pt-8">
              <div>
                <span className="block text-4xl font-black text-primary mb-2">20+</span>
                <span className="font-mono text-sm uppercase tracking-wider">Years Experience</span>
              </div>
              <div>
                <span className="block text-4xl font-black text-primary mb-2">1000s</span>
                <span className="font-mono text-sm uppercase tracking-wider">Claims Handled</span>
              </div>
            </div>
            
            <div className="mt-12">
               <Link href="/contact">
                <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 rounded-none px-8 font-bold uppercase tracking-wider">
                  Work With Brian
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
