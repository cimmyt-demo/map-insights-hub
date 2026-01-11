import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Clock,
  ArrowRight,
  Download,
  FileText,
  ChevronRight,
} from "lucide-react";

const articles = [
  {
    title: "The Future of Drone Surveying in Africa",
    excerpt: "How UAV technology is transforming land surveying and mapping operations across the continent.",
    category: "Technology",
    date: "Jan 8, 2026",
    readTime: "5 min read",
  },
  {
    title: "Understanding LiDAR for Forest Inventory",
    excerpt: "A comprehensive guide to using airborne LiDAR for accurate forest carbon stock assessment.",
    category: "Remote Sensing",
    date: "Dec 28, 2025",
    readTime: "8 min read",
  },
  {
    title: "GIS Best Practices for Urban Planning",
    excerpt: "Essential geospatial methodologies for effective spatial development planning in growing cities.",
    category: "GIS",
    date: "Dec 15, 2025",
    readTime: "6 min read",
  },
  {
    title: "Environmental Impact Assessment Explained",
    excerpt: "A step-by-step overview of the EIA process and how geospatial data supports environmental decisions.",
    category: "Environmental",
    date: "Nov 30, 2025",
    readTime: "7 min read",
  },
  {
    title: "Satellite Imagery Resolution Guide",
    excerpt: "Choosing the right satellite imagery resolution for your mapping and monitoring projects.",
    category: "Remote Sensing",
    date: "Nov 18, 2025",
    readTime: "4 min read",
  },
  {
    title: "Ground Truthing in Remote Sensing",
    excerpt: "Why field verification is essential for accurate land cover classification and mapping.",
    category: "Methodology",
    date: "Nov 5, 2025",
    readTime: "5 min read",
  },
];

const downloads = [
  { title: "Company Profile 2025", type: "PDF", size: "2.4 MB" },
  { title: "Services Brochure", type: "PDF", size: "1.8 MB" },
  { title: "Case Studies Compilation", type: "PDF", size: "4.2 MB" },
];

const Insights = () => {
  return (
    <main className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-24 section-gradient relative overflow-hidden">
        <div className="absolute inset-0 topo-pattern opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              Insights & <span className="gradient-text">Resources</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Stay updated with the latest in geospatial technology, industry news, and MapData updates.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-10">
            Latest Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <article
                key={index}
                className="card-glass rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 group cursor-pointer"
              >
                <div className="h-40 bg-muted/30 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 topo-pattern opacity-50" />
                  <FileText className="w-12 h-12 text-primary/50 relative z-10" />
                </div>
                <div className="p-6 space-y-4">
                  <Badge variant="secondary">{article.category}</Badge>
                  <h3 className="font-display font-semibold text-foreground text-lg group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {article.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="w-full group-hover:bg-primary/10">
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-10 text-center">
              Downloads
            </h2>
            <div className="space-y-4">
              {downloads.map((download, index) => (
                <div
                  key={index}
                  className="card-glass rounded-xl p-6 flex items-center justify-between gap-4 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{download.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {download.type} • {download.size}
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4" />
                    Download
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Want to Collaborate?
            </h2>
            <p className="text-muted-foreground text-lg">
              We're always looking for opportunities to share knowledge and collaborate with industry partners.
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

export default Insights;
