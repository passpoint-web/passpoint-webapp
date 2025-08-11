import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface SectionImage {
  id: string;
  imageUrl: string;
  downloadUrl: string;
}

interface ImageSection {
  title: string;
  images: SectionImage[];
}

const ProductImages = () => {
  const [sections, setSections] = useState<ImageSection[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Product images organized by solution categories (like Stripe's inspiration)
    const productSections: ImageSection[] = [
      {
        title: "Global Payments",
        images: [
          {
            id: "gp-1",
            imageUrl: "/lovable-uploads/713a9926-5dea-4de8-b2db-8be5fd929173.png",
            downloadUrl: "/lovable-uploads/713a9926-5dea-4de8-b2db-8be5fd929173.png"
          },
          {
            id: "gp-2", 
            imageUrl: "/lovable-uploads/38c38950-7f42-45f7-ace5-44cbe9892fb1.png",
            downloadUrl: "/lovable-uploads/38c38950-7f42-45f7-ace5-44cbe9892fb1.png"
          }
        ]
      },
      {
        title: "Global Card Issuing",
        images: [
          {
            id: "gci-1",
            imageUrl: "/lovable-uploads/2288b359-5a3d-4db5-82c8-f5d1bf0344c3.png", 
            downloadUrl: "/lovable-uploads/2288b359-5a3d-4db5-82c8-f5d1bf0344c3.png"
          },
          {
            id: "gci-2",
            imageUrl: "/lovable-uploads/be25dd6a-3e93-4e01-8046-2d77c9aa6e70.png",
            downloadUrl: "/lovable-uploads/be25dd6a-3e93-4e01-8046-2d77c9aa6e70.png"
          },
          {
            id: "gci-3",
            imageUrl: "/lovable-uploads/87139926-783e-4f31-b882-ed7a0ad8108a.png",
            downloadUrl: "/lovable-uploads/87139926-783e-4f31-b882-ed7a0ad8108a.png"
          }
        ]
      },
      {
        title: "Corporate Banking",
        images: [
          {
            id: "cb-1",
            imageUrl: "/lovable-uploads/ec480916-d6ce-4b44-a60a-492d26db458f.png",
            downloadUrl: "/lovable-uploads/ec480916-d6ce-4b44-a60a-492d26db458f.png"
          }
        ]
      }
    ];

    setTimeout(() => {
      setSections(productSections);
      setLoading(false);
    }, 1000);
  }, []);

  const handleDownload = (imageUrl: string, imageId: string) => {
    console.log(`Downloading image: ${imageId}`);
    // Create a temporary link to trigger download
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `passpoint-${imageId}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadAll = (sectionTitle: string, images: SectionImage[]) => {
    console.log(`Downloading all images from ${sectionTitle}`);
    images.forEach((image, index) => {
      setTimeout(() => {
        handleDownload(image.downloadUrl, `${sectionTitle.toLowerCase().replace(/\s+/g, '-')}-${index + 1}`);
      }, index * 500); // Stagger downloads
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-slate-400">Loading product images...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-accent to-accent-light text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/press-media" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Press & Media Resources
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Product Images
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              High-resolution product images and screenshots for media use
            </p>
          </div>
        </div>
      </section>

      {/* Image Sections */}
      <div className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          {sections.map((section) => (
            <div key={section.title} className="mb-16">
              {/* Section Header */}
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-white">{section.title}</h2>
                <Button 
                  variant="outline"
                  className="text-slate-300 border-slate-600 hover:bg-slate-800 hover:text-white"
                  onClick={() => handleDownloadAll(section.title, section.images)}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download all
                </Button>
              </div>

              {/* Images Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.images.map((image) => (
                  <div key={image.id} className="group relative bg-slate-800 rounded-lg overflow-hidden">
                    <div className="aspect-video bg-slate-800">
                      <img 
                        src={image.imageUrl}
                        alt={`${section.title} interface`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        onError={(e) => {
                          console.log(`Failed to load image: ${image.imageUrl}`);
                          e.currentTarget.style.display = 'none';
                        }}
                        onLoad={() => {
                          console.log(`Successfully loaded: ${image.imageUrl}`);
                        }}
                      />
                    </div>
                    
                    {/* Download Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button 
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                        onClick={() => handleDownload(image.downloadUrl, image.id)}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductImages;