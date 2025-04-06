import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

// Icons (you can replace these with your preferred icon library)
const CodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
  </svg>
)

const ChipIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
  </svg>
)

const UserGroupIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
  </svg>
)

const FemaleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
    <circle cx="12" cy="8" r="4" fill="currentColor" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 13v8M9 17h6" />
  </svg>
)

const AcademicCapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.91 59.91 0 0 1 12 3.493a59.91 59.91 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
  </svg>
)

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
  </svg>
)

const GlobeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
  </svg>
)

export default function OurMissionPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section - REDUCED HEIGHT */}
      <section className="relative h-[30vh] min-h-[250px] bg-gradient-to-r from-blue-600/90 to-purple-600/90 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/patterns/circuit-board.svg')]"></div>
        </div>
        
        {/* Content container */}
        <div className="container mx-auto h-full px-4 flex flex-col justify-center items-center text-center text-white relative z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">Empowering Tomorrow's Innovators Today</h1>
          <p className="text-base md:text-lg max-w-2xl opacity-90">Bridging the gender and opportunity gaps in technology through accessible education</p>
        </div>
        
        {/* Decorative elements - abstract code symbols (reduced size) */}
        <div className="absolute bottom-0 left-0 text-white/5 text-6xl font-mono hidden md:block">{ } &lt; /&gt;</div>
        <div className="absolute top-0 right-0 text-white/5 text-6xl font-mono hidden md:block">{ }</div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <div className="h-0.5 flex-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              <h2 className="text-2xl md:text-3xl font-bold px-4">Our Mission</h2>
              <div className="h-0.5 flex-1 bg-gradient-to-r from-purple-500 to-blue-500"></div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 relative">
              {/* STEM icons floating in background */}
              <div className="absolute -top-6 -left-6 bg-blue-100 rounded-full p-4 shadow-sm">
                <CodeIcon />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-purple-100 rounded-full p-4 shadow-sm">
                <ChipIcon />
              </div>
              
              <p className="text-lg leading-relaxed text-gray-700">
                At Code4Change, we empower middle school students from underrepresented communities—especially young girls—to unlock their potential in STEM through self-paced learning and instructor-led summer programs. As a youth-led nonprofit, we aim to bridge the gender and opportunity gaps in technology by fostering curiosity, confidence, and creativity. Through accessible resources, mentorship, and hands-on experiences, we strive to inspire the next generation of changemakers to lead with innovation and inclusivity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Highlights Section - UPDATED WITH ZERO VALUES */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Our Impact</h2>
          <p className="text-center text-gray-500 mb-12">Tracking our progress as we launch and grow</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Impact Stat 1 - Updated to zero */}
            <div className="bg-white rounded-lg shadow-sm p-6 text-center transform transition-all hover:scale-105">
              <div className="mb-4">
                <div className="inline-flex rounded-full bg-blue-100 p-3">
                  <UserGroupIcon />
                </div>
              </div>
              <h3 className="text-4xl font-bold text-blue-600">0</h3>
              <p className="text-gray-600">Students Impacted</p>
              <div className="mt-4 w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '0%' }}></div>
              </div>
              <p className="text-xs text-gray-400 mt-2">Goal: 500 students by 2026</p>
            </div>
            
            {/* Impact Stat 2 - Updated to zero */}
            <div className="bg-white rounded-lg shadow-sm p-6 text-center transform transition-all hover:scale-105">
              <div className="mb-4">
                <div className="inline-flex rounded-full bg-purple-100 p-3">
                  <FemaleIcon />
                </div>
              </div>
              <h3 className="text-4xl font-bold text-purple-600">0%</h3>
              <p className="text-gray-600">Female Participation</p>
              <div className="mt-4 w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: '0%' }}></div>
              </div>
              <p className="text-xs text-gray-400 mt-2">Target: 50% or higher</p>
            </div>
            
            {/* Impact Stat 3 - Kept as 100% since it's a policy */}
            <div className="bg-white rounded-lg shadow-sm p-6 text-center transform transition-all hover:scale-105">
              <div className="mb-4">
                <div className="inline-flex rounded-full bg-green-100 p-3">
                  <AcademicCapIcon />
                </div>
              </div>
              <h3 className="text-4xl font-bold text-green-600">100%</h3>
              <p className="text-gray-600">Free for All Students</p>
              <div className="mt-4 w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '100%' }}></div>
              </div>
              <p className="text-xs text-gray-400 mt-2">Always free, always accessible</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - ADDED PLACEHOLDER NOTE */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Voices of Change</h2>
          
          {/* ADDED PLACEHOLDER NOTE */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-12 max-w-2xl mx-auto">
            <p className="text-center text-yellow-700 text-sm font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-1 -mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              These testimonials are placeholders and will be updated with actual student stories as they come in.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="h-0.5 w-full bg-gray-200"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-6 text-gray-500">Student Stories</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {/* Testimonial 1 */}
            <div className="bg-blue-50 p-6 rounded-lg relative">
              <div className="absolute -top-4 -left-4">
                <div className="rounded-full overflow-hidden border-4 border-white shadow-md w-16 h-16">
                  <div className="bg-blue-200 w-full h-full flex items-center justify-center">
                    <span className="text-blue-500 font-bold">M</span>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <p className="italic text-gray-700">"Code4Change opened my eyes to what I could achieve with programming. I never thought I could build my own website, but now I've created one that helps my community!"</p>
                <p className="mt-4 font-semibold">Maya, 7th Grade</p>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-purple-50 p-6 rounded-lg relative">
              <div className="absolute -top-4 -left-4">
                <div className="rounded-full overflow-hidden border-4 border-white shadow-md w-16 h-16">
                  <div className="bg-purple-200 w-full h-full flex items-center justify-center">
                    <span className="text-purple-500 font-bold">J</span>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <p className="italic text-gray-700">"The mentors at Code4Change didn't just teach me coding, they showed me how technology can be used to solve real problems in our world."</p>
                <p className="mt-4 font-semibold">Jamal, 6th Grade</p>
              </div>
            </div>
          </div>
          
          {/* Video showcase */}
          <div className="mt-16 bg-gray-100 rounded-xl overflow-hidden shadow-md aspect-video max-w-4xl mx-auto">
            <div className="relative pb-[56.25%] h-0">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-gray-500">Video showcase placeholder - replace with your video embed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Mission</h2>
          <p className="max-w-2xl mx-auto text-lg mb-8 opacity-90">Help us empower the next generation of innovators and close the gender gap in technology</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-purple-700 hover:bg-gray-100">Volunteer as Mentor</Button>
            <Button size="lg" className="bg-transparent border-2 border-white hover:bg-white/10">Donate Now</Button>
          </div>
          
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="flex flex-col items-center">
              <MailIcon />
              <a href="mailto:code4achange@gmail.com" className="text-white/90 hover:text-white">code4achange@gmail.com</a>
            </div>
            <div className="flex flex-col items-center">
              <GlobeIcon />
              <a href="https://code4change.org" className="text-white/90 hover:text-white">code4change.org</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}