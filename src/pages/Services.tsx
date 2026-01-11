import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Satellite,
  Layers,
  Map,
  Building2,
  TreeDeciduous,
  Mountain,
  Compass,
  Radio,
  PenTool,
  Globe,
  ChevronRight,
} from "lucide-react";

const services = [
  {
    id: "remote-sensing",
    icon: Satellite,
    title: "Remote Sensing & Earth Observation",
    short: "Satellite imagery analysis and interpretation for various applications.",
    full: "We provide comprehensive remote sensing services including satellite image acquisition, processing, and analysis. Our capabilities include land cover classification, change detection, vegetation monitoring, and terrain analysis using multispectral and hyperspectral imagery from leading satellite providers.",
  },
  {
    id: "gis",
    icon: Layers,
    title: "GIS & Spatial Data Processing",
    short: "Advanced geographic information systems and spatial analytics.",
    full: "Our GIS team specializes in spatial database design, geodatabase management, spatial analysis, and custom GIS application development. We help organizations leverage location intelligence for better decision-making through interactive maps, dashboards, and automated workflows.",
  },
  {
    id: "aerial-mapping",
    icon: Map,
    title: "Aerial Mapping & Drone Surveying",
    short: "High-precision photogrammetry and LiDAR surveys.",
    full: "Using our professional drone fleet equipped with high-resolution cameras and LiDAR sensors, we deliver accurate orthomosaics, digital elevation models (DEMs), 3D point clouds, and volumetric calculations. Ideal for construction monitoring, mining operations, and large-area mapping.",
  },
  {
    id: "urban-planning",
    icon: Building2,
    title: "Urban & Regional Planning",
    short: "Spatial planning support for cities and regions.",
    full: "We support urban planners and regional authorities with base mapping, land use analysis, infrastructure planning, and development monitoring. Our services include physical development plans, zoning maps, and spatial decision support systems for smart city initiatives.",
  },
  {
    id: "eia",
    icon: TreeDeciduous,
    title: "Environmental Impact Assessment (EIA)",
    short: "Comprehensive environmental studies and ecological mapping.",
    full: "Our environmental team conducts thorough EIA studies including baseline surveys, impact prediction, mitigation planning, and environmental monitoring. We specialize in habitat mapping, biodiversity assessments, water resource studies, and climate vulnerability analysis.",
  },
  {
    id: "geological",
    icon: Mountain,
    title: "Geological & Geotechnical Surveys",
    short: "Subsurface investigation and mineral exploration support.",
    full: "We offer geological mapping, geotechnical site investigations, and mineral exploration support using modern geophysical methods. Our services include soil analysis, rock characterization, slope stability assessment, and groundwater investigations.",
  },
  {
    id: "geophysical",
    icon: Radio,
    title: "Gravity & Geophysical Surveys",
    short: "Advanced geophysical measurements and analysis.",
    full: "Specialized geophysical survey services including gravity surveys, magnetic surveys, electrical resistivity tomography (ERT), and ground penetrating radar (GPR). Applications include mineral exploration, archaeological investigations, utility mapping, and geological structure analysis.",
  },
  {
    id: "gps-gnss",
    icon: Compass,
    title: "GPS/GNSS & Field Data Collection",
    short: "Precision positioning and mobile data collection.",
    full: "We provide high-accuracy GPS/GNSS surveying for control networks, boundary surveys, and topographic mapping. Our mobile data collection solutions enable efficient field data capture for asset inventories, infrastructure inspections, and community mapping projects.",
  },
  {
    id: "cartography",
    icon: PenTool,
    title: "Cartography & Map Production",
    short: "Professional map design and atlas production.",
    full: "Our cartographers create visually appealing and technically accurate maps for various purposes including topographic maps, thematic atlases, wall maps, and interactive digital maps. We follow international cartographic standards and can customize products to client specifications.",
  },
  {
    id: "web-gis",
    icon: Globe,
    title: "Web GIS & Decision Support Systems",
    short: "Interactive web mapping platforms and spatial dashboards.",
    full: "We develop custom web GIS applications and spatial decision support systems that enable organizations to visualize, analyze, and share geographic data online. Our solutions include interactive map portals, real-time tracking dashboards, and integrated data management platforms.",
  },
];

const Services = () => {
  return (
    <main className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-24 section-gradient relative overflow-hidden">
        <div className="absolute inset-0 topo-pattern opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Comprehensive geospatial solutions tailored to meet the diverse needs 
              of governments, organizations, and enterprises.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {services.slice(0, 6).map((service) => (
              <div
                key={service.id}
                className="card-glass rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground text-lg mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm">{service.short}</p>
              </div>
            ))}
          </div>

          {/* Detailed Accordion */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8 text-center">
              Explore All Services
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {services.map((service) => (
                <AccordionItem
                  key={service.id}
                  value={service.id}
                  className="card-glass rounded-xl px-6 border-none"
                >
                  <AccordionTrigger className="hover:no-underline py-6">
                    <div className="flex items-center gap-4 text-left">
                      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                        <service.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-display font-semibold text-foreground">
                        {service.title}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 pl-14 text-muted-foreground leading-relaxed">
                    {service.full}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Need a Custom Solution?
            </h2>
            <p className="text-muted-foreground text-lg">
              Contact us to discuss your specific requirements and get a tailored proposal.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Request a Quote
                <ChevronRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
