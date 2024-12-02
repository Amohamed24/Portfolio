import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-6">Get in Touch</h2>
        <p className="text-lg mb-8">Have questions or want to work together? Drop me a message below!</p>
        
        <form className="max-w-xl mx-auto space-y-4">
          <Input type="text" placeholder="Your Name" className="w-full" />
          <Input type="email" placeholder="Your Email" className="w-full" />
          <Textarea placeholder="Your Message" className="w-full h-24" />
          <Button className="w-full">Send Message</Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
