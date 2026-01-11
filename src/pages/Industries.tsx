import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Building,
  Landmark,
  Mountain,
  TreeDeciduous,
  Wheat,
  Zap,
  Home,
  Waves,
  ChevronRight,
} from "lucide-react";

const industries = [
  {
    icon: Landmark,
    title: "Government & Counties",
    description: "Supporting national and county governments with land administration, spatial planning, infrastructure mapping, and e-government geospatial solutions.",
    services: ["Land Survey & Registration", "Spatial Development Plans", "Asset Management", "Census Support"],
  },
  {
    icon: Building,
    title: "Urban Development & Infrastructure",
    description: "Enabling smart city initiatives and infrastructure projects with precise base mapping, utility surveys, and urban monitoring solutions.",
    services: ["Utility Mapping", "Smart City GIS", "Infrastructure Monitoring", "BIM Integration"],
  },
  {
    icon: Mountain,
    title: "Mining & Natural Resources",
    description: "Supporting exploration and mining operations with geological surveys, volumetric analysis, and environmental compliance mapping.",
    services: ["Exploration Surveys", "Volumetric Analysis", "Environmental Compliance", "Mine Planning"],
  },
  {
    icon: TreeDeciduous,
    title: "Environment & Conservation",
    description: "Advancing conservation efforts through habitat mapping, wildlife monitoring, carbon stock assessment, and environmental impact studies.",
    services: ["Habitat Mapping", "Wildlife Monitoring", "Carbon Assessment", "EIA Studies"],
  },
  {
    icon: Wheat,
    title: "Agriculture & Land Management",
    description: "Empowering agricultural productivity with precision farming data, crop monitoring, land suitability analysis, and irrigation planning.",
    services: ["Precision Agriculture", "Crop Monitoring", "Land Suitability", "Irrigation Planning"],
  },
  {
    icon: Zap,
    title: "Energy & Utilities",
    description: "Supporting energy infrastructure with corridor mapping, site assessment, network analysis, and renewable energy resource mapping.",
    services: ["Corridor Mapping", "Site Assessment", "Network Analysis", "Solar/Wind Mapping"],
  },
  {
    icon: Home,
    title: "Real Estate & Construction",
    description: "Enabling real estate development with topographic surveys, boundary demarcation, site analysis, and construction monitoring.",
    services: ["Topographic Survey", "Boundary Survey", "Site Analysis", "Progress Monitoring"],
  },
  {
    icon: Waves,
    title: "Water Resources",
    description: "Supporting water resource management with hydrological mapping, watershed analysis, flood modeling, and groundwater surveys.",
    services: ["Hydrological Mapping", "Watershed Analysis", "Flood Modeling", "Groundwater Survey"],
  },
];

const Industries = () => {
  return (
    <main className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-24 section-gradient relative overflow-hidden">
        <div className="absolute inset-0 topo-pattern opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              Industries We <span className="gradient-text">Serve</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Specialized geospatial solutions tailored for diverse sectors across Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="card-glass rounded-xl p-8 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/30 transition-colors">
                    <industry.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="space-y-4 flex-1">
                    <h3 className="font-display font-semibold text-foreground text-xl">
                      {industry.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {industry.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {industry.services.map((service) => (
                        <span
                          key={service}
                          className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Your Industry Not Listed?
            </h2>
            <p className="text-muted-foreground text-lg">
              We adapt our geospatial expertise to meet the unique needs of any sector.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Discuss Your Needs
                <ChevronRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Industries;
