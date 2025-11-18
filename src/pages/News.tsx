import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ExternalLink, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface PressRelease {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  slug: string;
}

const News = () => {
  const [pressReleases, setPressReleases] = useState<PressRelease[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This would typically fetch from your backend API
    // For now, showing example data structure
    const mockData: PressRelease[] = [
      {
        id: "1",
        title: "Passpoint Charts the Future of African Sports Storytelling with Ubuntu Pitch Sponsorship",
        excerpt: "Passpoint reiterates commitment to supporting African excellence as headline sponsor of Ubuntu Pitch's inaugural episode featuring Wilfried Bony.",
        image: "/lovable-uploads/2c2bbee3-8758-423f-90b4-b2938a403093.png",
        date: "2025-11-17",
        category: "Sponsorship",
        slug: "ubuntu-pitch-sponsorship"
      },
      {
        id: "2",
        title: "Passpoint Announces $50M Series B Funding Round",
        excerpt: "Leading African fintech company secures major funding to expand payment infrastructure across the continent.",
        image: "/api/placeholder/600/300",
        date: "2024-01-15",
        category: "Funding",
        slug: "series-b-funding-announcement"
      },
      {
        id: "3", 
        title: "Passpoint Partners with Major Banks Across 10 African Countries",
        excerpt: "Strategic partnerships enable seamless cross-border payments and expanded merchant coverage.",
        image: "/api/placeholder/600/300",
        date: "2024-01-10",
        category: "Partnership",
        slug: "bank-partnerships-expansion"
      },
      {
        id: "4",
        title: "New Mobile Wallet Integration Reaches 1 Million Users",
        excerpt: "Passpoint's mobile wallet solution achieves significant milestone in user adoption.",
        image: "/api/placeholder/600/300", 
        date: "2024-01-05",
        category: "Product",
        slug: "mobile-wallet-milestone"
      }
    ];
    
    // Simulate API call
    setTimeout(() => {
      setPressReleases(mockData);
      setLoading(false);
    }, 1000);
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long', 
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading news...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary to-primary-light text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/press-media" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Press & Media Resources
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              In the News
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Latest press releases and company announcements
            </p>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pressReleases.map((release) => (
              <Card key={release.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={release.image}
                    alt={release.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary">{release.category}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-1" />
                      {formatDate(release.date)}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {release.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {release.excerpt}
                  </p>
                  
                  <Link to={`/press-media/news/${release.slug}`}>
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                      Read Full Article
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {pressReleases.length === 0 && !loading && (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold mb-4">No press releases yet</h3>
              <p className="text-muted-foreground">Check back soon for our latest news and announcements.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default News;