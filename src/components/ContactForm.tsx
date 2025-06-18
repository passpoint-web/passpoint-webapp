
import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { useToast } from './ui/use-toast';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="card-brand p-8 max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-heading-xl text-gray-900 mb-4">Get Started with Passpoint</h2>
        <p className="text-body-lg text-gray-600">
          Tell us about your requirements and we'll create a custom solution for your business.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-heading-sm text-gray-700 mb-2">
              First Name *
            </label>
            <Input
              id="firstName"
              name="firstName"
              required
              placeholder="Enter your first name"
              className="input"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-heading-sm text-gray-700 mb-2">
              Last Name *
            </label>
            <Input
              id="lastName"
              name="lastName"
              required
              placeholder="Enter your last name"
              className="input"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-heading-sm text-gray-700 mb-2">
            Work Email *
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="your.email@company.com"
            className="input"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-heading-sm text-gray-700 mb-2">
            Company *
          </label>
          <Input
            id="company"
            name="company"
            required
            placeholder="Your company name"
            className="input"
          />
        </div>

        <div>
          <label htmlFor="businessType" className="block text-heading-sm text-gray-700 mb-2">
            Business Type *
          </label>
          <Select name="businessType" required>
            <SelectTrigger className="input">
              <SelectValue placeholder="Select your business type" />
            </SelectTrigger>
            <SelectContent className="bg-white border border-gray-200 rounded-xl shadow-lg z-50">
              <SelectItem value="fintech" className="hover:bg-brand/10 cursor-pointer">Fintech</SelectItem>
              <SelectItem value="ecommerce" className="hover:bg-brand/10 cursor-pointer">E-commerce</SelectItem>
              <SelectItem value="marketplace" className="hover:bg-brand/10 cursor-pointer">Marketplace</SelectItem>
              <SelectItem value="enterprise" className="hover:bg-brand/10 cursor-pointer">Enterprise</SelectItem>
              <SelectItem value="startup" className="hover:bg-brand/10 cursor-pointer">Startup</SelectItem>
              <SelectItem value="other" className="hover:bg-brand/10 cursor-pointer">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label htmlFor="countries" className="block text-heading-sm text-gray-700 mb-2">
            Target Countries
          </label>
          <Input
            id="countries"
            name="countries"
            placeholder="e.g., Nigeria, Kenya, South Africa"
            className="input"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-heading-sm text-gray-700 mb-2">
            Tell us about your requirements *
          </label>
          <Textarea
            id="message"
            name="message"
            required
            rows={4}
            placeholder="Describe your payment needs, expected transaction volumes, and timeline..."
            className="textarea"
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full py-4 text-lg"
        >
          {isSubmitting ? 'Sending...' : 'Get Started with Passpoint'}
        </Button>

        <p className="text-body-sm text-gray-500 text-center">
          By submitting this form, you agree to our Privacy Policy and Terms of Service.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
