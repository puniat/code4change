'use client'
import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

const courses = [
  {
    title: "Web Development Basics",
    
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfaB8eGpTt96FL5AzwJIaoI60auKkSS1gapwK7jSeHl96OzKQ/viewform?usp=pp_url&entry.123456789=Web+Development+Basics",
    description: "Discover the fun of web creation! Learn HTML, CSS, and JavaScript to design and build your own interactive websites!",
    level: "Beginner",
    //duration: "8 weeks",
    topics: ["HTML5", "CSS3", "JavaScript Basics", "Images", "Personal Website Design"],
    curriculum: "Exciting updates coming soon! We're working on the curriculum for Summer 2025 program. Sign up now to receive notifications and be the first to know!!"
    /* curriculum: [
      { week: "Week 1-2", content: "HTML5 Fundamentals, Document Structure" },
      { week: "Week 3-4", content: "CSS3 Styling, Layouts" },
      { week: "Week 5-6", content: "JavaScript Basics, DOM Manipulation" },
      { week: "Week 7-8", content: "Responsive Design, Final Project" }
    ] */
  },
  {
    title: "Python Basics for Young Innovators",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSf1Qm2OLdySNf4EaU4yvi5ZrfrVUtJHNrPE3SZvAvWuncwPuQ/viewform?usp=pp_url&entry.123456789=Python+Basics",
    description: "Take your first steps into learning Python, and unlock your potential to innovate, excel, and make a difference—one line of code at a time!",
    level: "Intermediate", 
    duration: "10 weeks",
    topics: ["Introduction to Python", "Syntax and Structure", "Control Flow & Functions", "Collections & Error Handling", "Fun Games & Projects"],
    curriculum: "Exciting updates coming soon! We're working on the curriculum for Summer 2025 program. Sign up now to receive notifications and be the first to know!!"
    /* curriculum: [
      {
        week: "Week 1-2",
        content: "Python Basics, Data Types, Control Structures"
      },
      {
        week: "Week 3-4",
        content: "Data Analysis with Pandas, Data Visualization"
      },
      {
        week: "Week 5-6",
        content: "Web Scraping with BeautifulSoup, APIs"
      },
      {
        week: "Week 7-8",
        content: "Social Impact Projects, Final Project"
      }
    ] */
  },
  {
    title: "Artificial Intelligence",
    formUrl: "https://docs.google.com/forms/d/1PD0tQD_mvleoJ4CRbL7gE3cxOlVRBS_Dbq8k8Oyh518/viewform?usp=pp_url&entry.123456789=AI+Basics",
    description: "Learn the basics of machine learning through fun, interactive projects using AI applications and technologies!",
    level: "Beginner",
    topics: ["Introduction to AI", "Machine Learning Basics", "Fun AI Projects"],
    curriculum: "Curriculum details coming soon. Please check back later!"
  },
  {
    title: "Code & Connect Hour",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdgoB-R0KKolYhV2IqM5yE3gxhA2ngY9AcQ5JfdYdXTjIWA5A/viewform?usp=pp_url&entry.123456789=Code+and+Connect+Hour",
    description: "Where coding, creativity, and the thrill of exploring new technologies collide in a fun-filled, engaging one-hour session!",
    level: "Beginner",
    topics: ["Hour Of Code", "Workshops", "Technical Talks", "Fun Activities", "AI and GenAI"],
    curriculum: "We're working on the first few sessions. Enroll to stay updated!"
   /* curriculum: [
      {
        week: "Week 1-2",
        content: "React Native Basics, Components, State Management"
      },
      {
        week: "Week 3-4",
        content: "UI/UX Design Principles, Prototyping"
      },
      {
        week: "Week 5-6",
        content: "API Integration, Data Handling"
      },
      {
        week: "Week 7-8",
        content: "App Publishing, Final Project"
      }
    ] */
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
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="gap-2">
              <ChevronLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
        
        <h1 className="text-4xl font-bold mb-8">Our Courses</h1>
        
        <div className="grid gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-card rounded-lg p-6 shadow-sm" id={course.title.toLowerCase().replace(/ /g, '-')}>
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-semibold">{course.title}</h2>
                  <p className="text-muted-foreground mt-2">{course.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {course.topics.map((topic) => (
                      <li key={topic} className="bg-muted text-sm px-3 py-1 rounded-full">
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-end">
                  <Button onClick={() => handleEnroll(course.formUrl)}>Enroll Now</Button>
                </div>
                {/* Remove unused div with text-right class */}
              </div>

              <details className="mt-6">
                <summary className="cursor-pointer text-sm font-medium hover:text-primary">
                  View Curriculum
                </summary>
                <div className="mt-4 p-4 bg-muted/20 rounded-md">
                  <p className="text-muted-foreground italic text-center">
                    {course.curriculum}
                  </p>
                </div>
                {/* <div className="mt-4 space-y-4 pl-4">
                  {typeof course.curriculum === 'string' ? (
                    <p className="text-sm text-muted-foreground">{course.curriculum}</p>
                  ) : (
                    course.curriculum.map((item, i) => (
                      <div key={i} className="border-l-2 border-primary/20 pl-4">
                        <h4 className="font-medium">{item.week}</h4>
                        <p className="text-sm text-muted-foreground">{item.content}</p>
                      </div>
                    ))
                  )}
                </div> */}
              </details>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}