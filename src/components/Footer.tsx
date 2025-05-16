
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">James Pediongco</h3>
            <p className="text-white/70 mb-4">
              A passionate web developer focused on creating elegant, efficient, and user-friendly websites.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-white/70 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-white/70 hover:text-white transition-colors">About</a></li>
              <li><a href="#skills" className="text-white/70 hover:text-white transition-colors">Skills</a></li>
              <li><a href="#projects" className="text-white/70 hover:text-white transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-white/70">
                <span className="font-medium text-white">Email:</span> <a href="#">djacejames@gmail.com</a>
              </li>
              <li className="text-white/70">
                <span className="font-medium text-white">Phone:</span> <a href="tel:+639272256599//">+639272256599</a>
              </li>
              <li className="text-white/70">
                <span className="font-medium text-white">Location:</span> Bacolod City, Philippines
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70">
            © {currentYear} James Pediongco. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
