import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-20 border-t-4 border-primary">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <Link href="/">
            <a className="text-3xl font-black tracking-tighter uppercase block mb-6">
              Adjuster<span className="text-primary">Master</span>
            </a>
          </Link>
          <p className="text-muted-foreground max-w-md font-mono text-sm leading-relaxed">
            Premier Xactimate training and professional estimation services for the Tampa Bay area. 
            Master the tools of the trade with certified instruction and decades of field experience.
          </p>
        </div>

        <div>
          <h4 className="font-bold uppercase tracking-wider mb-6 text-primary">Training</h4>
          <ul className="space-y-4 font-mono text-sm text-muted-foreground">
            <li><Link href="/training"><a className="hover:text-white transition-colors">Level 1 & 2 Fundamentals</a></Link></li>
            <li><Link href="/training"><a className="hover:text-white transition-colors">Advanced Estimation</a></Link></li>
            <li><Link href="/training"><a className="hover:text-white transition-colors">Roof Sketching Mastery</a></Link></li>
            <li><Link href="/training"><a className="hover:text-white transition-colors">Private Workshops</a></Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold uppercase tracking-wider mb-6 text-primary">Contact</h4>
          <ul className="space-y-4 font-mono text-sm text-muted-foreground">
            <li>Tampa, FL</li>
            <li><a href="mailto:info@adjustermaster.com" className="hover:text-white transition-colors">info@adjustermaster.com</a></li>
            <li><a href="tel:+18135550123" className="hover:text-white transition-colors">(813) 555-0123</a></li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs font-mono text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Brian Roberts AdjusterMaster. All rights reserved.</p>
        <div className="flex gap-8 mt-4 md:mt-0">
          <Link href="/privacy"><a className="hover:text-white">Privacy Policy</a></Link>
          <Link href="/terms"><a className="hover:text-white">Terms of Service</a></Link>
        </div>
      </div>
    </footer>
  );
}
