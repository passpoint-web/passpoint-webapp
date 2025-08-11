import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, ArrowLeft, Palette, Type, Image } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

interface BrandAsset {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  downloadUrl: string;
  category: string;
  format: string;
  size: string;
}

const BrandGuidelines = () => {
  const [assets, setAssets] = useState<BrandAsset[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock data - replace with actual API call to your backend
    const mockAssets: BrandAsset[] = [
      {
        id: "1",
        title: "Passpoint Logo - Primary",
        description: "Main Passpoint logo in original brand colors",
        imageUrl: "/api/placeholder/400/200",
        downloadUrl: "/downloads/passpoint-logo-primary.zip",
        category: "Logo",
        format: "ZIP (PNG, SVG, EPS)",
        size: "2.1 MB"
      },
      {
        id: "2", 
        title: "Passpoint Logo - White Version",
        description: "White version of the logo for dark backgrounds",
        imageUrl: "/api/placeholder/400/200",
        downloadUrl: "/downloads/passpoint-logo-white.zip",
        category: "Logo",
        format: "ZIP (PNG, SVG, EPS)",
        size: "1.8 MB"
      },
      {
        id: "3",
        title: "Brand Color Palette",
        description: "Complete color palette with hex, RGB, and CMYK values",
        imageUrl: "/api/placeholder/400/200",
        downloadUrl: "/downloads/brand-colors.pdf",
        category: "Colors",
        format: "PDF",
        size: "1.2 MB"
      },
      {
        id: "4",
        title: "Typography Guidelines",
        description: "Font specifications and typography usage guidelines",
        downloadUrl: "/downloads/typography-guidelines.pdf",
        category: "Typography",
        format: "PDF",
        size: "3.5 MB"
      },
      {
        id: "5",
        title: "Complete Brand Guidelines",
        description: "Comprehensive brand guidelines document with all specifications",
        downloadUrl: "/downloads/passpoint-brand-guidelines.pdf",
        category: "Guidelines",
        format: "PDF",
        size: "12.8 MB"
      }
    ];

    setTimeout(() => {
      setAssets(mockAssets);
      setLoading(false);
    }, 1000);
  }, []);

  const handleDownload = (asset: BrandAsset) => {
    // In a real implementation, this would trigger a download from your backend
    console.log(`Downloading: ${asset.title}`);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Logo":
        return <Image className="w-5 h-5" />;
      case "Colors":
        return <Palette className="w-5 h-5" />;
      case "Typography":
        return <Type className="w-5 h-5" />;
      default:
        return <Download className="w-5 h-5" />;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading brand guidelines...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-secondary to-secondary-light text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/press-media" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Press & Media Resources
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Logo & Brand Guidelines
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Official logos, brand assets, and comprehensive brand guidelines
            </p>
          </div>
        </div>
      </section>

      {/* Brand Overview */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Brand Usage Guidelines</h2>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">Logo Usage</h3>
                  <p className="text-sm text-muted-foreground">
                    Always maintain proper spacing and never distort the logo proportions.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">Color Standards</h3>
                  <p className="text-sm text-muted-foreground">
                    Use official brand colors for consistency across all materials.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">Typography</h3>
                  <p className="text-sm text-muted-foreground">
                    Follow typography guidelines for professional brand representation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Assets Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {assets.map((asset) => (
              <Card key={asset.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                {asset.imageUrl && (
                  <div className="aspect-video overflow-hidden bg-muted">
                    <img 
                      src={asset.imageUrl}
                      alt={asset.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      {getCategoryIcon(asset.category)}
                      <Badge variant="secondary">{asset.category}</Badge>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 text-foreground">
                    {asset.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 text-sm">
                    {asset.description}
                  </p>
                  
                  <div className="text-xs text-muted-foreground mb-4 space-y-1">
                    <div>Format: {asset.format}</div>
                    <div>Size: {asset.size}</div>
                  </div>
                  
                  <Button 
                    className="w-full"
                    onClick={() => handleDownload(asset)}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Asset
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Need Custom Assets?</h3>
            <p className="text-muted-foreground mb-6">
              If you need custom brand assets or have specific requirements, our brand team is here to help.
            </p>
            <Button size="lg">
              Contact Brand Team
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default BrandGuidelines;