
import TestimonialCarousel from "./TestimonialCarousel";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    company: "Ubari",
    text: "Passpoint has radically reduced our go-live timeline and gives us a real advantage for cross-Africa expansion.",
    name: "Sarah Johnson",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=60&fit=crop&crop=center",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=100&h=100&fit=crop&crop=center"
  },
  {
    company: "FinTech Solutions",
    text: "The unified API approach has streamlined our operations across multiple African markets. Exceptional service and support.",
    name: "Michael Chen",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=60&fit=crop&crop=center",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=center"
  },
  {
    company: "PaymentHub Africa",
    text: "Passpoint's compliance expertise and technical support made our African expansion seamless. Highly recommended!",
    name: "Amara Okafor",
    logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=60&fit=crop&crop=center",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=center"
  }
];

const Testimonials = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#181818] to-[#2a2a2a] py-16" id="testimonials">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            What Our Customers Say
          </h2>
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
          <TestimonialCarousel testimonials={testimonials} />
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Testimonials;
