import { CreditCard, Globe, Building2, ArrowRight } from 'lucide-react';
import EnhancedCard from './EnhancedCard';

const SolutionsPreview = () => {
  const solutions = [
    {
      icon: Globe,
      title: "Global Payments",
      description: "Transact seamlessly across Africa and G20 countries with comprehensive coverage across all major markets.",
      href: "/payment-coverage",
      features: ["Multi-currency support", "Global compliance", "Real-time processing"]
    },
    {
      icon: CreditCard,
      title: "Global Card Issuing",
      description: "Launch global card programs with a single integration. Issue cards across multiple regions.",
      href: "/card-issuing",
      features: ["Global card programs", "Revenue sharing", "Full integration"]
    },
    {
      icon: Building2,
      title: "Corporate Banking",
      description: "Manage your global finance operations from one centralized platform with enterprise-grade tools.",
      href: "/corporate-banking",
      features: ["Centralized management", "Multi-entity support", "Advanced reporting"]
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Our Solutions
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive financial infrastructure to power your global business operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <EnhancedCard 
              key={solution.title} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg mr-4">
                    <solution.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    {solution.title}
                  </h3>
                </div>
                
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {solution.description}
                </p>

                <ul className="space-y-2 mb-8">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a 
                  href={solution.href}
                  className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors group-hover:gap-2 gap-1"
                >
                  Learn more <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </EnhancedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsPreview;