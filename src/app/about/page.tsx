'use client'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { MailIcon, GlobeIcon } from 'lucide-react'
import { CtaBanner } from "@/components/cta-banner"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="py-16 bg-background text-white">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl px-6 py-12 text-center shadow-md">
            <h1 className="text-4xl font-bold mb-3">Empowering Tomorrow's Innovators</h1>
            <p className="text-lg opacity-90 max-w-xl mx-auto">
              Bridging the gender and opportunity gap in tech through accessible, self-paced learning
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            At Code4Change, we empower middle school students from underrepresented communities — especially young girls — to unlock their potential in STEM.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Through mentorship, hands-on projects, and accessible resources, we aim to inspire the next generation of changemakers to lead with curiosity, creativity, and confidence. As a youth-led nonprofit, we believe in making tech education inclusive, self-paced, and free for everyone.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Our Impact Goals</h2>
          <p className="text-center text-muted-foreground mb-6">We're just getting started — here’s what we’re working toward!</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-sm p-6 text-center">
              <h3 className="text-5xl font-bold text-blue-600">0</h3>
              <p className="text-gray-700">Students Impacted</p>
              <p className="text-xs text-muted-foreground mt-2">Goal: 500 by 2026 <span className="text-gray-400 text-sm italic">(Launch: Summer 2025)</span></p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 text-center">
              <h3 className="text-5xl font-bold text-purple-600">0%</h3>
              <p className="text-gray-700">Student Participation</p>
              <p className="text-xs text-muted-foreground mt-2">Target: 50%+ <span className="text-gray-400 text-sm italic">(Goal-based)</span></p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 text-center">
              <h3 className="text-5xl font-bold text-green-600">100%</h3>
              <p className="text-gray-700">Free for All</p>
              <p className="text-xs text-muted-foreground mt-2">Always free, always accessible</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8">Student Voices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="italic text-gray-700">"Code4Change opened my eyes to what I could achieve with programming. I never thought I could build my own website, but now I have!"</p>
              <p className="mt-4 font-semibold">— Maya, 7th Grade</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <p className="italic text-gray-700">"The mentors didn’t just teach coding — they helped me see how tech can create real change in our world."</p>
              <p className="mt-4 font-semibold">— Jamal, 6th Grade</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <CtaBanner 
            title="Become Part of Our Mission" 
            description="Passionate about technology education? Join our team of volunteers and help shape the future for young innovators."
          />
        </div>
      </section>
    </main>
  )
}