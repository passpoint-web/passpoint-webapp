import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ExternalLink, Image, Palette, Newspaper, Download, Search, Type, ArrowLeft, Upload, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Footer from "@/components/Footer";

interface PressItem {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  slug: string;
  type: 'news' | 'product' | 'brand';
}

interface ProductImage {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  downloadUrl: string;
  category: string;
  format: string;
  size: string;
  dimensions: string;
}

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

const PressMediaResources = () => {
  const [activeTab, setActiveTab] = useState('news');
  const [pressItems, setPressItems] = useState<PressItem[]>([]);
  const [productImages, setProductImages] = useState<ProductImage[]>([]);
  const [productSections, setProductSections] = useState<Record<string, any[]>>({});
  const [brandAssets, setBrandAssets] = useState<BrandAsset[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const ITEMS_PER_PAGE = 6;

  useEffect(() => {
    // Mock data - replace with actual API calls to your backend
    const mockPressItems: PressItem[] = [
      {
        id: "1",
        title: "Passpoint Charts the Future of African Sports Storytelling with Ubuntu Pitch Sponsorship",
        excerpt: "Passpoint reiterates commitment to supporting African excellence as headline sponsor of Ubuntu Pitch's inaugural episode featuring Wilfried Bony.",
        image: "/lovable-uploads/ubuntu-pitch-header.png",
        date: "2025-11-17",
        category: "Sponsorship",
        slug: "ubuntu-pitch-sponsorship",
        type: 'news'
      },
      {
        id: "2",
        title: "Passpoint Advances Its \"One API, One Africa\" Agenda",
        excerpt: "Activates six new payment corridors for francophone West Africa",
        image: "/lovable-uploads/2c2bbee3-8758-423f-90b4-b2938a403093.png",
        date: "2025-08-03",
        category: "Expansion",
        slug: "one-api-one-africa-francophone-corridors",
        type: 'news'
      }
    ];

    // Product images organized by solution categories (like Stripe's inspiration)
    const productSections = {
      "Global Payments": [
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
      ],
      "Global Card Issuing": [
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
      ],
      "Corporate Banking": [
        {
          id: "cb-1",
          imageUrl: "/lovable-uploads/ec480916-d6ce-4b44-a60a-492d26db458f.png",
          downloadUrl: "/lovable-uploads/ec480916-d6ce-4b44-a60a-492d26db458f.png"
        }
      ]
    };

    const mockBrandAssets: BrandAsset[] = [
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
      }
    ];
    
    setTimeout(() => {
      setPressItems(mockPressItems);
      setProductImages([]); // Clear old product images
      setProductSections(productSections); // Set new section-based data
      setBrandAssets(mockBrandAssets);
      setLoading(false);
    }, 1000);
  }, []);

  const tabs = [
    { key: 'news', label: 'In the news', icon: Newspaper },
    { key: 'product', label: 'Product images', icon: Image },
  ];

  // Reset pagination when switching tabs
  useEffect(() => {
    setCurrentPage(1);
    setSearchTerm("");
    setSelectedCategory("All");
  }, [activeTab]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long', 
      day: 'numeric'
    });
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

  const handleDownload = (item: ProductImage | BrandAsset) => {
    console.log(`Downloading: ${item.title}`);
    // Implement actual download logic here
  };

  // Get current content based on active tab
  const getCurrentContent = () => {
    switch (activeTab) {
      case 'news':
        const filteredNews = pressItems.filter(item => 
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
        );
        const totalNews = filteredNews.length;
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        const paginatedNews = filteredNews.slice(startIndex, startIndex + ITEMS_PER_PAGE);
        const totalPages = Math.ceil(totalNews / ITEMS_PER_PAGE);
        
        return { items: paginatedNews, totalPages, totalItems: totalNews };
        
      case 'product':
        const filteredProducts = productImages.filter(item => {
          const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                               item.description.toLowerCase().includes(searchTerm.toLowerCase());
          const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
          return matchesSearch && matchesCategory;
        });
        return { items: filteredProducts, totalPages: 1, totalItems: filteredProducts.length };
        
        
      default:
        return { items: [], totalPages: 1, totalItems: 0 };
    }
  };

  const { items: currentItems, totalPages, totalItems } = getCurrentContent();

  // Get categories for current tab
  const getCategories = () => {
    switch (activeTab) {
      case 'product':
        return ["All", ...Array.from(new Set(productImages.map(img => img.category)))];
      default:
        return [];
    }
  };

  const categories = getCategories();

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header Section */}
      <section className="relative py-32 px-4 bg-gradient-to-br from-brand-500 via-brand-600 to-brand-secondary">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            {/* Back to main website navigation */}
            <Link 
              to="/"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Passpoint.com
            </Link>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight text-white">
              Press & Media<br />
              resources
            </h1>
            
            {/* Navigation Tabs */}
            <div className="flex flex-wrap gap-4 mt-16">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`px-8 py-4 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                      activeTab === tab.key
                        ? 'bg-white text-brand-500 shadow-lg'
                        : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                    }`}
                  >
                    <IconComponent size={16} />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search - Only for news tab */}
      {activeTab === 'news' && (
        <section className="py-8 border-b border-slate-200">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                  <Input
                    placeholder="Search news articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-white border-slate-300 text-slate-900 placeholder:text-slate-500"
                  />
                </div>
                
                {categories.length > 1 && (
                  <div className="flex gap-2 flex-wrap">
                    {categories.map((category) => (
                      <Button
                        key={category}
                        variant={selectedCategory === category ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedCategory(category)}
                        className={selectedCategory === category ? 
                          "bg-brand-500 text-white border-brand-500" : 
                          "bg-transparent border-slate-600 text-white hover:bg-slate-700"
                        }
                      >
                        {category}
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Content Grid */}
      <section className="pb-20 px-4">
        <div className="container mx-auto">
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-500 mx-auto mb-4"></div>
                <p className="text-slate-600">Loading content...</p>
              </div>
            </div>
          ) : (
            <>
              {/* News Content */}
              {activeTab === 'news' && (
                <>
                   <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                     {(currentItems as PressItem[]).map((item) => (
                       <Card key={item.id} className="group bg-slate-800 border-slate-700 overflow-hidden hover:bg-slate-700 transition-all duration-300">
                         <div className="aspect-video overflow-hidden relative">
                           <img 
                             src={item.image}
                             alt={item.title}
                             className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                           />
                           <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                           <div className="absolute bottom-4 left-4">
                             <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                               {item.category}
                             </Badge>
                           </div>
                         </div>
                         
                         <CardContent className="p-6">
                           <div className="flex items-center gap-2 mb-3 text-sm text-white/80">
                             <Calendar className="w-4 h-4" />
                             {formatDate(item.date)}
                           </div>
                           
                           <h3 className="text-xl font-bold mb-3 text-white group-hover:text-white/90 transition-colors leading-tight">
                             {item.title}
                           </h3>
                           
                           <p className="text-white/80 mb-4 text-sm leading-relaxed line-clamp-3">
                             {item.excerpt}
                           </p>
                           
                           <Link to={`/press-media/news/${item.slug}`}>
                             <Button 
                               variant="ghost" 
                               className="w-full justify-between text-white hover:bg-white/20 hover:text-white border border-white/30 hover:border-white/50 transition-all duration-300"
                             >
                               Read more
                               <ExternalLink className="w-4 h-4" />
                             </Button>
                           </Link>
                         </CardContent>
                       </Card>
                     ))}
                  </div>
                  
                  {/* Pagination for News */}
                  {totalPages > 1 && (
                    <div className="flex justify-center mt-12">
                      <Pagination>
                        <PaginationContent>
                          <PaginationItem>
                            <PaginationPrevious 
                              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                              className={currentPage === 1 ? "pointer-events-none opacity-50" : "text-white hover:bg-slate-700"}
                            />
                          </PaginationItem>
                          {[...Array(totalPages)].map((_, i) => (
                            <PaginationItem key={i + 1}>
                              <PaginationLink
                                onClick={() => setCurrentPage(i + 1)}
                                isActive={currentPage === i + 1}
                                className={currentPage === i + 1 ? 
                                  "bg-brand-500 text-white border-brand-500" : 
                                  "text-white hover:bg-slate-700"
                                }
                              >
                                {i + 1}
                              </PaginationLink>
                            </PaginationItem>
                          ))}
                          <PaginationItem>
                            <PaginationNext 
                              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                              className={currentPage === totalPages ? "pointer-events-none opacity-50" : "text-white hover:bg-slate-700"}
                            />
                          </PaginationItem>
                        </PaginationContent>
                      </Pagination>
                    </div>
                  )}
                </>
              )}

              {/* Product Images Content - Clean section-based layout */}
              {activeTab === 'product' && (
                <div className="max-w-7xl mx-auto py-12">
                  {Object.entries(productSections).map(([sectionTitle, images], sectionIndex) => {
                    // Use brand colors from your color scheme
                    const brandColors = ['#009EC5', '#74b0cf', '#8A8C8E'];
                    const currentColor = brandColors[sectionIndex % brandColors.length];
                    
                    return (
                      <div key={sectionTitle} className="mb-24">
                        {/* Section Header with more spacing */}
                        <div className="flex items-center justify-between mb-12">
                          <h2 className="text-4xl font-bold text-slate-900">{sectionTitle}</h2>
                          <Button 
                            variant="outline"
                            className="text-slate-600 border-slate-300 hover:bg-slate-50 px-6 py-3"
                            onClick={() => {
                              console.log(`Downloading all images from ${sectionTitle}`);
                              images.forEach((image: any, index: number) => {
                                setTimeout(() => {
                                  const link = document.createElement('a');
                                  link.href = image.downloadUrl;
                                  link.download = `passpoint-${sectionTitle.toLowerCase().replace(/\s+/g, '-')}-${index + 1}.png`;
                                  document.body.appendChild(link);
                                  link.click();
                                  document.body.removeChild(link);
                                }, index * 500);
                              });
                            }}
                          >
                            <Download className="w-4 h-4 mr-2" />
                            Download all
                          </Button>
                        </div>

                        {/* Images Grid with brand colors */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                          {images.map((image: any, imageIndex: number) => (
                            <div 
                              key={image.id} 
                              className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                              style={{ backgroundColor: `${currentColor}15` }}
                            >
                              <div className="aspect-video relative" style={{ backgroundColor: `${currentColor}10` }}>
                                <img 
                                  src={image.imageUrl}
                                  alt={`${sectionTitle} interface`}
                                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                  onError={(e) => {
                                    console.log(`Failed to load image: ${image.imageUrl}`);
                                    e.currentTarget.style.display = 'none';
                                  }}
                                  onLoad={() => {
                                    console.log(`Successfully loaded: ${image.imageUrl}`);
                                  }}
                                />
                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                
                                {/* Number badge */}
                                <div 
                                  className="absolute top-4 left-4 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg"
                                  style={{ backgroundColor: currentColor }}
                                >
                                  {imageIndex + 1}
                                </div>
                              </div>
                              
                              {/* Download Overlay */}
                              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <Button 
                                  className="text-white shadow-xl hover:scale-105 transition-transform duration-300"
                                  style={{ backgroundColor: currentColor }}
                                  onClick={() => {
                                    console.log(`Downloading image: ${image.id}`);
                                    const link = document.createElement('a');
                                    link.href = image.downloadUrl;
                                    link.download = `passpoint-${image.id}.png`;
                                    document.body.appendChild(link);
                                    link.click();
                                    document.body.removeChild(link);
                                  }}
                                >
                                  <Download className="w-4 h-4 mr-2" />
                                  Download PNG
                                </Button>
                              </div>
                              
                              {/* Bottom info bar */}
                              <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-sm transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                <h4 className="font-semibold text-slate-900 text-sm mb-1">
                                  {sectionTitle} {imageIndex + 1}
                                </h4>
                                <p className="text-xs text-slate-600">High-resolution • PNG format</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Brand Assets Content */}
              {activeTab === 'brand' && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {(currentItems as BrandAsset[]).map((asset) => (
                    <Card key={asset.id} className="group bg-slate-800 border-slate-700 overflow-hidden hover:bg-slate-700 transition-all duration-300">
                      {asset.imageUrl && (
                        <div className="aspect-video overflow-hidden bg-slate-700">
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
                            <Badge variant="secondary" className="bg-brand-500/20 text-brand-500 border-brand-500/30">
                              {asset.category}
                            </Badge>
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold mb-2 text-white">
                          {asset.title}
                        </h3>
                        
                        <p className="text-slate-300 mb-4 text-sm">
                          {asset.description}
                        </p>
                        
                        <div className="text-xs text-slate-400 mb-4 space-y-1">
                          <div>Format: {asset.format}</div>
                          <div>Size: {asset.size}</div>
                        </div>
                        
                        <Button 
                          className="w-full bg-brand-500 hover:bg-brand-600 text-white"
                          onClick={() => handleDownload(asset)}
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download Asset
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </>
          )}

        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default PressMediaResources;