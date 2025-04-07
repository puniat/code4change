'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const faqs = [
  {
    question: 'Who can join Code4Change?',
    answer: 'Our program is open to all middle school students (grades 4–8). No prior experience is required!'
  },
  {
    question: 'Is the program really free?',
    answer: 'Yes! All of our courses, sessions, and resources are 100% free for students.'
  },
  {
    question: 'Do students need to attend every session?',
    answer: 'Our sessions are optional and not monitored, but we strongly recommend regular attendance. It can be difficult to keep up if students miss key concepts covered in live instruction.'
  },
  {
    question: 'How do students get help if they’re stuck?',
    answer: 'We host weekly sessions where instructors explain concepts and students can ask questions. We also schedule dedicated Q&A sessions, and our team is available via email for additional support.'
  },
  {
    question: 'What kind of projects will students build?',
    answer: 'Projects include building a personal website, a calculator app, and experimenting with basic AI tools.'
  },
  {
    question: 'How do I sign up?',
    answer: 'Head to our Courses page and choose the program that fits your student’s grade and interest!'
  },
  {
    question: 'How can I donate or support Code4Change?',
    answer: 'We’re grateful for your support! You can visit the Support Our Students section on the homepage to learn how to donate or get involved.'
  }
];

export default function FAQPage() {
  return (
    <main className="min-h-screen py-16 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          Frequently Asked Questions
        </h1>

        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-card p-6 rounded-xl shadow-sm border border-muted">
              <h2 className="text-xl font-semibold mb-2">{faq.question}</h2>
              <p className="text-muted-foreground text-sm">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <Link href="mailto:code4achange@gmail.com">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">Email Us</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
