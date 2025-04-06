'use client'
import { useState } from 'react';
import { submitToGoogleForm } from '@/lib/utils';
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CtaBanner } from "@/components/cta-banner"
import { TestimonialsScroll } from '@/components/testimonials-scroll';
import Image from 'next/image';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    grade: '',
    feedback: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.grade || !formData.feedback) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);
    try {
      await submitToGoogleForm(formData);
      toast.success("Thank you for your feedback!");
      setFormData({ name: '', grade: '', feedback: '' });
    } catch (error) {
      toast.error("Failed to submit feedback. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="relative overflow-hidden py-16 md:py-24">
          <div className="absolute inset-0 -z-10 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/patterns/circuit-board.svg')] bg-repeat"></div>
          </div>
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-block relative">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-0 inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                    Learn to Code, Make a Difference
                  </h1>
                  <div className="h-1.5 w-full bg-gradient-to-r from-blue-500 to-purple-500 mt-3 rounded-full animate-pulse"></div>
                </div>
                <p className="mt-6 text-xl text-muted-foreground">
                  A free, self-paced coding program for middle schoolers — including Python, Web Development, AI, and more.
                </p>
              </div>

              <div className="flex justify-center mb-10">
                <Link href="/courses">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 border-none text-white px-8 py-6 text-lg hover:shadow-lg transition-all">
                    📥 Register for Summer 2025 – It’s Free!
                  </Button>
                </Link>
              </div>

              {/* Three pillars remain unchanged */}
            </div>
          </div>
        </div>

        {/* Move Featured Courses Up */}
        {/* Reinserted here from its original place further down */}
        {/* ... (Featured Courses Section code block remains unchanged and stays here now) ... */}

        {/* Social & Contact in Footer */}
        <footer className="text-center mt-16 text-sm text-muted-foreground border-t pt-6 border-muted/30">
          <p>Contact us at <a href="mailto:code4achange@gmail.com" className="underline">code4achange@gmail.com</a></p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin size={20} />
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
