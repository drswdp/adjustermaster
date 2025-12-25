import { Button } from "@/components/ui/button";
import { Check, FileText, ShieldCheck, Zap } from "lucide-react";
import { Link } from "wouter";

export default function Estimation() {
  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="bg-foreground text-background py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
           <img src="/images/estimation-services.jpg" alt="Blueprints" className="w-full h-full object-cover" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block bg-primary px-3 py-1 mb-6">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-primary-foreground">
                Services
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-6">
              Master Estimation Services
            </h1>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              Leverage decades of construction and restoration experience. We write accurate, defensible estimates 
              that get claims closed and projects funded.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-black uppercase tracking-tight mb-8">
                Why Outsource Your Estimates?
              </h2>
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-muted flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold uppercase mb-2">Defensible Accuracy</h3>
                    <p className="text-muted-foreground">
                      An estimate is only as good as its justification. We use F9 notes, photos, and industry standards 
                      to support every line item, reducing kickbacks and supplements.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-muted flex items-center justify-center shrink-0">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold uppercase mb-2">Speed & Efficiency</h3>
                    <p className="text-muted-foreground">
                      Stop spending your nights writing reports. Send us the scope and photos, and we'll deliver 
                      a professional Xactimate estimate, often within 24-48 hours.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-muted flex items-center justify-center shrink-0">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold uppercase mb-2">Complex Loss Expertise</h3>
                    <p className="text-muted-foreground">
                      Large loss? Fire? Water? Mold? We've seen it all. Brian Roberts brings decades of 
                      master-level construction knowledge to every file.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-muted p-10 border-t-4 border-primary">
              <h3 className="text-2xl font-black uppercase tracking-tight mb-6">
                Our Process
              </h3>
              <ol className="space-y-8 relative border-l border-border ml-3 pl-8">
                <li className="relative">
                  <span className="absolute -left-[39px] w-5 h-5 rounded-full bg-primary border-4 border-muted" />
                  <h4 className="font-bold uppercase mb-1">1. Submit Your Scope</h4>
                  <p className="text-sm text-muted-foreground">Upload your photos, measurements, and scope notes to our secure portal.</p>
                </li>
                <li className="relative">
                  <span className="absolute -left-[39px] w-5 h-5 rounded-full bg-foreground border-4 border-muted" />
                  <h4 className="font-bold uppercase mb-1">2. Review & Clarification</h4>
                  <p className="text-sm text-muted-foreground">We review the file and contact you immediately if any critical details are missing.</p>
                </li>
                <li className="relative">
                  <span className="absolute -left-[39px] w-5 h-5 rounded-full bg-foreground border-4 border-muted" />
                  <h4 className="font-bold uppercase mb-1">3. Draft Estimate</h4>
                  <p className="text-sm text-muted-foreground">We build the estimate in Xactimate, applying all necessary macros and line items.</p>
                </li>
                <li className="relative">
                  <span className="absolute -left-[39px] w-5 h-5 rounded-full bg-foreground border-4 border-muted" />
                  <h4 className="font-bold uppercase mb-1">4. Final Delivery</h4>
                  <p className="text-sm text-muted-foreground">You receive the ESX and PDF files, ready to submit to the carrier or client.</p>
                </li>
              </ol>
              
              <div className="mt-12 pt-8 border-t border-border">
                <Link href="/contact">
                  <Button className="w-full bg-primary text-primary-foreground rounded-none font-bold uppercase tracking-wider h-12">
                    Request a Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
