import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, TrendingUp, Shield, Zap, Users, ArrowRight, CheckCircle } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground text-sm font-bold font-sans">D</span>
              </div>
              <span className="font-sans font-bold text-xl text-foreground">DeepFrame</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors font-serif">
                Services
              </a>
              <a href="#why-us" className="text-muted-foreground hover:text-foreground transition-colors font-serif">
                Why Us
              </a>
              <a
                href="#case-studies"
                className="text-muted-foreground hover:text-foreground transition-colors font-serif"
              >
                Case Studies
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors font-serif">
                Contact
              </a>
              <Button className="font-serif">Schedule a Pitch</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h1 className="font-sans font-bold text-5xl md:text-7xl text-foreground leading-tight mb-6">
              Premium Freelance
              <br />
              <span className="text-primary">Tech Agency</span>
            </h1>
            <p className="font-serif text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Elite freelance professionals delivering full-stack development, stunning design, and growth-driven
              marketing. Your dedicated tech team, without the overhead.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="font-serif text-lg px-8 py-4">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="font-serif text-lg px-8 py-4 bg-transparent">
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-sans font-bold text-4xl md:text-5xl text-foreground mb-4">What We Do Best</h2>
            <p className="font-serif text-xl text-muted-foreground max-w-3xl mx-auto">
              Three core specializations where our freelance experts excel and deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 border-border">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <Code className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-sans font-bold text-2xl text-foreground mb-4">Development</h3>
                <p className="font-serif text-muted-foreground leading-relaxed">
                  Expert freelance developers crafting custom web and mobile applications. Modern tech stacks, clean
                  code, and rapid delivery that scales with your business.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-border">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <Palette className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-sans font-bold text-2xl text-foreground mb-4">Design</h3>
                <p className="font-serif text-muted-foreground leading-relaxed">
                  Creative freelance designers who understand business goals. From brand identity to user interfaces
                  that convert visitors into customers.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-border">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-sans font-bold text-2xl text-foreground mb-4">Marketing</h3>
                <p className="font-serif text-muted-foreground leading-relaxed">
                  Strategic freelance marketers who drive real growth. Digital campaigns, SEO, content strategy, and
                  analytics that deliver measurable business results.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-sans font-bold text-4xl md:text-5xl text-foreground mb-6">Why Choose DeepFrame?</h2>
              <p className="font-serif text-xl text-muted-foreground mb-8 leading-relaxed">
                Get enterprise-level expertise without enterprise costs. Our curated team of freelance specialists
                delivers premium results with the agility you need.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-sans font-bold text-lg text-foreground mb-2">Elite Freelance Talent</h3>
                    <p className="font-serif text-muted-foreground">
                      Hand-picked specialists with 5+ years experience. Only the top 3% of freelancers make our team.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-sans font-bold text-lg text-foreground mb-2">Cost-Effective Excellence</h3>
                    <p className="font-serif text-muted-foreground">
                      Premium quality at 40-60% less than traditional agencies. No overhead, just pure talent focused on
                      your success.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-sans font-bold text-lg text-foreground mb-2">Rapid Deployment</h3>
                    <p className="font-serif text-muted-foreground">
                      Start within 48 hours. Our freelance model means faster onboarding and immediate project momentum.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-sans font-bold text-lg text-foreground mb-2">Flexible Scaling</h3>
                    <p className="font-serif text-muted-foreground">
                      Scale your team up or down instantly. Pay only for what you need, when you need it.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="border-border">
                <CardContent className="p-6 text-center">
                  <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-sans font-bold text-2xl text-foreground mb-2">48hr</h3>
                  <p className="font-serif text-muted-foreground">Project Start Time</p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6 text-center">
                  <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-sans font-bold text-2xl text-foreground mb-2">50%</h3>
                  <p className="font-serif text-muted-foreground">Cost Savings</p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-sans font-bold text-2xl text-foreground mb-2">200+</h3>
                  <p className="font-serif text-muted-foreground">Happy Clients</p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6 text-center">
                  <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-sans font-bold text-2xl text-foreground mb-2">95%</h3>
                  <p className="font-serif text-muted-foreground">Client Retention</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Opportunity Section */}
      <section className="py-24 px-6 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-sans font-bold text-4xl md:text-5xl text-foreground mb-6">Ready to Get Started?</h2>
          <p className="font-serif text-xl text-muted-foreground mb-8 leading-relaxed">
            Join hundreds of successful businesses who trust DeepFrame for their tech needs. Let's discuss how our
            freelance experts can accelerate your growth.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="font-sans font-bold text-3xl text-primary mb-2">24hr</h3>
              <p className="font-serif text-muted-foreground">Response Guarantee</p>
            </div>
            <div>
              <h3 className="font-sans font-bold text-3xl text-primary mb-2">Free</h3>
              <p className="font-serif text-muted-foreground">Initial Consultation</p>
            </div>
            <div>
              <h3 className="font-sans font-bold text-3xl text-primary mb-2">30-day</h3>
              <p className="font-serif text-muted-foreground">Money-back Guarantee</p>
            </div>
          </div>

          <Button size="lg" className="font-serif text-lg px-12 py-4">
            Get Your Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground text-sm font-bold font-sans">D</span>
                </div>
                <span className="font-sans font-bold text-xl text-foreground">DeepFrame</span>
              </div>
              <p className="font-serif text-muted-foreground mb-6 max-w-md">
                Premium freelance tech agency delivering development, design, and marketing excellence. Your success is
                our mission.
              </p>
              <Button className="font-serif">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div>
              <h3 className="font-sans font-bold text-foreground mb-4">Services</h3>
              <ul className="space-y-2 font-serif text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Full-Stack Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    UI/UX Design
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Digital Marketing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Growth Strategy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-sans font-bold text-foreground mb-4">Contact</h3>
              <ul className="space-y-2 font-serif text-muted-foreground">
                <li>hello@deepframe.com</li>
                <li>+1 (555) 123-4567</li>
                <li>San Francisco, CA</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-12 pt-8 text-center">
            <p className="font-serif text-muted-foreground">© 2024 DeepFrame. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
