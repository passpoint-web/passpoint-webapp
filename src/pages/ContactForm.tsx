
import ContactForm from "@/components/ContactForm";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ContactFormPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background min-h-screen">
      <header>
        <Navigation />
      </header>
      <main className="pt-20">
        <section className="w-full py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="mb-8">
              <button
                onClick={() => navigate('/')}
                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
              >
                <ArrowLeft size={20} className="mr-2" />
                Back to Home
              </button>
            </div>
            
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                Contact Our Team
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Ready to expand across Africa? Fill out the form below and our experts will get back to you within 24 hours.
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactFormPage;
