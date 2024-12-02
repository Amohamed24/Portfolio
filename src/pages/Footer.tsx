import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto text-center space-y-4">
        <div className="text-lg text-gray-400 pt-5">
        <p>© 2024 Mohamed Ahmed</p>
        <p>Made using React and Tailwind</p>
        </div>
       
        <div className="flex justify-center space-x-4">
          <Button variant="ghost" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </Button>
          <Button variant="ghost" asChild>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
