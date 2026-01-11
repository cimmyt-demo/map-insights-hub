import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Map,
  TreeDeciduous,
  Mountain,
  Building2,
  Layers,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

const categories = [
  "All",
  "GIS Mapping",
  "Environmental",
  "Geological",
  "Aerial/Drone",
  "Urban Planning",
];

const projects = [
  {
    title: "National Land Cover Mapping",
    client: "Ministry of Environment",
    category: "GIS Mapping",
    description: "Comprehensive land cover classification across 12 counties using satellite imagery and machine learning.",
    icon: Map,
    tags: ["Remote Sensing", "Classification", "GIS"],
  },
  {
    title: "Coastal Erosion Monitoring",
    client: "Kenya Wildlife Service",
    category: "Environmental",
    description: "Long-term monitoring study of coastal erosion patterns using multi-temporal satellite analysis.",
    icon: TreeDeciduous,
    tags: ["Environmental", "Change Detection", "Coastal"],
  },
  {
    title: "Mining Site Volumetric Survey",
    client: "African Mining Corp",
    category: "Aerial/Drone",
    description: "Monthly drone surveys for stockpile volume calculations and progress monitoring.",
    icon: Mountain,
    tags: ["Drone", "Volumetrics", "Mining"],
  },
  {
    title: "County Spatial Development Plan",
    client: "Nakuru County Government",
    category: "Urban Planning",
    description: "Comprehensive spatial framework including land use zoning and infrastructure planning.",
    icon: Building2,
    tags: ["Urban Planning", "GIS", "Zoning"],
  },
  {
    title: "Geophysical Survey for Dam Site",
    client: "Water Resources Authority",
    category: "Geological",
    description: "Gravity and magnetic surveys to characterize subsurface conditions for dam construction.",
    icon: Layers,
    tags: ["Geophysical", "Dam", "Survey"],
  },
  {
    title: "Forest Carbon Stock Assessment",
    client: "UNDP Kenya",
    category: "Environmental",
    description: "LiDAR-based forest inventory and carbon stock estimation for REDD+ reporting.",
    icon: TreeDeciduous,
    tags: ["LiDAR", "Carbon", "Forestry"],
  },
];

const Projects = () => {
  return (
    <main className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-24 section-gradient relative overflow-hidden">
        <div className="absolute inset-0 topo-pattern opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              Our <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Explore our portfolio of successful geospatial projects delivered across Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="card-glass rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="h-48 bg-muted/30 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 topo-pattern opacity-50" />
                  <project.icon className="w-16 h-16 text-primary/50 relative z-10" />
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <Badge variant="secondary" className="mb-2">
                      {project.category}
                    </Badge>
                    <h3 className="font-display font-semibold text-foreground text-lg mb-1 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-primary text-sm">{project.client}</p>
                  </div>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button variant="ghost" size="sm" className="w-full group-hover:bg-primary/10">
                    View Details
                    <ExternalLink className="w-4 h-4" />
                  </Button>
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
              Have a Similar Project?
            </h2>
            <p className="text-muted-foreground text-lg">
              Let's discuss how we can apply our expertise to your requirements.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Start Your Project
                <ChevronRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;
