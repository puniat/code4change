'use client'
import { useState } from 'react';
import { submitToGoogleForm } from '@/lib/utils';
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import Link from "next/link"
import Image from 'next/image'
import { TestimonialsScroll } from '@/components/testimonials-scroll';

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
    <main className="min-h-screen bg-background">
      <nav className="border-b relative">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center gap-6">
            {/* <Image
              src="/images/Logo-4.png"
              alt="Code4Change Logo"
              width={80}
              height={80}
              className="rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
              priority
            /> */}
            <h1 className="text-2xl font-bold text-primary">Code4Change</h1>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/about">
              <Button variant="ghost">About</Button>
            </Link>
            <Link href="/courses">
              <Button variant="ghost">Courses</Button>
            </Link>
            <ModeToggle />
          </div>
        </div>
      </nav>

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold tracking-tight">
            Learn to Code, Make a Difference
          </h1>
          <p className="mt-6 text-xl text-muted-foreground">
            Join our community of students learning to code while working on projects that matter.
            Start your journey in programming and create positive change.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link href="/courses">
              <Button size="lg">Browse Courses</Button>
            </Link>
            <Link href="/about">
              <Button size="lg">Learn More</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Featured Courses</h2>
          <p className="text-center text-muted-foreground mb-12">
            Courses and hourly sessions are designed for grades 4-8 students (ages 9-13)
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: "web-dev",
                title: "Web Development Basics",
                description: "Discover the fun of web creation! Learn HTML, CSS, and JavaScript to design and build your own interactive websites.",
                level: "Beginner",
                grades: "Grades 4-6",
                duration: "6-10 weeks"
              },
              {
                id: "python",
                title: "Python Basics for Young Innovators",
                description: "Take your first steps into learning Python, and unlock your potential to innovate, excel, and make a difference—one line of code at a time!",
                level: "Beginner",
                grades: "Grades 6-8",
                duration: "6-10 weeks"
              },
              {
                id: "code-connect",
                title: "Code & Connect Hour",
                description: "Where coding, creativity, and the thrill of exploring new technologies collide in a fun-filled, engaging one-hour session!",
                level: "Beginner",
                grades: "Grades 4-8",
                duration: "1 hour sessions"
              }
            ].map((course, index) => (
              <div key={index} className="bg-background rounded-lg p-6 shadow-sm relative overflow-hidden">
                {/* FREE badge */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-full">
                    FREE
                  </span>
                </div>
                
                <div className="flex flex-col h-full">
                  <h3 className="text-xl font-semibold text-center mb-2">{course.title}</h3>
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <span className="text-sm text-muted-foreground">{course.grades}</span>
                    <span className="text-sm text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">{course.duration}</span>
                  </div>
                  <p className="text-muted-foreground text-left flex-grow">{course.description}</p>
                  <div className="mt-6 flex justify-between items-center w-full">
                    <span className="text-sm text-primary">{course.level}</span>
                    <Link href={`/courses?course=${course.id}`}>
                      <Button variant="outline" size="sm">Learn More</Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compact Learning Stories Section */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-3">Learning Stories</h2>
            <p className="text-muted-foreground text-center mb-8">Share your coding journey with us</p>
            
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    required
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="p-2.5 rounded-md border bg-background/50"
                  />
                  <select 
                    required
                    value={formData.grade}
                    onChange={(e) => setFormData({...formData, grade: e.target.value})}
                    className="p-2.5 rounded-md border bg-background/50"
                  >
                    <option value="">Select Grade</option>
                    {[...Array(8)].map((_, i) => (
                      <option key={i} value={`Grade ${i + 1}`}>Grade {i + 1}</option>
                    ))}
                    <option value="Parent">Parent</option>
                  </select>
                </div>
                <textarea 
                  required
                  placeholder="Share your coding journey..."
                  value={formData.feedback}
                  onChange={(e) => setFormData({...formData, feedback: e.target.value})}
                  className="w-full p-2.5 rounded-md border bg-background/50 h-24"
                />
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Share Your Story'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-3">Get in Touch</h2>
            <p className="text-muted-foreground mb-6">Have questions? We'd love to hear from you!</p>
            
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <div className="flex flex-col items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg
                    className="h-5 w-5 text-primary"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                
                <a 
                  href="mailto:code4achange@gmail.com"
                  className="text-primary hover:text-primary/80 transition-colors duration-200 font-medium"
                >
                  code4achange@gmail.com
                </a>

                <p className="text-sm text-muted-foreground">
                  Reach out for learning opportunities or collaboration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
