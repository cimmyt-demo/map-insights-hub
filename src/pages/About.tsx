import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  Globe,
  ChevronRight,
  CheckCircle2,
  Cpu,
  Satellite,
  Map,
} from "lucide-react";

const values = [
  { icon: Target, title: "Precision", desc: "Accuracy is our foundation in every project we undertake." },
  { icon: Heart, title: "Integrity", desc: "We maintain the highest ethical standards in all our work." },
  { icon: Users, title: "Collaboration", desc: "Working closely with clients to achieve shared goals." },
  { icon: Award, title: "Excellence", desc: "Committed to delivering exceptional quality always." },
];

const equipment = [
  "High-Resolution Satellite Imagery",
  "Professional Drone Fleet (DJI Matrice Series)",
  "RTK GPS/GNSS Systems",
  "Total Stations & Laser Scanners",
  "Ground Penetrating Radar (GPR)",
  "Gravimeters & Magnetometers",
  "GIS Software Suite (ArcGIS, QGIS)",
  "Remote Sensing Processing Software",
];

const About = () => {
  return (
    <main className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-24 section-gradient relative overflow-hidden">
        <div className="absolute inset-0 topo-pattern opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              About <span className="gradient-text">MapData</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              A leading geospatial solutions company with over 15 years of experience 
              serving governments, NGOs, and enterprises across Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2010, MapData Geomatics Limited has grown to become one of East Africa's 
                  most trusted geospatial services providers. Our journey began with a simple mission: 
                  to bring world-class surveying and mapping capabilities to the African continent.
                </p>
                <p>
                  Today, we serve clients across 12 African countries, employing over 50 skilled 
                  professionals including surveyors, GIS analysts, remote sensing specialists, 
                  and environmental scientists.
                </p>
                <p>
                  Our commitment to precision, innovation, and client satisfaction has earned us 
                  long-term partnerships with government agencies, international organizations, 
                  and leading corporations.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="card-glass rounded-xl p-6 text-center">
                <Globe className="w-10 h-10 text-primary mx-auto mb-3" />
                <div className="text-3xl font-display font-bold gradient-text mb-1">12+</div>
                <div className="text-sm text-muted-foreground">Countries Served</div>
              </div>
              <div className="card-glass rounded-xl p-6 text-center">
                <Users className="w-10 h-10 text-primary mx-auto mb-3" />
                <div className="text-3xl font-display font-bold gradient-text mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Team Members</div>
              </div>
              <div className="card-glass rounded-xl p-6 text-center">
                <Map className="w-10 h-10 text-primary mx-auto mb-3" />
                <div className="text-3xl font-display font-bold gradient-text mb-1">500+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="card-glass rounded-xl p-6 text-center">
                <Award className="w-10 h-10 text-primary mx-auto mb-3" />
                <div className="text-3xl font-display font-bold gradient-text mb-1">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-glass rounded-xl p-8">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be Africa's leading geospatial solutions provider, empowering sustainable 
                development through accurate spatial information and innovative technology.
              </p>
            </div>
            <div className="card-glass rounded-xl p-8">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To deliver precise, reliable, and cost-effective geospatial solutions that 
                enable informed decision-making for governments, organizations, and communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-background grid-pattern">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground text-lg">
              The principles that guide everything we do at MapData Geomatics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="card-glass rounded-xl p-6 text-center hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground text-lg mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment & Technology */}
      <section className="py-24 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                <Cpu className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Technology & Equipment
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                We invest in state-of-the-art equipment and software to ensure the highest 
                accuracy and efficiency in our deliverables. Our technology stack includes:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {equipment.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-muted-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-glass rounded-2xl p-8 lg:p-10 space-y-6">
              <div className="flex items-center gap-4">
                <Satellite className="w-8 h-8 text-primary" />
                <div>
                  <h4 className="font-display font-semibold text-foreground">Satellite Partnerships</h4>
                  <p className="text-sm text-muted-foreground">Access to high-resolution imagery providers</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Map className="w-8 h-8 text-primary" />
                <div>
                  <h4 className="font-display font-semibold text-foreground">Advanced GIS Platform</h4>
                  <p className="text-sm text-muted-foreground">Custom web GIS solutions for clients</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Cpu className="w-8 h-8 text-primary" />
                <div>
                  <h4 className="font-display font-semibold text-foreground">Cloud Processing</h4>
                  <p className="text-sm text-muted-foreground">Scalable data processing infrastructure</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 section-gradient relative overflow-hidden">
        <div className="absolute inset-0 topo-pattern opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Ready to Work Together?
            </h2>
            <p className="text-muted-foreground text-lg">
              Let's discuss how MapData can support your next project.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Get in Touch
                <ChevronRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
