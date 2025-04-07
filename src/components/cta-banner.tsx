import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

interface CtaBannerProps {
  title?: string;
  description?: string;
  className?: string;
}

export function CtaBanner({
  title = "Join Our Mission",
  description = "Help us empower young minds through accessible STEM education",
  className = ""
}: CtaBannerProps) {
  return (
    <section className={`bg-gradient-to-r from-blue-500 to-purple-600 text-white p-10 rounded-2xl ${className}`}>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-xl mb-8 opacity-90">
          {description}
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-blue-50 border-white">
            <a href="mailto:code4achange@gmail.com" className="w-full">Contact Us</a>
          </Button>
          
          <Button size="lg" className="bg-primary/20 border-2 border-white hover:bg-white/10">
            <Link href="/about" className="w-full">Learn More</Link>
          </Button>
          
          <Button size="lg" variant="default" className="bg-yellow-500 hover:bg-yellow-600 border-none">
            <a 
              href="https://www.paypal.com/donate/?hosted_button_id=YOURID" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full flex items-center gap-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
              Donate Now
            </a>
          </Button>
        </div>
        
        <p className="mt-6 text-sm opacity-80">
          Questions? Email us at <a href="mailto:code4achange@gmail.com" className="underline hover:no-underline">code4achange@gmail.com</a>
        </p>
        <div className="flex justify-center gap-4 mt-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin size={20} />
            </a>
          </div>
      </div>
    </section>
  )
}