import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-foreground mb-8 tracking-tight">
            About <span className="font-medium text-primary">Passpoint</span>
          </h1>
          <div className="w-24 h-px bg-primary mx-auto mb-12"></div>
          <p className="text-xl sm:text-2xl text-muted-foreground font-light leading-relaxed max-w-3xl mx-auto">
            Building the unified payment infrastructure Africa needs
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-12">
            <div className="text-lg sm:text-xl text-muted-foreground font-light leading-relaxed">
              <p className="mb-8">
                Passpoint is a financial technology company building the unified payment infrastructure Africa needs. We are unifying the continent's <span className="text-foreground font-medium">54 countries</span>, <span className="text-foreground font-medium">42 currencies</span>, and <span className="text-foreground font-medium">over 200 payment methods</span> into a single intelligent API that connects with G20 markets for seamless collections, cross-border payouts, currency exchange, compliance, and treasury services.
              </p>
            </div>
            
            <div className="h-px bg-border"></div>
            
            <div className="text-lg sm:text-xl text-muted-foreground font-light leading-relaxed">
              <p>
                Purpose-built for Africa's fragmented financial landscape, Passpoint enables businesses to scale payment operations, streamline processes, and operate globally with confidence. With offices in <span className="text-foreground font-medium">Lagos</span>, <span className="text-foreground font-medium">Ivory Coast</span>, <span className="text-foreground font-medium">Kenya</span>, the <span className="text-foreground font-medium">United States</span>, <span className="text-foreground font-medium">United Kingdom</span>, and <span className="text-foreground font-medium">Poland</span>, Passpoint is licensed by the Financial Transactions and Reports Analysis Centre of Canada (FINTRAC) and Poland's Ministry of Finance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;