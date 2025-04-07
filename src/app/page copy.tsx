'use client'
import { useState } from 'react';
import { submitToGoogleForm } from '@/lib/utils';
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CtaBanner } from "@/components/cta-banner"
import { TestimonialsScroll } from '@/components/testimonials-scroll';
import Image from 'next/image';

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
        {/* Hero Section with Enhanced Mission Statement */}
        <div className="relative overflow-hidden py-16 md:py-24">
          {/* Abstract code-themed background pattern */}
          <div className="absolute inset-0 -z-10 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="w-full h-full bg-[url('/patterns/circuit-board.svg')] bg-repeat"></div>
            </div>
          </div>
          
          {/* Gradient orbs for visual interest */}
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Mission headline with animated gradient underline */}
              <div className="text-center mb-12">
                <div className="inline-block relative">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-0 inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                    Learn to Code, Make a Difference
                  </h1>
                  <div className="h-1.5 w-full bg-gradient-to-r from-blue-500 to-purple-500 mt-3 rounded-full animate-pulse"></div>
                </div>
              </div>
              
              {/* Featured callout with emphasis - no tilt */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl shadow-lg mb-10 relative overflow-hidden">
                {/* Background decoration elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                
                {/* Optional: subtle code pattern overlay for tech theme */}
                <div className="absolute inset-0 opacity-5 mix-blend-overlay">
                  <div className="w-full h-full bg-[url('/patterns/circuit-board.svg')] bg-repeat"></div>
                </div>
                
                <p className="text-xl md:text-2xl font-medium leading-relaxed relative z-10">
                  Empowering middle school students to become creators, not just consumers, of technology—while building skills that change communities for the better.
                </p>
              </div>
              
              {/* Three-column key points */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-card/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-muted relative overflow-hidden text-center">
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-blue-500/10 rounded-full"></div>
                  <div className="mb-3 text-3xl">👩‍💻</div>
                  <h3 className="font-bold text-lg mb-2">Free Access</h3>
                  <p className="text-muted-foreground text-sm">Equitable tech education for all students regardless of background</p>
                </div>
                
                <div className="bg-card/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-muted relative overflow-hidden text-center">
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-purple-500/10 rounded-full"></div>
                  <div className="mb-3 text-3xl">🚀</div>
                  <h3 className="font-bold text-lg mb-2">Project-Based</h3>
                  <p className="text-muted-foreground text-sm">Learn by building meaningful projects with real-world impact</p>
                </div>
                
                <div className="bg-card/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-muted relative overflow-hidden text-center">
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-green-500/10 rounded-full"></div>
                  <div className="mb-3 text-3xl">🌱</div>
                  <h3 className="font-bold text-lg mb-2">Growth-Focused</h3>
                  <p className="text-muted-foreground text-sm">No grades or tests—just creativity and skills development</p>
                </div>
              </div>
              
              {/* Call to action buttons */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Link href="/courses">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 border-none text-white px-8 py-6 text-lg hover:shadow-lg transition-all">
                    Explore Programs
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline" className="px-8 py-6 text-lg">
                    Our Story
                  </Button>
                </Link>
              </div>
              
              {/* Credibility markers */}
              <div className="pt-6 border-t border-muted/30">
                <p className="text-center text-sm text-muted-foreground">
                  Proudly partnering with educators from across the country to make coding accessible to all students
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* NEW: Who It's For & How It Works Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {/* Who It's For */}
            <div className="bg-card rounded-xl p-8 shadow-sm border border-muted relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/5 rounded-full"></div>
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 p-2 rounded-lg mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </span>
                Who It's For
              </h2>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="h-6 w-6 text-primary mr-2 shrink-0">✓</span>
                  <div>
                    <span className="font-medium">Middle school students (grades 5-8)</span>
                    <p className="text-muted-foreground">Curious about technology and ready to explore the world of coding</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 text-primary mr-2 shrink-0">✓</span>
                  <div>
                    <span className="font-medium">Absolute beginners welcome</span>
                    <p className="text-muted-foreground">No prior coding experience needed — start from scratch with us</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 text-primary mr-2 shrink-0">✓</span>
                  <div>
                    <span className="font-medium">Tech enthusiasts</span>
                    <p className="text-muted-foreground">Students who want to create websites, apps, or explore artificial intelligence</p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-8">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  100% FREE for all students
                </div>
              </div>
            </div>
            
            {/* How It Works */}
            <div className="bg-card rounded-xl p-8 shadow-sm border border-muted relative overflow-hidden">
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/5 rounded-full"></div>
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 p-2 rounded-lg mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                </span>
                How It Works
              </h2>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="h-6 w-6 text-purple-500 mr-2 shrink-0">1</span>
                  <div>
                    <span className="font-medium">Weekly virtual sessions</span>
                    <p className="text-muted-foreground">Interactive online classes with live instruction and hands-on projects</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 text-purple-500 mr-2 shrink-0">2</span>
                  <div>
                    <span className="font-medium">Self-paced projects</span>
                    <p className="text-muted-foreground">Students complete creative coding assignments independently between sessions</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 text-purple-500 mr-2 shrink-0">3</span>
                  <div>
                    <span className="font-medium">Growth-based learning</span>
                    <p className="text-muted-foreground">No grades or tests — progress is self-driven and focused on building skills</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 text-purple-500 mr-2 shrink-0">4</span>
                  <div>
                    <span className="font-medium">Collaborative environment</span>
                    <p className="text-muted-foreground">Peer learning encouraged through group activities and project sharing</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Featured Courses Section */}
        <section className="mb-20 relative">
          <h2 className="text-3xl font-bold text-center mb-4">Featured Courses</h2>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          
          {/* Summer Registration Banner */}
          <div className="bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10 p-6 rounded-xl mb-12 border border-blue-200/30 dark:border-blue-800/30 shadow-sm max-w-3xl mx-auto">
            <p className="text-center font-bold text-lg">
              <span className="animate-shimmer inline-block">
                🌟 Registration Open for Summer 2025 Program! Sign up today! 🌟
              </span>
            </p>
          </div>
          
          {/* Two columns on md screens and above */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Web Development Course */}
            <div className="bg-gradient-to-r from-blue-100/70 to-sky-100/70 dark:from-blue-900/40 dark:to-sky-900/40 rounded-xl p-6 shadow-sm relative overflow-hidden h-full">
              <div className="flex flex-col md:flex-row items-center gap-6 h-full">
                <div className="md:w-1/3 text-center relative">
                  <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm h-24 w-24 rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <span className="text-5xl">🌐</span>
                  </div>
                  <span className="bg-primary text-primary-foreground text-xs font-bold px-2.5 py-1 rounded-full absolute -top-2 -right-2">
                    FREE
                  </span>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold mb-2 text-blue-700 dark:text-blue-300">Web Development Basics</h3>
                  <p className="text-muted-foreground mb-4">
                    Discover the fun of web creation! Learn HTML, CSS, and JavaScript to design and build your own interactive websites.
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="bg-blue-50 dark:bg-blue-900/50 px-2 py-1 rounded-md">Grades 4-6</span>
                    <span>•</span>
                    <span className="bg-blue-50 dark:bg-blue-900/50 px-2 py-1 rounded-md">6-10 weeks</span>
                    <span>•</span>
                    <span className="bg-blue-50 dark:bg-blue-900/50 px-2 py-1 rounded-md">Beginner</span>
                  </div>
                  <Link href="/courses?course=web-dev">
                    <Button className="bg-blue-600 hover:bg-blue-700">Learn More</Button>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Python Course */}
            <div className="bg-gradient-to-r from-green-100/70 to-emerald-100/70 dark:from-green-900/40 dark:to-emerald-900/40 rounded-xl p-6 shadow-sm relative overflow-hidden h-full">
              <div className="flex flex-col md:flex-row items-center gap-6 h-full">
                <div className="md:w-1/3 text-center relative">
                  <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm h-24 w-24 rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <span className="text-5xl">🐍</span>
                  </div>
                  <span className="bg-primary text-primary-foreground text-xs font-bold px-2.5 py-1 rounded-full absolute -top-2 -right-2">
                    FREE
                  </span>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold mb-2 text-green-700 dark:text-green-300">Python Basics for Young Innovators</h3>
                  <p className="text-muted-foreground mb-4">
                    Take your first steps into learning Python, and unlock your potential to innovate, excel, and make a difference!
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="bg-green-50 dark:bg-green-900/50 px-2 py-1 rounded-md">Grades 6-8</span>
                    <span>•</span>
                    <span className="bg-green-50 dark:bg-green-900/50 px-2 py-1 rounded-md">6-10 weeks</span>
                    <span>•</span>
                    <span className="bg-green-50 dark:bg-green-900/50 px-2 py-1 rounded-md">Beginner</span>
                  </div>
                  <Link href="/courses?course=python">
                    <Button className="bg-green-600 hover:bg-green-700">Learn More</Button>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* AI Course */}
            <div className="bg-gradient-to-r from-purple-100/70 to-indigo-100/70 dark:from-purple-900/40 dark:to-indigo-900/40 rounded-xl p-6 shadow-sm relative overflow-hidden h-full">
              <div className="flex flex-col md:flex-row items-center gap-6 h-full">
                <div className="md:w-1/3 text-center relative">
                  <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm h-24 w-24 rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <span className="text-5xl">🤖</span>
                  </div>
                  <span className="bg-primary text-primary-foreground text-xs font-bold px-2.5 py-1 rounded-full absolute -top-2 -right-2">
                    FREE
                  </span>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold mb-2 text-purple-700 dark:text-purple-300">Artificial Intelligence</h3>
                  <p className="text-muted-foreground mb-4">
                    Learn the basics of machine learning through fun, interactive projects using AI applications and technologies!
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="bg-purple-50 dark:bg-purple-900/50 px-2 py-1 rounded-md">Grades 6-8</span>
                    <span>•</span>
                    <span className="bg-purple-50 dark:bg-purple-900/50 px-2 py-1 rounded-md">6-10 weeks</span>
                    <span>•</span>
                    <span className="bg-purple-50 dark:bg-purple-900/50 px-2 py-1 rounded-md">Beginner</span>
                  </div>
                  <Link href="/courses?course=ai-basics">
                    <Button className="bg-purple-600 hover:bg-purple-700">Learn More</Button>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Code & Connect Hour */}
            <div className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-xl p-6 shadow-sm relative overflow-hidden h-full">
              <div className="flex flex-col md:flex-row items-center gap-6 h-full">
                <div className="md:w-1/3 text-center relative">
                  <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm h-24 w-24 rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <span className="text-5xl">⏱️</span>
                  </div>
                  <span className="bg-primary text-primary-foreground text-xs font-bold px-2.5 py-1 rounded-full absolute -top-2 -right-2">
                    FREE
                  </span>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-300">Code & Connect Hour</h3>
                  <p className="text-muted-foreground mb-4">
                    Where coding, creativity, and exploring new technologies collide in a fun-filled, engaging one-hour session!
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="bg-blue-50 dark:bg-blue-900/50 px-2 py-1 rounded-md">Grades 4-8</span>
                    <span>•</span>
                    <span className="bg-blue-50 dark:bg-blue-900/50 px-2 py-1 rounded-md">1 hour sessions</span>
                  </div>
                  <Link href="/courses?course=code-connect">
                    <Button className="bg-blue-600 hover:bg-blue-700">Join a Session</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Learning Stories integrated with testimonials */}
        <section className="mb-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Learning Stories</h2>
            <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
            <p className="text-center text-muted-foreground mb-12">
              See what our students are saying and share your own coding journey
            </p>
            
            {/* Two column layout on larger screens */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left column: form */}
              <div className="bg-card p-6 rounded-xl shadow-sm border border-muted">
                <h3 className="text-xl font-semibold mb-4">Share Your Story</h3>
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
              
              {/* Right column: testimonial */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 p-6 rounded-xl border border-blue-200/30 dark:border-blue-800/30">
                <h3 className="text-xl font-semibold mb-4">Featured Stories</h3>
                <div className="italic text-muted-foreground">
                  <p className="mb-4">"Code4Change opened my eyes to what I could achieve with programming. I never thought I could build my own website, but now I've created one that helps my community!"</p>
                  <div className="flex items-center">
                    <div className="bg-blue-100 dark:bg-blue-800 h-8 w-8 rounded-full flex items-center justify-center font-bold text-blue-600 dark:text-blue-200 mr-3">
                      M
                    </div>
                    <div>
                      <p className="font-medium">Maya, 7th Grade</p>
                      <p className="text-xs text-muted-foreground">(Placeholder)</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-sm text-muted-foreground">More stories coming soon as we launch our programs!</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Banner - contained within page width */}
        <div className="mb-8">
          <CtaBanner 
            title="Support Our Students" 
            description="Your contribution helps us provide free coding education to young innovators and keep Code4Change running."
          />
        </div>
      </div>
    </main>
  )
}
