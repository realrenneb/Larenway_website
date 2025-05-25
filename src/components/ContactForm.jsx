import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const ContactForm = () => {
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    console.log('Form data:', data);

    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We'll get back to you soon.",
    });
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="name" className="text-deep-navy">Full Name</Label>
        <Input type="text" id="name" name="name" placeholder="e.g. Jane Doe" required className="mt-1" />
      </div>
      <div>
        <Label htmlFor="email" className="text-deep-navy">Email Address</Label>
        <Input type="email" id="email" name="email" placeholder="e.g. jane.doe@example.com" required className="mt-1" />
      </div>
      <div>
        <Label htmlFor="company" className="text-deep-navy">Company (Optional)</Label>
        <Input type="text" id="company" name="company" placeholder="e.g. Example Inc." className="mt-1" />
      </div>
      <div>
        <Label htmlFor="budget" className="text-deep-navy">Estimated Budget (Optional)</Label>
        <Input type="text" id="budget" name="budget" placeholder="e.g. $5,000 - $10,000" className="mt-1" />
      </div>
      <div>
        <Label htmlFor="details" className="text-deep-navy">Project Details</Label>
        <Textarea id="details" name="details" rows={5} placeholder="Tell us about your project..." required className="mt-1" />
      </div>
      <Button type="submit" size="lg" className="w-full sm:w-auto rounded-2xl">Send Message</Button>
    </form>
  );
};

export default ContactForm;