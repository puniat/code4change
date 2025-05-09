'use client'
import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { CtaBanner } from "@/components/cta-banner"

const courses = [
  {
    title: "Web Development Basics",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfaB8eGpTt96FL5AzwJIaoI60auKkSS1gapwK7jSeHl96OzKQ/viewform?usp=pp_url&entry.123456789=Web+Development+Basics",
    description: "Discover the fun of web creation! Learn HTML, CSS, and JavaScript to design and build your own interactive websites!",
    level: "Beginner",
    topics: ["HTML5", "CSS3", "JavaScript Basics", "Images", "Personal Website Design"],
    curriculum: "Exciting updates coming soon! We're working on the curriculum for Summer 2025 program. Sign up now to receive notifications and be the first to know!!"
  },
  {
    title: "Python for Young Innovators",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSf1Qm2OLdySNf4EaU4yvi5ZrfrVUtJHNrPE3SZvAvWuncwPuQ/viewform?usp=pp_url&entry.123456789=Python+Basics",
    description: "Start your journey with Python and discover how coding can empower you to innovate and make an impact.",
    level: "Intermediate", 
    duration: "10 weeks",
    topics: ["Introduction to Python", "Syntax and Structure", "Control Flow & Functions", "Collections & Error Handling", "Fun Games & Projects"],
    curriculum: "Exciting updates coming soon! We're working on the curriculum for Summer 2025 program. Sign up now to receive notifications and be the first to know!!"
  },
  {
    title: "Generative AI",
    formUrl: "https://docs.google.com/forms/d/1PD0tQD_mvleoJ4CRbL7gE3cxOlVRBS_Dbq8k8Oyh518/viewform?usp=pp_url&entry.123456789=AI+Basics",
    description: "Learn the basics of Generative AI through fun, interactive projects using AI applications and technologies!",
    level: "Beginner",
    topics: ["Generative AI Intro", "Training Data", "Neural Networks", "Fun Projects"],
    curriculumItems: [
      {
        title: "Introduction to Generative AI",
        description: "What it is and how it's changing our world"
      },
      {
        title: "Input & Training Data",
        description: "Understanding what AI models learn from"
      },
      {
        title: "Bias in the Machine",
        description: "Exploring how AI can inherit human biases"
      },
      {
        title: "Understanding Embeddings",
        description: "Learning how AI represents ideas"
      },
      {
        title: "Embeddings: How They're Created",
        description: "Turning words and concepts into numbers"
      },
      {
        title: "Understanding Neural Networks",
        description: "The building blocks of modern AI"
      },
      {
        title: "Neural Networks: How They're Trained",
        description: "Making AI learn from data"
      },
      {
        title: "Attention Is All You Need",
        description: "The breakthrough that powers ChatGPT"
      },
      {
        title: "Outputs & Probabilities",
        description: "How AI decides what to say next"
      },
      {
        title: "Hallucinations and Fabrications",
        description: "When and why AI makes things up"
      },
      {
        title: "Project: Demystifying Generative AI",
        description: "Create your own educational demo"
      }
    ]
  },
  {
    title: "Code & Connect Hour",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdgoB-R0KKolYhV2IqM5yE3gxhA2ngY9AcQ5JfdYdXTjIWA5A/viewform?usp=pp_url&entry.123456789=Code+and+Connect+Hour",
    description: "Where coding, creativity, and the thrill of exploring new technologies collide in a fun-filled, engaging one-hour session!",
    level: "Beginner",
    topics: ["Hour Of Code", "Workshops", "Technical Talks", "Fun Activities", "AI and GenAI"],
    curriculum: "We're working on the first few sessions. Enroll to stay updated!"
  }
]

export default function CoursesPage() {
  const searchParams = useSearchParams()
  const courseId = searchParams.get('course')

  useEffect(() => {
    if (courseId) {
      const element = document.getElementById(courseId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [courseId])

  const handleEnroll = (formUrl: string) => {
    window.open(formUrl, '_blank');
  };

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          Explore Our Free Courses
        </h1>

        {/* Grid containing only the course cards */}
        <div className="grid gap-8 mb-12">
          {courses.map((course, index) => (
            <div key={index} className="bg-card rounded-xl p-6 shadow-sm border border-muted relative overflow-hidden group" id={course.title.toLowerCase().replace(/ /g, '-')}>
              {/* Decorative accent element */}
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>
              
              {/* Header row with title and button */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6 pl-4">
                <h2 className="text-2xl font-bold bg-gradient-to-br from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                  {course.title}
                </h2>
                
                <Button 
                  onClick={() => handleEnroll(course.formUrl)} 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-sm hover:shadow transition-all duration-200 px-6 py-5 h-auto font-medium self-start sm:self-auto group-hover:scale-105"
                >
                  <span className="mr-2">Enroll Now</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </Button>
              </div>
              
              {/* Course details with improved spacing */}
              <div className="pl-4">
                <p className="text-muted-foreground mb-4 leading-relaxed">{course.description}</p>
                
                <ul className="flex flex-wrap gap-2 mb-5">
                  {course.topics.map((topic) => (
                    <li key={topic} className="bg-gray-100 dark:bg-gray-800/50 text-sm px-3 py-1 rounded-full text-gray-700 dark:text-gray-300 font-medium">
                      {topic}
                    </li>
                  ))}
                </ul>
                
                <details className="mt-6 text-sm">
                  <summary className="cursor-pointer font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                    View Curriculum
                  </summary>
                  <div className="mt-4 p-5 bg-blue-50/50 dark:bg-blue-900/10 rounded-lg border border-blue-100 dark:border-blue-900/20">
                    {course.curriculumItems ? (
                      <ol className="list-decimal pl-5 space-y-2">
                        {course.curriculumItems.map((item, index) => (
                          <li key={index}>
                            <strong>{item.title}:</strong> {item.description}
                          </li>
                        ))}
                      </ol>
                    ) : (
                      <p className="text-gray-600 dark:text-gray-400 italic">
                        {course.curriculum}
                      </p>
                    )}
                  </div>
                </details>
              </div>
            </div>
          ))}
        </div>
        
        {/* Footer Banner CTA - moved outside the grid */}
        <div className="pl-4">
          <CtaBanner 
            title="Support Our Students"
            description="Your contribution helps us provide free coding education to young innovators and keep Code4Change running."
          />
        </div>
      </div>
    </main>
  );
}
