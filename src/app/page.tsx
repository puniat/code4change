// Complete homepage with all sections restored and enhanced
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
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text mb-4">
            Learn to Code, Make a Difference
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            A free, self-paced coding program for middle schoolers — including Python, Web Development, AI, and more.
          </p>
          <Link href="/courses">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-6">
              📥 Register for Summer 2025 – It’s Free!
            </Button>
          </Link>
        </div>

        {/* Featured Courses */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-4">Featured Courses</h2>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: '🌐',
                title: 'Web Development Basics',
                desc: 'Learn HTML, CSS, and JavaScript to design and build your own interactive websites.',
                age: 'Grades 4–6',
                duration: '6–10 weeks',
                href: '/courses?course=web-dev',
                color: 'blue'
              },
              {
                icon: '🐍',
                title: 'Python Basics for Young Innovators',
                desc: 'Take your first steps into Python and unlock your potential to innovate and make a difference.',
                age: 'Grades 6–8',
                duration: '6–10 weeks',
                href: '/courses?course=python',
                color: 'green'
              },
              {
                icon: '🤖',
                title: 'Artificial Intelligence',
                desc: 'Explore machine learning and AI concepts through fun and creative projects.',
                age: 'Grades 6–8',
                duration: '6–10 weeks',
                href: '/courses?course=ai-basics',
                color: 'purple'
              },
              {
                icon: '⏱️',
                title: 'Code & Connect Hour',
                desc: 'One-hour weekly coding jams — perfect for busy schedules and curious minds.',
                age: 'Grades 4–8',
                duration: '1 hour per session',
                href: '/courses?course=code-connect',
                color: 'indigo'
              }
            ].map((course, idx) => (
              <div key={idx} className={`p-6 rounded-xl border shadow-sm bg-${course.color}-50 dark:bg-${course.color}-900/30`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-5xl">{course.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{course.title}</h3>
                    <p className="text-sm text-muted-foreground">{course.desc}</p>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground mb-4">
                  <span>{course.age}</span> • <span>{course.duration}</span>
                </div>
                <Link href={course.href}>
                  <Button className={`bg-${course.color}-600 hover:bg-${course.color}-700 text-white`}>Register Now</Button>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">How It Works</h2>
            <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-12"></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div className="bg-card p-6 rounded-xl shadow-sm border border-muted">
                <div className="text-4xl mb-3">🧑‍🏫</div>
                <h3 className="font-semibold mb-2">Weekly Sessions</h3>
                <p className="text-muted-foreground text-sm">Live virtual meetups for collaborative learning (optional, not tracked)</p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-sm border border-muted">
                <div className="text-4xl mb-3">💡</div>
                <h3 className="font-semibold mb-2">Project-Based</h3>
                <p className="text-muted-foreground text-sm">Students create real-world projects like websites, calculators, and AI demos</p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-sm border border-muted">
                <div className="text-4xl mb-3">⏱️</div>
                <h3 className="font-semibold mb-2">Self-Paced</h3>
                <p className="text-muted-foreground text-sm">Work at your own pace between sessions — no pressure or deadlines</p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-sm border border-muted">
                <div className="text-4xl mb-3">🌟</div>
                <h3 className="font-semibold mb-2">No Tests</h3>
                <p className="text-muted-foreground text-sm">No grades, no stress — just creativity and skill-building</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ CTA */}
        <section className="mb-20 text-center">
          <h2 className="text-3xl font-bold mb-4">Got Questions?</h2>
          <p className="text-muted-foreground mb-6">Visit our FAQ to learn about scheduling, support, and more.</p>
          <Link href="/faq">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">View FAQ</Button>
          </Link>
        </section>

        {/* Learning Stories (Testimonials) */}
        <section className="mb-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Learning Stories</h2>
            <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
            <p className="text-center text-muted-foreground mb-12">
              See what our students and parents are saying — and share your own story!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card p-6 rounded-xl shadow-sm border border-muted">
                <h3 className="text-xl font-semibold mb-4">Share Your Story</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input required type="text" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="p-2.5 rounded-md border bg-background/50" />
                    <select required value={formData.grade} onChange={(e) => setFormData({ ...formData, grade: e.target.value })} className="p-2.5 rounded-md border bg-background/50">
                      <option value="">Select Grade</option>
                      {[...Array(8)].map((_, i) => (
                        <option key={i} value={`Grade ${i + 1}`}>Grade {i + 1}</option>
                      ))}
                      <option value="Parent">Parent</option>
                    </select>
                  </div>
                  <textarea required placeholder="Share your coding journey..." value={formData.feedback} onChange={(e) => setFormData({ ...formData, feedback: e.target.value })} className="w-full p-2.5 rounded-md border bg-background/50 h-24" />
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Share Your Story'}
                  </Button>
                </form>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 p-6 rounded-xl border border-blue-200/30 dark:border-blue-800/30">
                <h3 className="text-xl font-semibold mb-4">Featured Stories</h3>
                <div className="italic text-muted-foreground">
                  <p className="mb-4">"Code4Change opened my eyes to what I could achieve with programming. I never thought I could build my own website, but now I've created one that helps my community!"</p>
                  <div className="flex items-center">
                    <Image src="/avatars/maya.png" alt="Maya" width={40} height={40} className="rounded-full mr-3" />
                    <div>
                      <p className="font-medium">Maya, 7th Grade</p>
                      <p className="text-xs text-muted-foreground">Student</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 italic text-muted-foreground">
                  <p className="mb-4">"As a parent, I love that this program is accessible, engaging, and encourages independent thinking. My child is more confident than ever."</p>
                  <div className="flex items-center">
                    <Image src="/avatars/parent.png" alt="Parent" width={40} height={40} className="rounded-full mr-3" />
                    <div>
                      <p className="font-medium">Alex R.</p>
                      <p className="text-xs text-muted-foreground">Parent of 6th Grader</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Banner CTA */}
        <div className="mb-20">
          <CtaBanner 
            title="Support Our Students"
            description="Your contribution helps us provide free coding education to young innovators and keep Code4Change running."
          />
        </div>

        {/* Footer */}
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
