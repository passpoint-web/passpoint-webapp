
import ScrollReveal from "./ScrollReveal";
import { useNavigate } from "react-router-dom";
import { Clock, CheckCircle, Users, Globe, ArrowRight, Phone, Mail, MessageCircle } from "lucide-react";

const Contact = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/contact-form');
  };

  const benefits = [
    {
      icon: Clock,
      title: "24-Hour Response",
      description: "Get answers to your questions within one business day"
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "Personal account manager for enterprise clients"
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description: "Support across all African time zones"
    }
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: "Sales Inquiries",
      description: "Speak with our sales team",
      action: "Schedule a call"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Get technical assistance",
      action: "Send an email"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our support team",
      action: "Start chatting"
    }
  ];

  return (
    <section className="w-full py-20 bg-gradient-to-br from-gray-50 via-white to-brand/5 relative overflow-hidden" id="contact">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZjFmNWY5IiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDwvcGF0dGVybj4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIgLz4KPC9zdmc+')] opacity-10"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-brand-gradient rounded-full opacity-20 blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-brand-gradient rounded-full opacity-15 blur-xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-brand-gradient-subtle rounded-full text-sm font-medium text-brand mb-8 border border-brand/30 glass-effect">
              <CheckCircle size={16} className="text-brand" />
              <span className="text-brand-gradient font-semibold">
                Ready to get started?
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="text-display-md mb-8 text-gray-900">
              Ready to Expand 
              <span className="text-brand-gradient"> Across Africa</span>?
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-body-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Join hundreds of companies already using Passpoint to scale their operations across Africa. 
              Our team of experts is ready to help you get started with a personalized onboarding experience.
            </p>
          </ScrollReveal>
        </div>

        {/* Benefits Section */}
        <ScrollReveal delay={300}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center card-hover p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-gradient-subtle rounded-2xl mb-4">
                  <benefit.icon className="text-brand" size={28} />
                </div>
                <h3 className="text-heading-md text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-body-md text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Side - Process Steps */}
          <ScrollReveal>
            <div>
              <h3 className="text-heading-xl text-gray-900 mb-8">
                Get Started in 3 Simple Steps
              </h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="bg-brand-gradient p-4 rounded-2xl shadow-lg flex-shrink-0">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <span className="text-brand text-lg font-bold">1</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-heading-sm text-gray-900 mb-2">Discovery Call</h4>
                    <p className="text-body-md text-gray-600">We'll understand your specific needs, business model, and target markets to create a tailored integration plan.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="bg-brand-gradient p-4 rounded-2xl shadow-lg flex-shrink-0">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <span className="text-brand text-lg font-bold">2</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-heading-sm text-gray-900 mb-2">Custom Integration</h4>
                    <p className="text-body-md text-gray-600">Our technical team will work with you to implement Passpoint's API with full documentation and sandbox testing.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="bg-brand-gradient p-4 rounded-2xl shadow-lg flex-shrink-0">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <span className="text-brand text-lg font-bold">3</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-heading-sm text-gray-900 mb-2">Go Live</h4>
                    <p className="text-body-md text-gray-600">Launch your African payment infrastructure and start serving customers across the continent immediately.</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
          
          {/* Right Side - Contact Form CTA */}
          <ScrollReveal delay={200}>
            <div className="text-center">
              <div className="card-brand p-12 relative overflow-hidden">
                {/* Decorative gradient */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-brand-gradient"></div>
                
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-gradient-subtle rounded-3xl mb-6">
                    <ArrowRight className="text-brand" size={32} />
                  </div>
                  
                  <h3 className="text-heading-xl text-gray-900 mb-4">
                    Get Started Today
                  </h3>
                  <p className="text-body-lg text-gray-600 mb-8">
                    Fill out our contact form and our team will reach out to you within 24 hours to discuss your specific requirements.
                  </p>
                  
                  <button
                    onClick={handleGetStarted}
                    className="btn-primary w-full py-5 px-8 text-lg group mb-6"
                  >
                    Contact Us Now
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                  </button>
                  
                  <p className="text-body-sm text-gray-500">
                    No commitment required • Free consultation • 24-hour response time
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Contact Methods */}
        <ScrollReveal delay={400}>
          <div className="text-center mb-12">
            <h3 className="text-heading-lg text-gray-900 mb-4">Or Contact Us Directly</h3>
            <p className="text-body-lg text-gray-600 mb-8">Choose the method that works best for you</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactMethods.map((method, index) => (
                <div key={index} className="card-hover p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-brand/10 rounded-lg mb-4">
                    <method.icon className="text-brand" size={24} />
                  </div>
                  <h4 className="text-heading-sm text-gray-900 mb-2">{method.title}</h4>
                  <p className="text-body-sm text-gray-600 mb-4">{method.description}</p>
                  <button className="text-brand font-medium text-sm hover:underline transition-colors">
                    {method.action}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Trust Indicators */}
        <ScrollReveal delay={500}>
          <div className="text-center card-brand p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-heading-xl text-brand mb-2">40+</div>
                <div className="text-body-sm text-gray-600">Partner Companies</div>
              </div>
              <div className="text-center">
                <div className="text-heading-xl text-brand mb-2">52+</div>
                <div className="text-body-sm text-gray-600">Countries Covered</div>
              </div>
              <div className="text-center">
                <div className="text-heading-xl text-brand mb-2">99.9%</div>
                <div className="text-body-sm text-gray-600">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-heading-xl text-brand mb-2">24/7</div>
                <div className="text-body-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Contact;
