import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import Image from "next/image"

const founders = [
  {
    name: "Tulika Punia",
    role: "Founder & Lead Instructor",
    image: "/founders/Tulika-Bio.jpeg",
    bio: "Tulika Punia is a passionate advocate for STEM education, empowering young students, especially girls in tech. A Girls Who Code alumna with interests in tech, finance, and sustainable energy, she now serves as a Code.org CS Ambassador while interning at NSTEM to inspire the next generation of innovators.",
    journey: "Tulika's passion for STEM started in middle school. Inspired by Girls Who Code & Code.org, she founded Code4Change to empower young students in STEM.",
    linkedin: "https://www.linkedin.com/in/tulikapunia/"
  },
  {
    name: "Dhruv Punia",
    role: "Co-Founder & Tech Specialist ",
    image: "/founders/Dhruv-Punia.jpg",
    bio: "A middle school student passionate about coding, robotics and game design. Active in FIRST LEGO League robotics and REC Foundation Aerial Drone competitions, he enjoys coding, playing video games, and loves learning new things to share with others.",
    journey: "Passionate about bringing tech and robotics education to young students and promoting STEM learning."
  }
]

/* Commented for future use
const tutors = [
  {
    name: "Sarah Wilson",
    specialty: "Web Development",
    image: "/tutors/sarah.jpg",
    experience: "5+ years teaching experience"
  },
  {
    name: "Mike Johnson",
    specialty: "Python & Data Science",
    image: "/tutors/mike.jpg",
    experience: "Former data scientist at Microsoft"
  }
] */

const tutorAnnouncement = {
  title: "Join Our Teaching Team!",
  message: "We're looking for passionate volunteer tutors to join our mission of teaching coding to young minds.",
  contact: "Contact using Email: code4achange@gmail.com",
  note: "Share your skills and make a difference in children's lives."
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="gap-2">
              <ChevronLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Initiative Section */}
        <section className="mb-16">
          <h1 className="text-4xl font-bold mb-8">About Code4Change</h1>
          <div className="prose dark:prose-invert max-w-none">
            {/* <p className="text-lg text-muted-foreground">
              Code4Change is an initiative aimed at democratizing coding education while making a positive impact on society. 
              We believe that technology education should be accessible to everyone and can be a powerful tool for social change.
            </p> */}
            { <p className="text-lg text-muted-foreground">
              Code4Change is an initiative aimed at democratizing coding education while empowering young individuals, especially girls in tech, to drive positive change. We believe that technology education should be accessible to everyone and can be a powerful tool for personal and community transformation.
            </p> }
          </div>
        </section>

        {/* Founders Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Our Team</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {founders.map((founder, index) => (
              <div key={index} className="bg-card rounded-lg p-6 shadow-sm">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="relative w-48 h-48 mx-auto md:mx-0">
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      fill
                      className="rounded-lg object-cover shadow-md transition-transform hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 192px"
                      priority
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-semibold">{founder.name}</h3>
                      {founder.linkedin && (
                        <a 
                          href={founder.linkedin}
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
                    <p className="text-primary">{founder.role}</p>
                    <p className="mt-2 text-muted-foreground">{founder.bio}</p>
                    <p className="mt-2 text-sm italic">{founder.journey}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tutors Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Our Tutors</h2>
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold">{tutorAnnouncement.title}</h3>
            <p className="mt-2 text-muted-foreground">{tutorAnnouncement.message}</p>
            <p className="mt-2 text-sm">{tutorAnnouncement.contact}</p>
            <p className="mt-2 text-sm">{tutorAnnouncement.note}</p>
          </div>
        </section>
      </div>
    </main>
  )
}