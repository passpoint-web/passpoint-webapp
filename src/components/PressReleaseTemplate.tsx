import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowLeft, Share2, Download } from "lucide-react";
import { Link } from "react-router-dom";

interface PressReleaseProps {
  title: string;
  headerImage: string;
  category: string;
  publishDate: string;
  content: {
    paragraphs: string[];
    links?: Array<{
      text: string;
      url: string;
    }>;
  };
  slug: string;
}

const PressReleaseTemplate = ({ 
  title, 
  headerImage, 
  category, 
  publishDate, 
  content,
  slug 
}: PressReleaseProps) => {
  
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long', 
      day: 'numeric'
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: title,
        url: window.location.href,
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const handleDownloadPDF = () => {
    // This would trigger a PDF download of the press release
    console.log(`Downloading PDF for: ${title}`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="relative">
        {/* Header Image */}
        <div className="relative h-[60vh] overflow-hidden">
          <img 
            src={headerImage}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          
          {/* Navigation */}
          <div className="absolute top-8 left-8">
            <Link 
              to="/press-media" 
              className="inline-flex items-center text-white/80 hover:text-white transition-colors bg-black/20 backdrop-blur-sm rounded-full px-4 py-2"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Press & Media Resources
            </Link>
          </div>

          {/* Logo and Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="container mx-auto">
              <div className="max-w-4xl">
                {/* Logo */}
                <div className="mb-6">
                  <img 
                    src="/lovable-uploads/9fa0044a-4d95-4b44-8ac2-2bd8d567609f.png"
                    alt="Passpoint"
                    className="h-12 md:h-16 w-auto"
                  />
                </div>
                
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                    {category}
                  </Badge>
                  <div className="flex items-center text-white/80 text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    {formatDate(publishDate)}
                  </div>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                  {title}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Action Buttons */}
            <div className="flex gap-4 mb-8 justify-end">
              <Button variant="outline" onClick={handleShare}>
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" onClick={handleDownloadPDF}>
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
            </div>

            {/* Article Content */}
            <Card>
              <CardContent className="p-8 md:p-12">
                <div className="prose prose-lg max-w-none">
                  {content.paragraphs.map((paragraph, index) => (
                    <p key={index} className="mb-6 text-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                  
                  {/* Links Section */}
                  {content.links && content.links.length > 0 && (
                    <div className="mt-8 p-6 bg-muted/50 rounded-lg">
                      <h3 className="font-bold mb-4">Related Links</h3>
                      <ul className="space-y-2">
                        {content.links.map((link, index) => (
                          <li key={index}>
                            <a 
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:text-primary/80 underline"
                            >
                              {link.text}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Contact Information */}
                <div className="mt-12 pt-8 border-t border-border">
                  <h3 className="font-bold mb-4">Media Contact</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p><strong>Email:</strong> media@mypasspoint.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-8">Related News</h3>
            <div className="text-center py-8">
              <p className="text-muted-foreground mb-4">
                Discover more press releases and company updates
              </p>
              <Link to="/press-media">
                <Button>
                  View All Press & Media Resources
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PressReleaseTemplate;