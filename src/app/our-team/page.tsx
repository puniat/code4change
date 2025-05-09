import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { CtaBanner } from "@/components/cta-banner"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "../../components/ui/cards"

const teamMembers = [
  {
    name: "Tulika Punia",
    role: "Founder & Lead Instructor",
    image: "/founders/Tulika-2.jpg", // Add actual image path when available
    bio: "Tulika Punia is a student, technologist, and STEM advocate passionate about expanding access to computer science education. She founded Code4Change to share her love for technology and create opportunities for young students to explore web development, Python, and AI at an early age. = Tulika is currently a Nexus AI Fellow, Junior Academy researcher with the New York Academy of Sciences, and Computer Science Ambassador with Code.org. She is also currently interning at the National STEM Honor Society and ThinkingBeyond, and earned awards in robotics and Model UN. A proud alum of Girls Who Code and The Coding School, Tulika continues to use technology as a tool for impact—both in her community and globally.",
    funFact: "Started coding at age 10 and built her first website for a local non-profit.",
    linkedin: "https://www.linkedin.com/in/tulikapunia/"
  },
  {
    name: "Dhruv Punia",
    role: "Co-Founder & Program Coordinator",
    image: "/founders/Dhruv.jpg", // Add actual image path when available
    bio: "Dhruv Punia is a middle school student passionate about coding, robotics, and game design. As Co-Founder of Code4Change, he helped shape the vision alongside his sister Tulika to make technology fun and accessible for young learners. = Active in FIRST LEGO League robotics and REC Foundation Aerial Drone competitions, Dhruv enjoys building, coding, and sharing new ideas with others. Passionate about bringing tech and robotics education to young students and promoting STEM learning.",
    funFact: "Speaks three programming languages and four human languages!",

  },
]

const volunteers = [
  {
    name: "<<Postion Open>>",
    role: "Python Mentor",
    bio: "Student volunteer with good knowledge of Python and can help middle schoolers discover the joy of Python programming.",
  },
  {
    name: "Position Open",
    role: "Web Development Mentor",
    bio: "Front-end developer passionate about teaching HTML, CSS, JavaScript and website development to young learners.",
  },
  {
    name: "Position Open",
    role: "Generative AI Mentor",
    bio: "AI enthusiast with a knack for explaining complex concepts in simple terms, eager to guide students through the world of AI.",
  }
]

export default function OurTeamPage() {
  return (
    <main className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Meet the Minds Behind Code4Change</h1>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground">
            We're a passionate team of educators, technologists, and advocates committed to empowering young minds through accessible STEM education. Our diverse backgrounds unite under a common mission: to inspire the next generation of innovators and change-makers.
          </p>
        </div>
        
        {/* Core Team Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Team</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => {
              // Split bio into two parts for better layout
              const bioParts = member.bio.split('=');
              const firstPart = bioParts[0].trim();
              const secondPart = bioParts[1] ? bioParts[1].trim() : '';

              return (
                <Card key={index} className="overflow-hidden group transition-all duration-300 hover:shadow-lg border border-gray-200 dark:border-gray-800">
                  {/* Top row with image and header info */}
                  <div className="flex flex-col md:flex-row">
                    {/* Left side - Image */}
                    <div className="md:w-1/3 relative">
                      <div className="relative w-full aspect-square bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900">
                        {!member.image && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-6xl font-bold text-blue-500/30 dark:text-blue-400/30">{member.name.charAt(0)}</span>
                          </div>
                        )}
                        {member.image && (
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 300px"
                            priority
                          />
                        )}
                      </div>
                      
                      {/* Fun fact overlay on hover - now positioned over the image */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end">
                        <div className="p-4 w-full">
                          <p className="font-medium text-center bg-background/90 backdrop-blur-sm p-2 rounded-lg text-sm">
                            <span className="font-bold">Fun fact:</span> {member.funFact}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Right side - Header Content + First part of bio */}
                    <div className="md:w-2/3 p-6 pb-2 flex flex-col">
                      <div className="flex justify-between items-center mb-1">
                        <CardTitle>{member.name}</CardTitle>
                        {member.linkedin && (
                          <a 
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary/80"
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                          </a>
                        )}
                      </div>
                      <CardDescription className="text-primary font-medium mb-3">{member.role}</CardDescription>
                      
                      {/* First part of bio goes here - beside the image */}
                      <p className="text-muted-foreground leading-relaxed flex-grow">
                        {firstPart}
                      </p>
                    </div>
                  </div>
                  
                  {/* Bottom row - Rest of biography (full width) */}
                  {secondPart && (
                    <div className="px-6 pb-6">
                      <p className="text-muted-foreground">
                        {secondPart}
                      </p>
                    </div>
                  )}
                </Card>
              );
            })}
          </div>
        </section>

        {/* Diversity Statement */}
        <section className="mb-20 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 p-8 rounded-xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Celebrating Diversity in STEM</h2>
            <p className="text-lg">
              At Code4Change, our team reflects the diverse world we live in. We believe that different backgrounds, experiences, and perspectives strengthen our ability to reach and inspire all students. Our inclusive approach ensures that every child, regardless of gender, race, or socioeconomic background, has the opportunity to discover their potential in technology.
            </p>
          </div>
        </section>

        {/* Volunteers Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Volunteer Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {volunteers.map((volunteer, index) => (
              <div key={index} 
                className="relative bg-muted/10 p-6 rounded-xl border-2 border-dashed border-primary/30 hover:border-primary/60 hover:shadow-md transition-all duration-300 group"
              >
                {/* "Open Position" badge */}
                <div className="absolute -top-3 -right-3 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  Open Position
                </div>
                
                <h3 className="text-xl font-semibold mb-1">{volunteer.role}</h3>
                <p className="text-muted-foreground mb-6">{volunteer.bio}</p>
                
                {/* Apply button */}
                <div className="mt-auto pt-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    <a href="mailto:code4achange@gmail.com?subject=Volunteer Application: {volunteer.role}" className="w-full">
                      Apply for this position
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Join Our Team - Call to Action */}
        <CtaBanner 
        title="Become Part of Our Mission" 
        description="Passionate about technology education? Join our team of volunteers and help shape the future for young innovators."
      />
      </div>
    </main>
  )
}