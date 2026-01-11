import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Globe,
  Layers,
  Satellite,
  Map,
  TreeDeciduous,
  Mountain,
  Compass,
  Building2,
  ChevronRight,
  CheckCircle2,
  Users,
  Award,
  Target,
} from "lucide-react";
import heroImage from "@/assets/hero-earth.jpg";

const services = [
  { icon: Satellite, title: "Remote Sensing", desc: "Earth observation & satellite imagery analysis" },
  { icon: Layers, title: "GIS & Spatial Data", desc: "Advanced spatial data processing & analytics" },
  { icon: Map, title: "Aerial Mapping", desc: "High-precision drone & aerial surveying" },
  { icon: Building2, title: "Urban Planning", desc: "City planning & infrastructure mapping" },
  { icon: TreeDeciduous, title: "Environmental Assessment", desc: "EIA studies & ecological mapping" },
  { icon: Mountain, title: "Geological Surveys", desc: "Geophysical & geotechnical analysis" },
];

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "15+", label: "Years Experience" },
  { value: "50+", label: "Expert Team Members" },
  { value: "12", label: "African Countries" },
];

const sectors = [
  "Government & Counties",
  "Urban Development",
  "Mining & Natural Resources",
  "Environment & Conservation",
  "Agriculture & Land",
  "Energy & Utilities",
];

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 topo-pattern opacity-30" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 pt-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium">
              <Globe className="w-4 h-4" />
              <span>Precision Geospatial Solutions</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-tight">
              Mapping the Future with{" "}
              <span className="gradient-text">Precision</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              MapData Geomatics Limited delivers cutting-edge surveying, GIS, remote sensing, 
              and environmental solutions trusted by governments and enterprises across Africa.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Request a Quote
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="heroOutline" size="xl">
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
            <div className="w-1 h-3 rounded-full bg-primary" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Our Core Services
            </h2>
            <p className="text-muted-foreground text-lg">
              Comprehensive geospatial solutions powered by cutting-edge technology and decades of expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="card-glass rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground text-lg mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="heroOutline" size="lg">
                View All Services
                <ChevronRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-background grid-pattern">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Why Choose <span className="gradient-text">MapData</span>?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                With over 15 years of experience in geospatial services, we combine traditional surveying expertise 
                with modern technology to deliver accurate, reliable, and cost-effective solutions.
              </p>

              <div className="space-y-4">
                {[
                  { icon: Target, text: "Precision accuracy in all deliverables" },
                  { icon: Award, text: "ISO-certified quality standards" },
                  { icon: Users, text: "Expert team with local knowledge" },
                  { icon: Compass, text: "Latest surveying technology" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-glass rounded-2xl p-8 lg:p-10">
              <h3 className="font-display font-semibold text-foreground text-xl mb-6">
                Sectors We Serve
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {sectors.map((sector, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-muted-foreground text-sm">{sector}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Ready to Start Your Project?
            </h2>
            <p className="text-muted-foreground text-lg">
              Get in touch with our experts today for a free consultation and quote.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Contact Us Today
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/projects">
                <Button variant="heroOutline" size="lg">
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
