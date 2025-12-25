import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Calendar, Clock, MapPin, Video } from "lucide-react";
import { Link } from "wouter";

export default function Training() {
  const courses = [
    {
      title: "Level 1 & 2 Fundamentals",
      description: "The essential foundation for every adjuster. Master the interface, sketching, and line item entry.",
      duration: "3 Days",
      price: "$895",
      features: [
        "Interface Navigation & Setup",
        "Sketching Rooms, Roofs & Stairs",
        "Line Item Entry & Macros",
        "Report Printing & Exporting",
        "Certification Exam Prep"
      ]
    },
    {
      title: "Level 3 Mastery",
      description: "Advanced techniques for complex losses. Push Xactimate to its limits.",
      duration: "2 Days",
      price: "$695",
      features: [
        "Complex Roof Sketching",
        "Interior Water Mitigation",
        "Advanced Variables & Calculations",
        "Custom Price Lists",
        "Level 3 Exam Strategy"
      ]
    },
    {
      title: "Roof Sketching Bootcamp",
      description: "Intensive focus on the most challenging part of Xactimate: complex roof structures.",
      duration: "1 Day",
      price: "$395",
      features: [
        "Gable, Hip, & Gambrel Roofs",
        "Complex Intersecting Roofs",
        "Dormers & Turrets",
        "Aerial Sketch Integration",
        "Manual Dimensioning"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="bg-foreground text-background py-20">
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-block bg-primary px-3 py-1 mb-6">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-primary-foreground">
                Curriculum
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-6">
              Xactimate Training
            </h1>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              Real-world training for real-world claims. We don't just teach you how to pass the test; 
              we teach you how to survive and thrive in the field.
            </p>
          </div>
        </div>
      </section>

      {/* Hybrid Model Info */}
      <section className="py-16 border-b border-border">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-black uppercase tracking-tight mb-6">
                The Hybrid Advantage
              </h2>
              <p className="text-muted-foreground mb-6">
                We understand that flexibility is key. That's why we offer our courses in a hybrid format. 
                Choose the learning style that fits your schedule and location.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Card className="bg-muted border-none rounded-none">
                  <CardContent className="p-6">
                    <MapPin className="w-8 h-8 text-primary mb-4" />
                    <h3 className="font-bold uppercase mb-2">In-Person</h3>
                    <p className="text-sm text-muted-foreground">
                      Join us in Tampa for hands-on instruction. Network with other adjusters and get direct feedback.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-muted border-none rounded-none">
                  <CardContent className="p-6">
                    <Video className="w-8 h-8 text-primary mb-4" />
                    <h3 className="font-bold uppercase mb-2">Live Zoom</h3>
                    <p className="text-sm text-muted-foreground">
                      Attend the same live class from anywhere. Interactive screen sharing ensures you never fall behind.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="bg-foreground p-8 text-background">
              <h3 className="text-xl font-bold uppercase mb-4 text-primary">Upcoming Schedule</h3>
              <ul className="space-y-4 font-mono text-sm">
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span>Jan 15-17</span>
                  <span>Level 1 & 2 (Tampa/Zoom)</span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span>Feb 03-05</span>
                  <span>Level 1 & 2 (Tampa/Zoom)</span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span>Feb 20-21</span>
                  <span>Level 3 Mastery (Zoom Only)</span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span>Mar 10-12</span>
                  <span>Level 1 & 2 (Tampa/Zoom)</span>
                </li>
              </ul>
              <Button className="w-full mt-8 bg-primary text-primary-foreground rounded-none font-bold uppercase">
                View Full Calendar
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Course List */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className="border-2 border-border rounded-none hover:border-primary transition-colors duration-300 flex flex-col">
                <CardHeader className="bg-muted/50 border-b border-border pb-8">
                  <CardTitle className="text-2xl font-black uppercase tracking-tight leading-none min-h-[3rem]">
                    {course.title}
                  </CardTitle>
                  <div className="flex items-center gap-4 mt-4 text-sm font-mono text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock size={14} /> {course.duration}
                    </div>
                    <div className="flex items-center gap-1 text-primary font-bold">
                      {course.price}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-8 flex-grow flex flex-col">
                  <p className="text-muted-foreground mb-8 flex-grow">
                    {course.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {course.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <Check className="w-4 h-4 text-primary mt-1 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full rounded-none font-bold uppercase tracking-wider" variant={index === 0 ? "default" : "outline"}>
                    Enroll Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
