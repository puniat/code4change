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
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">Code4Change</h1>
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

      <section className="py-16 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">Learning Stories</h2>
            <p className="text-muted-foreground">Join our growing community of young coders and parents</p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Feedback Form */}
            <div className="bg-card p-8 rounded-lg shadow-lg mb-12">
              <h3 className="text-2xl font-semibold mb-6">Share Your Experience</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    required
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="p-3 rounded-md border bg-background/50"
                  />
                  <select 
                    required
                    value={formData.grade}
                    onChange={(e) => setFormData({...formData, grade: e.target.value})}
                    className="p-3 rounded-md border bg-background/50"
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
                  className="w-full p-3 rounded-md border bg-background/50 h-32"
                />
                <Button 
                  type="submit" 
                  className="w-full py-6" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Share Your Story'}
                </Button>
              </form>
            </div>

            {/* Testimonials */}
            <TestimonialsScroll />
          </div>
        </div>
      </section>
    </main>
  )
}
