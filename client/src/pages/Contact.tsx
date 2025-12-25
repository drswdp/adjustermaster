import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen pt-20">
      <section className="bg-foreground text-background py-20">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground font-light max-w-2xl">
            Have questions about our training schedule? Need a quote for estimation services? 
            Reach out to us directly.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <div className="space-y-12">
                <div className="flex gap-6 items-start">
                  <MapPin className="w-8 h-8 text-primary shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold uppercase mb-2">Location</h3>
                    <p className="text-muted-foreground">
                      Tampa Bay Area, FL<br />
                      Serving clients locally and nationwide via Zoom.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <Phone className="w-8 h-8 text-primary shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold uppercase mb-2">Phone</h3>
                    <p className="text-muted-foreground">
                      (813) 555-0123<br />
                      <span className="text-sm opacity-70">Mon-Fri, 9am - 5pm EST</span>
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <Mail className="w-8 h-8 text-primary shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold uppercase mb-2">Email</h3>
                    <p className="text-muted-foreground">
                      info@adjustermaster.com<br />
                      <span className="text-sm opacity-70">We typically respond within 24 hours.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-muted p-10 border-t-4 border-primary">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="uppercase font-bold text-xs tracking-wider">First Name</Label>
                    <Input id="firstName" placeholder="John" className="bg-background border-border rounded-none focus:ring-primary" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="uppercase font-bold text-xs tracking-wider">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" className="bg-background border-border rounded-none focus:ring-primary" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="uppercase font-bold text-xs tracking-wider">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@example.com" className="bg-background border-border rounded-none focus:ring-primary" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interest" className="uppercase font-bold text-xs tracking-wider">I'm Interested In</Label>
                  <select id="interest" className="flex h-10 w-full border border-border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-none focus:ring-primary">
                    <option>Xactimate Training (Level 1 & 2)</option>
                    <option>Xactimate Training (Level 3)</option>
                    <option>Estimation Services</option>
                    <option>Other Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="uppercase font-bold text-xs tracking-wider">Message</Label>
                  <Textarea id="message" placeholder="How can we help you?" className="bg-background border-border rounded-none focus:ring-primary min-h-[150px]" />
                </div>

                <Button type="submit" className="w-full bg-primary text-primary-foreground rounded-none font-bold uppercase tracking-wider h-12">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
